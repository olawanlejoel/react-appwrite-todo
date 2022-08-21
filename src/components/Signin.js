import React, { useState } from 'react';
import { account } from '../appwrite/config';
import { Link, useNavigate } from 'react-router-dom';

const Signin = () => {
	const navigate = useNavigate();
	const [user, setUser] = useState({
		email: '',
		password: '',
	});

	const loginUser = async (e) => {
		e.preventDefault();
		try {
			await account.createEmailSession(user.email, user.password);
			navigate('/profile');
			user.email = '';
			user.password = '';
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="container">
			<div className="row">
				<div className="col-md-6 offset-md-3">
					<h1 className="text-center">Sign In</h1>
					<form method="POST" onSubmit={loginUser}>
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
								placeholder="Password"
								value={user.password}
								onChange={(e) => setUser({ ...user, password: e.target.value })}
							/>
						</div>
						<button type="submit" className="btn btn-primary btn-block">
							Submit
						</button>
					</form>
					<p className="">
						or <Link to="/signup">sign up</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Signin;
