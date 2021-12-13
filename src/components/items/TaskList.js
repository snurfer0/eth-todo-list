import { CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react'
import React from 'react'
import { fetchTasks } from '../../store/actions'
import { connect } from 'react-redux'

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

const TaskList = ({ fetchTasks, tasks }) => {

    React.useEffect(() => {
        fetchTasks()
    }, [fetchTasks])

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

const mapStateToProps = state => {
    return {
        tasks: state.tasks
    };
};

export default connect(
    mapStateToProps,
    { fetchTasks }
)(TaskList);