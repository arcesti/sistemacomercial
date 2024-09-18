import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function CadProd(props) {
    return (
        <>
            <Form noValidate>

                <Row className="mb-4">
                    <Form.Group as={Col} md="6" controlId="validationFormik01">
                        <Form.Label>Código:</Form.Label>
                        <Form.Control
                            type="text"
                            name="cod"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationFormik04">
                        <Form.Label>Descrição</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Descrição:"
                            name="descr"
                        />
                        <Form.Control.Feedback type="invalid">
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-4">
                    

                    <Form.Group as={Col} md="3" controlId="validationFormik04">
                        <Form.Label>Preço custo:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Preço custo"
                            name="preCusto"
                        />
                        <Form.Control.Feedback type="invalid">
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="3" controlId="validationFormik04">
                        <Form.Label>Preço venda:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Preço venda"
                            name="preVenda"
                        />
                        <Form.Control.Feedback type="invalid">
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationFormik04">
                        <Form.Label>Estoque:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Estoque"
                            name="estq"
                        />
                        <Form.Control.Feedback type="invalid">
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Row className="mb-4">
                    

                    <Form.Group as={Col} md="6" controlId="validationFormik04">
                        <Form.Label>URL imagem:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="URL imagem"
                            name="urlImg"
                        />
                        <Form.Control.Feedback type="invalid">
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="6" controlId="validationFormik04">
                        <Form.Label>Data válidade:</Form.Label>
                        <Form.Control
                            type="date"
                            placeholder="Validade"
                            name="dtValidade"
                        />
                        <Form.Control.Feedback type="invalid">
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Row className='mt-2 mb-2'>
                    <Col md={1}>
                        <Button type='submit'>Confirmar</Button>
                    </Col>
                    <Col md={{offset:1}}> 
                        <Button onClick={() => {
                            props.setExibirTabela(true)
                        }}>Voltar</Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}