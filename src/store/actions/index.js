import Web3 from 'web3';
import { TODO_LIST_ABI, TODO_LIST_ADDRESS } from '../../utils/abi_config';
import * as constants from "../../utils/constants";

export const fetchTasks = () => async dispatch => {
    console.log("Fetching tasks..")
    // const context = useWeb3React()
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
    const todoList = new web3.eth.Contract(TODO_LIST_ABI, TODO_LIST_ADDRESS)
    console.log(todoList)
    const taskCount = await todoList.methods.taskCount().call()
    console.log(taskCount)
    var tasks = []
    // for (var i = 1; i <= taskCount; i++) {
    //     const task = await todoList.methods.tasks(i).call()
    //     tasks.push(task)
    // }
    dispatch({ type: constants.FETCH_TASKS, payload: tasks });
};
