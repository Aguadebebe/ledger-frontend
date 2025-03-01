import { createRoot } from "react-dom/client";
import App from "./Components/App.jsx";
import ContextProvider from "./Components/ContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
