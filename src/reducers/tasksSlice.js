import { createSlice } from '@reduxjs/toolkit';

const taskReducer = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    add(tasks, action) {
      tasks.push(action.payload);
    },
    toggle(tasks, action) {
      const task = tasks.find((task) => task.id === action.payload);
      task.done = !task.done;
    },
    remove(tasks, action) {
      return tasks.filter((task) => task.id !== action.payload);
    },
    clear(tasks) {
      return tasks.filter((task) => !task.done);
    },
  },
});

export const { add, toggle, remove, clear } = taskReducer.actions;
export default taskReducer.reducer;
