import { getTodosLivros, getLivroPorId, insereLivro, modificaLivro, deletaLivroPorId} from '../Models/livroModel.js';

export const getLivros = async (req, res) => {
    try{
        const livros = await getTodosLivros();
        res.send(livros);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getLivro = async (req, res) => {
    try{
        const id = req.params.id

        if(id && Number(id)){
            const livro = await getLivroPorId(id)         
            res.send(livro)
        }else{
            res.status(422)
            res.send('ID Inválido')
        }     

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const postLivro = async (req, res) => {
  try {
    const livroNovo = req.body;
 
    if (livroNovo.nome) {
      const livros = await getTodosLivros();
      const ultimoId = livros.length > 0 ? Math.max(...livros.map(l => l.id)) : 0;
      const novoLivroComId = { id: ultimoId + 1, ...livroNovo };
 
      insereLivro(novoLivroComId);
      res.status(201).json(novoLivroComId);
    } else {
      res.status(422).send("O campo 'nome' é obrigatório");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};
 


export const patchLivro = async (req, res) => {
    try{
        const id = req.params.id

        if(id && Number(id)){
            const body = req.body
            await modificaLivro(body, id)
            res.send('Livro modificado com sucesso!')
        }else{
            res.status(422)
            res.send('ID Inválido')
        }

    } catch{
        res.status(500).send(error.message);
    }
}

export const deletaLivro =async (req, res) => {
    try {
        const id = req.params.id
        if(id && Number(id)){
            await deletaLivroPorId(id)
            res.send("livro deletado com sucesso")
        }else{
            res.status(422)
            res.send('ID Inválido')
        }    
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
};