export default interface ITransaction {
  description: string;
  amount: number;
}
export type TransactionContextType = {
  transactions: ITransaction[];
  addTransaction: (todo: ITransaction) => void;
  handleTransaction: () => any;
};
