import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/navbar.component";
import ExcersiseList from "./components/excersise-list.component";
import EditExcersise from "./components/edit-excersises.component";
import CreateExcersise from "./components/create-excersise.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={ExcersiseList} />
        <Route path="/edit/:id" exact component={EditExcersise} />
        <Route path="/create" exact component={CreateExcersise} />
        <Route path="/user" exact component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
