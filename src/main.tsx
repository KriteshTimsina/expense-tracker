import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import TransactionProvider from "./contexts/TransactionContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <TransactionProvider>
    <App />
  </TransactionProvider>
);
