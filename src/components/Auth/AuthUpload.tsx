import { Asterisk, PlusIcon } from "@/assets/svgComp/General";
import { Button } from "../ui/button";

type Upload = {
  subtitle: string;
  title: string;
};

const AuthUpload = ({ subtitle, title }: Upload) => {
  return (
    <div className="mb-4">
      <p className="flex gap-2 items-center font-semibold">
        {title}
        <Asterisk />
      </p>
      <p className="my-2 text-sm text-textShade">{subtitle}</p>
      <Button className="h-[48px] w-[126px] rounded-[56px] text-deepBlue font-medium bg-selectColor hover:text-white">
        <div className="mr-2">
          <PlusIcon />
        </div>
        Upload File
      </Button>
    </div>
  );
};

export default AuthUpload;
