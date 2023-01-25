import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/esm/Button';
import {Link} from "react-router-dom"

function BarraDeNav() {
  return (

    <Navbar fixed="top "bg="dark" variant="dark">
        <Container className="d-flex justify-content-center">
          <Link to="/">  
          <Navbar.Brand>Sistema</Navbar.Brand>
          </Link>
          <Nav className='mx-auto'>
            <Link to="/" className='mx-2'>
                    <Button variant="outline-info">Listar Clientes</Button>
            </Link>
            <Link to="/addCliente"  className='mx-2'>
                    <Button variant="outline-warning">Adicionar Cliente</Button>
            </Link>
          </Nav>
          
          <Nav className="mx-right">
            <Button variant="outline-light">Logout</Button>
            
          </Nav>
        </Container>
    </Navbar>
  );
}

export default BarraDeNav;