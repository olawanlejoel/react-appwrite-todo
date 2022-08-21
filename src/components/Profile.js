import React, { useState, useEffect } from 'react';
import { account } from '../appwrite/config';
import { useNavigate, Link } from 'react-router-dom';
import AddTodo from './AddTodo';
import Todos from './Todos';

const Profile = () => {
	const navigate = useNavigate();

	const [userDetails, setUserDetails] = useState();

	useEffect(() => {
		const getData = account.get();
		getData.then(
			function (response) {
				setUserDetails(response);
				//console.log(userDetails);
			},
			function (error) {
				console.log(error);
			}
		);
	}, []);

	const handleLogout = async () => {
		try {
			await account.deleteSession('current');
			navigate('/');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="container">
			{userDetails ? (
				<>
					<div className="row">
						<h1>Profile</h1>
					</div>
					<div className="nav">
						<p>Welcome {userDetails.name}</p>
						<button className="btn" onClick={handleLogout}>
							Logout
						</button>
					</div>
					<div className="">
						<AddTodo />
						<Todos />
					</div>
				</>
			) : (
				<>
					<p className="text-center">
						Please Login To see Profile <Link to="/">Login</Link>
					</p>
				</>
			)}
		</div>
	);
};

export default Profile;
