import { useTransaction } from "../contexts/TransactionContext";

const AddTransaction = () => {
  const { userInput, handleUserInput, addTransaction } = useTransaction();

  return (
    <div className="flex  flex-col items-center sm:items-start justify-center gap-5 m-5 text-lg w-[300px] sm:w-[400px] ">
      <h1 className="pb-2 border-b-slate-400 border-[1px] text-xl font-semibold w-full">
        Add new Transaction
      </h1>
      <form action="#" className="flex flex-col gap-2">
        <div className="flex flex-col w-[300px] sm:w-[400px] gap-1">
          <label htmlFor="description">Description</label>
          <input
            value={userInput.description}
            onChange={handleUserInput}
            name="description"
            type="text"
            required
            placeholder="Enter description..."
            className=" placeholder:text-gray-500 indent-1 h-10 border-[1px] border-black rounded-sm "
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="amount">Amount</label>
          <p className="text-base text-gray-500">(-10= expense, 10 = income)</p>
          <input
            value={userInput.amount === 0 ? "" : userInput.amount}
            onChange={handleUserInput}
            name="amount"
            type="text"
            required
            placeholder="Enter amount..."
            className=" placeholder:text-gray-500 indent-1 h-10 border-[1px] border-black rounded-sm "
          />
        </div>
        <button
          onClick={addTransaction}
          type="submit"
          className="p-1 text-white rounded-sm bg-cyan-700"
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
