import {db} from "../database/dbconfig.js";

export const criaUsuario = (req,res) => {
    const {nome,cpf,rg,email,telefone1,telefone2,nascimento} = req.body;

    const ClientePost = "INSERT INTO cliente (nome , cpf, rg, email, telefone1, telefone2, nascimento) VALUES (?,?,?,?,?,?,?)";

    db.query(ClientePost, [nome,cpf,rg,email,telefone1,telefone2,nascimento], (err, result) => {
        if(err){
            console.log(err)
        }else{
            res.send("Dados inseridos com sucesso");
        }
    })
}

export const listaClientesAtivos = (req, res) => {
    const getClientes = "SELECT * FROM cliente WHERE ativo = 1";
    db.query(getClientes, (err,result) => {
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    })
}

export const atualiaCliente = (req, res) => {
    const {id} = req.params;
    const {nome,cpf,rg,email,telefone1,telefone2,nascimento} = req.body;

    const updateCliente = `UPDATE cliente SET nome = "${nome}", cpf = "${cpf}", rg = "${rg}", email = "${email}", telefone1 = "${telefone1}", telefone2 = "${telefone2}", nascimento = "${nascimento}" WHERE id = ${id}`; 
    
    db.query(updateCliente, (err,result) => {
        if(err){
            console.log(err)
        }else{
            res.send("Dados alterados com sucesso!");
        }
    })
}

export const dadosClientePorID = (req, res) => {
    const {id} = req.params;
    const getCliente = `SELECT * FROM cliente WHERE id = ${id}`;

    db.query(getCliente, (err,result) => {
        if(err){
            console.log(err)
        }else{
            res.send(result[0])
        }
    })
}

export const desativaCliente = (req,res) => {
    const {id} = req.params;
    const desCliente = `UPDATE cliente SET ativo = 0 WHERE id = ${id}`

    db.query(desCliente, (err,result) => {
        if(err){
            console.log(err)
        }else{
            res.send("Cliente desativado com sucesso!");
        }
    })
}