import Header from "./header/organisms/Header"; // Import the Header
import Expense from "./expense-logic/Expense";
import SideBar from "./sidebar/organisms/SideBar";
import { useContext } from "react";
import { ExpensesContext } from "./ContextProvider";
function App() {
  const { handleJsonDisplay } = useContext(ExpensesContext);
  return (
    <>
      <div className="container-fluid d-flex">
        <section className="sidebar bg-light border-end">
          <SideBar />
        </section>
        <main className="flex-grow-1">
          <Header />
          <button onClick={handleJsonDisplay}>re-display-item</button>
          <Expense />
        </main>
      </div>
    </>
  );
}

export default App;
