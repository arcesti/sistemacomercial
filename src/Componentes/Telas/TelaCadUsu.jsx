import { Alert } from "react-bootstrap";
import TabUsuario from "./Tabelas/TabUsuario.jsx";
import CadUsu from "./Formularios/CadUsuario.jsx";
import Pagina from '../Layouts/Pagina'
import { usuarios } from '../../Dados/mockUsuarios.js'
import { useState } from "react";

export default function TelaCadUsu(props) {
    const [listaUsuarios, setListaUsuarios] = useState([...usuarios]);
    const [exibirTabela, setExibirTabela] = useState(true);
    const [modoCadastro, setModoCadastro] = useState(true);
    const [usuAlter, setUsuAlter] = useState(null);
    return (
        <>
            <Pagina>
                <Alert className="mt-02 mb-02 success text-center" variant="success">
                <h2>
                        {exibirTabela ? 'Tabela de usuarios':'Cadastro de usuarios'}
                    </h2>
                </Alert>
                {exibirTabela ? <TabUsuario listaUsuarios={listaUsuarios}
                                             setListaUsuarios={setListaUsuarios}
                                             modoCadastro={modoCadastro}
                                             setModoCadastro={setModoCadastro}
                                             usuAlter={usuAlter}
                                             setUsuAlter={setUsuAlter}
                                             setExibirTabela={setExibirTabela} /> 
                                : 
                                <CadUsu listaUsuarios={listaUsuarios}
                                         setListaUsuarios={setListaUsuarios}
                                         modoCadastro={modoCadastro}
                                         setModoCadastro={setModoCadastro}
                                         usuAlter={usuAlter}
                                         setUsuAlter={setUsuAlter}
                                         setExibirTabela={setExibirTabela}/>}
            </Pagina>
        </>
    );
}