import React, { Fragment } from "react";
import { Redirect } from "react-router-dom";

import { ROUTES } from "../../shared";

export const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  return token ? (
    <Fragment>{children}</Fragment>
  ) : (
    <Redirect to={{ pathname: ROUTES.login }} />
  );
};
