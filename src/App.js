import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';


// * Main Functional Component
function App() {
	return (
		<div className="container">
			<h1 className="title">Todo<small className="title-small">Redux Toolkit</small></h1>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={ <TaskList />} />
					<Route path="/create-task" element={ <TaskForm /> } />
					<Route path="/edit-task/:id" element={ <TaskForm /> } />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
