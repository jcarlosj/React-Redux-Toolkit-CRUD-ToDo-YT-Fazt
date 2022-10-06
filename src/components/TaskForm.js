const TaskForm = () => {
    return (
        <section className="section section__task-form">
            <h2>Task Form</h2>
            <form>
                <div className="form-field">
                    <input type="text" name="task" placeholder="Name task" />
                </div>
                <div className="form-field">
                    <textarea name="task" placeholder="Description task"></textarea>
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
