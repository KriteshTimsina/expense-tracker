import AddTransaction from "./components/AddTransaction";
import TransactionHistory from "./components/TransactionHistory";

function App() {
  return (
    <div className="flex flex-col items-center justify-start h-screen  max-w-[500px] mx-auto">
      <AddTransaction />
      <TransactionHistory />
    </div>
  );
}

export default App;
