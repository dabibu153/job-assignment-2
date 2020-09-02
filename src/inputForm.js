import React from "react";
import "./css/inputForm.css";
import { AiFillPhone, AiOutlineNumber } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { useState } from "react";
import axios from "axios";

function InputForm() {
  const [empId, setempId] = useState(2767676767);
  const [empName, setempName] = useState("aaaaaaa");
  const [empEmail, setempEmail] = useState("sa@gmail.com");
  const [empMobile, setempMobile] = useState(5432154321);

  const handleClick = () => {
    let data = {
      empId: empId,
      empName: empName,
      empEmail: empEmail,
      empMobile: empMobile,
    };
    axios
      .post("http://localhost:5000/api/addEmployee", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="formBody">
      <div className="form">
        <div className="inputField">
          <AiOutlineNumber style={{ color: "#c9cbcd" }} size={30} />
          <input
            value={empId}
            onChange={(e) => setempId(e.target.value)}
            type="number"
            required
            placeholder="Employee Id"
          />
        </div>
        <div className="inputField">
          <BsFillPersonFill style={{ color: "#c9cbcd" }} size={30} />
          <input
            value={empName}
            onChange={(e) => setempName(e.target.value)}
            type="text"
            required
            placeholder="Employee name"
          />
        </div>
        <div className="inputField">
          <MdEmail style={{ color: "#c9cbcd" }} size={30} />
          <input
            value={empEmail}
            onChange={(e) => setempEmail(e.target.value)}
            type="email"
            required
            placeholder="Employee Email"
          />
        </div>
        <div className="inputField">
          <AiFillPhone style={{ color: "#c9cbcd" }} size={30} />
          <input
            value={empMobile}
            onChange={(e) => setempMobile(e.target.value)}
            type="number"
            required
            placeholder="Employee Phone no."
          />
        </div>
      </div>
      <div className="submitButton">
        <button onClick={handleClick}>Add Employee</button>
      </div>
    </div>
  );
}

export default InputForm;
