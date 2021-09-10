const logger=(prefix)=>{
    return (req,res,next)=>{
        console.log(`${prefix}:${req.url}`)
        next()
    }
}
module.exports =logger
