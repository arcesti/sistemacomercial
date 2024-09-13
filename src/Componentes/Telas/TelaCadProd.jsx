import { Alert } from "react-bootstrap";
import CadProd from "./Formularios/CadProd";
import Pagina from '../Layouts/Pagina'
import { useState } from "react";
import TabProdutos from "./Tabelas/TabProdutos";
import { produtos } from "../../Dados/mockProdutos"

export default function TelaCadCli(props) {
    const [exibirTabela, setExibirTabela] = useState(true);
    return (
        <>
            <Pagina>
                <Alert className="mt-02 mb-02 success text-center" variant="success">
                    <h2>
                        Cadastro de produtos
                    </h2>
                </Alert>
                {exibirTabela ? <TabProdutos listaDeProdutos={produtos} setExibirTabela={setExibirTabela} /> : <CadProd setExibirTabela={setExibirTabela}/>}
            </Pagina>
        </>
    );

}