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
import PasswordInput from "@/components/input/PasswordInput";

const Registerschema = z.object({
  email: z
    .string()
    .email({
      message: "Please enter a correct email",
    })
    .refine((s) => !s.includes(" "), "No spaces allowed"),
  firstName: z
    .string()
    .min(1, { message: "First name must be filled" })
    .refine((s) => !s.includes(" "), { message: "No spaces allowed" }),
  lastName: z
    .string()
    .min(1, { message: "Last name must be filled" })
    .refine((s) => !s.includes(" "), { message: "No spaces allowed" }),
  password: z
    .string()
    .min(8, { message: "password must contain at least 8 characters" }),
  // role: z.string().min(1, { message: "Please select a role" }),
  gender: z.string().min(1, { message: "Please select a role" }),

  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits" })
    .max(15, { message: "Phone number must be no more than 15 digits" })
    .regex(/^\d{10,15}$/, { message: "Enter a valid phone number" }),
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
      phone: "",
      password: "",
      email: "",
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
      email: data?.email,
      phone: data?.phone,
      password: data?.password,
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
                Email
                <Asterisk />
              </p>
              {errors.email && (
                <div className="w-full border border-dashed border-adminRed px-4 py-1  my-7 text-errorBlack text-sm font-semibold">
                  {errors.email?.message}
                </div>
              )}

              <InputField {...register("email")} name="email" />
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

              <InputField {...register("firstName")} name="firstName" />
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
                Phone Number
                <Asterisk />
              </p>
              {errors.phone && (
                <div className="w-full border border-dashed border-adminRed px-4 py-1  my-7 text-errorBlack text-sm font-semibold">
                  {errors.phone?.message}
                </div>
              )}
              <InputField {...register("phone")} />
            </div>
            
            <div className="mb-4">
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
            <div>
              <p className="flex gap-2 items-center font-semibold">
                Password
                <Asterisk />
              </p>
              {errors.password && (
                <div className="w-full border border-dashed border-adminRed px-4 py-1  my-7 text-errorBlack text-sm font-semibold">
                  {errors.password?.message}
                </div>
              )}
              <PasswordInput
                {...register("password")}
                name="password"
                placeholder="Enter your password"
              />
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
