import express from "express";
const router = express.Router();
import {listaUsuarios, criaUsuario, exibeUsuario, modificaUsuario} from "../controllers/user.js";



// Todos os endereços aqui estão començando com '/users'
router.get('/', listaUsuarios);

router.post('/', criaUsuario);

router.get('/:id', exibeUsuario);

router.patch('/:id', modificaUsuario);

export default router;