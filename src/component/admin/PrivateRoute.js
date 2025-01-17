import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ isStaff, children }) => {
  return isStaff ? children : <Navigate to="/abroad-unbox" replace />;
};

export default PrivateRoute;
