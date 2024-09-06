import { Container } from "react-bootstrap";
import Cabecalho from "./Cabecalho.jsx";
import Menu from "./Menu.jsx";

export default function Pagina(props) {
    return(<>
        <Container>
            <Cabecalho texto="Sistema de controle gerencial" />
            <Menu />
            {
                props.children
            }
        </Container>
    </>)
}