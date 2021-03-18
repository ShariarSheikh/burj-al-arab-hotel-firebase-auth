import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Component/Header/Header";
import { AuthProvider } from "./Component/State/AuthContext";
import { RoomProvider } from "./Component/State/RoomContext";
import Home from "./Pages/Home/Home";
import UserProfile from "./Pages/Home/UserProfile/UserProfile";
import HotelDetails from "./Pages/HotelDetails/HotelDetails";
import LogIn from "./Pages/LogIn/LogIn";
import PrivateRoute from "./Pages/LogIn/PrivateRoute/PrivateRoute";

const App = () => {
  return (
    <>
      <AuthProvider>
        <RoomProvider>
          <Router>
            <Header />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/user">
                <UserProfile />
              </Route>
              <Route path="/login">
                <LogIn />
              </Route>
              <PrivateRoute path="/hotel/:id">
                <HotelDetails />
              </PrivateRoute>
            </Switch>
          </Router>
        </RoomProvider>
      </AuthProvider>
    </>
  );
};

export default App;
