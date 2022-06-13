import {CreatServer} from './src/core'
import {Routes} from './src/router'
import './controller/post'


const app = CreatServer(Routes)

app.listen(3000,function(){
    console.log('server is running on port:3000')
})

