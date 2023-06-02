import AddTransaction from "./components/AddTransaction";
import TransactionHistory from "./components/TransactionHistory";
import TransactionSummary from "./components/TransactionSummary";

function App() {
  return (
    <div className="flex font-poppins flex-col items-center justify-center min-h-screen  max-w-[250px] md:max-w-[500px] mx-auto">
      <TransactionSummary />
      <TransactionHistory />
      <AddTransaction />
    </div>
  );
}

export default App;
