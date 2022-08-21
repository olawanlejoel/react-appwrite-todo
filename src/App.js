import { Route, Routes } from 'react-router-dom';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Profile from './components/Profile';

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Signin />} />
			<Route path="/signup" element={<Signup />} />
			<Route path="/profile" element={<Profile />} />
		</Routes>
	);
};

export default App;
