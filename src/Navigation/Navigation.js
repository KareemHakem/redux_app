import React from "react";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import CountPage from "../Pages/CountPage";
import CountDetailPage from "../Pages/CountDetailPage";

export default function Navigation() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={CountDetailPage} />
        <Route exact path="/detail" component={CountPage} />
      </Switch>
    </div>
  );
}
