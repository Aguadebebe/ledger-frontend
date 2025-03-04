import React from "react";
//import { useState } from "react";
//import Axios from "axios";
import { FaRegTrashCan } from "react-icons/fa6";
//import { useJsonData } from "../molecules/GetStoredExpenseData";
import "../styles/SideBar.css";
const TrashDeleteIcon = () => {
  return (
    <button className="btn btn-primary btn-sm">
      <FaRegTrashCan className="sidebar-icon" />
    </button>
  );
};

export default TrashDeleteIcon;
