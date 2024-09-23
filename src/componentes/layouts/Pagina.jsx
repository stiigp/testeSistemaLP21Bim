import Menu from "./Menu";
import Cabecalho from "./Cabecalho";
import { Container } from "react-bootstrap";
import pato from '../../assets/imagens/pato.png';



export default function Pagina(props) {
    return (
        <div className="bg-dark text-white p-3" >
        
        <Container className="bg-dark text-white p-3" >
                <Cabecalho titulo="˖ ࣪✦ Loot Ledger ‧₊˚𓂃 ." />
                <Menu />
                {
                    props.children
                }
                
                <img src={pato} />
            </Container>
        </div>

    );
}