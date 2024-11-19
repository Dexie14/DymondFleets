import success from "@/assets/Success.png";

const SuccessModal = () => {
  return (
    <div>
      <div className="flex justify-center">
        <img src={success} alt="Success" />
      </div>
      <p className="text-xl font-semibold text-mediumBlue my-5 text-center">
        Registration successfully
      </p>
    </div>
  );
};

export default SuccessModal;
