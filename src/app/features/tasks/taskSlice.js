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
        },
        remove: ( state, action ) => {
            const taskFound = state.find( task => task.id === action.payload );

            if( taskFound )
                state.splice( state.indexOf( taskFound ), 1 );
        }
    }
});


export { TaskSlice };
export default TaskSlice.reducer;
export const { add, remove } = TaskSlice.actions;
