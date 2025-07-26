import { getTodosLivros, getLivroPorId, insereLivro, modificaLivro, deletaLivroPorId} from '../services/livroServices.js';

export const getLivros = (req, res) => {
    try{
        const livros = getTodosLivros();
        res.send(livros);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getLivro = (req, res) => {
    try{
        const id = req.params.id
        const livro = getLivroPorId(id)
        res.send(livro)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const postLivro = async (req, res) => {
    try{
        const livroNovo = req.body;
        await insereLivro(livroNovo);
        res.status(201).json(livroNovo);
    } catch (error){
        res.status(500).send(error.message);
    }
}

export const patchLivro = async (req, res) => {
    try{
        const id = req.params.id
        const body = req.body
        modificaLivro(body, id)
        res.send('Livro modificado com sucesso!')
    } catch{
        res.status(500).send(error.message);
    }
}

export const deletaLivro = (req, res) => {
    try {
        const id = req.params.id
        deletaLivroPorId(id)
        res.send("livro deletado com sucesso")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
};