import { Alert } from "react-bootstrap";
export default function Cabecalho(props){
    
    //método render
    return (
        <Alert className={"text-center bg-dark text-white p-3"} variant="dark">
            <h1>
                {props.titulo || "Título não fornecido"}
            </h1>
        </Alert>

    );
}