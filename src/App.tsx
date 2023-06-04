import AddTransaction from "./components/AddTransaction";
import TransactionHistory from "./components/TransactionHistory";
import TransactionSummary from "./components/TransactionSummary";

function App() {
  return (
    <div className="flex font-poppins flex-col items-center justify-center min-h-screen  max-w-[250px] md:max-w-[500px] mx-auto">
      <div className="flex flex-col items-start justify-center gap-5 m-5 text-lg md:w-[400px]">
        <h1 className="pb-2 border-b-slate-400 border-[1px] text-xl font-semibold w-[400px]">
          Expense Tracker
        </h1>
      </div>
      <TransactionSummary />
      <TransactionHistory />
      <AddTransaction />
    </div>
  );
}

export default App;
