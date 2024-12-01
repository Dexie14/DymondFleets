import { useState } from "react";
import { Asterisk, PlusIcon } from "@/assets/svgComp/General";
// import { FileState } from "@/pages/authentication/DriverInfo";

type UploadProps = {
  subtitle: string;
  title: string;
  onFileChange: (file: File | null, name: string) => void;
  name: string;
  // name: keyof FileState;  // Ensure name is typed correctly as one of the keys from FileState
  // onFileChange: (file: File | null, name: keyof FileState) => void;
};

const AuthUpload = ({ subtitle, title, onFileChange, name }: UploadProps) => {
  const [image, setImage] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setImage(URL.createObjectURL(file)); // Preview the image
      onFileChange(file, name); // Send file to the parent form
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    onFileChange(null, name); // Clear the file in the parent form state
  };

  return (
    <div className="mb-4">
      <p className="flex gap-2 items-center font-semibold">
        {title}
        <Asterisk />
      </p>
      <p className="my-2 text-sm text-textShade">{subtitle}</p>
      <aside className="flex items-center gap-3">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
          id={name}
        />
        <label htmlFor={name}>
          <div className="h-[58px] inline-flex text-sm items-center cursor-pointer justify-center w-[126px]  hover:bg-slate-900/90 rounded-[56px] text-deepBlue font-medium bg-selectColor hover:text-white">
            <div className="mr-2">
              <PlusIcon />
            </div>
            Upload File
          </div>
        </label>

        {/* Display Image Preview */}
        {image && (
          <div className="mt-3">
            <img
              src={image}
              alt="Uploaded Preview"
              className="w-24 h-24 object-cover"
            />
            <button
              type="button"
              className="ml-2 text-red-500"
              onClick={handleRemoveImage}
            >
              Remove
            </button>
          </div>
        )}
      </aside>
    </div>
  );
};

export default AuthUpload;

// const AuthUpload = ({ subtitle, title }: Upload) => {
//   return (
//     <div className="mb-4">
//       <p className="flex gap-2 items-center font-semibold">
//         {title}
//         <Asterisk />
//       </p>
//       <p className="my-2 text-sm text-textShade">{subtitle}</p>
//       <Button className="h-[48px] w-[126px] rounded-[56px] text-deepBlue font-medium bg-selectColor hover:text-white">
//         <div className="mr-2">
//           <PlusIcon />
//         </div>
//         Upload File
//       </Button>
//     </div>
//   );
// };

// export default AuthUpload;
