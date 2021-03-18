
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Service from "./components/Service/Service";
import ServiceDetail from "./components/ServiceDetail/ServiceDetail";

export const UserContext=createContext();

function App() {
  const [loggedInUser, setLoggedInUser]=useState({});
  return (
    <div className="App container">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header/>
        <Switch>
        <Route path="/home">
           <Home />
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <PrivateRoute path="/service">
          <Service/>

        </PrivateRoute>
        <PrivateRoute path="/serviceDetail">
          <ServiceDetail/>
        </PrivateRoute>
        <Route exact path="/">
           <Home />
        </Route>
        <Route path="/*">
           <NotFound/>
        </Route>
        
        </Switch>
      </Router>
      </UserContext.Provider>
      
    </div>
  );
}

export default App;
