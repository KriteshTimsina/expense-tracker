import { useTransaction } from "../contexts/TransactionContext";
import ITransaction from "../types/types";

const TransactionHistory = () => {
  const { transactionDetails, transactions } = useTransaction();
  console.log(transactions);

  return (
    <div>
      {transactions.length > 0 ? (
        <div>
          {transactions.map((transaction: ITransaction, index: number) => {
            return (
              <li key={index}>
                {transaction.description}:{transaction.amount}
              </li>
            );
          })}
        </div>
      ) : (
        <div>Empty</div>
      )}
    </div>
  );
};

export default TransactionHistory;
