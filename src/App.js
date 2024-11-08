import TelaCadCli from "./Componentes/Telas/TelaCadCli";
import TelaCadCat from "./Componentes/Telas/TelaCadCat";
import TelaCadProd from "./Componentes/Telas/TelaCadProd";
import TelaCadForn from "./Componentes/Telas/TelaCadForn";
import TelaCadUsu from "./Componentes/Telas/TelaCadUsu";
import TelaCadEntr from "./Componentes/Telas/TelaCadEntr";
import TelaMenu from "./Componentes/Telas/TelaMenu";
import Tela404 from './Componentes/Telas/Tela404';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TelaLogin from "./Componentes/Telas/TelaLogin";
import { useState, createContext } from "react";

export const ContextoUsuario = createContext();

function App() {
	const [usuario, setUsuario] = useState({
		"usuario": "",
		"logado": false
	});

	if (!usuario.logado) {
		return (
			<ContextoUsuario.Provider value={{ usuario, setUsuario }}>
				<TelaLogin />
			</ContextoUsuario.Provider>
		);
	} else {
		return (
			<div>
				<ContextoUsuario.Provider value={{ usuario, setUsuario }}>
					<BrowserRouter>
						{
							//A ordem das rotas é importante
						}
						<Routes>
							<Route path="/" element={<TelaMenu />} />
							<Route path="/cliente" element={<TelaCadCli />} />
							<Route path="/fornecedor" element={<TelaCadForn />} />
							<Route path="/produto" element={<TelaCadProd />} />
							<Route path="/usuario" element={<TelaCadUsu />} />
							<Route path="/categoria" element={<TelaCadCat />} />
							<Route path="/entregador" element={<TelaCadEntr />} />
							<Route path="/login" element={<TelaLogin />} />
							<Route path="*" element={<Tela404 />} />
						</Routes>
					</BrowserRouter>
				</ContextoUsuario.Provider>
			</div>
		);
	}
}

export default App;
