import { useEffect, useState, useContext } from "react";
import { ExpensesContext } from "../../ContextProvider";
import "../styles/SideBar.css";
import Axios from "axios";
import { TbFileDollar } from "react-icons/tb";

const GetStoredExpenseData = () => {
  const { hasSubmitted, setHasSubmitted } = useContext(ExpensesContext);
  const [fetchedJsonData, setFetchedJsonData] = useState([]);
  const [_, setServerData] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  //const [isIconExpanded, setIsIconExpanded] = useState(null);
  // Mouse hover event handlers
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  //Ternary statement cor hover styles
  const textColor = isHovered
    ? { backgroundColor: "lightgray", borderBottom: ".2vh solid pink", cursor: "pointer" }
    : { backgroundColor: "transparent" };
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
  // getStoredExpenseData return statement for jsx display
  return (
    <ul>
      {fetchedJsonData.map((jsonObject) => {
        return (
          <section
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={textColor}
            key={jsonObject._id} // The key prop for child elements needs to be on the outer most element in this case section instead of li
          >
            <li>
              <a href={`/details/${jsonObject._id}`} onClick={(e) => e.preventDefault()}>
                {categoryIcon}
              </a>
            </li>
          </section>
        );
      })}
    </ul>
  );
};

export default GetStoredExpenseData;
//  onClick={(e) => e.preventDefault()} keeps anything from being submitted not just forms
//<button onClick={() => iconDelete(jsonObject._id)}>delete</button>
