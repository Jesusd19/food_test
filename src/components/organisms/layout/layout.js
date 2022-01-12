import React from "react";

const Layout = (props) => {
  return (
    <main>
      <section></section>
      <section>{props.children}</section>
    </main>
  );
};

export default Layout;
