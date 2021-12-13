import { CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react'
import React from 'react'
import { useWeb3React } from '@web3-react/core'
import Web3 from 'web3'

const Task = ({ id, content, completed }) => {
    return (
        <CTableRow>
            <CTableDataCell>{id}</CTableDataCell>
            <CTableDataCell>{content}</CTableDataCell>
            <CTableDataCell>
                {completed
                    ? <>Completed</>
                    : <>Not Completed</>
                }
            </CTableDataCell>
            <CTableDataCell>Not Implemented</CTableDataCell>
        </CTableRow>
    )
}

async function loadBlockchainData({ account }) {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
    const todoList = new web3.eth.Contract(TODO_LIST_ABI, TODO_LIST_ADDRESS)
    this.setState({ todoList })
    const taskCount = await todoList.methods.taskCount().call()
    this.setState({ taskCount })
    for (var i = 1; i <= taskCount; i++) {
        const task = await todoList.methods.tasks(i).call()
        this.setState({
            tasks: [...this.state.tasks, task]
        })
    }
    this.setState({ loading: false })
}


const TaskList = props => {

    const context = useWeb3React()

    React.useEffect(() => {
        loadBlockchainData(context)
    }, [loadBlockchainData])

    return (
        <CTable className='text-center'>
            <CTableHead>
                <CTableRow>
                    <CTableHeaderCell scope="col">ID</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Content</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Completed</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                </CTableRow>
            </CTableHead>
            <CTableBody>
                {tasks && tasks.map(task => {
                    return <Task {...task} key={task.id} />
                })}
            </CTableBody>
        </CTable>
    )
}

export default TaskList
