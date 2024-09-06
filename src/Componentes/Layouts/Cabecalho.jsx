import { Alert } from "react-bootstrap";

export default function Cabecalho(props) {
    return(
        <Alert className={"text-center"} variant="dark">
            <h1>
                {props.texto || "Titulo não fornecido"}
            </h1>
        </Alert>
    );
}