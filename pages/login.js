import { useState, useContext, useEffect} from "react"
import {Context } from '../context'
import axios from 'axios'
import {useRouter} from 'next/router'
import {toast} from 'react-toastify'
import { Col, Button } from "antd"
import Link from 'next/link'
import {SyncOutlined} from '@ant-design/icons'
import Image from 'next/image'
import Head from 'next/head'


const login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const {state, dispatch} =useContext(Context)
    const {user} = state
    const router = useRouter()

    
    useEffect(()=> {
        if(user !== null) {
            router.push('/')
        }
    }, [user])
 
    const handleSubmit = async (e)=>{
        e.preventDefault()
        try {
            e.preventDefault()
            setLoading(true)
//             console.table({name, email, password})

            const {data} = await axios.post(`/api/login`, { email, password})
            dispatch({type: "LOGIN", payload: data})
            window.localStorage.setItem('user', JSON.stringify(data))
            toast.success('Logged in! ')
            setLoading(false)
            router.push('/')
        }catch(err){
            e.preventDefault()
            setLoading(false)
            toast.error(err.response.data)
        }
    }

  return (
    <div className='w-100 row'>
        <Col lg={12} s={24}>
            <div className="loginContainer">
                <div className="w-100">
                    <h1 className="header1">Log in to your account!</h1>
                    <div className="d-flex">
                        <Button className="primaryBtn" style={{marginRight:'5px'}} size="medium">Log in with Google</Button>
                        <Button className="primaryBtn" style={{marginLeft:'5px'}}size="medium">Log in with Facebook</Button>
                    </div>
                    <div style={{ width:'100px', marginLeft:'auto', marginRight:'auto', marginTop:'30px'}}>
                         <hr />
                         <div className="or"><span style={{opacity:'1'}}>OR</span></div>   
                    </div>
                    <div className="loginFormWrapper">
                    <form onSubmit={handleSubmit} className=" pt-3">                   
                      <label htmlFor='email' className='labels'>Email</label>
                      <input type='email' id='email' className='form-control mb-3 p-3 input-div' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email address" required/>
                      <label htmlFor='pwd' className='labels'>Password</label>
                      <input type='password' id='pwd' className='form-control mb-3 p-3 input-div' value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" required/>
                      
                      <Button block type='submit' className="loginBtn d-flex" disabled ={ !email || !password || loading}>
                          {loading ? <SyncOutlined spin/> : <span >Log in to your account <Image className="heroArrow" alt="arrow" src='/arrow.svg' width={30} height={10}/></span>}
                      </Button>
                      <div className='float-right' style={{lineHeight:'5'}}>
                          <p className="d-flex text-secondary " >Don't have an account? &nbsp;<Link href = "/register"><a className='ml-2 float-right sub-heading' style={{fontWeight:'500'}}> Register Now!</a></Link></p>
                          {/* <p className = "d-flex float-right ">Forgot your password? &nbsp;<Link href = "/forgot-password"><a className='ml-2 text-danger float-right'> Reset password</a></Link></p>  */}
                      </div>   
                  </form>
                    </div>
                </div>
            </div>
        </Col>
        <Col lg={12} s={24}>
            <div className="loginImageContainer">
                <Image className="loginImage" alt="Jikoo Login Page" src='/login-bg.jpg' width={760} height={570}/>
            </div>
        </Col>
    </div>
  )
}

export default login