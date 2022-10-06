import { createSlice } from '@reduxjs/toolkit';


const initialState = [
    { id: 1, title: 'Task 1', description: 'Task 1 description' },
    { id: 2, title: 'Task 2', description: 'Task 2 description' }
];

// * Create Slice Reducers
const TaskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        add: ( state, action ) => {
            state.push( action.payload );
        }
    }
});


export { TaskSlice };
export default TaskSlice.reducer;
export const { add } = TaskSlice.actions;
