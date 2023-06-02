const TransactionSummary = () => {
  return (
    <div className="flex flex-col items-start gap-5 mt-5 text-lg w-[400px]">
      <div className="flex items-center justify-between w-[400px]">
        <p className="opacity-50 text-8xl">🖩</p>
        <div className="flex flex-col self-end text-2xl font-bold uppercase text-slate-700">
          <h2>Your Balance</h2>
          <p>Rs.500</p>
        </div>
      </div>
      <div className="uppercase  text-slate-700 font-semibold flex justify-between p-5 px-10 bg-white w-[400px] shadow-md">
        <div>
          <h1>Income</h1>
          <p className="text-green-500">Rs. 800</p>
        </div>
        <div className="w-[2px] h-14 bg-slate-500"></div>
        <div>
          <h1>Expense</h1>
          <p className="text-orange-500">Rs. 300</p>
        </div>
      </div>
    </div>
  );
};

export default TransactionSummary;
