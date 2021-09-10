const express = require('express')
const app = express()
const port = 3000
const logger = require('./logger')
// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })
app.use(logger('dev'))
// app.use((req, res, next) => {
//     if (req.path === '/' && req.method === 'get') {
//         res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});
//         res.write('根目录')
//     }
//     next()
// })
// 全能方法 app.route 表示get,post等各种方法
// app.route('/xxx').all((req, res, next) => {
//     console.log('route全能方法')
//     next()
// }).get(((req, res, next) => {
//     console.log('get')
// }))
app.use((req, res, next) => {
    res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});
    console.log(req.url)
    res.write('Hello World!')
    next()
})
app.use((req, res, next) => {
    if (true) {
        next('未登录=====')
    } else {
        next()
    }
})
app.use((error, req, res, next) => {
    next(error)
})
let count = 0
app.use((error, req, res, next) => {
    count += 1
    console.log(`当前有${count}个错误`)
    console.log(1)
    next(error)
})
// app.use((error, req, res, next) => {
//     console.log('eee', error)
//     res.write(error)
//     res.end()
//     next()
// })

// app.use((req, res, next) => {
//     console.log(12345)
//     res.write('你好')
//     res.end()
// })
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
