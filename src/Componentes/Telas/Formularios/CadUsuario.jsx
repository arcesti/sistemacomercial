import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function CadUsu(props) {
    const [usuario, setUsuario] = useState({
        cpf: "",
        nome: "",
        email:"",
        senha:""
    })

    function manipulaMudancaUsu(ev) {
        const elemento = ev.target.name;
        const valor = ev.target.value;
        setUsuario({ ...usuario, [elemento]: valor });
    }

    function manipulaAlterUsu(ev) {
        const elemento = ev.target.name;
        const valor = ev.target.value;
        props.setUsuAlter({ ...props.usuAlter, [elemento]: valor });
    }

    const [validated, setValidated] = useState(false);
    function submissao(ev) {
        const form = ev.currentTarget;
        if (form.checkValidity()) {
            if (props.modoCadastro) {
                props.setListausuarios([...props.listaUsuarios, usuario]);
                props.setExibirTabela(true);
            }
            else {
                props.setListaUsuarios(props.listaUsuarios.map((usu) => {
                    if(usu.cpf === props.usuAlter.cpf) {
                        return props.usuAlter;
                    }
                    return usu;
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
                <Form.Group as={Col} md="3">
                    <Form.Label>Cpf:</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        id="cpf"
                        name="cpf"
                        placeholder="Cpf"
                        disabled={!props.modoCadastro}
                        value={props.modoCadastro ? usuario.cpf : props.usuAlter.cpf}
                        onChange={props.modoCadastro ? manipulaMudancaUsu : manipulaAlterUsu}
                    />
                    <Form.Control.Feedback>Muito bem!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="9">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        id="nome"
                        name="nome"
                        placeholder="Nome"
                        value={props.modoCadastro ? usuario.nome : props.usuAlter.nome}
                        onChange={props.modoCadastro ? manipulaMudancaUsu : manipulaAlterUsu}
                    />
                    <Form.Control.Feedback>Muito bem!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row>
            <Form.Group as={Col} md="6">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        id="email"
                        name="email"
                        placeholder="E-mail"
                        value={props.modoCadastro ? usuario.email : props.usuAlter.email}
                        onChange={props.modoCadastro ? manipulaMudancaUsu : manipulaAlterUsu}
                    />
                    <Form.Control.Feedback>Muito bem!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control
                        required
                        type="password"
                        id="senha"
                        name="senha"
                        placeholder="Senha"
                        disabled={!props.modoCadastro}
                        value={props.modoCadastro ? usuario.senha : props.usuAlter.senha}
                        onChange={props.modoCadastro ? manipulaMudancaUsu : manipulaAlterUsu}
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