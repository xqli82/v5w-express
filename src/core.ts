import express from "express"
import { Route, AppAppend } from './types'
import { Routes } from './router'

export const CreatServer: any = function (obj?: AppAppend) {
    const app = express()

    if (obj?.middleware) {
        app.use(...obj.middleware)
    }

    let routes: Route[]
    if (obj?.routes) {
        routes = [...Routes, ...obj.routes]
    } else {
        routes = Routes
    }

    console.log(routes)
    routes.forEach(item => {
        app[item.method](item.path, ...item.middleware, item.handler)
    })

    return app
}

