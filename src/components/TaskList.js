import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { remove as deleteTask } from '../app/features/tasks/taskSlice';


// Functional Component
const TaskList = () => {
    const
        tasks = useSelector( state => state.tasks ),  // ! Obtenemos datos del Store
        dispatch = useDispatch();

    const handleDelete = taskId => {
        dispatch( deleteTask( taskId ) );
    }

    return (
        <section className="section section__task-list">
            <h2 className="title__component">Task List <small className="title-small__component">Total: { tasks.length }</small></h2>
            <Link className="btn btn-create" to="/create-task">Create task</Link>

            {   tasks.length > 0 && <ul className="task-list">
                {   tasks.map( task => ( 
                        <li className="task-list-item" key={ task.id }>
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="task-title">{ task.title }</h3>
                                    <p className="task-description">{ task.description }</p>
                                </div>
                                <div className="card-actions">
                                    <button className="btn btn-delete" type="button" onClick={ () => handleDelete( task.id ) }>Delete</button>
                                    <Link to={ `/edit-task/${ task.id }` } className="btn btn-edit">Edit</Link>
                                </div>
                            </div>
                        </li>
                    )) 
                }
                </ul> 
            }
        </section>
    );
};


TaskList.propTypes = {

};


export default TaskList;
