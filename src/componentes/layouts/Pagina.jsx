import Cabecalho from "./Cabecalho";
import Menu from "./Menu";
import { Container } from "react-bootstrap";

export default function Pagina(props) {

    return (
        <div>
            <Container>
            <Cabecalho titulo="Sistema de Controle Gerencial" />
            <Menu />
            {

                props.children

            }
            </Container>
        </div>
    );
}