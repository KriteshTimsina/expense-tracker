export default interface ITransaction {
  description: string;
  amount: number;
}
export type TransactionContextType = {
  userInput: ITransaction;
  transactions: ITransaction[];
  handleUserInput: () => void;
  addTransaction: () => void;
};
