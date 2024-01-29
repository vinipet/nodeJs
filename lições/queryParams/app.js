const express = require('express')
const app = express()



app.get("/home",function(req,res){
   var nome = req.query['nome']
   if(nome){
   return res.send(nome)
   }
   res.send('nao entro')

})



app.listen(8080,function(erro){
   if(erro){
      console.log('ERRO DETECTADO!!!')
   }else{
      console.log('Server iniciado')
   }
})