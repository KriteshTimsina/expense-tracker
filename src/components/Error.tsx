import { useTransaction } from "../contexts/TransactionContext";

const Error = () => {
  const { error } = useTransaction();
  return (
    <div>
      {error && (
        <div className="absolute right-0 flex items-center justify-center p-5 text-lg text-white bg-orange-500 bottom-10 animate-slide">
          Please Fill all the fields.
        </div>
      )}
    </div>
  );
};

export default Error;
