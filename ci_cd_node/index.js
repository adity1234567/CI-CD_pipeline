const express=require('express')
const app=express()

app.get('/',(req,res)=>{
    res.json({
        msg:'Hello World!',
        app_version:'1.0.0',
    })
})


app.get('/add/:a/:b',(req,res)=>{
    const a=parseInt(req.params.a);
    const b=parseInt(req.params.b);

    if(isNaN(a)||isNaN(b)){
        return res.status(400).json({error:'Invalid input'});
    }
    res.json({sum:a+b});
});

const PORT=process.env.PORT||3000;

app.listen(PORT,()=>{
    console.log(`server is running bro!!! ${PORT}`);
})

module.exports = app;