var HTTP = require('http')


HTTP.createServer(function (req,res){
   res.end('<h1>Bem vindo ao meu site!</h1>')
}).listen(8081)
console.log("foi")