import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import EditTask from "../modals/edittask";

const Card = ({ taskObj, index, deleteTask, updateListArray }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };
  const updateTask = (obj) => {
    updateListArray(obj, index);
  };

  const handleDelete = () => {
    deleteTask(index);
  };

  return (
    <div className="card-wrapper mr-5">
      <div className="card-top"></div>
      <div className="task-holder">
        <span
          className="card-header"
          style={{ "background-Color": "#F2FAF1", "border-radius": "10px" }}
        >
          {taskObj.Name}
        </span>
        <p className="mt-3">{taskObj.Description}</p>

        <div
          className="icons"
          style={{ position: "absolute", right: "20px", bottom: "20px" }}
        >
          <i
            className="far fa-edit mr-3"
            style={{ color: "#5DC252" }}
            onClick={() => setModal(true)}
          ></i>
          <i
            className="fas fa-trash-alt"
            style={{ color: "red" }}
            onClick={handleDelete}
          ></i>
        </div>
      </div>
      <EditTask
        modal={modal}
        toggle={toggle}
        updateTask={updateTask}
        taskObj={taskObj}
      />
    </div>
  );
};
export default Card;
