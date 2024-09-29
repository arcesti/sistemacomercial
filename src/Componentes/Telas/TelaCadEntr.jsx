import { Alert } from "react-bootstrap";
import TabEntregador from "./Tabelas/TabEntregador.jsx";
import CadEnt from "./Formularios/CadEntregador.jsx";
import Pagina from '../Layouts/Pagina'
import { entregadores } from '../../Dados/mockEntregadores.js'
import { useState } from "react";

export default function TelaCadEnt(props) {
    const [listaEntregadores, setListaEntregadores] = useState([...entregadores]);
    const [exibirTabela, setExibirTabela] = useState(true);
    const [modoCadastro, setModoCadastro] = useState(true);
    const [entAlter, setEntAlter] = useState(null);
    return (
        <>
            <Pagina>
                <Alert className="mt-02 mb-02 success text-center" variant="success">
                <h2>
                        {exibirTabela ? 'Tabela de Entregadores':'Cadastro de Entregadores'}
                    </h2>
                </Alert>
                {exibirTabela ? <TabEntregador listaEntregadores={listaEntregadores}
                                             setListaEntregadores={setListaEntregadores}
                                             modoCadastro={modoCadastro}
                                             setModoCadastro={setModoCadastro}
                                             entAlter={entAlter}
                                             setEntAlter={setEntAlter}
                                             setExibirTabela={setExibirTabela} /> 
                                : 
                                <CadEnt listaEntregadores={listaEntregadores}
                                         setListaEntregadores={setListaEntregadores}
                                         modoCadastro={modoCadastro}
                                         setModoCadastro={setModoCadastro}
                                         entAlter={entAlter}
                                         setEntAlter={setEntAlter}
                                         setExibirTabela={setExibirTabela}/>}
            </Pagina>
        </>
    );
}