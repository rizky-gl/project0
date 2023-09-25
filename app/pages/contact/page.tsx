import React from "react";
import PropTypes from "prop-types";
import SideBar from "@/app/components/side_bar";
import Header from "@/app/components/header";

const page = (props) => {
  return (
    <>
      <SideBar />
      <Header />
      <div>page</div>
    </>
  );
};

page.propTypes = {};

export default page;
