import React from "react";
import TrashDeleteIcon from "../atoms/TrashDeleteIcon";
import FileGridIcon from "../atoms/FileGridIcon";
import FileColumnsIcon from "../atoms/FileColumnsIcon";
import GetStoredExpenseData from "../molecules/GetStoredExpenseData";
import "../styles/SideBar.css";
const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-icons-container">
        <TrashDeleteIcon />
        <FileGridIcon />
        <FileColumnsIcon />
      </div>
      <GetStoredExpenseData />
    </div>
  );
};

export default SideBar;
