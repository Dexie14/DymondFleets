import { Asterisk } from "@/assets/svgComp/General";
import AuthUpload from "@/components/Auth/AuthUpload";
import SuccessModal from "@/components/Auth/SuccessModal";
import InputField from "@/components/input/InputField";
import AuthHeader from "@/components/menuBars/AuthHeader";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/Container";
import useRegisterRider from "@/hooks/api/mutation/riders/useRegisterRider";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// export type FileState = {
//   profilePhoto: File | null;
//   verificationDocs: File | null;
//   vehicleLicense: File | null;
//   vehiclePhoto: File | null;
// };

const DriverRegistrationschema = z.object({
  address: z.string().min(1, { message: "Address is required" }),
  vehicleType: z.string().min(1, { message: "Vehicle type is required" }),
  vehicleModel: z.string().min(1, { message: "Vehicle model is required" }),
  vehicleRegNum: z
    .string()
    .min(1, { message: "Vehicle registration number is required" }),
  vehicleInsurance: z
    .string()
    .min(1, { message: "Vehicle insurance is required" }),
  vehicleColor: z.string().min(1, { message: "Vehicle color is required" }),
  vehicleCapacity: z
    .number()
    .min(1, { message: "Vehicle capacity is required" }),
  vehicleYear: z
    .number()
    .min(1000, { message: "Vehicle year is required and needs to be correct" })
    .max(2030),
  vehicleMake: z.string().min(1, { message: "Vehicle make is required" }),
});

type FormData = z.infer<typeof DriverRegistrationschema>;

