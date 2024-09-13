import { Alert } from "react-bootstrap";
import CadForn from "./Formularios/CadForn";
import Pagina from '../Layouts/Pagina'
import { useState } from "react";
import TabFornecedor from "./Tabelas/TabFornecedores";
import { fornecedores } from "../../Dados/mockFornecedores"

export default function TelaCadForn(props) {
    const [exibirTabela, setExibirTabela] = useState(true);
    return (
        <>
            <Pagina>
                <Alert className="mt-02 mb-02 success text-center" variant="success">
                    <h2>
                        Cadastro de fornecedores
                    </h2>
                </Alert>
                {exibirTabela ? <TabFornecedor listaDeFornecedores={fornecedores} setExibirTabela={setExibirTabela} /> : <CadForn setExibirTabela={setExibirTabela}/>}
            </Pagina>
        </>
    );

}