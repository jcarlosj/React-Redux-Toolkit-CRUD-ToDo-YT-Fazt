import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import { add as addTask } from '../app/features/tasks/taskSlice';


// Functional Component
const TaskForm = () => {
    const initialState = {
        title: '',
        description: ''
    };

    const [ task, setTask ] = useState( initialState );

    const
        dispatch = useDispatch(),
        navigate = useNavigate();

    const handleChange = e => {
        // console.log( `${ e.target.name }: ${ e.target.value }` );
        setTask({
            ...task,
            [ e.target.name ]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();

        // Ejecuta la accion definida en el Reducer
        dispatch( addTask({
            ...task,
            id: uuid()
        }) );

        navigate( '/' );
    }

    return (
        <section className="section section__task-form">
            <h2>Task Form</h2>
            <form onSubmit={ handleSubmit }>
                <div className="form-field">
                    <input type="text" name="title" placeholder="Name task" onChange={ handleChange } />
                </div>
                <div className="form-field">
                    <textarea name="description" placeholder="Description task" onChange={ handleChange }></textarea>
                </div>
                <div className="form-field">
                    <button type="button" onClick={ () => navigate( '/' ) }>Cancel</button>
                    <button type="submit">Create task</button>
                </div>
            </form>
        </section>
    );
};


TaskForm.propTypes = {

};


export default TaskForm;
