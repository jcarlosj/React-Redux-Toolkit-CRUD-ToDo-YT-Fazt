import { useSelector } from 'react-redux';


// Functional Component
const TaskList = () => {
    const tasks = useSelector( state => state.tasks );  // ! Obtenemos datos del Store

    return (
        <section className="section section__task-list">
            <h2>Task List</h2>
            {   tasks.length > 0 && <ul className="task-list">
                {   tasks.map( task => ( 
                        <li className="task-list-item" key={ task.id }>
                            <h3>{ task.title }</h3>
                            <p>{ task.description }</p>
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
