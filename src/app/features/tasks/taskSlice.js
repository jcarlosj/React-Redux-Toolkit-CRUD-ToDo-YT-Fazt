import { createSlice } from '@reduxjs/toolkit';


const initialState = [
    { id: 1, name: 'Task 1', description: 'Task 1 description' },
    { id: 2, name: 'Task 2', description: 'Task 2 description' }
];

// * Create Slice Reducers
const TaskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {}
});


export { TaskSlice };
export default TaskSlice.reducer;
