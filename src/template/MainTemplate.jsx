import React from "react";
import Header from "../components/Header";

function MainTemplate({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      {/* footer   */}
    </>
  );
}

export default MainTemplate;
