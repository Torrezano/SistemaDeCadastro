import {useState, useEffect} from "react";
import {Link} from "react-router-dom"
import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button';
import axios from "axios";



function Home(){
    const [data, setData] = useState([]);

    const loadData = async () => {
        const response = await  axios.get('http://localhost:5000/cliente/list');
        setData(response.data)
    };


    useEffect(() => {
        loadData();
    },[])

    return(
        <div>
            <Table bordered hover responsive variant="dark">
            
                <thead>
                    <tr>
                        <th style={{textAlign: "center"}}>ID do Cliente</th>
                        <th style={{textAlign: "center"}}>Nome</th>
                        <th style={{textAlign: "center"}}>E-mail</th>
                        <th style={{textAlign: "center"}}>Ação</th>

                    </tr>
                </thead>
                <tbody>
                    {data.map((cliente,numero) => {
                        return(
                            <tr key={cliente.id}>
                                <th scope="row" style={{textAlign: "center"}}>{cliente.id}</th>
                                <td style={{textAlign: "center"}}>{cliente.nome}</td>
                                <td style={{textAlign: "center"}}>{cliente.email}</td>
                               
                                <td>
                                    <Link className="p-2" to={`/editar/${cliente.id}`}>
                                        <Button  variant="outline-primary">Editar</Button>
                                    </Link>

                                    
                                    
                                    

                                    
                                    <Link className="p-2" to={`/view/${cliente.id}`}>
                                        <Button  variant="outline-success">Exibir Detalhes</Button>
                                    </Link>
                                    
                                </td>
                                
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
            
            
        </div>
    )
}

export default Home;

