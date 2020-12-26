import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { MainPage } from "./pages/mainPage";
import { InfoPage } from "./pages/infoPage";

export const useRouts = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <MainPage />
      </Route>
      <Route path="/info" exact>
        <InfoPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};
