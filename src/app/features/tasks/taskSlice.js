import { createSlice } from '@reduxjs/toolkit';


const initialState = [
    { id: '1', title: 'Task 1', description: 'Task 1 description' },
    { id: '2', title: 'Task 2', description: 'Task 2 description' }
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
        },
        edit: ( state, action ) => {
            const
                { id, title, description } = action.payload,
                taskFound = state.find( task => task.id === id );

            if( taskFound ) {
                taskFound.title = title;
                taskFound.description = description;
            }
        }
    }
});


export { TaskSlice };
export default TaskSlice.reducer;
export const { add, remove, edit } = TaskSlice.actions;
