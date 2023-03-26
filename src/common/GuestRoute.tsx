import * as React from "react";
import {
  Link,
  Route,
  RouteProps,
  useLocation,
  Navigate,
} from "react-router-dom";

const GuestRoute = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();

  return children;
};

export default GuestRoute;
