import React from "react";
import { Login, Register, Home, DefaultPage } from './components';
import AppBar from './AppBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
    <AppBar />
    <Switch>
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
    <Route path="/home">
      <Home />
    </Route>
    <Route path="/">
      <DefaultPage />
    </Route>
    </Switch>
    </Router>
    </>
  );
}

export default App;
