import {REQ,RES} from '../src/types'
import {PATH,GET} from '../src/decorator/controller'

@PATH('/')
class Post{
    @GET('/index')
    index(req:REQ,res:RES){
        res.send('index')
    }
    @GET('/')
    test1(req:REQ,res:RES){
        res.send('test1')
    }
}