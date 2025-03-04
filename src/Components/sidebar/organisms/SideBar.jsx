import React from "react";
//import { useState } from "react";
import FileGridIcon from "../atoms/FileGridIcon";
import FileColumnsIcon from "../atoms/FileColumnsIcon";
import TrashDeleteIcon from "../atoms/TrashDeleteicon";
import GetStoredExpenseData from "../molecules/GetStoredExpenseData";
import "../styles/SideBar.css";
const SideBar = () => {
  return (
    <div className="sidebar">
      <section className="sidebar-icons-container">
        <FileGridIcon />
        <FileColumnsIcon />
        <TrashDeleteIcon />
      </section>
      <section>
        <GetStoredExpenseData />
      </section>
    </div>
  );
};

export default SideBar;
