import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
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
        navigate = useNavigate(),
        params = useParams(),
        tasks = useSelector( state => state.tasks );

    const handleChange = e => {
        // console.log( `${ e.target.name }: ${ e.target.value }` );
        setTask({
            ...task,
            [ e.target.name ]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();

        if( params?.id ) {
            console.log( 'Edita Tarea' );
            
            return;
        }

        // Ejecuta la accion definida en el Reducer
        dispatch( addTask({
            ...task,
            id: uuid()
        }) );

        navigate( '/' );
    }

    useEffect( () => {
        
        if( params?.id ) {                                                  // Verifíca que se halla pasado como parametro el ID de la tarea
            const taskFound = tasks.find( task => task.id === params?.id ); // Busca la tarea con el ID pasado dentro del listado de tareas en el State Redux Store

            if( taskFound )                                                 // Verifíca que se halla encontrado una tarea
                setTask( tasks.find( task => task.id === params?.id ) );    // Modificamos el estado
        }

    }, [ params, tasks ] );


    return (
        <section className="section section__task-form">
            <h2>{ params?.id ? 'Edit Task' : 'Create Task' }</h2>
            <form onSubmit={ handleSubmit }>
                <div className="form-field">
                    <input
                        type="text"
                        name="title"
                        placeholder="Name task"
                        onChange={ handleChange }
                        value={ task?.title } 
                    />
                </div>
                <div className="form-field">
                    <textarea
                        name="description"
                        placeholder="Description task"
                        onChange={ handleChange }
                        value={ task?.description }
                    ></textarea>
                </div>
                <div className="form-field">
                    <button type="button" onClick={ () => navigate( '/' ) }>Cancel</button>
                    <button type="submit">{ params?.id ? 'Edit' : 'Create' }</button>
                </div>
            </form>
        </section>
    );
};


TaskForm.propTypes = {

};


export default TaskForm;
