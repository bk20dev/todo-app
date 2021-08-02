import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../reducers/formSlice';
import taskReducer from '../reducers/tasksSlice';

export default configureStore({
  reducer: {
    tasks: taskReducer,
    form: formReducer,
  },
});
