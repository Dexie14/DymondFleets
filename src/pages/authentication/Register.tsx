import { Asterisk } from "@/assets/svgComp/General";
import InputField from "@/components/input/InputField";
import AuthHeader from "@/components/menuBars/AuthHeader";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/Container";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
// import { toast } from "sonner";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";

const Registerschema = z.object({
  firstName: z
    .string()
    .min(1, { message: "First name must be filled" })
    .refine((s) => !s.includes(" "), { message: "No spaces allowed" }),
  lastName: z
    .string()
    .min(1, { message: "Last name must be filled" })
    .refine((s) => !s.includes(" "), { message: "No spaces allowed" }),
  // role: z.string().min(1, { message: "Please select a role" }),
  gender: z.string().min(1, { message: "Please select a role" }),
});

type FormData = z.infer<typeof Registerschema>;

const Register = () => {
  const navigate = useNavigate();

  const [selectRole, setSelectedRole] = useState<string>("");
  // const [selectGender, setSelectedGender] = useState<string>("");
  console.log(selectRole, "data");
  // console.log(selectGender, "data");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      gender: "",
      // role: selectRole,
    },
    resolver: zodResolver(Registerschema),
    mode: "onChange",
  });

  const onSubmit = (data: FormData) => {
    
    const formData = {
      firstName: data?.firstName,
      lastName: data?.lastName,
      gender: data?.gender,
      // role: selectRole,
    };
    console.log(formData, "data");

    if (formData) {
      navigate("/driver-information", {
        state: {
          registrationData: formData,
        },
      });
    }
  };

  return (
    <div>
      <AuthHeader />
      <Container className="sm:my-20">
        <h5 className="font-semibold text-2xl text-mediumBlue text-center">
          Personal Information
        </h5>
        <form onSubmit={handleSubmit(onSubmit)}>
          <section className="sm:w-6/12 w-11/12 mx-auto my-7">
            <div>
              <p className="flex gap-2 items-center font-semibold">
                I want to join Dymond Fleets as <Asterisk />
              </p>
         
              <Select onValueChange={setSelectedRole}>
                <SelectTrigger className="w-full my-2 rounded-[8px] bg-selectColor h-[50px]">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="driver">Driver</SelectItem>
                  <SelectItem value="fleet">Fleet Driver</SelectItem>
                  <SelectItem value="courier">Courier</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <p className="flex gap-2 items-center font-semibold">
                First name
                <Asterisk />
              </p>
              {errors.firstName && (
                <div className="w-full border border-dashed border-adminRed px-4 py-1  my-7 text-errorBlack text-sm font-semibold">
                  {errors.firstName?.message}
                </div>
              )}
              
              <InputField {...register("firstName")} name="firstName"  />
            </div>
            <div>
              <p className="flex gap-2 items-center font-semibold">
                Last name
                <Asterisk />
              </p>
              {errors.lastName && (
                <div className="w-full border border-dashed border-adminRed px-4 py-1  my-7 text-errorBlack text-sm font-semibold">
                  {errors.lastName?.message}
                </div>
              )}
              <InputField {...register("lastName")} />
            </div>
            <div>
              <p className="flex gap-2 items-center font-semibold">
                Gender <Asterisk />
              </p>
              {errors.gender && (
                <div className="w-full border border-dashed border-adminRed px-4 py-1  my-7 text-errorBlack text-sm font-semibold">
                  {errors.gender?.message}
                </div>
              )}
              <Select onValueChange={(value) => setValue("gender", value)}>
                <SelectTrigger className="w-full my-2 rounded-[8px] bg-selectColor h-[50px]">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button
              // disabled={!isValid}
              className="h-12 w-[103px] flex justify-center rounded-[8px] text-white bg-blueShade mx-auto my-10"
            >
              Next
            </Button>
          </section>
        </form>
      </Container>
    </div>
  );
};

export default Register;
