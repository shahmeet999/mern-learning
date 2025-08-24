import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import "./App.css";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./user/components/Navigation/Mainnavigation";

const App = () => {
  return (
    <Router>
      {/*Switch will tell react that if any exact route matches, then no
      need to check other routes and not route to the redirect code line
      */}
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Users />
          </Route>

          <Route path="/places/new" exact>
            <NewPlace />
          </Route>

          {/*Redirect any unknown routes to the home page */}
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
