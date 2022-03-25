import {useEffect, useState, useContext} from 'react'
import axios from 'axios'
import {useRouter} from 'next/router'
import {SyncOutlined, BellOutlined, CalendarOutlined, UserOutlined, LogoutOutlined, AppstoreOutlined, DollarCircleOutlined} from '@ant-design/icons'
import { Layout, Row, Col, Card, Badge, Avatar, Menu, Button } from "antd";
import {Context} from '../../context'
import CustomSideDrawer from '../../components/Drawers/CustomSideDrawer'
import MinimizedCustomSideDrawer from '../../components/Drawers/MinimizedCustomSideDrawer'
import Link from 'next/link';



const { Header, Footer, Sider, Content } = Layout;
const {Item, SubMenu, ItemGroup} = Menu // get item as item not menu.item
const { Meta } = Card;

const Home = ()=> {
    const [showNav, setShowNav] = useState(true)
    const [hidden, setHidden] = useState(true)
    const [sliderToggle,setSliderToggle]=useState(true);

    const {state, dispatch} = useContext(Context)
    const {user}= state
    
    const router = useRouter()

    useEffect(() => {


    }, [])        

    const logout = async () =>{
        dispatch({type: "LOGOUT"})
        window.localStorage.removeItem("user")
        const {data} = await axios.get("/api/logout")
        toast.success(data.message)
        router.push('/login')
    }
    return (
        <>
        {hidden ===false ? <SyncOutlined spin className = "d-flex justify-content-center text-muted display-1  p-5"/> :  
        <Layout className="main">
            {sliderToggle == true ? (<Sider className='siderOpened'><CustomSideDrawer setSliderToggle={setSliderToggle} sliderToggle={sliderToggle} /></Sider>) : (<Sider className='siderClosed'><MinimizedCustomSideDrawer  setSliderToggle={setSliderToggle} sliderToggle={sliderToggle}/></Sider>)}
            <Layout>
                <Header className="layoutNav w-grow-to-fit-250" style={{ padding: 0, height:'80px', display:'flex', alignItems:'center',backgroundColor:'#fff', zIndex:"999 !important" }}>
                    <div className='p-3'><h1 style={{fontWeight:'200', fontSize:'20px', color:'#666666'}}>Dashboard</h1></div>
                    <div className='fundraiserdashboardNavtabWrapper'>
                        <div className='p-5'>
                            <Link href='/deals'>
                                <a><BellOutlined style={{fontSize:'24px', color:'#666666', padding:'1rem'}}/></a>
                            </Link>
                            <Link href='/deals'>
                                <a><Badge count={25}><BellOutlined style={{fontSize:'24px', color:'#666666', transform:'rotate(-20deg)'}}/></Badge></a>
                            </Link>
                        </div>
                        <div className='d-flex'>
                            <Avatar src={user && user.image}/>
                            <div style={{display:'flex', flexDirection:'column', height:'60px', margin:'0px 10px'}}>
                                <h2 style={{ fontSize:'16px', fontWeight:'500', padding:'0.3rem 0'}}>{user && user.name}</h2>
                                {user && user.role == 'fundraiser' ? (<span style={{lineHeight:'15px', fontSize:'13px', fontWeight:'200', margin:'0px !important', padding:'0px !important'}}>Fundraiser</span>) : (<span style={{lineHeight:'15px', fontSize:'13px', fontWeight:'200', margin:'0px !important', padding:'0px !important'}}>Fundraiser</span>)}
                            </div>
                           
                        </div>
                    </div>
                </Header>
           
            
                <Content>
                    <Row lg={24} className='p-5'>
                        <div className='w-100 d-flex mb-5'>
                            <div className='d-flex p-3' style={{height:'100px', width:"1200px"}}>
                                <Avatar src={user && user.image} size={80}/>
                                <div style={{display:'flex', flexDirection:'column', height:'80px', margin:'0px 10px'}}>
                                    <div style={{display:'flex', alignItems:'center', fontSize:'28px', fontWeight:'600', padding:'0.3rem 0'}}>Hello, <div style={{ fontSize:'28px', fontWeight:'700', padding:'0.3rem 0',display:'flex', alignItems:'center',}}>{user && user.name}</div></div>
                                    <span style={{lineHeight:'15px', fontSize:'13px', fontWeight:'200', margin:'0px !important', padding:'0px !important'}}>London, United Kingdom</span>
                                </div>
                            </div>
                            <div className='w-100'><Button className='loginBtn float-right'>+ Add new project</Button></div>
                        </div>
                        <Col lg={8}>
                            <div className='w-100'>
                                <div className='d-flex' ><h4 className='w-100'>Recent notifications</h4><p style={{width:'100px'}}>View all</p></div>
                                <div>
                                    <Card >
                                        <Meta avatar={<Avatar icon={<BellOutlined className='notificationAvatar green'/>}/>}
                                        title=""
                                        description="Lorem Ipsum is simply dummy of text of the of and industry. Lorem Ipsum is simply dummy of text of the of and industry."
                                        />
                                        <p className='mt-3' style={{marginLeft:'48px'}}>1 hour ago</p>
                                    </Card>
                                    <Card >
                                        <Meta avatar={<Avatar icon={<BellOutlined className='notificationAvatar green'/>}/>}
                                        title=""
                                        description="Lorem Ipsum is simply dummy of text of the of and industry. Lorem Ipsum is simply dummy of text of the of and industry."
                                        />
                                        <p className='mt-3' style={{marginLeft:'48px'}}>1 hour ago</p>
                                    </Card>
                                    <Card >
                                        <Meta avatar={<Avatar icon={<BellOutlined className='notificationAvatar green'/>}/>}
                                        title=""
                                        description="Lorem Ipsum is simply dummy of text of the of and industry. Lorem Ipsum is simply dummy of text of the of and industry."
                                        />
                                        <p className='mt-3' style={{marginLeft:'48px'}}>1 hour ago</p>
                                    </Card>
                                </div>
                            </div>
                        </Col>
                        <Col lg={8}>
                            <div className='w-100'>
                                <div className='d-flex' ><h4 className='w-100'>Recent projects</h4><p style={{width:'100px'}}>View all</p></div>
                                <div>
                                    <Card >
                                        <Meta avatar={<Avatar icon={<AppstoreOutlined className='notificationAvatar'/>}/>}
                                        title=""
                                        description="Lorem Ipsum is simply dummy of text of the of and industry. Lorem Ipsum is simply dummy of text of the of and industry."
                                        />
                                        <p className='mt-3' style={{marginLeft:'48px'}}>1 hour ago</p>
                                    </Card>
                                    <Card >
                                        <Meta avatar={<Avatar icon={<AppstoreOutlined className='notificationAvatar'/>}/>}
                                        title=""
                                        description="Lorem Ipsum is simply dummy of text of the of and industry. Lorem Ipsum is simply dummy of text of the of and industry."
                                        />
                                        <p className='mt-3' style={{marginLeft:'48px'}}>1 hour ago</p>
                                    </Card>
                                    <Card >
                                        <Meta avatar={<Avatar icon={<AppstoreOutlined className='notificationAvatar'/>}/>}
                                        title=""
                                        description="Lorem Ipsum is simply dummy of text of the of and industry. Lorem Ipsum is simply dummy of text of the of and industry."
                                        />
                                        <p className='mt-3' style={{marginLeft:'48px'}}>1 hour ago</p>
                                    </Card>
                                </div>
                            </div>
                        </Col>
                        <Col lg={8}>
                            <div className='w-100'>
                                <div className='d-flex' ><h4 className='w-100'>Recent notifications</h4><p style={{width:'100px'}}>View all</p></div>
                                <div>
                                    <Card >
                                        <Meta avatar={<Avatar icon={<DollarCircleOutlined className='notificationAvatar green'/>}/>}
                                        title=""
                                        description="Lorem Ipsum is simply dummy of text of the of and industry. Lorem Ipsum is simply dummy of text of the of and industry."
                                        />
                                        <p className='mt-3' style={{marginLeft:'48px'}}>1 hour ago</p>
                                    </Card>
                                    <Card >
                                        <Meta avatar={<Avatar icon={<DollarCircleOutlined className='notificationAvatar green'/>}/>}
                                        title=""
                                        description="Lorem Ipsum is simply dummy of text of the of and industry. Lorem Ipsum is simply dummy of text of the of and industry."
                                        />
                                        <p className='mt-3' style={{marginLeft:'48px'}}>1 hour ago</p>
                                    </Card>
                                    <Card >
                                        <Meta avatar={<Avatar icon={<DollarCircleOutlined className='notificationAvatar green'/>}/>}
                                        title=""
                                        description="Lorem Ipsum is simply dummy of text of the of and industry. Lorem Ipsum is simply dummy of text of the of and industry."
                                        />
                                        <p className='mt-3' style={{marginLeft:'48px'}}>1 hour ago</p>
                                    </Card>
                                </div>
                            </div>
                        </Col>
                        
                            <div className='w-100 mt-5'>
                                <div className='d-flex w-100' ><h4 className='w-100'>Recent blogs</h4><p style={{width:'100px'}}>View all</p></div>
                                <Row lg={24}>
                                    <Col lg={6}>
                                        <Card
                                            hoverable
                                            style={{width:'280px'}}
                                            cover={<img alt="example" src="https://images.pexels.com/photos/258109/pexels-photo-258109.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />}
                                            >
                                            <Meta title="Lorem Ipsum is simply dumy text of the" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has the text dummy t..." />
                                        </Card>
                                    </Col>
                                    <Col lg={6}>
                                        <Card
                                            hoverable
                                            style={{width:'280px'}}
                                            cover={<img alt="example" src="https://images.pexels.com/photos/258109/pexels-photo-258109.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />}
                                            >
                                            <Meta title="Lorem Ipsum is simply dumy text of the" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has the text dummy t..." />
                                        </Card>
                                    </Col>
                                    <Col lg={6}>
                                        <Card
                                            hoverable
                                            style={{width:'280px'}}
                                            cover={<img alt="example" src="https://images.pexels.com/photos/258109/pexels-photo-258109.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />}
                                            >
                                            <Meta title="Lorem Ipsum is simply dumy text of the" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has the text dummy t..." />
                                        </Card>
                                    </Col>
                                    <Col lg={6}>
                                        <Card
                                            hoverable
                                            style={{width:'280px'}}
                                            cover={<img alt="example" src="https://images.pexels.com/photos/258109/pexels-photo-258109.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />}
                                            >
                                            <Meta title="Lorem Ipsum is simply dumy text of the" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has the text dummy t..." />
                                        </Card>
                                    </Col>
                                </Row>
                            </div>
                        
                    </Row>
                </Content>
            </Layout>
        </Layout>}
        <Layout>
        <Footer className='text-center' style={{backgroundColor:'white'}}>
        Jikoo ©2022  <h6 onClick={()=>window.open("www.markericfairweather.com", "_blank")} >.</h6>
        </Footer> 
   </Layout>
        </>
    )
}

export default Home