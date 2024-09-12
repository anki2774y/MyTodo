import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    todos: [],
    count: 0,
    filteredTodos: [],
    labels: []
}



const todoSlice = createSlice({
    name: 'todos',
    initialState: initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({
                id: state.count,
                name: action.payload.name,
                label: action.payload.label
            });
            if(!state.labels.includes(action.payload.label)){
                state.labels.push(action.payload.label);
            };
            state.count++;            
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload);
            state.count--;
        },
        searchTodo: (state, action) => {
            if(action.payload) {
                state.filteredTodos = state.todos.filter((todo) => {
                    return todo.name.includes(action.payload) && todo.label.includes(action.payload)
                })
            } else {
                state.filteredTodos = [];
            }
        }
    }
});

export const todoReducer = todoSlice.reducer;
export const todoActions = todoSlice.actions;

export const todoSelector = (state) => state.todoReducer.todos;
export const filteredTodoSelector = (state) => state.todoReducer.filteredTodos;
export const labelsSelector = (state) => state.todoReducer.labels;