import { Button, Container, Table } from "react-bootstrap";
export default function TabFornecedor(props) {
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
                        <th>Nome</th>
                        <th>CNPJ</th>
                        <th>Bairro</th>
                        <th>Cidade</th>
                        <th>Rua</th>
                        <th>Numero</th>
                        <th>Cep</th>
                        <th>Telefone</th>
                        <th>Email</th>
                    </thead>
                    <tbody>
                        {
                            props.listaDeFornecedores?.map((fornecedor) => {
                                return (
                                    <tr>
                                        <td>{fornecedor.nome}</td>
                                        <td>{fornecedor.cnpj}</td>
                                        <td>{fornecedor.bairro}</td>
                                        <td>{fornecedor.cidade}</td>
                                        <td>{fornecedor.rua}</td>
                                        <td>{fornecedor.num}</td>
                                        <td>{fornecedor.cep}</td>
                                        <td>{fornecedor.tel}</td>
                                        <td>{fornecedor.email}</td>
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