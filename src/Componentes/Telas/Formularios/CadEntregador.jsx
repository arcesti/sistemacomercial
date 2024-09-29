import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function CadEnt(props) {
    const [entregador, setEntregador] = useState({
        cpf: "",
        nome: "",
        email:"",
        senha:""
    })

    function manipulaMudancaEnt(ev) {
        const elemento = ev.target.name;
        const valor = ev.target.value;
        setEntregador({ ...entregador, [elemento]: valor });
    }

    function manipulaAlterEnt(ev) {
        const elemento = ev.target.name;
        const valor = ev.target.value;
        props.setEntAlter({ ...props.entAlter, [elemento]: valor });
    }

    const [validated, setValidated] = useState(false);
    function submissao(ev) {
        const form = ev.currentTarget;
        if (form.checkValidity()) {
            if (props.modoCadastro) {
                props.setListaEntregadores([...props.listaentregadores, entregador]);
                props.setExibirTabela(true);
            }
            else {
                props.setListaEntregadores(props.listaEntregadores.map((ent) => {
                    if(ent.cpf === props.entAlter.cpf) {
                        return props.entAlter;
                    }
                    return ent;
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
            <Row className="mb-4">
                <Form.Group as={Col} md="3" controlId="">
                    <Form.Label>Cpf:</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        id="cpf"
                        name="cpf"
                        placeholder="Cpf"
                        disabled={!props.modoCadastro}
                        value={props.modoCadastro ? entregador.cpf : props.entAlter.cpf}
                        onChange={props.modoCadastro ? manipulaMudancaEnt : manipulaAlterEnt}
                    />
                    <Form.Control.Feedback>Muito bem!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="">
                    <Form.Label>Cnh:</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        id="cnh"
                        name="cnh"
                        placeholder="Cnh"
                        disabled={!props.modoCadastro}
                        value={props.modoCadastro ? entregador.cnh : props.entAlter.cnh}
                        onChange={props.modoCadastro ? manipulaMudancaEnt : manipulaAlterEnt}
                    />
                    <Form.Control.Feedback>Muito bem!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        id="nome"
                        name="nome"
                        placeholder="Nome"
                        value={props.modoCadastro ? entregador.nome : props.entAlter.nome}
                        onChange={props.modoCadastro ? manipulaMudancaEnt : manipulaAlterEnt}
                    />
                    <Form.Control.Feedback>Muito bem!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row>
            <Form.Group as={Col} md="12" controlId="">
                    <Form.Label>Telefone</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        id="tel"
                        name="tel"
                        placeholder="Telefone"
                        value={props.modoCadastro ? entregador.tel : props.entAlter.tel}
                        onChange={props.modoCadastro ? manipulaMudancaEnt : manipulaAlterEnt}
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