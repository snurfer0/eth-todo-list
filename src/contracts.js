import Web3 from 'web3';
import { TODO_LIST_ABI, TODO_LIST_ADDRESS } from './utils/abi_config';

const web3 = new Web3(Web3.givenProvider || "http://localhost:7545")

export const TodoListContract = new web3.eth.Contract(TODO_LIST_ABI, TODO_LIST_ADDRESS)