const DriverInfo = () => {
  const { state } = useLocation();

  const [success, setSuccess] = useState<boolean>(false);

  console.log(state);

  const navigate = useNavigate();

  useEffect(() => {
    if (state === null) {
      navigate("/register");
    }
  }, [state, navigate]);

  const { mutate, isPending } = useRegisterRider();

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      address: "",
      vehicleType: "",
      vehicleModel: "",
      vehicleRegNum: "",
      vehicleInsurance: "",
      vehicleColor: "",
      vehicleCapacity: 0,
      vehicleYear: 0,
      vehicleMake: "",
    },
    resolver: zodResolver(DriverRegistrationschema),
    mode: "onChange",
  });

  const [files, setFiles] = useState<any>({
    profilePhoto: null,
    verificationDocs: null,
    vehicleLicense: null,
    vehiclePhoto: null,
  });

  const handleFileChange = (file: File | null, name: string) => {
    console.log("File received:", file, "for", name);

    setFiles((prevFiles: any) => ({ ...prevFiles, [name]: file }));
  };

  const onSubmit = (data: FormData) => {
    const formData = new FormData();

    Object.keys(state?.registrationData).forEach((key) => {
      if (
        state?.registrationData[key] !== undefined &&
        state?.registrationData[key] !== null
      ) {
        formData.append(key, state?.registrationData[key].toString());
      }
    });

    formData.append("address", data.address);
    formData.append("vehicleType", data.vehicleType);
    formData.append("vehicleModel", data.vehicleModel);
    formData.append("vehicleRegNo", data.vehicleRegNum);
    formData.append("vehicleInsurance", data.vehicleInsurance);
    formData.append("vehicleColor", data.vehicleColor);
    formData.append("vehicleCapacity", data.vehicleCapacity.toString());
    formData.append("vehicleYear", data.vehicleYear.toString());
    formData.append("vehicleMake", data.vehicleMake);

    console.log(files, "files");

    const missingImages: string[] = [];
    // Append file uploads
    Object.keys(files).forEach((key) => {
      const file = files[key];
      if (file) {
        console.log(`Appending ${key}:`, file);
        formData.append("image", file);
      } else {
        missingImages.push(key);
      }
    });
    // for (let [key, value] of formData.entries()) {
    //   console.log(key, value);
    // }

    if (missingImages.length > 0) {
      const firstMissingFile = missingImages[0];
      toast.error(`Please upload the ${firstMissingFile} image.`);
      // missingImages.forEach((imageKey: any) => {
      //   toast.error(`Please upload the ${imageKey} image.`);
      // });
      return;
    }

    mutate(formData, {
      onSuccess: (response: any) => {
        toast.success(response?.data?.message);
        setSuccess(true);
        reset();
        setTimeout(() => {
          navigate("/");
        }, 2000);
      },
      onError: (error: any) => {
        toast.error(error?.response?.data?.message || "Error Sending Invite");
      },
    });
  };

  return (
    <div>
      <AuthHeader />
      <Container className="sm:my-20 ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h5 className="font-semibold text-2xl text-mediumBlue text-center">
            Driver Information
          </h5>
          <p className="text-textShade text-center font-medium my-2">
            Your national ID and license will be kept private
          </p>
          <section className="sm:w-6/12 w-11/12 mx-auto my-7">
            <div>
              <p className="flex gap-2 items-center font-semibold">
                Address
                <Asterisk />
              </p>
              <InputField
                {...register("address")}
                name="address"
                error={errors?.address?.message}
              />
            </div>
            <AuthUpload
              title="Driver’s profile photo"
              subtitle=" Please provide a clear portrait picture (not a full body picture)
              of yourself. It should show your full face, front view, with eyes
              open."
              name="profilePhoto"
              onFileChange={handleFileChange}
            />
            <AuthUpload
              title="Verification documents"
              subtitle=" Please provide a clear document showing the document number, your
              name, and date of birth. Upload your Driver License if you’re a
              Car driver"
              name="verificationDocs"
              onFileChange={handleFileChange}
            />

            {/* <div>
              <p className="flex gap-2 items-center font-semibold">
                Vehicle type
                <Asterisk />
              </p>
              <InputField
                {...register("vehicleType")}
                name="vehicleType"
                placeholder="AB235687"
                error={errors?.vehicleType?.message}
              />
            </div> */}

            <div className="mb-4">
              <p className="flex gap-2 items-center font-semibold">
                Vehicle type <Asterisk />
              </p>

              <Select onValueChange={(value) => setValue("vehicleType", value)}>
                <SelectTrigger className="w-full my-2 rounded-[8px] bg-selectColor h-[50px]">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Bike">Bike</SelectItem>
                  <SelectItem value="Car">Car</SelectItem>
                </SelectContent>
              </Select>
              {errors.vehicleType && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.vehicleType?.message}
                </p>
              )}
            </div>

            <div>
              <p className="flex gap-2 items-center font-semibold">
                Vehicle model
                <Asterisk />
              </p>
              <InputField
                {...register("vehicleModel")}
                name="vehicleModel"
                placeholder="AB235687"
                error={errors?.vehicleModel?.message}
              />
            </div>

            <div>
              <p className="flex gap-2 items-center font-semibold">
                Vehicle registration number
                <Asterisk />
              </p>
              <InputField
                {...register("vehicleRegNum")}
                name="vehicleRegNum"
                placeholder="AB235687"
                error={errors?.vehicleRegNum?.message}
              />
            </div>

            <div>
              <p className="flex gap-2 items-center font-semibold">
                Vehicle insurance
                <Asterisk />
              </p>
              <InputField
                {...register("vehicleInsurance")}
                name="vehicleInsurance"
                error={errors?.vehicleInsurance?.message}
              />
            </div>

            <AuthUpload
              title=" Vehicle license"
              subtitle=" Please provide a clear portrait picture (not a full body picture) of yourself. It should show your full face, front view, with eyes open."
              name="vehicleLicense"
              onFileChange={handleFileChange}
            />

            <AuthUpload
              title=" Vehicle photo"
              subtitle=" Please provide a clear portrait picture (not a full body picture) of yourself. It should show your full face, front view, with eyes open."
              name="vehiclePhoto"
              onFileChange={handleFileChange}
            />

            <div>
              <p className="flex gap-2 items-center font-semibold">
                Vehicle color
                <Asterisk />
              </p>
              <InputField
                {...register("vehicleColor")}
                name="vehicleColor"
                placeholder="Blue"
                error={errors?.vehicleColor?.message}
              />
            </div>

            <div>
              <p className="flex gap-2 items-center font-semibold">
                Vehicle capacity
                <Asterisk />
              </p>
              <InputField
                type="number"
                // {...register("vehicleCapacity")}
                {...register("vehicleCapacity", {
                  valueAsNumber: true,
                })}
                name="vehicleCapacity"
                placeholder=""
                error={errors?.vehicleCapacity?.message}
              />
            </div>

            <div>
              <p className="flex gap-2 items-center font-semibold">
                Vehicle year
                <Asterisk />
              </p>
              <InputField
                type="number"
                {...register("vehicleYear", {
                  valueAsNumber: true,
                })}
                name="vehicleYear"
                placeholder="2010"
                error={errors?.vehicleYear?.message}
              />
            </div>

            <div>
              <p className="flex gap-2 items-center font-semibold">
                Vehicle make
                <Asterisk />
              </p>
              <InputField
                {...register("vehicleMake")}
                name="vehicleMake"
                placeholder="Toyota"
                error={errors?.vehicleMake?.message}
              />
            </div>

            {/* <DialogTrigger className="flex justify-center w-full"> */}
            <Button className="h-12 w-[103px]  rounded-[8px] text-white bg-blueShade mx-auto my-10">
              {isPending ? "loading..." : "Finish"}
            </Button>
            <Dialog open={success} onOpenChange={setSuccess}>
              <DialogContent className="!rounded-[16px] w-[372px]">
                <SuccessModal message="Registration successfully" />
              </DialogContent>
            </Dialog>
          </section>
        </form>
      </Container>
    </div>
  );
};

export default DriverInfo;
