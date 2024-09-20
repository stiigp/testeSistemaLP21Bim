import { Alert } from "react-bootstrap";
import FormCadProdutos from "./Formularios/FormCadProduto";
import Pagina from "../layouts/Pagina";
import { useState } from "react";
import TabelaProdutos from "./Tabelas/TabelaProdutos";
import { produtos } from "../../dados/mockProdutos";

export default function TelaCadastroProduto(props) {
    const [exibirTabela, setExibirTabela] = useState(true);
    const [listaProdutos, setListaProdutos] = useState(produtos);
    const [modoEdicao, setModoEdicao] = useState(false);
    const [produtoSelecionado, setProdutoSelecionado] = useState({
        codigo: 0,
        dataValidade: "",
        descricao: "",
        precoCusto: 0,
        precoVenda: 0,
        qtdEstoque: 0,
        urlImagem: ""
    });     


   
    return (
        <div>
            <Pagina>
                |<Alert className="mt-02 mb-02 success text-center" variant="success">
                    <h2>
                        Cadastro de Produto
                    </h2>
                </Alert>
                {
                    exibirTabela ?
                        <TabelaProdutos 
                        listaProdutos={listaProdutos} 
                        setListaProdutos={setListaProdutos}
                        setExibirTabela={setExibirTabela} 
                        setModoEdicao={setModoEdicao} 
                        setProdutoSelecionado={setProdutoSelecionado}
                        /> :

                        <FormCadProdutos 
                        listaProdutos={listaProdutos} 
                        setListaProdutos={setListaProdutos}
                        setExibirTabela={setExibirTabela}
                        modoEdicao={modoEdicao}
                        setModoEdicao={setModoEdicao} 
                        setProdutoSelecionado={setProdutoSelecionado}
                        produtoSelecionado={produtoSelecionado}
                        />
                }
            </Pagina>
        </div>
    );

}