import PropTypes from "prop-types";
import { useContext } from "react";

import { TaskContext } from "../context/TaskContext";

const TaskCard = ({ task }) => {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <span className="font-bold text-xl"> {task.title} </span>
      <br />
      <span className="text-gray-500 text-sm"> {task.text} </span>
      <hr />
      <button
        className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400"
        onClick={() => deleteTask(task.id)}
      >
        Delete
      </button>
    </div>
  );
};

TaskCard.propTypes = {
  task: PropTypes.object.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default TaskCard;
