import { useState, useEffect } from 'react';
import { databases } from '../appwrite/config';

const Todos = () => {
	const [todos, setTodos] = useState();
	const [loader, setLoader] = useState(false);

	useEffect(() => {
		setLoader(true);
		const getTodos = databases.listDocuments(process.env.REACT_APP_DOCUMENT_ID);

		getTodos.then(
			function (response) {
				setTodos(response.documents);
			},
			function (error) {
				console.log(error);
			}
		);
		setLoader(false);
	}, []);

	const deleteTodo = (id) => {
		const promise = databases.deleteDocument(
			process.env.REACT_APP_DOCUMENT_ID,
			id
		);
		promise.then(
			function (response) {
				console.log(response);
			},
			function (error) {
				console.log(error);
			}
		);
		window.location.reload();
	};

	return (
		<div>
			{loader ? (
				<p>Loading ...</p>
			) : (
				<div className="col-md-6 offset-md-3">
					<h1 className="text-center">Todos</h1>

					<div>
						{todos &&
							todos.map((item) => (
								<div key={item.$id} className="flex-item">
									<div>
										<p>{item.todo}</p>
									</div>
									<div>
										<span
											className="delete-btn"
											onClick={() => {
												deleteTodo(item.$id);
											}}
										>
											Delete
										</span>
									</div>
								</div>
							))}
					</div>
				</div>
			)}
		</div>
	);
};

export default Todos;
