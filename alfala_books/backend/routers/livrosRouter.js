import express from 'express'
import { getLivros } from '../controllers/livroController.js';
const router = express.Router()

// Rota GET para a raiz do recurso "livros"
router.get('/', getLivros)
 
// Rota POST para a raiz do recurso "livros"
router.post('/', (req, res) => {
  // Retorna a mensagem "Você fez uma requisição do tipo POST"
    res.send('Você fez uma requisição do tipo POST');
});
 
// Rota PATCH para a raiz do recurso "livros"
router.patch('/', (req, res) => {
  // Retorna a mensagem "Você fez uma requisição do tipo PATCH"
    res.send('Você fez uma requisição do tipo PATCH');
});
 
// Rota DELETE para a raiz do recurso "livros"
router.delete('/', (req, res) => {
  // Retorna a mensagem "Você fez uma requisição do tipo DELETE"
    res.send('Você fez uma requisição do tipo DELETE');
});
 
 
export default router;