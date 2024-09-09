import { Button, Container, Table } from "react-bootstrap";
export default function TabCliente(props) {
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
                        <th>CPF</th>
                        <th>Nome</th>
                        <th>Bairro</th>
                        <th>Cidade</th>
                        <th>Cep</th>
                        <th>Email</th>
                        <th>Telefone</th>
                    </thead>
                    <tbody>
                        {
                            props.listaDeClientes?.map((cliente) => {
                                return (
                                    <tr>
                                        <td>{cliente.cpf}</td>
                                        <td>{cliente.nome}</td>
                                        <td>{cliente.bairro}</td>
                                        <td>{cliente.cidade}</td>
                                        <td>{cliente.cep}</td>
                                        <td>{cliente.email}</td>
                                        <td>{cliente.tel}</td>
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