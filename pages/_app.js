//import { hotjar } from 'react-hotjar'
// import * as gtag from '../lib/gtag'
import {ToastContainer} from 'react-toastify'
import {Provider} from '../context'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import "../public/css/styles.scss"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'antd/dist/antd.css'


import 'react-toastify/dist/ReactToastify.css'

function MyApp({Component, pageProps}) {
    //Google analytics lib configuration with router. The other configuration already exists
    const router = useRouter()
    // useEffect(() => {
    //     const handleRouteChange = url => {
    //       gtag.pageview(url)
    //     }
    //     router.events.on('routeChangeComplete', handleRouteChange)
    //     return () => {
    //       router.events.off('routeChangeComplete', handleRouteChange)
    //     }
    //   }, [router.events])

    //Hotjar configuration
    // let HJID = 2798532
    // let HJSV = 6
    // useEffect(() => {
    //     hotjar.initialize(HJID, HJSV)
    //   }, [])
    //   <!-- Hotjar Tracking Code for https://eduzuka.com/ -->
    //   <script>
    //       (function(h,o,t,j,a,r){
    //           h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    //           h._hjSettings={hjid:2798532,hjsv:6};
    //           a=o.getElementsByTagName('head')[0];
    //           r=o.createElement('script');r.async=1;
    //           r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    //           a.appendChild(r);
    //       })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    //   </script>

//     function setGoogleTags(){
//       if (process.env.NODE_ENV==="production"){
//           return{
//               // __html:`
//               // window.dataLayer = window.dataLayer || [];
//               // function gtag(){dataLayer.push(arguments);}
//               // gtag('js', new Date());

//               // gtag('config', 'G-X355EXNFVF');
//               // `

//               __html:`
//               window.dataLayer = window.dataLayer || [];
//               function gtag(){dataLayer.push(arguments);}
//               gtag('js', new Date());

//               gtag('config', 'UA-212210606-1');
//               `
//           }
//       }
//   }
    return (
        <>
    <Head>
        <meta name="google-site-verification" content=""/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=10.0," />
        {/* <script dangerouslySetInnerHTML={setGoogleTags()}></script> */}
        
                    
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id="></script> */}
        <meta name="description" content = "Jikoo Fintech Platform"/>
    </Head>
    <Provider>
        <ToastContainer />
         <Component {...pageProps}/>
    </Provider>
    </>
    )
}

export default MyApp