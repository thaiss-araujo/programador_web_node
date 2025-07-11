const http = require('http') //módulo que cria um servidor

const port = 3000;

const server = http.createServer((req, res) => {
    res.write('oi HTTP Thais!')
    res.end()
})

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})