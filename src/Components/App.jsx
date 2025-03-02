import Header from "./header/organisms/Header"; // Import the Header
import Expense from "./expense-logic/Expense";
import SideBar from "./sidebar/organisms/SideBar";
function App() {
  return (
    <>
      <div className="container-fluid d-flex">
        <section className="sidebar bg-light border-end">
          <SideBar />
        </section>
        <main className="flex-grow-1">
          <Header />
          <Expense />
        </main>
      </div>
    </>
  );
}

export default App;
