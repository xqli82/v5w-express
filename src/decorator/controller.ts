import { Routes } from '../router'
import { join } from 'path'
import { Route } from '../types'

export const GET = (subPath: string = ""): MethodDecorator => {
    return (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
        if (!(target as any)['routes']) {
            (target as any)['routes'] = []
        }
        (target as any)['routes'].push({
            method: 'get',
            path: subPath,
            handler: descriptor.value,
            middleware: []
        })

        // console.log(target)
    }
}

export const POST = (subPath: string): MethodDecorator => {
    return (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
        (target as any)['routes'][propertyKey].method = 'post';
        (target as any)['routes'][propertyKey].path = subPath;
        (target as any)['routes'][propertyKey].handler = descriptor.value;
        (target as any)['routes'][propertyKey].middleware = [];
    }
}

//path
export const PATH = (mainPath: string): ClassDecorator => {
    return (target: Function) => {
        let list = (target.prototype.routes as Route[]) || [];
        list.forEach(item => {
            let { path, method, handler, middleware } = item;
            let mp = mainPath.replace('/', '')
            path = mp ? ('/' + mp + '/') : '/' + path.replace('/', '')

            Routes.push({
                path,
                method,
                handler,
                middleware
            })
        })

    }
}

//middleware
export const MID = (mids: string[] | string): ClassDecorator => {
    return (target: Function) => {
        const keys = target.prototype['routes'].keys;
        (keys as string[]).forEach(item => {
            target.prototype['routes'][item]['middleware'] = target.prototype['routes'][item]['middleware'].concat(mids)
        });
    }
}