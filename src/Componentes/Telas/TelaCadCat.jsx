import { Alert } from "react-bootstrap";
import CadCateoria from "./Formularios/CadCategoria"
import Pagina from '../Layouts/Pagina'

export default function TelaCadCat(props) {
    return (
        <>
            <Pagina>
                <Alert className="mt-02 mb-02 success text-center" variant="success">
                    <h2>
                        Cadastro de produtos
                    </h2>
                </Alert>
                <CadCateoria />
            </Pagina>
        </>
    );
}