import { Container } from "react-bootstrap";
import Cabecalho from "./Cabecalho";
import Menu from "./Menu";

export default function Pagina(props) {
    <>
        <Container>
            <Cabecalho texto="Sistema de controle gerencial" />
            <Menu />
            {
                props.children
            }
        </Container>
    </>
}