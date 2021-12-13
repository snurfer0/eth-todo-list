import * as constants from "../../utils/constants";

const init_data = [
    {
        "id": 1,
        "content": "task1",
        "completed": false
    },
    {
        "id": 2,
        "content": "task2",
        "completed": true
    }
]

export const fetchTasks = () => dispatch => {
    dispatch({ type: constants.FETCH_TASKS, payload: init_data });
};
