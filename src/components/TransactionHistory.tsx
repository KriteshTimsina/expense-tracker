import { useTransaction } from "../contexts/TransactionContext";

const TransactionHistory = () => {
  const { transactions } = useTransaction();

  return (
    <div className="flex flex-col items-center sm:items-start gap-5 mt-5 text-lg w-[300px] sm:w-[400px] mx-auto">
      <h1 className="pb-2 border-b-slate-400 border-[1px] text-xl font-semibold w-full">
        Transaction History
      </h1>
      <div className="">
        {transactions.length > 0 ? (
          <ul className="flex flex-col gap-2">
            {transactions.map((transaction, index) => {
              return (
                <li
                  className={` ${
                    transaction.amount > 0
                      ? " border-l-green-500"
                      : "border-l-orange-500"
                  } bg-white w-[300px] sm:w-[400px] shadow-md p-2 flex justify-between  border-4 `}
                  key={index}
                >
                  {transaction.description}
                  <span
                    className={` 
                  ${
                    transaction.amount > 0
                      ? "text-green-500"
                      : "text-orange-500"
                  }`}
                  >
                    {transaction.amount}
                  </span>
                </li>
              );
            })}
          </ul>
        ) : (
          <p>History is empty</p>
        )}
      </div>
    </div>
  );
};

export default TransactionHistory;
