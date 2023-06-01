import { createContext, useState, useContext } from "react";
import ITransaction, { TransactionContextType } from "../types/types";

export const TransactionContext = createContext<TransactionContextType | any>(
  null
);
export const useTransaction = (): {
  transactionDetails: ITransaction;
  handleTransaction: any;
  addTransaction: any;
  transcations: ITransaction;
} => useContext(TransactionContext);

function TransactionProvider({
  children,
}: {
  children: JSX.Element;
}): JSX.Element {
  const [transactionDetails, setTransactionDetails] = useState<ITransaction>({
    description: "",
    amount: 0,
  });
  const [transactions, setTransactions] = useState<any>([]);
  function handleTransaction(e: React.ChangeEvent<HTMLInputElement>): void {
    const { name, value } = e.target;
    setTransactionDetails((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function addTransaction(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setTransactions((prev: any) => [
      ...prev,
      {
        description: transactionDetails.description,
        amount: transactionDetails.amount,
      },
    ]);
  }
  return (
    <TransactionContext.Provider
      value={{
        transactionDetails,
        transactions,
        handleTransaction,
        addTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
}

export default TransactionProvider;
