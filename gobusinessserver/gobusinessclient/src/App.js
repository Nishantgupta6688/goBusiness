import "./App.css";
import Landing from "./components/Landing";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./components/logic/Dashboard";
import WrongPassword from "./components/WrongPassword";
import Profile from "./components/Profile";
import AddSalesForm from "./components/forms/AddSalesForm";
import ShowSales from './components/sales/ShowSales';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    {
      reload: false,
      firm: JSON.parse(localStorage.getItem("firm"))
    }
  );

  const renderHomepage = () => {
    if (isLoggedIn) {
      return <Route exact path="/" component={Profile} />;
    } else {
      return (
        <Route exact path="/">
          <Landing setIsLoggedIn={setIsLoggedIn} />
        </Route>
      );
    }
  };

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Switch>
        {renderHomepage()}
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/wrongPassword" component={WrongPassword} />
        <Route exact path="/addSalesData">
          <AddSalesForm />
        </Route>
        <Route exact path="/previewSalesData">
          <ShowSales isLoggedIn={isLoggedIn} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
