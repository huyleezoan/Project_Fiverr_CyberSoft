import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
export default function HomeTemplate(props) {
  let Component = props.component;
  return (
    <Fragment>
      <Route
        exact path={props.path}
        render={(propsRoute) => {
          return (
            <Fragment>
              <Header />
              <Component {...propsRoute} />
              <Footer />
            </Fragment>
          );
        }}
      />
    </Fragment>
  );
}
