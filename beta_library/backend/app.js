import express from 'express'
import routersLivros from './routers/livrosRouter.js'


const app = express()
app.use(express.json())

const port = 7000


// Montagem da rota livro
app.use('/livros', routersLivros);

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})