import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function CadForn(props) {
    const [forn, setForn] = useState({
        nome: "",
        cnpj: "",
        bairro: "",
        cidade: "",
        rua: "",
        numEnd: "",
        cep: "",
        tel: "",
        email: ""
    })

    function manipularMudancaForn(ev) {
        const elemento = ev.target.name;
        const valor = ev.target.value;
        setForn({ ...forn, [elemento]: valor });
        console.log(`componente: ${elemento} : ${valor}`);
    }

    function mmanipularFornAlter(ev) {
        const elemento = ev.target.name;
        const valor = ev.target.value;
        props.setFornAlter({ ...props.fornAlter, [elemento]: valor })
    }

    const [validated, setValidated] = useState(false);
    function manipularSubmissao(event) {
        const form = event.currentTarget;
        if (form.checkValidity()) {
            if (props.modoCadastro) {
                //cadastrar fornecedor
                props.setListaForn([...props.listaForn, forn]);
                props.setExibirTabela(true);
            }
            else {
                props.setListaForn(props.listaForn.map((item) => {
                    if (item.cnpj === props.fornAlter.cnpj) {
                        return props.fornAlter;
                    }
                    return item;
                }));
                props.setExibirTabela(true);
            }

        } 
        else {
            setValidated(true);
        }
        event.preventDefault();
        event.stopPropagation();
    };

    return (
        <Form noValidate validated={validated} onSubmit={manipularSubmissao}>
            <Row className="mb-4">
                <Form.Group as={Col} md="12">
                    <Form.Label>Nome: </Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Nome"
                        id='nome'
                        name='nome'
                        value={props.modoCadastro ? forn.nome : props.fornAlter.nome}
                        onChange={props.modoCadastro ? manipularMudancaForn : mmanipularFornAlter}
                    />
                    <Form.Control.Feedback type='invalid'>
                        Por favor insira um Nome
                    </Form.Control.Feedback>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className='mb-4'>
                <Form.Group as={Col} md="3">
                    <Form.Label>Cnpj</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Cnpj"
                        id='cnpj'
                        name='cnpj'
                        value={props.modoCadastro ? forn.cnpj : props.fornAlter.cnpj}
                        onChange={props.modoCadastro ? manipularMudancaForn : mmanipularFornAlter}
                    />
                    <Form.Control.Feedback type='invalid'>
                        Por favor insira um cnpj
                    </Form.Control.Feedback>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3">
                    <Form.Label>Bairro</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Bairro"
                        id='bairro'
                        name='bairro'
                        value={props.modoCadastro ? forn.bairro : props.fornAlter.bairro}
                        onChange={props.modoCadastro ? manipularMudancaForn : mmanipularFornAlter}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Por favor insira um bairro
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3">
                    <Form.Label>Cidade</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Cidade"
                        required
                        id='cidade'
                        name='cidade'
                        value={props.modoCadastro ? forn.cidade : props.fornAlter.cidade}
                        onChange={props.modoCadastro ? manipularMudancaForn : mmanipularFornAlter}
                    />
                    <Form.Control.Feedback type="invalid">
                        Por favor insira uma cidade
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-4">
                <Form.Group as={Col} md="6">
                    <Form.Label>Rua</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Rua"
                        id='rua'
                        name='rua'
                        value={props.modoCadastro ? forn.rua : props.fornAlter.rua}
                        onChange={props.modoCadastro ? manipularMudancaForn : mmanipularFornAlter}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Por favor insira uma rua
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3">
                    <Form.Label>Número endereço</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Número do endereço"
                        id='numEnd'
                        name='numEnd'
                        value={props.modoCadastro ? forn.numEnd : props.fornAlter.numEnd}
                        onChange={props.modoCadastro ? manipularMudancaForn : mmanipularFornAlter}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Por favor insira o numero do endereço
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3">
                    <Form.Label>Cep</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Cep"
                        id='cep'
                        name='cep'
                        value={props.modoCadastro ? forn.cep : props.fornAlter.cep}
                        onChange={props.modoCadastro ? manipularMudancaForn : mmanipularFornAlter}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Por favor insira um cep
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className='mb-4'>
                <Form.Group as={Col} md="6">
                    <Form.Label>Telefone</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Telefone"
                        id='tel'
                        name='tel'
                        value={props.modoCadastro ? forn.tel : props.fornAlter.tel}
                        onChange={props.modoCadastro ? manipularMudancaForn : mmanipularFornAlter}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Por favor insira um telefone
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="E-mail"
                        id='email'
                        name='email'
                        value={props.modoCadastro ? forn.email : props.fornAlter.email}
                        onChange={props.modoCadastro ? manipularMudancaForn : mmanipularFornAlter}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Por favor insira um email
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
    );
}
