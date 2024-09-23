import Menu from "./Menu";
import Cabecalho from "./Cabecalho";
import { Container } from "react-bootstrap";

export default function Pagina(props) {
    return (
        <div className="bg-dark text-white p-3" >
        
        <Container className="bg-dark text-white p-3" >
                <Cabecalho titulo="Sistema de controle Gerencial" />
                <Menu />
                {
                    props.children
                }
            </Container>
        </div>

    );
}