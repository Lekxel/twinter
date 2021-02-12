import React, { useEffect } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/root.reducer";

import Landing from "../pages/Landing";
import Auth from "../pages/Auth";

export function Routes() {
  //   const dispatch = useDispatch();

  const { isAuthenticated } = useSelector(
    ({ store }: RootState) => ({ isAuthenticated: store.user != null }),
    shallowEqual
  );

  return !isAuthenticated ? (
    /*Render auth page when user is not authorized.*/
    <Route>
      <Auth />
    </Route>
  ) : (
    <Switch>
      <Route path="/landing" component={Landing} />
    </Switch>
  );
}
