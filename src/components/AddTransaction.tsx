import { useTransaction } from "../contexts/TransactionContext";

const AddTransaction = () => {
  const { handleTransaction, addTransaction } = useTransaction();

  return (
    <div className="flex flex-col items-start gap-5 mt-10 text-lg">
      <h1 className="pb-2 border-b-slate-400 border-[1px] text-xl font-semibold w-full">
        Add new Transaction
      </h1>
      <form action="#" className="flex flex-col gap-4 ">
        <div className="flex flex-col gap-1">
          <label htmlFor="description">Description</label>
          <input
            onChange={handleTransaction}
            name="description"
            type="text"
            placeholder="Enter description..."
            className="placeholder:text-gray-500 indent-1 h-10 border-[1px] border-black rounded-sm w-72"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="amount">Amount</label>
          <p className="text-base text-gray-500">(-10= expense, 10 = income)</p>
          <input
            onChange={handleTransaction}
            name="amount"
            type="text"
            placeholder="Enter amount..."
            className="placeholder:text-gray-500 indent-1 h-10 border-[1px] border-black rounded-sm w-72"
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
