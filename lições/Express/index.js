const express = require('express')
const app = express()

app.get("/",function(req,res){
   res.send('Bem vindo ao guia do Back-end')
})

app.get("/blog/:nome?",function(req,res){
   res.send('Bem vindo ao meu blog')
})

app.get("/canal/",function(req,res){
   res.send('Bem vindo ao Canal')
})

app.get("/canal/youtube",function(req,res){
   res.send('Bem vindo ao yt')
})

app.get("/teste",function(req,res){
   res.send('Bem vindo ao guia do Back-end')
})

app.get("/piriri",function(req,res){
   res.send('Bem vindo ao piriri')
})

app.get("/ola/:nome",function(req,res){
   res.send('<h1>opa iai'+req.params.nome +'</h1>')
})

app.listen(8080,function(erro){
   if(erro){
      console.log('ERRO DETECTADO!!!')
   }else{
      console.log('Server iniciado')
   }
})