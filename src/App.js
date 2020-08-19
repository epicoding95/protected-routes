import React from "react";

import "./App.css";
import LandingPage from "./LandingPage";
import AppLayout from "./app.layout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ProtectedRoute } from "./protectedRoute";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <ProtectedRoute exact path="/app" component={AppLayout} />

          <Route path="*" render={() => "404"} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
