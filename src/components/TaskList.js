import { useDispatch, useSelector } from 'react-redux';

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
            <h2>Task List</h2>
            {   tasks.length > 0 && <ul className="task-list">
                {   tasks.map( task => ( 
                        <li className="task-list-item" key={ task.id }>
                            <h3>{ task.title }</h3>
                            <p>{ task.description }</p>
                            <button type="button" onClick={ () => handleDelete( task.id ) }>Delete</button>
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
