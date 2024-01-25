const Express = require('express')
const app = Express()

app.get("/",function(req,res){
   res.sendFile(__dirname+ '/html/index.html')
})
app.get("/sobre",function(req,res){
   res.send("sobre")
})

app.get('/ola/:nome/:cargo', function(req,res){
   res.send(`Ola ${req.params.nome}. Você esta atuando como ${req.params.cargo}!`)
})

app.listen(8081, function(){
   console.log("servidor rodando!!!")
})