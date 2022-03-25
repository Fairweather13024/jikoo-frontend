import {useState, useContext, useEffect} from 'react'
import {Context } from '../context'
import axios from 'axios'
import {toast} from 'react-toastify'
import TopNav from "../components/TopNav"
import {SyncOutlined} from '@ant-design/icons'
import Link from 'next/link'
import {useRouter} from 'next/router'
import Image from 'next/image'
import Head from 'next/head'
import { Select, Card, Button } from 'antd';

const { Option } = Select;

const Register =()=>{
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [countryCode, setCountryCode]=useState('')
    const [phone, setPhone] = useState('')
    const [country, setCountry] =useState("")
    const [city, setCity]=useState('')
    const [hear, setHear]=useState('')
    const [userType, setUserType]=useState('')
    const [password, setPassword] = useState('')
    const [confirmPwd, setConfPassword]=useState('')
    const [loading, setLoading] = useState(false)
    const [dis, setDis] =useState(true)

    const router = useRouter()
    const {state: {user}, dispatch} = useContext(Context)

    useEffect(() => {
        if(user !== null){
            
        }
        getCountry()
    }, [user])

    const getCountry = async()=> {
        try{
        const {data} = await axios.get('https://geolocation-db.com/json/')
        setCountry(data.country_name)
        }catch(err){
            setDis(false)
        }

    }

    function onChange(value) {
      setHear(value)
    }

    function onChangeUser(value) {
      setUserType(value)
    }


    const handleSubmit = async (e)=>{
        e.preventDefault()
        try {
            e.preventDefault()
            setLoading(true)
            // console.table({name, email,phone, age, password})
            if(password != confirmPwd){
              toast.error('Your passwords do not match. Try again')
              return
            }else{
            const {data} = await axios.post(`/api/register`, {firstname,lastname, countryCode, email,phone,country,city,hear,userType, password})
            toast.success('Registration successful. Please log in ')
            setLoading(false)
            router.push('/login')              
            }
        }catch(err){
            e.preventDefault()
            setLoading(false)
            toast.error(err.response.data)
        }
    }
    return (
      <>
      <Head>
      <title>Jikoo | Register</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta name = "theme-color" content="#fff"/>
      <meta name="description" content = ""/>

      <meta name="twitter:title" content=""/>
      <meta name="twitter:creator" content="@MarkEricFairwe1"/>
      <meta name="google-site-verification" content=""/>
    </Head>
        <div className='w-100' style={{display:'grid', margin:'auto'}}>
          <TopNav/>
          <Card className="registerContainer" >
            <div className='w-100'>
              <h1 className="header1">Create your account!</h1>
              <div className="d-flex w-100" style={{justifyContent:'center'}}>
                  <Button className="primaryBtn" style={{marginRight:'5px'}} size="medium">Log in with Google</Button>
                  <Button className="primaryBtn" style={{marginLeft:'5px'}}size="medium">Log in with Facebook</Button>
              </div>
            </div>
              <div style={{ width:'100px', marginLeft:'auto', marginRight:'auto', marginTop:'30px'}}>
                    <hr />
                    <div className="or"><span style={{opacity:'1'}}>OR</span></div>   
              </div>
              <form onSubmit={handleSubmit} className="auth-register-form pt-3 img-margin" >
                  <div className='w-100 d-flex'>
                    <div style={{marginRight:'5px'}}>
                      <label for='firstname' className='labels'>First name*</label>
                      <input type='text' id='firstname' className='form-control mb-3 p-3 input-div-half' value={firstname} onChange={(e) => setFirstName(e.target.value)} placeholder="Your first name" required/>                      
                    </div>
                    <div style={{marginLeft:'5px'}}>
                      <label for='lastname' className='labels'>Last name*</label> 
                      <input type='text' id='lastname' className='form-control mb-3 p-3 input-div-half' value={lastname} onChange={(e) => setLastName(e.target.value)} placeholder="Your last name" required/>                                       
                    </div>
                  </div>

                  <label for='email' className='labels'>Email*</label>
                  <input type='email' className='form-control mb-3 p-3 input-div' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" required/>
                  <label for='countrycode' className='labels'>Country code*</label>
                  <input type='text' id='countrycode' className='form-control mb-3 p-3 input-div' value={countryCode} onChange={(e) => setCountryCode(e.target.value)} placeholder="Your country code" required/>
                  <label for='phone' className='labels'>Phone*</label>
                  <input type='text' id='phone' className='form-control mb-3 p-3 input-div' value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone number" required/>
                  <label for='country' className='labels'>Country*</label>
                  <input type='text' id='country' className='form-control mb-3 p-3 input-div' value={country} onChange={(e) => setCountry(e.target.value)} placeholder="Country" required/>
                  <label for='city' className='labels'>City*</label>
                  <input type='text' id='city' className='form-control mb-3 p-3 input-div' value={city} onChange={(e) => setCity(e.target.value)} placeholder="City" required/>
                  <label for='hear' className='labels lifted' style={{margin:'0px 0px 0px 7px'}}>How did you hear about us?*</label>
                  <Select showSearch id='hear'    
                      onChange={onChange}
                      className=' mb-3  registerDropdowns'  placeholder="Select">
                        <Option value='Advertisement'>Advertisement</Option>
                        <Option value='Referral'>Referral</Option>
                        <Option value='None'>None</Option>
                  </Select>
                  <label for='usert' className='labels lifted' style={{margin:'0px 0px 0px 7px'}}>User Type*</label>
                  <Select showSearch id='usert'    
                      onChange={onChangeUser}
                       className=' mb-3  registerDropdowns'  placeholder="Select">
                        <Option value='Fundraiser'>Fundraiser</Option>
                        <Option value='Investor'>Investor</Option>
                        <Option value='Professional'>Professional</Option>
                  </Select>               
                  
                  
                  
                  
                  <label for='pwd' className='labels'>Password*</label>
                  <input type='password' className='form-control mb-3 p-3 input-div' value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Your password" required/>
                  <label for='pwd2' className='labels'>Confirm password*</label>
                  <input type='password' id='pwd2' className='form-control mb-3 p-3 input-div' value={confirmPwd} onChange={(e) => setConfPassword(e.target.value)} placeholder="Confirm your password" required/>

                  <br/>

                  <div className='w-100 ' style={{display:'grid',margin:'auto',justifyContent:'center', textAlign:'center', alignItems:'center'}}>
                    <Button block type='submit' className="loginBtn d-flex" disabled ={ !email || !password || loading}>
                            {loading ? <SyncOutlined spin/> : <span >register now <Image className="heroArrow" alt="arrow" src='/arrow.svg' width={30} height={10}/></span>}
                    </Button>
                    <div className='mt-5' style={{display:'grid', margin:'auto'}}>
                        <p className = "d-flex text-secondary  ">Are you already registered? &nbsp;<Link href = "/login"><a className='ml-2 sub-heading'>Login</a></Link></p>

                        {/* <p className = "d-flex text-center ">Forgot your password? &nbsp;<Link href = "/forgot-password"><a className='ml-2 text-danger text-center'> Reset password</a></Link></p>  */}
                        {/* <p className = "d-flex text-center ">By registering, you have agreed to our &nbsp;<Link href = "/terms"><a className='ml-2 text-danger text-center'> Terms and Conditions</a></Link></p>  */}
                    </div> 
                  </div>
              </form>
            </Card>
          </div>
      </>
  )
}

export default Register