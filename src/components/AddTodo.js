import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { databases } from '../appwrite/config';

const AddTodo = () => {
	const [todo, setTodo] = useState('');

	const checkTodo = (e) => {
		e.preventDefault();
		if (todo === '') {
			alert('Add a todo');
		} else {
			handleSubmit(todo);
			setTodo('');
		}
	};

	const handleSubmit = (todo) => {
		const promise = databases.createDocument(
			process.env.REACT_APP_DOCUMENT_ID,
			uuidv4(),
			{
				todo,
			}
		);
		console.log(promise);
		promise.then(
			function (response) {
				console.log(response);
				window.location.reload();
			},
			function (error) {
				console.log(error);
			}
		);
	};
	return (
		<>
			<div className="row">
				<div className="col-md-6 offset-md-3">
					<h1 className="text-center">Add Todo</h1>
					<form method="POST" onSubmit={checkTodo}>
						<div className="form-group">
							<label htmlFor="todo">Todo</label>
							<input
								type="text"
								className="form-control"
								id="todo"
								placeholder="Enter todo"
								value={todo}
								onChange={(e) => setTodo(e.target.value)}
							/>
						</div>
						<button type="submit" className="btn">
							Submit
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default AddTodo;
