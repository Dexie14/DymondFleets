import logoColored from "@/assets/logoColored.png";
import Container from "../ui/Container";
import { Button } from "../ui/button";
import { GoBack } from "@/assets/svgComp/General";
import { useNavigate } from "react-router-dom";
const AuthHeader = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Container className="py-10">
        <section className="flex sm:flex-row flex-col-reverse md:w-7/12 items-center justify-between">
          <Button
            onClick={() => navigate("/")}
            className="h-11 w-[175px] rounded-[8px] my-5 sm:my-0 bg-buttonGrey text-blueShade font-semibold hover:text-white"
          >
            <div className="mr-2">
              <GoBack />
            </div>
            Go back Home
          </Button>
          <div className="flex items-center gap-4">
            <img src={logoColored} alt="logoColored" className="w-[70px]" />
            <h5 className="font-semibold text-2xl text-blueShade">Driver</h5>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default AuthHeader;
