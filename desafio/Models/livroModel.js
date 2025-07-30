import { readFile, writeFile } from 'fs/promises';

const arquivoJSON = 'Dados/livros.json';

async function getTodosLivros() {
    const dados = await readFile(arquivoJSON, 'utf-8');
    return JSON.parse(dados);
}

async function getLivroPorId(id) {
    const dados = await readFile(arquivoJSON, 'utf-8');
    const livros = JSON.parse(dados);
    const livroFiltrado = livros.filter(livro => livro.id === Number(id))[0];
    return livroFiltrado;
}

async function insereLivro(livroNovo) {
    const dados = await readFile(arquivoJSON, 'utf-8');
    const livros = JSON.parse(dados);
    const novaListaDeLivros = [...livros, livroNovo];
    await writeFile(arquivoJSON, JSON.stringify(novaListaDeLivros));
}

async function modificaLivro(modificacoes, id) {
    const dados = await readFile(arquivoJSON, 'utf-8');
    let livrosAtuais = JSON.parse(dados);

    const indiceModificado = livrosAtuais.findIndex(livro => livro.id === Number(id));
    const conteudoMudado = { ...livrosAtuais[indiceModificado], ...modificacoes };
    livrosAtuais[indiceModificado] = conteudoMudado;

    await writeFile(arquivoJSON, JSON.stringify(livrosAtuais));
}

async function deletaLivroPorId(id) {
    const dados = await readFile(arquivoJSON, 'utf-8');
    const livros = JSON.parse(dados);
    const livrosFiltrados = livros.filter(livro => livro.id !== Number(id));
    await writeFile(arquivoJSON, JSON.stringify(livrosFiltrados));
}

export { getTodosLivros, getLivroPorId, insereLivro, modificaLivro, deletaLivroPorId };
