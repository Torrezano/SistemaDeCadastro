import mysql from "mysql2";

export const db = mysql.createConnection({
    user:'root',
    host:'localhost',
    password: 'Ag79jasg21jcnl180$ha', //inserir a senha do localhost aqui, caso não possua deixar como ''
    database: 'cadastrojs'
})

