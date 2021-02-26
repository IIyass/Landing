import React from "react";
import { Route } from "react-router-dom";
import Layout from "../Components/LandingLayout";

const LandingRoute = ({ component: Component, ...rest }) => {
  return (
    <Layout>
      <Route {...rest} render={(props) => <Component {...props} />} />
    </Layout>
  );
};

export default LandingRoute;
