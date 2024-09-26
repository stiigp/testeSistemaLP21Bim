import { Alert } from "react-bootstrap";
import fornecedores from "../../dados/mockFornecedores";
import FormCadFornecedor from "./Formularios/FormCadFornecedor";
import TabelaFornecedores from "./Tabelas/TabelaFornecedores";

export default function TelaCadastroFornecedor(props) {

    const [exibirFornecedor, setExibirFornecedor] = useState(true);
    const [listaFornecedor, setListaFornecedor] = useState(fornecedores);
    const [modoEdicao, setModoEdicao] = useState(false);
    const [fornecedorSelecionado, setFornecedorSelecionado] = useState({
        codigo: 0,
        nome: "",
        cnpj: "",
        contato: "",
        localizacao: ""
    });
    
    return (
        <div>
            <Pagina>
                <Alert className="mt-02 mb-02 dark text-center" variant="dark">
                    <h2>
                        Cadastro de Fornecedor
                    </h2>
                </Alert>
                {exibirFornecedor ?
                    <TabelaFornecedores
                        listaFornecedor={listaFornecedor}
                        setListaFornecedor={setListaFornecedor}
                        setExibirFornecedor={setExibirFornecedor}
                    /> :
                    
                    
                    
                    <FormCadFornecedor />}
            </Pagina>
        </div>
    );

}
