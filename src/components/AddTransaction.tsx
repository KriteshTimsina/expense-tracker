const AddTransaction = () => {
  return (
    <div className="flex flex-col items-start gap-5 m-2 text-lg">
      <h1 className="pb-2 border-b-slate-400 border-[1px] text-xl font-semibold w-full">
        Add new Transaction
      </h1>
      <form action="#" className="flex flex-col gap-4 ">
        <div className="flex flex-col gap-1">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            placeholder="Enter description..."
            className="placeholder:text-gray-500 indent-1 h-10 border-[1px] border-black rounded-sm w-72"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="amount">Amount</label>
          <p className="text-base text-gray-500">(-1= expense, 10 = income)</p>
          <input
            type="text"
            placeholder="Enter amount..."
            className="placeholder:text-gray-500 indent-1 h-10 border-[1px] border-black rounded-sm w-72"
          />
        </div>
        <button type="submit" className="p-1 text-white rounded-sm bg-cyan-700">
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
