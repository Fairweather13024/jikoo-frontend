import {useReducer, createContext, useEffect} from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

const initialState = {
    user: null,
}

const Context = createContext()

const rootReducer = (state, action) => {
    switch(action.type){
        case "LOGIN":
            return {...state, user: action.payload}
        
        case "LOGOUT":
            return {...state, user:null}

        default:
            return state
    }
}

//context provuder
const Provider = ({children}) => {
    const [state, dispatch] = useReducer(rootReducer, initialState)

    const router = useRouter()
    
    useEffect(() => {
        dispatch({type: "LOGIN", payload: JSON.parse(window.localStorage.getItem('user'))})
    }, [])

    //when the users token expires,  we need to use axios interceptors to handle the request so that they can get a new token
    axios.interceptors.response.use(
        function(response){
            //any status code from 2xx will trigger this
            return response
        },
        function(error){
            //any status code outside 2xx will trigger this
            let res = error.response
            if(res.status === 401 && res.config && !res.config.__isRetryRequest){
                return new Promise((resolve, reject) => {
                    axios.get('/api/logout').then((data)=> {
                        dispatch({type: "LOGOUT"})
                        window.localStorage.removeItem('user')
                        router.push('/login')
                    }).catch(err => {
                        console.log("AXIOS INTERCEPTORS ERR", err)
                        reject(err)
                    })
                })
            }
            return Promise.reject(error)
        }
    )

    useEffect(()=> {
        const getCsrfToken = async ()=> {
            const {data} = await axios.get('/api/csrf-token')
            axios.defaults.headers['X-CSRF-Token']= data.csrfToken
        }
        getCsrfToken()
    }, [])
    return (
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    )
}

export {Context, Provider}