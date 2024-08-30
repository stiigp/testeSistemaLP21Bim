import { Alert } from "react-bootstrap";
export default function Cabecalho (props) {

    // metodo render 
    return (
        <Alert variant="danger" className={"text-center"}>

        {props.titulo || "Titulo nao fornecido"}
        </Alert>
    );
}