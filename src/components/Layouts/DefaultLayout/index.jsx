import React from "react";
import Navbar from "../../../Pages/Landing/Navbar";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default DefaultLayout;
