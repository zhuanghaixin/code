const express = require('express')
const app = express()
const port = 3000
const users=require('./routes/users')
// app.xxx()
// app.set('case sensitive routing', true)
app.set('view engine', 'ejs')
app.set('views','zhx')


app.use(express.json())
app.use(express.static('yyy') )
app.use(express.urlencoded())
app.use('/users',users)
app.get('/test',(req, res, next) => {
    // res.render('index')
    res.status(200)
    console.log(1)
    res.location('/yyy')
    res.end()
    next()
})
app.get('/yyy',(req, res, next) => {
    console.log(2)
    res.send('frank')
})
app.get('/xxx/:xx', (req, res,next) => {
    console.log(req.body)
    console.log(req.params)
    console.log(req.xhr)
    // req.on('data',(chunk)=>{
    //     console.log(chunk)
    //     console.log(chunk.toString())
    // })
    res.send('Hello World!')
    next()
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
