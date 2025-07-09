const path = require('path') //modulo interno do node que ler diretorios - path

const extension = path.extname('arquivo.docx') //extname retorna uma extensão de path
console.log(extension)