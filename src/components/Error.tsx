import { useTransaction } from "../contexts/TransactionContext";

const Error = () => {
  const { error } = useTransaction();
  return (
    <div>
      {error && (
        <div className="absolute right-0 flex items-center justify-center p-3 text-lg text-white bg-orange-500 top-2/3 md:top-1/2 animate-slide">
          Please Fill all the fields.
        </div>
      )}
    </div>
  );
};

export default Error;
