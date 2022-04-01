const express = require('express')
const next = require('next')
const {createProxyMiddleware} = require("http-proxy-middleware")
require('dotenv').config()
const dev = process.env.NODE_ENV !== "production"
// console.log("env vars",process.env.NODE_ENV)
const app = next({dev})

const handle = app.getRequestHandler()


app.prepare().then(()=> {
    //apply proxy in dev mode
    const server = express()
    if(dev){
        server.use('/api', createProxyMiddleware({
            target: "http://localhost:8000",
            // target: "https://eduzuka-dev-backend.herokuapp.com/",
            changeOrigin: true,
        }))
    }else{
        server.use('/api', createProxyMiddleware({
            target: process.env.BACKEND,
            // target: "https://eduzuka-dev-backend.herokuapp.com/",
            changeOrigin: true,
        }));
    }
    server.all('*', (req, res) => {
        return handle(req, res)
    })
    const port = process.env.PORT || 3000;
    server.listen(port, (err)=> {
        if(err){
            throw err
        }
        console.log('Server running on port '+port)
    })
}).catch((error) => {
    console.log('error', error)
})