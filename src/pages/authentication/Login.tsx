import logoColored from "@/assets/logoColored.png";
import InputField from "@/components/input/InputField";
import PasswordInput from "@/components/input/PasswordInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import useLoginAdmin from "@/hooks/api/mutation/auth/useLogin";
import { toast } from "sonner";
import { useAuthStore } from "@/store/authStore";

import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Loginschema = z.object({
  email: z
    .string()
    .email({
      message: "Please enter the correct email for a staff account.",
    })
    .refine((s) => !s.includes(" "), "No spaces allowed"),
  password: z
    .string()
    .min(6, { message: "password must contain at least 8 characters" }),
});

type FormData = z.infer<typeof Loginschema>;

const Login = () => {
  const { setAccessToken, setCurrentUser } = useAuthStore();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      password: "",
      email: "",
    },
    resolver: zodResolver(Loginschema),
    mode: "onChange",
  });

  const { mutateAsync, isPending } = useLoginAdmin();

  const onSubmit = async (data: any) => {
    try {
      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        if (data[key] !== undefined && data[key] !== null) {
          formData.append(key, data[key].toString());
        }
      });

      await mutateAsync(formData, {
        onSuccess: (response: any) => {
          const token = response?.data?.data?.accessToken;
          const user = response?.data?.data;
          if (token && user) {
            setAccessToken(token);
            setCurrentUser(user);
            Cookies.set("accessToken", token);
          }
          navigate("/admin");

          toast.success(response?.data?.message);
          console.log(response, "responsebyzeek");
        },
        onError: (error: any) => {
          toast.error(error?.response?.data?.message);
        },
      });
    } catch (error) {
      console.log("An error occurred: ", error);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="md:w-[50%] sm:p-8 p-4 w-11/12 h-[80vh] overflow-y-scroll scrollbar-hidden rounded-[12px] bg-foundationWhite shadow-authshadow"
      >
        <div className="flex items-center justify-center">
          <img src={logoColored} alt="DymondFleet" />
        </div>
        <h2 className="text-center text-3xl font-semibold text-mediumBlue my-6">
          Sign into Admin
        </h2>
        <section>
          {errors.email && (
            <div className="w-full border border-dashed border-adminRed px-4 py-1  my-7 text-errorBlack text-sm font-semibold">
              {errors.email?.message}
            </div>
          )}
          <InputField
            label="Email"
            type="email"
            {...register("email")}
            name="email"
            placeholder="Enter your email"
            inputClassname="!bg-adminbg"
          />
          {errors.password && (
            <div className="w-full border border-dashed border-adminRed px-4 py-1  my-7 text-errorBlack text-sm font-semibold">
              {errors.password?.message}
            </div>
          )}
          <PasswordInput
            {...register("password")}
            name="password"
            placeholder="Enter your password"
            label="Password"
          />
          <Button className="h-12 w-full my-3 rounded-[8px] text-white bg-blueShade mx-auto">
            {isPending ? "loading..." : "Login"}
          </Button>
        </section>
      </form>
    </div>
  );
};

export default Login;
