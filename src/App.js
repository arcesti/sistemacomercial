import style from "./styles/global.module.css";
import TelaCadCli from "./Componentes/Telas/TelaCadCli";
import TelaMenu from "./Componentes/Telas/TelaMenu";
import Tela404 from './Componentes/Telas/Tela404';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
	return (
		<div className={style.App}>
			<BrowserRouter>
				{
					//A ordem das rotas é importante
				}
				<Routes>
					<Route path="/" element={<TelaMenu />} />
					<Route path="/cliente" element={<TelaCadCli />} />
					{/*<Route path="/fornecedor" element={<TelaFornecedor />} />
					<Route path="/produto" element={<TelaProduto />} />
					<Route path="/categoria" element={<TelaCategoria />} />

					
						//	<Route path="/categoria" element={<TelaCadastroCategoria />} />*/
					}
					<Route path="*" element={<Tela404 />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
