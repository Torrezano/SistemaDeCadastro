import {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom"
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import DesativaCliente from "./DesativaCliente";



const ViewCliente = () => {
    const [data, setData] = useState([]);
    const {id} = useParams();



    useEffect(() => {
        axios.get(`http://localhost:5000/cliente/data/${id}`).then((response) => setData(response.data))
    },[id])
    return(
        <div className="d-flex justify-content-center">
            <Card style={{ width: '30rem' }} className="text-center">
                <Card.Header as="h4">{`Dados do Cliente de ID:  ${id}`}</Card.Header>
                <ListGroup variant="flush">

                    <ListGroup.Item>
                        <Form.Group  as={Row} controlId="nomeCliente">
                            <Form.Label column sm="5">Nome</Form.Label>
                            <Col sm="7">
                                <Form.Control style={{style:"white-space:pre"}} readOnly type="text" className="mb-1" value={data.nome}/>
                            </Col>
                        </Form.Group>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Form.Group  as={Row} controlId="cpfCliente">
                            <Form.Label column sm="5">CPF</Form.Label>
                            <Col sm="7">
                                <Form.Control plaintext readOnly type="text" className="mb-1" value={data.cpf}/>
                            </Col>
                        </Form.Group>
                    </ListGroup.Item>
                    
                    <ListGroup.Item>
                        <Form.Group  as={Row} controlId="rgCliente">
                            <Form.Label column sm="5">RG</Form.Label>
                            <Col sm="7">
                                <Form.Control plaintext readOnly type="text" placeholder="rg" className="mb-1" value={data.rg}/>
                            </Col>
                        </Form.Group>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Form.Group  as={Row} controlId="emailCliente">
                            <Form.Label column sm="5">E-mail</Form.Label>
                            <Col sm="7">
                                <Form.Control plaintext readOnly type="text" className="mb-1" value={data.email}/>
                            </Col>
                        </Form.Group>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Form.Group  as={Row} controlId="telefone1Cliente">
                            <Form.Label column sm="5">Telefone 1</Form.Label>
                            <Col sm="7">
                                <Form.Control plaintext readOnly type="text" className="mb-1" value={data.telefone1}/>
                            </Col>
                        </Form.Group>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Form.Group  as={Row} controlId="telefone2Cliente">
                            <Form.Label column sm="5">Telefone 2</Form.Label>
                            <Col sm="7">
                                <Form.Control plaintext readOnly type="text" className="mb-1" value={data.telefone2}/>
                            </Col>
                        </Form.Group>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Form.Group  as={Row} controlId="nascimentoCliente">
                            <Form.Label column sm="5">Nascimento</Form.Label>
                            <Col sm="4">
                                <Form.Control plaintext readOnly type="text" className="mb-1" value={data.nascimento}/>
                            </Col>
                        </Form.Group>
                    </ListGroup.Item>
                    
                </ListGroup>
                <Card.Body className="d-flex justify-content-center">
                    <Row>
                    <Col sm="6">
                        <Link to={`/editar/${id}`}>
                            <Button variant="primary">Editar</Button>
                        </Link>
                    </Col>
                        
                    <Col sm="6">
                        <DesativaCliente></DesativaCliente>
                    </Col>
                    </Row>
                </Card.Body>
            </Card>
                

               
        </div>
    )
}

export default ViewCliente;