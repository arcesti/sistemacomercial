import { Alert } from "react-bootstrap";
import CadProd from "./Formularios/CadProd";
import Pagina from '../Layouts/Pagina'
import { useState } from "react";
import TabProdutos from "./Tabelas/TabProdutos";
import { produtos } from "../../Dados/mockProdutos"

export default function TelaCadCli(props) {
    const [listaProdutos, setListaProdutos] = useState([...produtos]);
    const [exibirTabela, setExibirTabela] = useState(true);
    const [modoCadastro, setModoCadastro] = useState(true);
    const [prodAlter, setProdAlter] = useState(null);
    return (
        <>
            <Pagina>
                <Alert className="mt-02 mb-02 success text-center" variant="success">
                    <h2>
                        {exibirTabela ? 'Tabela de produtos':'Cadastro de produtos'}
                    </h2>
                </Alert>
                {exibirTabela ? <TabProdutos listaProdutos={listaProdutos}
                                             setListaProdutos={setListaProdutos}
                                             modoCadastro={modoCadastro}
                                             setModoCadastro={setModoCadastro}
                                             prodAlter={prodAlter}
                                             setProdAlter={setProdAlter}
                                             setExibirTabela={setExibirTabela} /> 
                                : 
                                <CadProd listaProdutos={listaProdutos}
                                         setListaProdutos={setListaProdutos}
                                         modoCadastro={modoCadastro}
                                         setModoCadastro={setModoCadastro}
                                         prodAlter={prodAlter}
                                         setProdAlter={setProdAlter}
                                         setExibirTabela={setExibirTabela}/>}
            </Pagina>
        </>
    );

}