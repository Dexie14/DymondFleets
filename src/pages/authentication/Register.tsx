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

const Register = () => {
  const navigate = useNavigate();
  return (
    <div>
      <AuthHeader />
      <Container className="sm:my-20">
        <h5 className="font-semibold text-2xl text-mediumBlue text-center">
          Personal Information
        </h5>
        <section className="sm:w-6/12 w-11/12 mx-auto my-7">
          <div>
            <p className="flex gap-2 items-center font-semibold">
              I want to join Dymond Fleets as <Asterisk />
            </p>
            <Select>
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
            <InputField name="firstName" />
          </div>
          <div>
            <p className="flex gap-2 items-center font-semibold">
              Last name
              <Asterisk />
            </p>
            <InputField name="lastName" />
          </div>
          <div>
            <p className="flex gap-2 items-center font-semibold">
              Gender <Asterisk />
            </p>
            <Select>
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
            onClick={() => navigate("/driver-information")}
            className="h-12 w-[103px] flex justify-center rounded-[8px] text-white bg-blueShade mx-auto my-10"
          >
            Next
          </Button>
        </section>
      </Container>
    </div>
  );
};

export default Register;
