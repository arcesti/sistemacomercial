import Cabecalho from "./Cabecalho";
import Menu from "./Menu";
import Container from 'react-bootstrap/Container';
import CadCli from "../Cadastros/CadCli";

export default function PaginaCli(props) {
    return (
        <>
            <Container>
                <Cabecalho texto="Sistema de controle Gerencial" />
                <Menu />
                {
                    props.children
                }
                <CadCli></CadCli>
            </Container>
        </>
    );
}