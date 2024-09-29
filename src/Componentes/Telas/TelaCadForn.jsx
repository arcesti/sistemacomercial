import { Alert } from "react-bootstrap";
import CadForn from "./Formularios/CadForn";
import Pagina from '../Layouts/Pagina'
import { useState } from "react";
import TabFornecedor from "./Tabelas/TabFornecedores";
import { fornecedores } from "../../Dados/mockFornecedores"

export default function TelaCadForn(props) {
    const [exibirTabela, setExibirTabela] = useState(true);
    const [listaForn, setListaForn] = useState([...fornecedores]);
    const [modoCadastro, setModoCadastro] = useState(true);
    const [fornAlter, setFornAlter] = useState(null);
    return (
        <>
            <Pagina>
                <Alert className="mt-02 mb-02 success text-center" variant="success">
                    <h2>
                        Cadastro de fornecedores
                    </h2>
                </Alert>
                {exibirTabela ? <TabFornecedor listaForn={listaForn}
                                               setListaForn={setListaForn}
                                               modoCadastro={modoCadastro}
                                               setModoCadastro={setModoCadastro}
                                               fornAlter={fornAlter}
                                               setFornAlter={setFornAlter}
                                               setExibirTabela={setExibirTabela} /> 
                                : 
                                <CadForn listaForn={listaForn}
                                         setListaForn={setListaForn}
                                         modoCadastro={modoCadastro}
                                         setModoCadastro={setModoCadastro}
                                         fornAlter={fornAlter}
                                         setFornAlter={setFornAlter}
                                         setExibirTabela={setExibirTabela}/>}
            </Pagina>
        </>
    );

}