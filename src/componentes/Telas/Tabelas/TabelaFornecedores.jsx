import { Button, Container, Table } from "react-bootstrap";

export default function TabelaFornecedores(props) {
    function atualizarFornecedor(fornecedor) {
        if (
            window.confirm(
                "Deseja realmente alterar o fornecedor -> " + fornecedor.nome
            )
        ) {
            props.setFornecedor
        }
    }
}