import { useEffect, useState, useContext } from "react";
import { ExpensesContext } from "../../ContextProvider";
import "../styles/SideBar.css";
import Axios from "axios";
import { TbFileDollar } from "react-icons/tb";
import TrashDeleteIcon from "../atoms/TrashDeleteicon";
//import { Fa0, Fa1, Fa2, Fa3 } from "react-icons/fa6";
const GetStoredExpenseData = () => {
  const { hasSubmitted, setHasSubmitted } = useContext(ExpensesContext);
  const [fetchedJsonData, setFetchedJsonData] = useState([]);
  const [_, setServerData] = useState([]);
  //const [isIconExpanded, setIsIconExpanded] = useState(null);
  const categoryIcon = <TbFileDollar className="tbdollar-icon" />;

  useEffect(() => {
    if (!hasSubmitted) return;
    console.log("fetchData is being triggered because hasSubmitted changed:", hasSubmitted);
    const fetchData = async () => {
      try {
        const response = await Axios.get("http://localhost:8080/data");
        setFetchedJsonData(response.data);
        console.log(response.data);
        console.log(window.localStorage);
      } catch (error) {
        console.error("error fetching response data", error);
      } finally {
        setHasSubmitted(false); //  Reset flag after fetching
        console.log("hasSubmitted reset to false, fetchData should not trigger again unless resubmitted.");
      }
    };
    console.log("fetchData is running! hasSubmitted:", hasSubmitted);
    fetchData();
  }, [hasSubmitted]);

  const deleteDataBaseJsonObject = async (id) => {
    try {
      const response = await Axios.delete(`http://localhost:8080/delete/${id}`);
      setServerData(response.data.message);
      console.log(response.data.message);
    } catch (error) {
      console.error("Error deleting data", error);
    }
  };

  const iconDelete = (id) => {
    const stringifiedFetchedJsonData = JSON.stringify(fetchedJsonData);
    localStorage.setItem("fetchedJsonData", stringifiedFetchedJsonData);
    const storedData = JSON.parse(localStorage.getItem("fetchedJsonData")) || [];

    console.log("storedData Retrieved:", storedData);

    const updatedFetchedJsonData = storedData.filter((jsonObject) => jsonObject._id !== id);
    setFetchedJsonData(updatedFetchedJsonData);
    deleteDataBaseJsonObject(id);
  };

  return (
    <ul>
      {fetchedJsonData.map((jsonObject) => {
        return (
          <li key={jsonObject._id}>
            <a href={`/details/${jsonObject._id}`} style={{ fontSize: "1.3em" }}>
              {categoryIcon}
            </a>

            <button onClick={() => iconDelete(jsonObject._id)} className="btn btn-primary btn-sm">
              <TrashDeleteIcon />
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default GetStoredExpenseData;
