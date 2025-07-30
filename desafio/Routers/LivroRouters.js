import express from 'express'

const router = express.Router()

// Lista de livros em memória
let livros = []

// Controle de ID
let proximoId = 1

// Criar novo livro
router.post('/api', (req, res) => {
    const { titulo, autor } = req.body

    if (!titulo || !autor) {
        return res.status(400).json({ mensagem: 'Título e autor são obrigatórios' })
    }

    const novoLivro = {
        id: proximoId++, // ID auto incrementado
        titulo,
        autor
    }

    livros.push(novoLivro)
    res.status(201).json(novoLivro)
})

// Obter todos os livros
router.get('/api', (req, res) => {
    res.json(livros)
})

// Obter livro por ID
router.get('/api/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const livro = livros.find(l => l.id === id)

    if (!livro) {
        return res.status(404).json({ mensagem: 'Livro não encontrado' })
    }

    res.json(livro)
})

// Atualizar livro
router.put('/api/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const livro = livros.find(l => l.id === id)

    if (!livro) {
        return res.status(404).json({ mensagem: 'Livro não encontrado' })
    }

    const { titulo, autor } = req.body
    if (titulo) livro.titulo = titulo
    if (autor) livro.autor = autor

    res.json(livro)
})

// Deletar livro
router.delete('/api/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const index = livros.findIndex(l => l.id === id)

    if (index === -1) {
        return res.status(404).json({ mensagem: 'Livro não encontrado' })
    }

    livros.splice(index, 1)
    res.status(204).send()
})

export default router

