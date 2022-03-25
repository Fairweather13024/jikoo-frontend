import React, { useState, useEffect } from "react";
import Link from 'next/link'
import { Tabs, Layout, Radio, Space, Row, Col } from "antd";
import { LeftOutlined, HomeOutlined, RightOutlined, ContactsOutlined, FileSearchOutlined, AppstoreOutlined, DollarOutlined, MessageOutlined } from "@ant-design/icons";
import {useRouter} from 'next/router'
import FullLogo from "../Logo/FullLogo";


const { TabPane } = Tabs;
const { Header, Footer, Sider, Content } = Layout;

const CustomSideDrawer = ({setSliderToggle, sliderToggle}) => {
        const [current, setCurrent]=useState('')
        const router = useRouter()

        const changeTabPosition = (e) => {
        setTabPosition(e.target.value);
        };

        const handleTabClick=(key)=>{
        router.push(`/${key}`)
        }

        useEffect(()=> {
        process.browser && setCurrent(window.location.pathname)
        //    setUsername(user.username)
}, [process.browser && window.location.pathname])

console.log("CURRENT",current)
 return (
  <div className="sliderMain" >
      <FullLogo/>
   <div className="sliderLeftNav flex-column text-left mt-2 w-100">
    <div className="sliderNavBtnsContainer">
      <Link href = '/fundraisers/home'>
            <a className =  {`w-100 sliderTab text-left d-flex p-3 ${current === '/fundraisers/home' && "active"}`}><HomeOutlined className='sliderIcon'/> Dashboard</a>
      </Link>
      <Link href = '/fundraisers/messages'>
            <a className =  {`w-100 sliderTab text-left d-flex p-3 ${current === '/fundraisers/messages' && "active"}`}><MessageOutlined  className='sliderIcon'/> Messages</a>
      </Link>
      <Link href = '/fundraisers/business-profile'>
            <a className =  {`w-100 sliderTab text-left d-flex p-3 ${current === '/fundraisers/business-profile' && "active"}`}><ContactsOutlined className='sliderIcon'/> Business Profile</a>
      </Link>
      <Link href = '/fundraisers/search-connect'>
            <a className =  {`w-100 sliderTab text-left d-flex p-3 ${current === '/fundraisers/search-connect' && "active"}`}><FileSearchOutlined className='sliderIcon'/> Search & connect</a>
      </Link>
      <Link href = '/fundraisers/projects'>
            <a className =  {`w-100 sliderTab text-left d-flex p-3 ${current === '/fundraisers/projects' && "active"}`}><AppstoreOutlined className='sliderIcon'/> Projects</a>
      </Link>
      <Link href = '/fundraisers/deals'>
            <a className =  {`w-100 sliderTab text-left d-flex p-3 ${current === '/fundraisers/deals' && "active"}`}><DollarOutlined className='sliderIcon'/> Deals</a>
      </Link>
    </div>
    <div className="sliderMainDetailsContainer">
        <div className="sliderMainDetails">
        <Link href = '/privacy-policy'>
            <a className =  {`w-100 sliderTab text-left d-flex p-3 text-body`}>Privacy policy</a>
        </Link>
        <Link href = '/terms'>
            <a className =  {`w-100 sliderTab text-left d-flex p-3 text-body`}>Terms & conditions</a>
        </Link>
        <Link href = '/contact'>
            <a className =  {`w-100 sliderTab text-left d-flex p-3 text-body`}>Contact us</a>
        </Link>
        </div>
        {sliderToggle == true? (<LeftOutlined className="sliderCaretClose" onClick={()=>setSliderToggle(!sliderToggle)}/>) : (<RightOutlined className="sliderCaretOpen" onClick={()=>setSliderToggle(!sliderToggle)}/>)}
        
        <div style={{height:'150px'}}>
            <p className="w-100 sliderTab text-left d-flex p-3 text-body">@2022 Copyright Jikoo</p>
            <p className="w-100 sliderTab text-left d-flex p-3 text-body">All rights reserved</p>
        </div>
    </div>
   </div>
  </div>
 );
};

export default CustomSideDrawer;

