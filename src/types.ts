import { Request, Response, NextFunction } from 'express'

export type REQ = Request
export type RES = Response
export type NEXT = NextFunction

export type MiddleWare = (req: REQ, res: RES, next: NEXT) => any
export type Handler = (req: REQ, res: RES) => any

export type Method = 'get' | 'post' 
export type Route = {
    method: Method,
    path: string,
    middleware: MiddleWare[],
    handler: Handler
}

export type AppAppend={
    middleware?:MiddleWare[]
}

