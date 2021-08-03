import { configureStore } from '@reduxjs/toolkit';
import observeStore from '../helpers/observeStore';
import formReducer from '../reducers/formSlice';
import taskReducer from '../reducers/tasksSlice';

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    form: formReducer,
  },
  preloadedState: {
    tasks: JSON.parse(localStorage.getItem('tasks')) || undefined,
  },
});

observeStore(
  store,
  (state) => state.tasks,
  (state) => localStorage.setItem('tasks', JSON.stringify(state))
);

export default store;
