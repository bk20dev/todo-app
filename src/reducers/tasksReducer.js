import { createSlice } from '@reduxjs/toolkit';

const taskReducer = createSlice({
  name: 'tasks',
  initialState: [
    { id: 1, title: 'Do coding challenges', done: false },
    { id: 2, title: 'Take out the trash', done: true },
    { id: 3, title: 'Do the washing up', done: true },
  ],
  reducers: {
    add(tasks, action) {
      tasks.push(action.payload);
    },
    toggle(tasks, action) {
      const task = tasks.find((task) => task.id === action.payload);
      task.done = !task.done;
    },
  },
});

export const { add, toggle } = taskReducer.actions;
export default taskReducer.reducer;