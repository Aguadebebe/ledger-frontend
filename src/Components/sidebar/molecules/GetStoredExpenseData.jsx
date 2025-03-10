import { useEffect, useState, useContext } from "react";
import { ExpensesContext } from "../../ContextProvider";
import "../styles/SideBar.css";
//import Axios from "axios";
import { TbFileDollar } from "react-icons/tb";

const GetStoredExpenseData = () => {
  const {
    hasSubmitted,
    setHasSubmitted,
    fetchedExpenses,
    fetchedJsonData,
    setFetchedJsonData,
    fetchedEffect,
    handleSelectedId,
    handleJsonDisplay
  } = useContext(ExpensesContext);

  // const [_, setServerData] = useState([]);

  const [isHovered, setIsHovered] = useState(false);
  const [clickedId, setClickedId] = useState(null);

  //const [isIconExpanded, setIsIconExpanded] = useState(null);
  // Mouse hover event handlers
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseClick = (id) => {
    setClickedId(id);
    console.log(`Mouse clicked on ID: ${id}`);
  };

  //Ternary statement for hover styles
  const textColor = isHovered
    ? { backgroundColor: "lightgray", opacity: "30%", borderBottom: ".2vh solid pink", cursor: "pointer" }
    : { backgroundColor: "transparent" };
  const categoryIcon = <TbFileDollar className="tbdollar-icon" />;

  useEffect(() => {
    fetchedEffect(hasSubmitted, setHasSubmitted, setFetchedJsonData);
  }, [hasSubmitted]);

  // getStoredExpenseData return statement for jsx display
  return (
    <ul>
      {fetchedJsonData.map((jsonObject) => {
        const isSelected = clickedId === jsonObject._id;
        const selectedStyle = isSelected ? { backgroundColor: "red" } : {};
        return (
          <section
            onClick={() => {
              handleMouseClick(jsonObject._id);
              handleSelectedId(jsonObject._id);
            }}
            key={jsonObject._id} // The key prop for child elements needs to be on the outer most element in this case section instead of li
            style={selectedStyle}
          >
            <div onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter} style={textColor}>
              <li>
                <a href={`/details/${jsonObject._id}`} onClick={(e) => e.preventDefault()}>
                  {categoryIcon}
                </a>
              </li>
            </div>
          </section>
        );
      })}
    </ul>
  );
};

export default GetStoredExpenseData;
//  onClick={(e) => e.preventDefault()} keeps anything from being submitted not just forms
//<button onClick={() => iconDelete(jsonObject._id)}>delete</button>
// onClick={() => handleJsonDisplay(fetchedExpenses)}
