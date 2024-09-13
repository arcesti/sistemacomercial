import { Button, Container, Table } from "react-bootstrap";
export default function TabProduto(props) {
    return(
        <>
            <Container>
                <Button className="mb-3"  variant="primary" onClick={() => {
                    props.setExibirTabela(false)
                }} >
                    Adicionar
                </Button>
                <Table className="text-center" striped bordered hover>
                    <thead>
                        <th>Código</th>
                        <th>Descrição</th>
                        <th>Preço custo</th>
                        <th>Preço venda</th>
                        <th>Estoque</th>
                        <th>Imagem</th>
                        <th>Validade</th>
                    </thead>
                    <tbody>
                        {
                            props.listaDeProdutos?.map((produto) => {
                                return (
                                    <tr>
                                        <td>{produto.cod}</td>
                                        <td>{produto.descr}</td>
                                        <td>{produto.preCusto}</td>
                                        <td>{produto.preVenda}</td>
                                        <td>{produto.estq}</td>
                                        <td><img style={{width:'2rem', height:'2rem'}} src={produto.urlImg} alt="Camiseta" /></td>
                                        <td>{produto.dtValidade}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </Container>
        </>
    )
}