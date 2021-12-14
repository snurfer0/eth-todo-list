import { TodoListContract } from "../../contracts";
import * as constants from "../../utils/constants";


export const fetchTasks = () => async dispatch => {
    var tasks = []
    const taskCount = await TodoListContract.methods.taskCount().call()
    for (var i = 1; i <= taskCount; i++) {
        const task = await TodoListContract.methods.tasks(i).call()
        tasks.push(task)
    }
    dispatch({ type: constants.FETCH_TASKS, payload: tasks });
};


export const createTask = (account, _content) => async dispatch => {

    await TodoListContract.methods.createTask(_content)
        .send({ from: account })
        .once('receipt', receipt => {
            if (receipt.status) {
                dispatch({ type: constants.CREATE_TASK, payload: receipt.events.TaskCreated.returnValues });
            } else {
                console.error(receipt)
            }
        })

};

export const toggleCompleted = (account, _taskId) => async dispatch => {

    await TodoListContract.methods.toggleCompleted(_taskId)
        .send({ from: account })
        .once('receipt', receipt => {
            if (receipt.status) {
                dispatch({ type: constants.TOGGLE_COMPLETED, payload: _taskId });
            } else {
                console.error(receipt)
            }
        })

};

export const deleteTask = (account, _taskId) => async dispatch => {

    console.log("Deleting task: ", _taskId, account)

    await TodoListContract.methods.deleteTask(_taskId)
        .send({ from: account })
        .once('receipt', receipt => {
            console.log(receipt)
            if (receipt.status) {
                dispatch({ type: constants.DELETE_TASK, payload: _taskId });
            } else {
                console.error(receipt)
            }
        })
        .catch(err => {
            console.error("error", err)
        })

};
