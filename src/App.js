import React from "react";
import "./css/app.css";
import InputForm from "./inputForm";
import EmployeeList from "./employeeList";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="appBody">
          <div className="bodyHeader">
            <Link to="/form" style={{ textDecoration: "none" }}>
              <div className="header1">ADD EMPLOYEES</div>
            </Link>
            <Link to="/list" style={{ textDecoration: "none" }}>
              <div className="header2">EMPLOYEE LIST</div>
            </Link>
          </div>
          <div className="bodyContent">
            <Switch>
              <Route path="/" exact>
                <h1 style={{ color: "white" }}>Choose from header</h1>
              </Route>
              <Route path="/form" exact component={InputForm} />
              <Route path="/list" exact component={EmployeeList} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
