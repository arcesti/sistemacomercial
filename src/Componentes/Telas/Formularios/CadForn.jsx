import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function CadForn(props) {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-4">
                <Form.Group as={Col} md="12">
                    <Form.Label>Nome: </Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Nome"
                        id='nome'
                        name='nome'
                    /*value={forn.nome}
                    onChange={manipularMudancaForn}*/
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
                    /*value={forn.cnpj}
                    onChange={manipularMudancaForn}*/
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
                        /*value={forn.bairro}
                        onChange={manipularMudancaForn}*/
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
                    /*value={forn.cidade}
                    onChange={manipularMudancaForn}*/
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
                        /*value={forn.rua}
                        onChange={manipularMudancaForn}*/
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
                        /*value={forn.numEnd}
                        onChange={manipularMudancaForn}*/
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
                        /*value={forn.cep}
                        onChange={manipularMudancaForn}*/
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
                        /*value={forn.tel}
                        onChange={manipularMudancaForn}*/
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
                        /*value={forn.email}
                        onChange={manipularMudancaForn}*/
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Por favor insira um email
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Button type="submit">Cadastrar</Button>
        </Form>
    );
}
