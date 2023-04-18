import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Favorites from './components/Favorites';
import Description from './components/Description';
import Cart from './components/Cart';
import Feedback from './components/Feedback';

function App() {
	return (
		<div>
			<Router>
				<Header />
				<Routes>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="/favorites"
						element={<Favorites />}
					/>

					<Route
						path="/description"
						element={<Description />}
					/>
					<Route
						path="/cart"
						element={<Cart />}
					/>
					<Route
						path="/feedback"
						element={<Feedback />}
					/>
				</Routes>
			</Router>
			<Footer />
		</div>
	);
}

export default App;
