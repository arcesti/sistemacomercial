import { Alert } from "react-bootstrap";

export default function Cabecalho(props) {
    return(
        <Alert className={"text-center"} variant="dark">
            {
                props.texto || "Titulo não fornecido"
            }
        </Alert>
    );
}