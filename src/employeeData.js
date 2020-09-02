import React from "react";
import "./css/employeeData.css";
import { AiFillDelete } from "react-icons/ai";

function EmployeeData({ index, Id, name, email, phone, dbId, deleteEmployee }) {
  console.log(dbId);
  return (
    <div>
      <div className="oneEmployeeData">
        <div className="dataText">{index}</div>
        <div className="dataText">{Id}</div>
        <div className="dataText">{name}</div>
        <div className="dataText">{email}</div>
        <div className="dataText">{phone}</div>
        <div className="dataText">
          <AiFillDelete
            style={{ color: "#c9cbcd" }}
            size={25}
            onClick={() => deleteEmployee(dbId)}
          />
        </div>
      </div>
    </div>
  );
}

export default EmployeeData;
