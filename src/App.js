import TelaCadCli from "./Componentes/Telas/TelaCadCli";
import TelaCadCat from "./Componentes/Telas/TelaCadCat";
import TelaCadProd from "./Componentes/Telas/TelaCadProd";
import TelaCadForn from "./Componentes/Telas/TelaCadForn";
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
					<Route path="/fornecedor" element={<TelaCadForn />} />
					<Route path="/produto" element={<TelaCadProd />} />
					<Route path="/categoria" element={<TelaCadCat />} />
					<Route path="*" element={<Tela404 />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
