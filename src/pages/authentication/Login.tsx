import logoColored from "@/assets/logoColored.png";
import InputField from "@/components/input/InputField";
import PasswordInput from "@/components/input/PasswordInput";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <section className="md:w-[50%] sm:p-16 p-8 w-11/12 rounded-[12px] bg-foundationWhite shadow-authshadow">
        <div className="flex items-center justify-center">
          <img src={logoColored} alt="DymondFleet" />
        </div>
        <h2 className="text-center text-3xl font-semibold text-mediumBlue my-6">
          Sign into Admin
        </h2>
        <section>
          <InputField
            label="Email"
            type="email"
            name="email"
            placeholder="Enter your email"
            inputClassname="!bg-adminbg"
          />
          <PasswordInput
            name="password"
            placeholder="Enter your password"
            label="Password"
          />
        </section>
      </section>
    </div>
  );
};

export default Login;
