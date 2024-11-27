import { Button } from "../ui/button";

const Assign = ({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <div>
      <Button
        onClick={onClick}
        className={`bg-border hover:text-white rounded-[4px] w-[100px] h-[40px] text-sm font-medium text-textShade ${className}`}
      >
        Assign
      </Button>
    </div>
  );
};

export default Assign;
