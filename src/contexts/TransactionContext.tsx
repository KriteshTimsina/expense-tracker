import { createContext, useState, useContext } from "react";
import ITransaction, { TransactionContextType } from "../types/types";

export const TransactionContext = createContext<TransactionContextType | any>(
  undefined
);

function TransactionProvider({
  children,
}: {
  children: JSX.Element;
}): JSX.Element {
  const [userInput, setUserInput] = useState<ITransaction>({
    description: "",
    amount: 0,
  });
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  function handleUserInput(e: React.ChangeEvent<HTMLInputElement>): void {
    const { name, value } = e.target;
    setUserInput((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function addTransaction(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setTransactions((prev: any) => [...prev, userInput]);
    setUserInput({
      description: "",
      amount: 0,
    });
  }

  return (
    <TransactionContext.Provider
      value={{
        userInput,
        transactions,
        handleUserInput,
        addTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
}

export const useTransaction = (): {
  userInput: ITransaction;
  transactions: ITransaction[];
  handleUserInput: any;
  addTransaction: any;
  handleTransactionSummary: any;
  checkTransactionState: (amount: number) => void;
} => useContext(TransactionContext);

export default TransactionProvider;
