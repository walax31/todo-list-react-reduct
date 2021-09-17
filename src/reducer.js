const initialState = {
    todos: []
}

const reducer = (state = initialState, action) => {
    console.log("action.type", action.type)
    console.log("state", state)
    switch (action.type) {

        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }
        default:
            console.log("action.type", action.type)
            return state;
    }
}

export default reducer;