import { REQ, RES } from '../src/types'
import { PATH, GET, ClassMiddleware,MethodMiddleware } from '../src/decorator/controller'
import { md_test1,md_test2 } from '../src/middleware/test'

@PATH('/post')
@ClassMiddleware([md_test1])
class Post {

    @GET('/index')
    index(req: REQ, res: RES) {
        res.send('index')
    }

    @GET('/')
    @MethodMiddleware([md_test2])
    test1(req: REQ, res: RES) {
        res.send('test1')
    }
}