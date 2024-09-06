import { Alert } from "react-bootstrap";
import CadCli from "./Formularios/CadCli";
import Pagina from '../Layouts/Pagina'

export default function TelaCadCli(props) {
    return (
        <>
            <Pagina>
                <Alert className="mt-02 mb-02 success text-center" variant="success">
                    <h2>
                        Cadastro de produtos
                    </h2>
                </Alert>
                <CadCli />
            </Pagina>
        </>
    );
}