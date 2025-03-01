import Header from "./header/organisms/Header"; // Import the Header
import Expense from "./expense-logic/Expense";
import SideBar from "./sidebar/organisms/SideBar";
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
