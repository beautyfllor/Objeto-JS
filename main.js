'use strict'

/*Variável - É um espaço na memória, 
com a finalidade de armazenar dados, 
que podem ser de vários tipos, números, 
boolenano e string.*/
const aluna = 'Ana'

/*Array - É um conjunto de dados.*/
const turma = ['Ana', 'Pedro']

/*Método - É a ação de um objeto, como mover e adicionar.*/
console.log("Ana".toUpperCase().length)

/*Objeto - É um conjunto de propriedades e métodos*/
const classe = {
    nome: 'Ana',
    email: 'ana@gmail.com',
    notas: {
        mat: 5,
        port: 9,
        xyz: 10
    },
    media: () => (9 + 5 + 10) / 3
}

classe.nome
classe.notas
classe.media

const alunos = [
    {
        nome: 'Ana',
        email: 'ana@gmail.com',
        nota1: 5,
        nota2: 9
    },
    {
        nome: 'Lara',
        email: 'lara@gmail.com',
        nota1: 3,
        nota2: 10
    },
    {
        nome: 'Pedro',
        email: 'pedro@gmail.com',
        nota1: 6,
        nota2: 10
    },
    {
        nome: 'Paulo',
        email: 'paulo@gmail.com',
        nota1: 8,
        nota2: 10
    }
]

console.log(alunos[0].nome)

const alunos2 = {
    aluno1: ['Ana', 'ana@gmail.com', 2,3,4],
    aluno2: ['Pedro', 'pedro@gmail.com', 5,7,9]
}