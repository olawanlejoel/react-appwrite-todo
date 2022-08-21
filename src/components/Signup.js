import { useState } from 'react';
import { account } from '../appwrite/config';
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const Signup = () => {
	const [user, setUser] = useState({
		name: '',
		email: '',
		password: '',
	});
	const navigate = useNavigate();

	//Signup
	const signupUser = async (e) => {
		e.preventDefault();

		const promise = account.create(
			uuidv4(),
			user.email,
			user.password,
			user.name
		);

		promise.then(
			function (response) {
				console.log(response);
				navigate('/profile'); //success
				user.name = '';
				user.email = '';
				user.password = '';
			},
			function (error) {
				console.log(error); // Failure
			}
		);
	};
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-6 offset-md-3">
					<h1 className="text-center">Sign Up</h1>
					<form method="POST" onSubmit={signupUser}>
						<div className="form-group">
							<label htmlFor="email">Username</label>
							<input
								type="text"
								className="form-control"
								id="name"
								placeholder="Enter name"
								value={user.name}
								onChange={(e) => setUser({ ...user, name: e.target.value })}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="email">Email address</label>
							<input
								type="email"
								className="form-control"
								id="email"
								aria-describedby="emailHelp"
								placeholder="Enter email"
								value={user.email}
								onChange={(e) => setUser({ ...user, email: e.target.value })}
							/>
							<small id="emailHelp" className="form-text text-muted">
								We'll never share your email with anyone else.
							</small>
						</div>
						<div className="form-group">
							<label htmlFor="password">Password</label>
							<input
								type="password"
								className="form-control"
								id="password"
								placeholder="Enter Password"
								value={user.password}
								onChange={(e) => setUser({ ...user, password: e.target.value })}
							/>
						</div>
						<button type="submit" className="btn btn-primary btn-block">
							Submit
						</button>
					</form>
					<p className="">
						or <Link to="/">sign in</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Signup;
