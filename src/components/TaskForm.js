import { useState } from 'react';


// Functional Component
const TaskForm = () => {
    const [ task, setTask ] = useState({
        title: '',
        description: ''
    });

    const handleChange = e => {
        // console.log( `${ e.target.name }: ${ e.target.value }` );
        setTask({
            ...task,
            [ e.target.name ]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log( 'Save:', task );
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
                    <button type="submit">Send</button>
                </div>
            </form>
        </section>
    );
};


TaskForm.propTypes = {

};


export default TaskForm;
