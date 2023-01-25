import {useState, useEffect} from "react";
import { ToastContainer,toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {Link,useParams} from "react-router-dom"
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';


const EditCliente = () => {
    const [data, setData] = useState([]);
    const {id} = useParams();
    const [cliente,setCliente] = useState({})


    useEffect(() => {
        axios.get(`http://localhost:5000/cliente/data/${id}`).then((response) => setCliente(response.data))
    },[id])

    
    
      const showToastMessage = () => {
        toast.success('Cliente alterado com sucesso !', {
            position: toast.POSITION.TOP_CENTER,
            theme: "colored"
        });
        };   

      const modificaCliente = () => {
        axios.put(`http://localhost:5000/cliente/update/${id}`,cliente).then(() => showToastMessage());
      }
    
    return(
        <div className="d-flex justify-content-center">
            <Card style={{ width: '30rem' }} className="text-center">
                <Card.Header as="h4">{`Dados do Cliente de ID:  ${id}`}</Card.Header>
                <ListGroup variant="flush">

                    <ListGroup.Item>
                        <Form.Group  as={Row} controlId="nomeCliente">
                            <Form.Label column sm="2">Nome</Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" placeholder="nome" className="mb-1" value={cliente.nome} onChange={
                                    e => setCliente({...cliente, nome: e.target.value})
                                } />
                            </Col>
                        </Form.Group>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Form.Group  as={Row} controlId="cpfCliente">
                            <Form.Label column sm="2">CPF</Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" placeholder="cpf" className="mb-1" value={cliente.cpf} onChange={
                                    e => setCliente({...cliente, cpf: e.target.value})
                                } />
                            </Col>
                        </Form.Group>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Form.Group  as={Row} controlId="rgCliente">
                            <Form.Label column sm="2">RG</Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" placeholder="rg" className="mb-1" value={cliente.rg} onChange={
                                    e => setCliente({...cliente, rg: e.target.value})
                                } />
                            </Col>
                        </Form.Group>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Form.Group  as={Row} controlId="emailCliente">
                            <Form.Label column sm="2">E-mail</Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" placeholder="email" className="mb-1" value={cliente.email} onChange={
                                    e => setCliente({...cliente, email: e.target.value})
                                } />
                            </Col>
                        </Form.Group>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Form.Group  as={Row} controlId="telefone1Cliente">
                            <Form.Label column sm="4">Telefone 1</Form.Label>
                            <Col sm="6">
                                <Form.Control type="text" placeholder="email" className="mb-1" value={cliente.telefone1} onChange={
                                    e => setCliente({...cliente, telefone1: e.target.value})
                                } />
                            </Col>
                        </Form.Group>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Form.Group  as={Row} controlId="telefone2Cliente">
                            <Form.Label column sm="4">Telefone 2</Form.Label>
                            <Col sm="6">
                                <Form.Control type="text" placeholder="email" className="mb-1" value={cliente.telefone2} onChange={
                                    e => setCliente({...cliente, telefone2: e.target.value})
                                } />
                            </Col>
                        </Form.Group>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Form.Group  as={Row} controlId="nascimentoCliente">
                            <Form.Label column sm="5">Nascimento</Form.Label>
                            <Col sm="4">
                                <Form.Control type="text" placeholder="email" className="mb-1" value={cliente.nascimento} onChange={
                                    e => setCliente({...cliente, nascimento: e.target.value})
                                } />
                            </Col>
                        </Form.Group>
                    </ListGroup.Item>
                    
                </ListGroup>
                <Card.Body className="d-flex justify-content-center">
                    <Row>
                    <Col sm="6">
                        <Link to={`/view/${id}`}>
                            <Button variant="success" onClick={modificaCliente}>Confirmar</Button>
                            <ToastContainer/>
                        </Link>
                    </Col>
                    
                    <Col sm="6">
                        <Link to={`/view/${id}`}>
                            <Button  variant="danger">Cancelar</Button>
                        </Link>
                    </Col>
                    </Row>
                </Card.Body>
            </Card>
                

               
        </div>
    )
}

export default EditCliente;