pragma solidity >=0.4.22 <0.9.0;

contract TodoList {
    uint taskCount = 0;

    struct Task {
        uint id;
        string content;
        bool completed;
    }

    mapping(uint => Task) public tasks;

    constructor() public {
        createTask("Todo 1");
        createTask("Todo 2");
        createTask("Todo 3");
        createTask("Todo 4");
    }

    function createTask(string memory _content) public {
        taskCount++;
        tasks[taskCount] = Task(taskCount, _content, false);
    }

}