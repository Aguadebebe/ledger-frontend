import Header from "./Feature-1/Header"; // Import the Header
import Expense from "./Feature-2/Feature-SortedCategory/Expense";
import SideBar from "./Feature3/SideBar";
function App() {
  return (
    <div>
      <div className="container-fluid d-flex">
        <div className="sidebar bg-light border-end">
          <SideBar />
        </div>
        <div className="flex-grow-1">
          <Header />
          <Expense />
        </div>
      </div>
    </div>
  );
}

export default App;
