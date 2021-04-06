import './App.css';
import React from 'react';
import ReactDOM from "react-dom";
import ProfilePage from "./components/ProfilePage";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddProgrammer from './components/AddProgrammer';
import ProgrammerTable from "./components/ProgrammerTable";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/ProgrammerTable">
            <ProgrammerTable />
          </Route>
          <Route exact path="/AddProgrammer">
            <AddProgrammer />
          </Route>
          <Route exact path="/ProfilePage/:userId">
            <ProfilePage />
          </Route>
            <Redirect from="*" to="/ProgrammerTable" /> 
        </Switch>
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;





