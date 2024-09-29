import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function CadProd(props) {
    const [produto, setProduto] = useState({
        cod: "",
        descr: "",
        preCusto: "",
        preVenda: "",
        estq: "",
        urlImg: "",
        dtValidade: ""
    })

    function manipularMudancaProd(ev) {
        const elemento = ev.target.name;
        const valor = ev.target.value;
        setProduto({ ...produto, [elemento]: valor });
    }

    function manipularProdAlter(ev) {
        const elemento = ev.target.name;
        const valor = ev.target.value;
        props.setProdAlter({...props.prodAlter, [elemento]: valor});
    }

    const [validated, setValidated] = useState(false);
    function manipularSubmissao(ev) {
        const form = ev.currentTarget;
        if (form.checkValidity()) {
            if (props.modoCadastro) {
                props.setListaProdutos([...props.listaProdutos, produto]);
                props.setExibirTabela(true);
            }
            else {
                props.setListaProdutos(props.listaProdutos.map((prod) => {
                    if(prod.cod === props.prodAlter.cod) {
                        return props.prodAlter;
                    }
                    return prod;
                }))
                props.setExibirTabela(true);
            }
        }
        else {
            setValidated(true);
        }
        ev.preventDefault();
        ev.stopPropagation();
    }

    return (
        <>
            <Form noValidate validated={validated} onSubmit={manipularSubmissao} >
                <Row className="mb-4">
                    <Form.Group as={Col} md="3" >
                        <Form.Label>Código:</Form.Label>
                        <Form.Control
                            type="text"
                            name="cod"
                            value={props.modoCadastro ? produto.cod : props.prodAlter.cod}
                            disabled={!props.modoCadastro}
                            onChange={props.modoCadastro ? manipularMudancaProd : manipularProdAlter}
                            required
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="9" >
                        <Form.Label>Descrição</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Descrição:"
                            name="descr"
                            value={props.modoCadastro ? produto.descr : props.prodAlter.descr}
                            onChange={props.modoCadastro ? manipularMudancaProd : manipularProdAlter}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-4">


                    <Form.Group as={Col} md="3" >
                        <Form.Label>Preço custo:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Preço custo"
                            name="preCusto"
                            value={props.modoCadastro ? produto.preCusto : props.prodAlter.preCusto}
                            onChange={props.modoCadastro ? manipularMudancaProd : manipularProdAlter}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="3" >
                        <Form.Label>Preço venda:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Preço venda"
                            name="preVenda"
                            value={props.modoCadastro ? produto.preVenda : props.prodAlter.preVenda}
                            onChange={props.modoCadastro ? manipularMudancaProd : manipularProdAlter}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" >
                        <Form.Label>Estoque:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Estoque"
                            name="estq"
                            value={props.modoCadastro ? produto.estq : props.prodAlter.estq}
                            onChange={props.modoCadastro ? manipularMudancaProd : manipularProdAlter}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Row className="mb-4">
                    <Form.Group as={Col} md="6" >
                        <Form.Label>URL imagem:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="URL imagem"
                            name="urlImg"
                            value={props.modoCadastro ? produto.urlImg : props.prodAlter.urlImg}
                            onChange={props.modoCadastro ? manipularMudancaProd : manipularProdAlter}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="6" >
                        <Form.Label>Data válidade:</Form.Label>
                        <Form.Control
                            type="date"
                            placeholder="Validade"
                            name="dtValidade"
                            value={props.modoCadastro ? produto.dtValidade : props.prodAlter.dtValidade}
                            onChange={props.modoCadastro ? manipularMudancaProd : manipularProdAlter}
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