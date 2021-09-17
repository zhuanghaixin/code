import Koa from 'koa';

const app = new Koa();
app.use(async (ctx, next) => {
    // koa 中间件 U形模型 到了下一个中间件之后还会回来
    // 1
    ctx.body = 'hello world';
    await next();
    //从下面那个中间件又回来了，到了下一个中间件之后还会回来  hello world zhx,
    // 3
    ctx.body += 'how are you?';
});
app.use(async (ctx,next) => {
    // koa 中间件 U形模型 到了下一个中间件之后还会回来
    // 2
    ctx.body += ' 庄海鑫,';
    await next()
});
app.use(async (ctx, next ) => {
    ctx.set('Content-Type', 'text/html;charset=utf8');
});
app.listen(3000);



