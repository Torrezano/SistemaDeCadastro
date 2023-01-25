import { ToastContainer,toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import {useParams} from "react-router-dom"
import axios from "axios";
import Button from 'react-bootstrap/Button';

const DesativaCliente = () => {
    const {id} = useParams();
    
    const showToastMessage = () => {
        toast.success('Cliente Desativado!', {
            position: toast.POSITION.TOP_CENTER,
            theme: "dark"
        });
        };   

    const submit = () => {
            confirmAlert({
              title: 'Desativar',
              message: 'Você tem certeza que deseja desativar este cliente?',
              buttons: [
                {
                  label: 'Sim',
                  onClick: () => desativaCliente()
                },
                {
                  label: 'Não',
                  onClick: () => {}
                }
              ]
            });
          };

      const desativaCliente = () => {
        axios.patch(`http://localhost:5000/cliente/desativa/${id}`).then(() => showToastMessage());
      }


    
    return(
        <div>
            <Button  variant="danger" onClick={() => submit()}>Desativar</Button>
            <ToastContainer></ToastContainer>
        </div>
    )
}

export default DesativaCliente;