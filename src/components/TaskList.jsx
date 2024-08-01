import PropTypes from "prop-types";
import TaskCard from "./TaskCard";
import { useContext } from "react";

import { TaskContext } from "../context/TaskContext";

const TaskList = () => {
  const { tasks } = useContext(TaskContext);
  if (tasks.length === 0) {
    return (
      <h1 className="font-bold text-center text-xl text-white">No Tasks</h1>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-2">
      {tasks.map((task, index) => (
        <TaskCard task={task} key={index} />
      ))}
    </div>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default TaskList;
