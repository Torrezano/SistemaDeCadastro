import express from "express";
import bodyParser from "body-Parser";
import cors from "cors";

import usersRoutes from "./routes/users.js";
import clienteRoutes from "./routes/cliente.js";


const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());
app.use('/users', usersRoutes);
app.use('/cliente', clienteRoutes);

app.get('/', (req,res) => res.send("Hello World"));

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));