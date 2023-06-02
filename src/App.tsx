import AddTransaction from "./components/AddTransaction";
import TransactionHistory from "./components/TransactionHistory";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen max-w-[500px] mx-auto">
      <TransactionHistory />

      <AddTransaction />
    </div>
  );
}

export default App;
