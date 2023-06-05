import { AiOutlineDelete } from "react-icons/ai";
import { useTransaction } from "../contexts/TransactionContext";
import Error from "./Error";

const TransactionHistory = () => {
  const { transactions, deleteTransaction } = useTransaction();
  return (
    <div className=" flex flex-col items-center sm:items-start gap-5 mt-5 text-lg w-[300px] sm:w-[400px] mx-auto">
      <h1 className="pb-2 border-b-slate-400 border-[1px] text-xl font-semibold w-full ">
        Transaction History
      </h1>
      <div className="">
        {transactions.length > 0 ? (
          <ul className="flex flex-col gap-2">
            {transactions.map((transaction, index) => {
              return (
                <li
                  className="flex items-center justify-between group"
                  key={index}
                >
                  <div
                    className={` ${
                      transaction.amount > 0
                        ? " border-l-green-500"
                        : "border-l-orange-500"
                    }  bg-white  cursor-pointer  w-[300px] sm:w-[400px] shadow-md p-2 flex justify-between items-center  border-4 `}
                  >
                    <span>{transaction.description}</span>
                    <span
                      className={` 
                  ${
                    transaction.amount > 0
                      ? "text-green-500"
                      : "text-orange-500"
                  } `}
                    >
                      {transaction.amount}
                    </span>
                  </div>
                  <span className="hidden h-full text-orange-600 group-hover:cursor-pointer -z-10 group-hover:animate-slide group-hover:flex">
                    <AiOutlineDelete
                      onClick={() => deleteTransaction(index)}
                      size={25}
                    />
                  </span>
                </li>
              );
            })}
          </ul>
        ) : (
          <p>History is empty</p>
        )}
      </div>
      <Error />
    </div>
  );
};

export default TransactionHistory;
