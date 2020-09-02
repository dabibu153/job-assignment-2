import React from "react";
import "./css/employeeList.css";
import EmployeeData from "./employeeData";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function EmployeeList() {
  const [employeess, setemployeess] = useState([]);
  useEffect(() => {
    refreshData();
  }, []);

  const refreshData = () => {
    axios.get("http://localhost:5000/api/employeeList").then((res) => {
      console.log(res.data);
      setemployeess([...res.data]);
    });
  };

  const deleteEmployee = (id1) => {
    console.log(id1);

    axios
      .post("http://localhost:5000/api/deleteEmployee", { id: id1 })
      .then((res) => {
        refreshData();
      });
  };
  return (
    <div className="block">
      <div className="head">
        <div className="headerText">#</div>
        <div className="headerText">Id</div>
        <div className="headerText">Name</div>
        <div className="headerText">Email</div>
        <div className="headerText">Phone</div>
        <div className="headerText">del.</div>
      </div>
      <hr />
      <div className="employees">
        {employeess?.map((oneEmployee, index) => (
          <EmployeeData
            key={oneEmployee._id}
            index={index + 1}
            dbId={oneEmployee._id}
            Id={oneEmployee.empId}
            name={oneEmployee.empName}
            email={oneEmployee.empEmail}
            phone={oneEmployee.empMobile}
            deleteEmployee={deleteEmployee}
          />
        ))}
      </div>
    </div>
  );
}

export default EmployeeList;
