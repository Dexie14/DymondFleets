import { Asterisk } from "@/assets/svgComp/General";
import AuthUpload from "@/components/Auth/AuthUpload";
import SuccessModal from "@/components/Auth/SuccessModal";
import InputField from "@/components/input/InputField";
import AuthHeader from "@/components/menuBars/AuthHeader";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/Container";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const DriverInfo = () => {
  return (
    <div>
      <AuthHeader />
      <Container className="sm:my-20 ">
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
            <InputField name="address" />
          </div>
          <AuthUpload
            title="Driver’s profile photo"
            subtitle=" Please provide a clear portrait picture (not a full body picture)
              of yourself. It should show your full face, front view, with eyes
              open."
          />
          <AuthUpload
            title="Verification documents(at least 1)"
            subtitle=" Please provide a clear document showing the document number, your
              name, and date of birth. Upload your Driver License if you’re a
              Car driver"
          />

          <div>
            <p className="flex gap-2 items-center font-semibold">
              Vehicle type
              <Asterisk />
            </p>
            <InputField name="vehicleType" placeholder="AB235687" />
          </div>

          <div>
            <p className="flex gap-2 items-center font-semibold">
              Vehicle model
              <Asterisk />
            </p>
            <InputField name="vehicleModel" placeholder="AB235687" />
          </div>

          <div>
            <p className="flex gap-2 items-center font-semibold">
              Vehicle registration number
              <Asterisk />
            </p>
            <InputField name="vehicleRegNum" placeholder="AB235687" />
          </div>

          <div>
            <p className="flex gap-2 items-center font-semibold">
              Vehicle insurance
              <Asterisk />
            </p>
            <InputField name="vehicleInsurance" />
          </div>

          <AuthUpload
            title=" Vehicle license"
            subtitle=" Please provide a clear portrait picture (not a full body picture) of yourself. It should show your full face, front view, with eyes open."
          />

          <AuthUpload
            title=" Vehicle photo"
            subtitle=" Please provide a clear portrait picture (not a full body picture) of yourself. It should show your full face, front view, with eyes open."
          />

          <div>
            <p className="flex gap-2 items-center font-semibold">
              Vehicle color
              <Asterisk />
            </p>
            <InputField name="vehicleColor" placeholder="Blue" />
          </div>

          <div>
            <p className="flex gap-2 items-center font-semibold">
              Vehicle capacity
              <Asterisk />
            </p>
            <InputField name="vehicleCapacity" placeholder="" />
          </div>

          <div>
            <p className="flex gap-2 items-center font-semibold">
              Vehicle year
              <Asterisk />
            </p>
            <InputField name="vehicleYear" placeholder="2010" />
          </div>

          <div>
            <p className="flex gap-2 items-center font-semibold">
              Vehicle make
              <Asterisk />
            </p>
            <InputField name="vehicleMake" placeholder="Toyota" />
          </div>

          <Dialog>
            <DialogTrigger className="flex justify-center w-full">
              <Button className="h-12 w-[103px]  rounded-[8px] text-white bg-blueShade mx-auto my-10">
                Finish
              </Button>
            </DialogTrigger>
            <DialogContent className="!rounded-[16px] w-[372px]">
              <SuccessModal message="Registration successfully" />
            </DialogContent>
          </Dialog>
        </section>
      </Container>
    </div>
  );
};

export default DriverInfo;
