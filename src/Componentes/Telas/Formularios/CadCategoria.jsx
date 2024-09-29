import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function CadCat(props) {
    const [categoria, setCategoria] = useState({
        cod: "",
        descr: ""
    })

    function manipulaMudancaCat(ev) {
        const elemento = ev.target.name;
        const valor = ev.target.value;
        setCategoria({ ...categoria, [elemento]: valor });
    }

    function manipulaAlterCat(ev) {
        const elemento = ev.target.name;
        const valor = ev.target.value;
        props.setCatAlter({ ...props.catAlter, [elemento]: valor });
    }

    const [validated, setValidated] = useState(false);
    function submissao(ev) {
        const form = ev.currentTarget;
        if (form.checkValidity()) {
            if (props.modoCadastro) {
                props.setListaCategorias([...props.listaCategorias, categoria]);
                props.setExibirTabela(true);
            }
            else {
                props.setListaCategorias(props.listaCategorias.map((cat) => {
                    if(cat.cod === props.catAlter.cod) {
                        return props.catAlter;
                    }
                    return cat;
                }))
                props.setExibirTabela(true);
            }
        }
        else {
            setValidated(true);
        }
        ev.stopPropagation();
        ev.preventDefault();
    }
    return (
        <Form validated={validated} onSubmit={submissao}>
            <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="">
                    <Form.Label>Código</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        id="cod"
                        name="cod"
                        placeholder="Código"
                        disabled={!props.modoCadastro}
                        value={props.modoCadastro ? categoria.cod : props.catAlter.cod}
                        onChange={props.modoCadastro ? manipulaMudancaCat : manipulaAlterCat}
                    />
                    <Form.Control.Feedback>Muito bem!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="5" controlId="">
                    <Form.Label>Descrição</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        id="descr"
                        name="descr"
                        placeholder="Descrição"
                        value={props.modoCadastro ? categoria.descr : props.catAlter.descr}
                        onChange={props.modoCadastro ? manipulaMudancaCat : manipulaAlterCat}
                    />
                    <Form.Control.Feedback>Muito bem!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className='mt-2 mb-2'>
                    <Col md={1}>
                        <Button type='submit'>Confirmar</Button>
                    </Col>
                    <Col md={{ offset: 1 }}>
                        <Button onClick={() => {
                            props.setExibirTabela(true)
                        }}>Voltar</Button>
                    </Col>
                </Row>
        </Form >
    );
}