import { Container, Form, Button } from "react-bootstrap";
import { useContext, useRef } from "react";
import { ContextoUsuario } from "../../App";

export default function TelaLogin() {
    const nomeUsuario = useRef();
    const senha = useRef();

    function manipularSubmissao(ev) {
        const usuarioDigitado = nomeUsuario.current.value;
        const senhaDigitada = senha.current.value;
        if(usuarioDigitado === 'admin' && senhaDigitada === 'admin') {
            setUsuario({
                "usuario":usuarioDigitado,
                "logado":true
            });
        }
        ev.preventDefault();
        ev.stopPropagation();
    }
    
    const {usuario, setUsuario} = useContext(ContextoUsuario);
    
    return (
        <>
            <Container className="w-25 border p-2 mt-5">
                <Form onSubmit={manipularSubmissao}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Usuario: </Form.Label>
                        <Form.Control type="text"
                            id="usuario"
                            name="usuario"
                            placeholder="Informe o usuario"
                            ref={nomeUsuario} />
                        <Form.Text className="text-muted">
                            Nunca compartilhe suas credencias de acesso
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"
                            id="senha"
                            name="senha"
                            placeholder="Password"
                            ref={senha} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </Container>
        </>
    )
}