import { CButton, CFormCheck, CFormInput, CInputGroup, CInputGroupText, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react'
import { useWeb3React } from '@web3-react/core'
import React from 'react'
import { connect } from 'react-redux'
import { createTask, fetchTasks, toggleCompleted, deleteTask } from '../../store/actions'

const Task = ({ task: { id, content, completed }, toggleCompleted, deleteTask, account }) => {

    const onFormCheckChange = () => {
        console.log(account)
        toggleCompleted(account, id)
    }

    const onDeleteTask = () => {
        deleteTask(account, id)
    }

    return (
        <CTableRow>
            <CTableDataCell>{id}</CTableDataCell>
            <CTableDataCell>{content}</CTableDataCell>
            <CTableDataCell>
                <CFormCheck id="flexCheckDefault" checked={completed} onChange={onFormCheckChange} />
            </CTableDataCell>
            <CTableDataCell>
                <CButton color="danger" onClick={onDeleteTask}> Delete </CButton>
            </CTableDataCell>
        </CTableRow>
    )
}



const TaskList = ({ fetchTasks, createTask, deleteTask, toggleCompleted, tasks }) => {

    const context = useWeb3React()

    React.useEffect(() => {
        fetchTasks()
    }, [fetchTasks])

    const handleEnterKey = e => {
        if (e.key === 'Enter') createTask(context.account, e.target.value)
    }

    return (
        <>
            <CInputGroup size="sm" className="mb-3 my-3">
                <CInputGroupText id="inputGroup-sizing-sm">Task Content</CInputGroupText>
                <CFormInput onKeyDown={handleEnterKey} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
            </CInputGroup>
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
                        return <Task key={task.id} toggleCompleted={(account, id) => toggleCompleted(account, id)} deleteTask={deleteTask} account={context.account} task={task} />
                    })}
                </CTableBody>
            </CTable>
        </>
    )
}

const mapStateToProps = state => {
    return {
        tasks: state.tasks.tasks
    };
};

export default connect(
    mapStateToProps,
    { fetchTasks, createTask, toggleCompleted, deleteTask }
)(TaskList);