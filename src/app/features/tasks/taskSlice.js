import { createSlice } from '@reduxjs/toolkit';


const initialState = [];

// * Create Slice Reducers
const TaskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {}
});


export { TaskSlice };
export default TaskSlice.reducer;
