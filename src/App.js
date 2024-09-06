import "./styles/global.module.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TelaCadCli from "./Componentes/Telas/TelaCadCli";
import TelaMenu from "./Componentes/Telas/TelaMenu";
import Tela404 from './Componentes/Telas/Tela404';

function App() {
	return (
		<>
			<BrowserRouter>
				{
					//A ordem das rotas é importante
				}
				<Routes>
					<Route path="/" element={<TelaMenu />} />
					<Route path="/cliente" element={<TelaCadCli />} />
					{
						//	<Route path="/categoria" element={<TelaCadastroCategoria />} />
					}
					<Route path="*" element={<Tela404 />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
