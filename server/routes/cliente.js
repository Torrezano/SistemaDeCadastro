import express from "express";
import { criaUsuario, listaClientesAtivos, atualiaCliente,dadosClientePorID, desativaCliente} from "../controllers/cliente.js";
const router = express.Router();


router.post('/create',criaUsuario);

router.get('/list', listaClientesAtivos);

router.put('/update/:id', atualiaCliente);

router.get('/data/:id', dadosClientePorID);

router.patch('/desativa/:id', desativaCliente);

export default router;