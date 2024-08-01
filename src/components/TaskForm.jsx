import PropTypes from "prop-types";
import { useState, useContext } from "react";

import { TaskContext } from "../context/TaskContext";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const HandleChange = (e) => {
    setTitle(e.target.value);
  };

  const HandleText = (e) => {
    setDescription(e.target.value);
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      title: title,
      text: description,
    };

    createTask(newTask);

    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto mb-4 pt-2">
      <form onSubmit={HandleSubmit} className="bg-gray-600  p-4 rounded-md">
        <h1 className="text-white text-xl mb-2">Crea tarea</h1>
        <input
          type="text"
          name="title"
          id="text"
          className="bg-slate-300 p-3 w-full mb-2"
          onChange={HandleChange}
          value={title}
          autoFocus
        />
        <br />
        <br />
        <textarea
          name="description"
          id="description"
          className="bg-slate-300 p-3 w-full mb-2 c-"
          onChange={HandleText}
          value={description}
        ></textarea>
        <br />
        <br />
        <button className="bg-blue-500 px-2 py-1 rounded-md :hover:bg-blue-400 text-white">
          Guardar
        </button>
      </form>
    </div>
  );
};

TaskForm.propTypes = {
  createTask: PropTypes.func.isRequired,
};

export default TaskForm;
