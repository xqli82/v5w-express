import {CreatServer} from './src/core'
import './controller/post'


const app = CreatServer()

app.listen(3000,function(){
    console.log('server is running on port:3000')
})

