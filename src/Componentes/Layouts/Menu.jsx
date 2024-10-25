import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

export default function Menu(props) {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" >
            <Container>
                <Navbar.Brand as={Link} to="/">Menu</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Cadastros" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/cliente">Clientes</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/fornecedor">Fornecedores
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/produto">Produtos</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/usuario">Usuarios</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/entregador">Entregadores</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/categoria">
                                Categorias
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Relatórios" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Clientes</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Fornecedores
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Produtos</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Compras</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Vendas</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Operações" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Compra</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Venda</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.1">Sobre</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Sair</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}