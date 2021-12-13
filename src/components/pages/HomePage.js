import React from 'react';
import { connect } from 'react-redux';
import Loading from "../../animations/Loading";
import { fetchTasks } from '../../store/actions';
import TaskList from "../items/TaskList";

const renderTasks = tasks => {
    if (!tasks || tasks.length < 0 || tasks === undefined) {
        console.log("not allowed", tasks)
        return <Loading />
    }
    return <TaskList tasks={tasks} />
}

const HomePage = ({ tasks, fetchTasks }) => {

    React.useEffect(() => {
        fetchTasks()
    }, [fetchTasks])

    return renderTasks(tasks)
}

const mapStateToProps = state => {
    return {
        tasks: state.tasks,
    };
};

export default connect(
    mapStateToProps,
    { fetchTasks }
)(HomePage);

