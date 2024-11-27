import success from "@/assets/Success.png";

const SuccessModal = ({
  message,
  text,
}: {
  message: string;
  text?: string;
}) => {
  return (
    <div>
      <div className="flex justify-center">
        <img src={success} alt="Success" />
      </div>
      <p className="text-xl font-semibold text-mediumBlue my-5 text-center">
        {message}
      </p>
      <p className="text-textShade text-sm font-bold text-center my-5">
        {text}
      </p>
    </div>
  );
};

export default SuccessModal;
