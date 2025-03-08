import React from "react";
//import { useState } from "react";
//import Axios from "axios";
import { useContext } from "react";
import { ExpensesContext } from "../../ContextProvider";
import { FaRegTrashCan } from "react-icons/fa6";
//import { useJsonData } from "../molecules/GetStoredExpenseData";
import "../styles/SideBar.css";
const TrashDeleteIcon = () => {
  const { selectedId, iconDelete } = useContext(ExpensesContext);

  return (
    <button
      className="btn btn-outline-dark trash-delete"
      onClick={() => {
        if (selectedId) {
          iconDelete(selectedId); // Delete the selected item
        } else {
          iconDelete(!selectedId);
          console.log("No ID selected");
        }
      }}
    >
      <FaRegTrashCan className="sidebar-icon" />
    </button>
  );
};

export default TrashDeleteIcon;
