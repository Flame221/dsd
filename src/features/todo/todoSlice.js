import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todos: []
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    add: (state, action) => {
      state.todos.push(action.payload);
    },
    remove: (state, action) => {
      state.todos.splice(action.payload, 1)
    },
  }
});

export const { add, remove } = todoSlice.actions

export default todoSlice.reducer