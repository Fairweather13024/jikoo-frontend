import {useState, useEffect, useContext} from 'react'
import {Menu} from 'antd'
import Link from 'next/link'
import {AppstoreAddOutlined, LoginOutlined, UserAddOutlined, LogoutOutlined, HomeOutlined, CalendarOutlined, CarryOutOutlined, TeamOutlined, UserOutlined} from '@ant-design/icons'
import {Context} from '../context'
import axios from 'axios'
import { toast } from 'react-toastify'
import {useRouter} from 'next/router'
import Image from 'next/image'

import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;


const {Item, SubMenu, ItemGroup} = Menu // get item as item not menu.item

const TopNav =()=>{
    const [current, setCurrent] = useState("")

    const {state, dispatch} = useContext(Context)
    const {user}= state
    const router = useRouter()


    useEffect(()=> {
        process.browser && setCurrent(window.location.pathname)
    }, [process.browser && window.location.pathname])

    const logout = async () =>{
        dispatch({type: "LOGOUT"})
        window.localStorage.removeItem("user")
        const {data} = await axios.get("/api/logout")
        toast.success(data.message)
        router.push('/login')
    }
    return(
        <Header className="site-layout-sub-header-background" style={{ padding: 0, height:'85px', display:'flex', alignItems:'center',backgroundColor:'#fff', zIndex:"999 !important" }}>
            <div className='float-left logo-div' >
            <Link href = '/' >
                    <a ><Image  src={'/Logo.png'} alt='Logo' className='logo' width='250px' height='80px'/></a>
                </Link> 
            </div>
        <Menu mode='horizontal'  style={{justifyContent:'flex-end', width:'100%', marginRight:'20px'}} selectedKeys={[current]}>
            
            
            {/* <Item className='float-left' style={{padding:'10px'}}>
                 <Link href = '/' >
                    <a ><img  src={'/beta-logo1.PNG'} alt='Logo' /></a>
                </Link>                   
            </Item> */}
            {/* <Item className='flex-center float-right'>
                <input style={{boraderRadius:'10px'}} />
                
            </Item> */}

            
            
            <Item key = "/"className='flex-center float-right' onClick={(e) => setCurrent(e.key)}>
                 <Link href = '/' className='float-right'>
                    <a className = 'nav-link float-right'>Home</a>
                </Link>                   
            </Item>

            
            <Item key="/about" className='flex-center float-right'  onClick={(e) => setCurrent(e.key)}>
                 <Link href = '/about'>
                     <a className = 'nav-link'>About Us</a>
                 </Link>
             </Item>           
             
            <Item key="/charter" className='flex-center float-right'  onClick={(e) => setCurrent(e.key)}>
                <Link href = '/charter'>
                    <a className = 'nav-link'>What we do</a>
                </Link>
            </Item>
            <Item key="/insights" className='flex-center float-right'  onClick={(e) => setCurrent(e.key)}>
                <Link href = '/insights'>
                    <a className = 'nav-link'>Insights</a>
                </Link>
            </Item>
            <Item key="/contact" className='flex-center float-right'  onClick={(e) => setCurrent(e.key)}>
                <Link href = '/contact'>
                    <a className = 'nav-link'>Contact Us</a>
                </Link>
            </Item>

        {/* {user && user.role && user.role.includes("Instructor") && (
        <Item key="/instructor" className='flex-center float-right'  onClick={(e) => setCurrent(e.key)}>
            <Link href = '/instructor'>
                <a className = 'nav-link'>Creator</a>
            </Link>
        </Item>) } */}


            {user === null && (<>            
            <Item key="/login" className='flex-center float-right'  onClick={(e) => setCurrent(e.key)}>
                <Link href = '/login'>
                    <a className = 'nav-link'>Login</a>
                </Link>
            </Item>
            <Item key='/register' className='flex-center float-right navRegisterBtn'  onClick={(e) => setCurrent(e.key)}>
                <Link href = '/register'>
                    <a className = 'nav-link registerLink'>Join Now</a>
                </Link>
            </Item> </>) }
           
            {user !== null && (<SubMenu icon={<AppstoreAddOutlined/>} title = {user && user.name} 
             className='float-right ml-auto d-flex align-items-center justify-content-center'>
                <ItemGroup>
                    <Item key = '/user' className='flex-right ' icon = {<CalendarOutlined/>} >
                        <Link href = '/user'><a>Dashboard</a></Link>
                    </Item>
                    <Item key = {user.username} className='flex-right ' icon = {<UserOutlined/>} >
                        <Link href = {"/user/" + user.username}><a>Profile</a></Link>
                    </Item>
                    <Item className='flex-right  ' icon = {<LogoutOutlined/>} onClick={logout} > 
                    Logout
                    </Item>

                </ItemGroup>
            </SubMenu>)}
            
        </Menu>
        </Header>
    )
}

export default TopNav