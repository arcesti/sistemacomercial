import Pagina from '../Layouts/Pagina'
import img from '../../assets/imagens/page404.png'
import { Container } from 'react-bootstrap'
export default function PaginaError(props) {
    return (
        <Pagina>
            <Container className='text-center'>
                <img src={img} alt="Erro"/>
                <h1>
                    O recurso solicitado não existe
                </h1>
            </Container>
        </Pagina>
    );
}