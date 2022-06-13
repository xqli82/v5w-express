import { Routes } from '../router'
import { Route, MiddleWare } from '../types'

//get method
export const GET = (subPath: string = ""): MethodDecorator => {
    return (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
        if (!(target as any)['routes']) {
            (target as any)['routes'] = []
        }
        let mids = (target as any)['mids-' + String(propertyKey)] || [];
        (target as any)['routes'].push({
            method: 'get',
            path: subPath,
            handler: descriptor.value,
            middleware: mids
        })
    }
}

//post method
export const POST = (subPath: string): MethodDecorator => {
    return (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
        if (!(target as any)['routes']) {
            (target as any)['routes'] = []
        }
        let mids = (target as any)['mids-' + String(propertyKey)] || [];
        (target as any)['routes'].push({
            method: 'post',
            path: subPath,
            handler: descriptor.value,
            middleware: mids
        })
    }
}

//path
export const PATH = (mainPath: string): ClassDecorator => {
    return (target: Function) => {
        let list = (target.prototype.routes as Route[]) || [];
        list.forEach(item => {
            let { path, method, handler, middleware } = item;
            // console.log('main:', mainPath, 'path:', path)
            let mp = mainPath.replace('/', '');
            let mp1 = mp ? ('/' + mp + '/') : '/';
            path = mp1 + path.replace('/', '');
            Routes.push({
                path: path,
                method,
                handler,
                middleware
            })
        })
    }
}

//class middleware
export const ClassMiddleware = (mids: MiddleWare[] = []): ClassDecorator => {
    return (target: Function) => {
        let list = (target.prototype.routes as Route[]) || [];
        target.prototype.routes = list.map(item => {
            let { path, method, handler, middleware } = item;
            return {
                path,
                method,
                handler,
                middleware: [...middleware, ...mids]
            }
        })
    }
}

//method middleware
export const MethodMiddleware = (mids: MiddleWare[] = []): MethodDecorator => {
    return (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
        (target as any)['mids-' + String(propertyKey)] = mids
    }
}