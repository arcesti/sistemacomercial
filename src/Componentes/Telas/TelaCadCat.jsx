import { Alert } from "react-bootstrap";
import TabCategoria from "./Tabelas/TabCategoria.jsx";
import CadCat from "./Formularios/CadCategoria.jsx";
import Pagina from '../Layouts/Pagina'
import { categorias } from '../../Dados/mockCategorias.js'
import { useState } from "react";

export default function TelaCadCat(props) {
    const [listaCategorias, setListaCategorias] = useState([...categorias]);
    const [exibirTabela, setExibirTabela] = useState(true);
    const [modoCadastro, setModoCadastro] = useState(true);
    const [catAlter, setCatAlter] = useState(null);
    return (
        <>
            <Pagina>
                <Alert className="mt-02 mb-02 success text-center" variant="success">
                <h2>
                        {exibirTabela ? 'Tabela de categorias':'Cadastro de categorias'}
                    </h2>
                </Alert>
                {exibirTabela ? <TabCategoria listaCategorias={listaCategorias}
                                             setListaCategorias={setListaCategorias}
                                             modoCadastro={modoCadastro}
                                             setModoCadastro={setModoCadastro}
                                             catAlter={catAlter}
                                             setCatAlter={setCatAlter}
                                             setExibirTabela={setExibirTabela} /> 
                                : 
                                <CadCat listaCategorias={listaCategorias}
                                         setListaCategorias={setListaCategorias}
                                         modoCadastro={modoCadastro}
                                         setModoCadastro={setModoCadastro}
                                         catAlter={catAlter}
                                         setCatAlter={setCatAlter}
                                         setExibirTabela={setExibirTabela}/>}
            </Pagina>
        </>
    );
}