import express from "express"
import {Route,AppAppend} from './types'

export const CreatServer:any=function(routes?:Route[],obj?:AppAppend){
    const app =express()

    if(obj?.middleware){
        app.use(...obj.middleware)
    }
    console.log(routes)
    routes?.forEach(item=>{
        app[item.method](item.path,...item.middleware,item.handler)
    })

    return app
}

