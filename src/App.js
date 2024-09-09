import TelaCadCli from "./Componentes/Telas/TelaCadCli";
import TelaCadCat from "./Componentes/Telas/TelaCadCat";
import TelaMenu from "./Componentes/Telas/TelaMenu";
import Tela404 from './Componentes/Telas/Tela404';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
	return (
		<div>
			<BrowserRouter>
				{
					//A ordem das rotas é importante
				}
				<Routes>
					<Route path="/" element={<TelaMenu />} />
					<Route path="/cliente" element={<TelaCadCli />} />
					{/*<Route path="/fornecedor" element={<TelaFornecedor />} />
					<Route path="/produto" element={<TelaProduto />} />*/
					}
					
					<Route path="/categoria" element={<TelaCadCat />} />
					<Route path="*" element={<Tela404 />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
