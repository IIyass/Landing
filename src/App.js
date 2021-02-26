import React from "react";
import { Switch, BrowserRouter } from "react-router-dom";
import LandingRoute from "./hooks/LandingRoute";
import Landing from "./Components/Landing";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <LandingRoute path="/" exact component={Landing} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
