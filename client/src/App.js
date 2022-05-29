import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
import Apartment from "./components/Apartment";
import Home from "./components/Home";
import AddApartment from "./components/AddApartment";
function App() {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/apartment" exact component={Apartment} />
        <Route path="/add" exact component={AddApartment} />
      </Switch>
      <Footer />
      <ToastContainer autoClose={3000} hideProgressBar />
    </React.Fragment>
  );
}

export default App;
