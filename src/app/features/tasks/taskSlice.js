import { createSlice } from '@reduxjs/toolkit';

import { tasks } from '../../../data/static-data';


const initialState = tasks;

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
