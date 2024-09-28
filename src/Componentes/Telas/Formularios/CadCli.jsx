import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';
import { isDisabled } from '@testing-library/user-event/dist/utils';

export default function CadCli(props) {
    const [cliente, setCliente] = useState({
        cpf: "",
        nome: "",
        bairro: "",
        rua: "",
        numEnd: "",
        cidade: "",
        cep: "",
        email: "",
        tel: ""
    });

    function alterar(ev) {
        const form = ev.currentTarget;
        if (form.checkValidity()) {
            props.setListaDeClientes(props.listaDeClientes.map((item) => {
                if (item.cpf === props.clienteAlter.cpf) {
                    return props.clienteAlter;
                }
                return item;
            }));
            props.setExibirTabela(true);
        }
        else {
            setFormValidado(true);
        }
        ev.preventDefault();
        ev.stopPropagation();
    }

    const [formValidado, setFormValidado] = useState(false);

    function manipularSubmissao(ev) {
        const form = ev.currentTarget;
        if (form.checkValidity()) {
            //cadastrar o produto
            props.setListaDeClientes([...props.listaDeClientes, cliente]);
            //exibir tabela
            props.setExibirTabela(true);
        }
        else {
            setFormValidado(true);
        }
        ev.preventDefault();
        ev.stopPropagation();
    }

    function manipularMudancaCli(ev) {
        const elemento = ev.target.name;
        const valor = ev.target.value;
        setCliente({ ...cliente, [elemento]: valor });
    }

    function manipularAlterCli(ev) {
        const elemento = ev.target.name;
        const valor = ev.target.value;
        props.setClienteAlter({ ...props.clienteAlter, [elemento]: valor });
        console.log(`componente ${elemento}: ${valor}`)
    }

    return (
        <>

            <Form noValidate validated={formValidado} onSubmit={props.modoDeCadastro ? manipularSubmissao : alterar} >
                <Row className="mb-4">
                    <Form.Group as={Col} md="12" >
                        <Form.Label>Nome:</Form.Label>
                        <Form.Control
                            id="nome"
                            type="text"
                            name="nome"
                            value={props.modoDeCadastro ? cliente.nome : props.clienteAlter.nome}
                            onChange={props.modoDeCadastro ? manipularMudancaCli : manipularAlterCli}
                            required
                        />
                        <Form.Control.Feedback type='invalid'>Insira um nome</Form.Control.Feedback>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Row className="mb-4">
                    <Form.Group as={Col} md="3" >
                        <Form.Label>Cpf:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="CPF"
                            name="cpf"
                            id="cpf"
                            disabled={!props.modoDeCadastro}
                            value={props.modoDeCadastro ? cliente.cpf : props.clienteAlter.cpf}
                            onChange={props.modoDeCadastro ? manipularMudancaCli : isDisabled}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Insira um CPF
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="3" >
                        <Form.Label>Bairro:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Bairro"
                            name="bairro"
                            id="bairro"
                            value={props.modoDeCadastro ? cliente.bairro : props.clienteAlter.bairro}
                            onChange={props.modoDeCadastro ? manipularMudancaCli : manipularAlterCli}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="3" >
                        <Form.Label>Cidade:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Cidade"
                            name="cidade"
                            id="cidade"
                            value={props.modoDeCadastro ? cliente.cidade : props.clienteAlter.cidade}
                            onChange={props.modoDeCadastro ? manipularMudancaCli : manipularAlterCli}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Row className="mb-4">
                    <Form.Group as={Col} md="6" >
                        <Form.Label>Rua:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Rua"
                            name="rua"
                            id="rua"
                            value={props.modoDeCadastro ? cliente.rua : props.clienteAlter.rua}
                            onChange={props.modoDeCadastro ? manipularMudancaCli : manipularAlterCli}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="3" >
                        <Form.Label>Número Endereço:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Número"
                            name="numEnd"
                            id="numEnd"
                            value={props.modoDeCadastro ? cliente.numEnd : props.clienteAlter.numEnd}
                            onChange={props.modoDeCadastro ? manipularMudancaCli : manipularAlterCli}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="3" >
                        <Form.Label>Cep:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Cep"
                            name="cep"
                            id="cep"
                            value={props.modoDeCadastro ? cliente.cep : props.clienteAlter.cep}
                            onChange={props.modoDeCadastro ? manipularMudancaCli : manipularAlterCli}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Row className="mb-4" >
                    <Form.Group as={Col} md="6" >
                        <Form.Label>E-mail</Form.Label>
                        <InputGroup hasValidation>
                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                            <Form.Control
                                type="text"
                                placeholder="E-mail"
                                aria-describedby="inputGroupPrepend"
                                name="email"
                                id="email"
                                value={props.modoDeCadastro ? cliente.email : props.clienteAlter.email}
                                onChange={props.modoDeCadastro ? manipularMudancaCli : manipularAlterCli}
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} md="6" >
                        <Form.Label>Telefone:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Telefone"
                            name="tel"
                            id="tel"
                            value={props.modoDeCadastro ? cliente.tel : props.clienteAlter.tel}
                            onChange={props.modoDeCadastro ? manipularMudancaCli : manipularAlterCli}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                        </Form.Control.Feedback>
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
            </Form>
        </>
    )
}