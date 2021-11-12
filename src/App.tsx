import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/listing">
          <h1>listing</h1>
        </Route>
        <Route path="/details">
          <h1>details</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
