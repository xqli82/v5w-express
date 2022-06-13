import {CreatServer} from './src/core'
import {Routes} from './src/router'
import './controller/post'

// console.log(Routes)
const app = CreatServer(Routes)

app.listen(3000,function(){
    console.log('server is running on port:3000')
})



// import express from "express"
// const app = express()
// app.get('/',function(req,res){
//     res.send('hello')
// })
// app.listen(3000,function(){
//     console.log('server running')
// })