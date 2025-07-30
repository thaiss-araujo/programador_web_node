import express from 'express'
import routersLivros from './Routers/LivroRouters.js'


const app = express()
app.use(express.json())

const port = 3000


// Montagem da rota livro
app.use('/api', routersLivros);

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})