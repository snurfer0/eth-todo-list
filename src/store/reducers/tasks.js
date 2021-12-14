import { CREATE_TASK, DELETE_TASK, FETCH_TASKS, TOGGLE_COMPLETED } from "../../utils/constants";


const tasksReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_TASKS:
            return {
                ...state,
                tasks: action.payload
            }
        case CREATE_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        case TOGGLE_COMPLETED:
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    return (task.id === action.payload) ? { ...task, completed: !task.completed } : task
                })
            }
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            }
        default:
            return state
    }
}

export default tasksReducer