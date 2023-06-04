import AddTransaction from "./components/AddTransaction";
import TransactionHistory from "./components/TransactionHistory";
import TransactionSummary from "./components/TransactionSummary";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-poppins">
      <TransactionSummary />
      <TransactionHistory />
      <AddTransaction />
    </div>
  );
}

export default App;
