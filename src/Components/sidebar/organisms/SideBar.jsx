import React from "react";
import FileGridIcon from "../atoms/FileGridIcon";
import FileColumnsIcon from "../atoms/FileColumnsIcon";
import GetStoredExpenseData from "../molecules/GetStoredExpenseData";
import "../styles/SideBar.css";
const SideBar = () => {
  return (
    <div className="sidebar">
      <section className="sidebar-icons-container">
        <FileGridIcon />
        <FileColumnsIcon />
      </section>
      <GetStoredExpenseData />
    </div>
  );
};

export default SideBar;
