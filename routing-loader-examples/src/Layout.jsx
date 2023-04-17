import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export const Layout = ({ children }) => (
  <Fragment>
    <div style={{ display: "flex", flexFlow: "column" }}>
      <Link to="/">Main</Link>
      <Link to="/page1">Page 1</Link>
      <Link to="/page2">Page 2</Link>
      <br />
      <Link to="/page1-without-loading">Page 1 without loading</Link>
    </div>
    <hr />
    <article>{children}</article>
  </Fragment>
);
