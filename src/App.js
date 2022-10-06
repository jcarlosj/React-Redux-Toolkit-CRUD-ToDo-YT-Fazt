import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';


// * Main Functional Component
function App() {
	return (
		<div className="container">
			<h1 className="title">Todo<small className="title-small">Redux Toolkit</small></h1>
			<TaskForm />
			<TaskList />
		</div>
	);
}

export default App;
