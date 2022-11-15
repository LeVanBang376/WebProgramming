
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './components/Home/Home.js'
import Items from './components/Items/Items.js'

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route exact path='/items' element={<Items />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
