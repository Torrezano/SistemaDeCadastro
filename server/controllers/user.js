import {v4 as uuidv4} from "uuid";
const users = []

export const listaUsuarios = (req, res) => {
    res.send(users);
}

export const criaUsuario = (req, res) => {
    const user = req.body;

    users.push({...user, id: uuidv4()});

    res.send(`Usuário com o nome ${user.firstname} adicionado!`);
}

export const exibeUsuario = (req, res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id === id)

    res.send(foundUser)
}

export const modificaUsuario = (req, res) => {
    const {id} = req.params;
    const {firstname, lastname, age} = req.body;

    const user = users.find((user) => user.id === id);

    if(firstname) user.firstname = firstname;
    if(lastname) user.lastname = lastname;
    if(age) user.age = age;
    
    res.send(`o usuário com id ${id} foi alterado!`)

}