import { Button, Container, Table } from "react-bootstrap";
export default function TabProduto(props) {
    
    function excluirProduto(produto) {
        if(window.confirm(`Deseja excluir o produto de código: ${produto.cod}`)) {
            props.setListaProdutos(props.listaProdutos.filter((prod) => {
                return prod.cod !== produto.cod;
            }))
        }
    }

    function alterarProduto(produto) {
        props.setExibirTabela(false);
        props.setProdAlter(produto);
    }

    return (
        <>
            <Container>
                <Button className="mb-3" variant="primary" onClick={() => {
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
                        <th>Ações</th>
                    </thead>
                    <tbody>
                        {
                            props.listaProdutos?.map((produto) => {
                                return (
                                    <tr>
                                        <td>{produto.cod}</td>
                                        <td>{produto.descr}</td>
                                        <td>{produto.preCusto}</td>
                                        <td>{produto.preVenda}</td>
                                        <td>{produto.estq}</td>
                                        <td><img style={{ width: '2rem', height: '2rem' }} src={produto.urlImg} alt="Camiseta" /></td>
                                        <td>{produto.dtValidade}</td>
                                        <td>
                                            <Button onClick={() => {
                                                props.setModoCadastro(false);
                                                alterarProduto(produto);
                                            }} variant="warning">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                                                </svg>
                                            </Button> <Button onClick={() => {
                                                excluirProduto(produto);
                                            }} variant="danger">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                                </svg>
                                            </Button>
                                        </td>
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