import Document, {Html, Head, Main, NextScript} from "next/document"

class MyDocument extends Document{
    // setGoogleTags(){
    //     if (process.env.NODE_ENV==="production"){
    //         return{
    //             // __html:`
    //             // window.dataLayer = window.dataLayer || [];
    //             // function gtag(){dataLayer.push(arguments);}
    //             // gtag('js', new Date());

    //             // gtag('config', '');
    //             // `

    //             __html:`
    //             window.dataLayer = window.dataLayer || [];
    //             function gtag(){dataLayer.push(arguments);}
    //             gtag('js', new Date());

    //             gtag('config', '');
    //             `
    //         }
    //     }
    // }
    render() {
        return (
            <Html lang='en-GB'>
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="twitter:player" content='https://youtu.be/Xta1mXW0uDk'/>
                    <meta name="google-site-verification" content=""/>
                   
                    <meta property="og:type"  content="website" />                    
                    {/* <script dangerouslySetInnerHTML={this.setGoogleTags()}></script> */}
                    
                    {/* <script async src="https://www.googletagmanager.com/gtag/js?id="></script> */}

                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument