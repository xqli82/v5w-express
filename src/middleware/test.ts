import {REQ,RES,NEXT} from '../types'

export function md_test1(req:REQ,res:RES,next:NEXT){
    console.log('test1')
    next()
}

export function md_test2(req:REQ,res:RES,next:NEXT){
    console.log('test2')
    next()
}