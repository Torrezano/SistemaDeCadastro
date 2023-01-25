import {useState, useEffect} from "react";
import { ToastContainer,toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {Link} from "react-router-dom"
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';


const AddCliente = () => {
    const clienteVazio = {
        nome: "",
        cpf: "",
        rg: "",
        email: "",
        telefone1: "",
        telefone2: "",
        nascimento: ""
    }
    const [cliente,setCliente] = useState(clienteVazio)
    
      const showToastMessage = () => {
        toast.success('Cliente adicionado com sucesso !', {
            position: toast.POSITION.TOP_CENTER
        });
        };   

        
      const adicionaCliente = () => {
        const valoresCliente = Object.values(cliente);
        // NtemValorVazio é um boolean, tem true cliente não tiver nenhuma atributo não preenchido
        const NtemValorVazio = valoresCliente.reduce((acumulador,proximo) => !!(acumulador && proximo))

        if(NtemValorVazio){
            axios.post('http://localhost:5000/cliente/create',cliente).then(() => showToastMessage());
            setCliente(clienteVazio)
        }else{
            toast.warn('Preencha todos os campos', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }
        
      }
    
    return(
        <div className="d-flex justify-content-center">
        <Card border="dark" style={{width: '30rem'}}>
        <Card.Body>
        <Form>

            <Form.Group  className="mb-3" controlId="nomeCliente">
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text" placeholder="nome" value={cliente.nome} onChange={e => setCliente({...cliente, nome: e.target.value})} />
            </Form.Group>

            <Form.Group  className="mb-3" controlId="cpfCliente">
                <Form.Label>CPF</Form.Label>
                <Form.Control type="text" placeholder="CPF" value={cliente.cpf} onChange={e => setCliente({...cliente, cpf: e.target.value})} />
            </Form.Group>

            <Form.Group  className="mb-3" controlId="nomeCliente">
                <Form.Label>RG</Form.Label>
                <Form.Control type="text" placeholder="RG" value={cliente.rg} onChange={e => setCliente({...cliente, rg: e.target.value})} />
            </Form.Group>

            <Form.Group  className="mb-3" controlId="nomeCliente">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email" placeholder="email@email.com" value={cliente.email} onChange={e => setCliente({...cliente, email: e.target.value})} />
            </Form.Group>

            <Form.Group  className="mb-3" controlId="nomeCliente">
                <Form.Label>Telefone 1</Form.Label>
                <Form.Control type="text" placeholder="DD 0000-0000" value={cliente.telefone1} onChange={e => setCliente({...cliente, telefone1: e.target.value})} />
            </Form.Group>

            <Form.Group  className="mb-3" controlId="nomeCliente">
                <Form.Label>Telefone 2</Form.Label>
                <Form.Control type="text" placeholder="DD 0000-0000" value={cliente.telefone2} onChange={e => setCliente({...cliente, telefone2: e.target.value})} />
            </Form.Group>

            <Form.Group  className="mb-3" controlId="nomeCliente">
                <Form.Label>Data de nascimento</Form.Label>
                <Form.Control type="text" placeholder="AAAA-MM-DD" value={cliente.nascimento} onChange={e => setCliente({...cliente, nascimento: e.target.value})} />
            </Form.Group>
            <div className="d-flex justify-content-center">
            <Button variant="success" size="lg" onClick={adicionaCliente}>Cadastrar Cliente</Button>
                <ToastContainer/>
            </div>
        </Form>
        </Card.Body>
        </Card>
        </div>
    )
}

export default AddCliente;