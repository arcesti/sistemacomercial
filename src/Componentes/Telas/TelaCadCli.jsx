import { Alert } from "react-bootstrap";
import CadCli from "./Formularios/CadCli";
import Pagina from '../Layouts/Pagina'
import { useState } from "react";
import TabCliente from "./Tabelas/TabClientes";
import { clientes } from "../../Dados/mockClientes"

export default function TelaCadCli(props) {
    const [exibirTabela, setExibirTabela] = useState(true);
    return (
        <>
            <Pagina>
                <Alert className="mt-02 mb-02 success text-center" variant="success">
                    <h2>
                        Cadastro de clientes
                    </h2>
                </Alert>
                {exibirTabela ? <TabCliente listaDeClientes={clientes} setExibirTabela={setExibirTabela} /> : <CadCli listaDeClientes={clientes} setExibirTabela={setExibirTabela}/>}
            </Pagina>
        </>
    );

}