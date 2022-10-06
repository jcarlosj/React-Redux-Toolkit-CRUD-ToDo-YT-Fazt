import { configureStore } from '@reduxjs/toolkit';

import taskReducer from './features/tasks/taskSlice';

// * Create a Redux Store
export const store = configureStore({
    reducer: {
        // ! Add Slice Reducers to the Store
        tasks: taskReducer     
    }
});