import { QRCodeSVG } from "qrcode.react";

const ScanDialog = () => {
  return (
    <div className="text-center">
      <h3 className="text-2xl font-medium text-mediumBlue py-5">
        Get the Dymond Fleets app
      </h3>
      <div className="flex justify-center cursor-pointer rounded-[6px] my-4">
        <QRCodeSVG size={200} value={"https://dymond-fleets.vercel.app/"} />
      </div>
      <p className="font-medium text-textShade py-5">
        Scan the QR code with your phone camera to download the Dymond Fleets
        app
      </p>
    </div>
  );
};

export default ScanDialog;
