import { createContext, useState, useContext, useEffect } from "react";
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
  const [transactions, setTransactions] = useState<ITransaction[] | null>([]);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const transactions: any = localStorage.getItem("transactions");
    if (transactions) setTransactions(JSON.parse(transactions));
  }, []);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  function handleUserInput(e: React.ChangeEvent<HTMLInputElement>): void {
    const { name, value } = e.target;
    setUserInput((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function addTransaction(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    if (!userInput.description && !userInput.amount) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    } else {
      setError(false);
      setTransactions((prev: any) => [...prev, userInput]);
      setUserInput({
        description: "",
        amount: 0,
      });
    }
  }

  const { income, expense } = transactions!.reduce(
    (acc, transaction) => {
      if (transaction.amount > 0) {
        acc.income = Number(acc.income) + Number(transaction.amount);
      } else {
        acc.expense = acc.expense + Number(Math.abs(transaction.amount));
      }

      return acc;
    },
    { income: 0, expense: 0 }
  );

  const deleteTransaction = (id: number) => {
    const filteredTransaction: ITransaction[] = transactions!.filter(
      (_transaction: ITransaction, index: number) => index !== id
    );
    setTransactions(filteredTransaction);
  };

  return (
    <TransactionContext.Provider
      value={{
        income,
        expense,
        userInput,
        transactions,
        handleUserInput,
        addTransaction,
        deleteTransaction,
        error,
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
  income: number;
  expense: number;
  deleteTransaction: (id: number) => void;
  error: boolean;
} => useContext(TransactionContext);

export default TransactionProvider;
