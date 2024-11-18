import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Spinner } from 'react-bootstrap';
import { consultarCat } from '../../../Services/catService.js';
import toast, { Toaster } from 'react-hot-toast'
import { gravarProd, alterarProd } from '../../../Services/prodService.js';

export default function CadProd(props) {
    const [produto, setProduto] = useState({
        codigo: "",
        descricao: "",
        preCusto: "",
        preVenda: "",
        estq: "",
        urlImg: "",
        dtValidade: "",
        categoria: {}
    });
    const [categorias, setCategorias] = useState([]);
    const [validated, setValidated] = useState(false);
    const [temCategoria, setTemCategoria] = useState(false);

    useEffect(() => {
        consultarCat()
            .then((res) => {
                if (Array.isArray(res)) {
                    setCategorias(res);
                    setTemCategoria(true);
                }
            })
            .catch((error) => {
                setTemCategoria(false)
                toast.error("Não foi possivel carregar as categorrias")
            })
    }, []);


    function selecionarCat(ev) {
        if(props.modoCadastro)
            setProduto({ ...produto, categoria: { codigo: ev.currentTarget.value } })
        else
            props.setProdAlter({...props.prodAlter, categoria: { codigo: ev.currentTarget.value } })
    }

    function manipularMudancaProd(ev) {
        const elemento = ev.target.name;
        const valor = ev.target.value;
        setProduto({ ...produto, [elemento]: valor });
    }
    function manipularProdAlter(ev) {
        const elemento = ev.target.name;
        const valor = ev.target.value;
        props.setProdAlter({ ...props.prodAlter, [elemento]: valor });
    }

    function manipularSubmissao(ev) {
        const form = ev.currentTarget;
        if (form.checkValidity()) {
            if (props.modoCadastro) {
                gravarProd(produto)
                    .then((res) => {
                        if (res.status) {
                            props.setExibirTabela(true)
                        }
                        else {
                            toast.error(res.message)
                        }
                    })
            }
            else {
                alterarProd(props.prodAlter)
                .then((res) => {
                    if (res.status) {
                        props.setExibirTabela(true);
                    }
                    else {
                        alert(`Nãio foi possível alterar seu produto: ${res.mensagem}`)
                    }
                })
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
                            name="codigo"
                            value={props.modoCadastro ? produto.codigo : props.prodAlter.codigo}
                            disabled={!props.modoCadastro}
                            onChange={props.modoCadastro ? manipularMudancaProd : manipularProdAlter}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="9" >
                        <Form.Label>descricao</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="descricao:"
                            name="descricao"
                            value={props.modoCadastro ? produto.descricao : props.prodAlter.descricao}
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
                    <Form.Group as={Col} md="4" >
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

                    <Form.Group as={Col} md="3" >
                        <Form.Label>Data validade:</Form.Label>
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
                    <Form.Group as={Col} md="4" >
                        <Form.Label>Categoria:</Form.Label>
                        <Form.Select id='categoria' name='categoria' onChange={selecionarCat} required>
                            {
                                categorias.map((cat) => {
                                    return <option value={cat.codigo}>
                                        {cat.descricao}
                                    </option>
                                })
                            }
                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} md={1}>
                        {
                            !temCategoria ? <Spinner className='mt-4' animation="border" variant="success"></Spinner> : ""
                        }
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
            {
                !temCategoria ? <Toaster position="top-right"></Toaster> : ""
            }
        </>
    )
}