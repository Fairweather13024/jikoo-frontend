import React, { useState, useEffect } from "react";
import Link from 'next/link'
import { Tabs, Radio, Space, Row, Col } from "antd";
import { LeftOutlined, HomeOutlined, RightOutlined, ContactsOutlined, FileSearchOutlined, AppstoreOutlined, DollarOutlined, MessageOutlined } from "@ant-design/icons";
import {useRouter} from 'next/router'
import SmallLogo from '../Logo/SmallLogo'


const MinimizedCustomSideDrawer = ({setSliderToggle, sliderToggle}) => {
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
  return (
    <div className="sliderMainMinified">
        <SmallLogo/>
        <div className="flex-column text-left mt-2 w-100">
            <div className="minifiedsliderNavBtnsContainer">
                <Link href = '/fundraisers/home'>
                        <a className =  {`w-100 sliderTab text-left d-flex p-3 font-25 ${current === '/fundraisers/home' && "active"}`}><HomeOutlined className='sliderIcon'/></a>
                </Link>
                <Link href = '/fundraisers/messages'>
                        <a className =  {`w-100 sliderTab text-left d-flex p-3 font-25 ${current === '/fundraisers/messages' && "active"}`}><MessageOutlined  className='sliderIcon'/></a>
                </Link>
                <Link href = '/fundraisers/business-profile'>
                        <a className =  {`w-100 sliderTab text-left d-flex p-3 font-25 ${current === '/fundraisers/business-profile' && "active"}`}><ContactsOutlined className='sliderIcon'/></a>
                </Link>
                <Link href = '/fundraisers/search-connect'>
                        <a className =  {`w-100 sliderTab text-left d-flex p-3 font-25 ${current === '/fundraisers/search-connect' && "active"}`}><FileSearchOutlined className='sliderIcon'/></a>
                </Link>
                <Link href = '/fundraisers/projects'>
                        <a className =  {`w-100 sliderTab text-left d-flex p-3 font-25 ${current === '/fundraisers/projects' && "active"}`}><AppstoreOutlined className='sliderIcon'/></a>
                </Link>
                <Link href = '/fundraisers/deals'>
                        <a className =  {`w-100 sliderTab text-left d-flex p-3 font-25 ${current === '/fundraisers/deals' && "active"}`}><DollarOutlined className='sliderIcon'/></a>
                </Link>
            </div>
            {sliderToggle == true? (<LeftOutlined className="sliderCaretClose" onClick={()=>setSliderToggle(!sliderToggle)}/>) : (<RightOutlined className="sliderCaretOpen" onClick={()=>setSliderToggle(!sliderToggle)}/>)}
        </div>
    </div>
  )
}

export default MinimizedCustomSideDrawer