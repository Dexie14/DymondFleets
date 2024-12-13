import { RideDataItem } from "@/hooks/api/queries/rides/useGetRides";


const RideDetail = ({ selectedRow }: { selectedRow: RideDataItem }) => {
  return (
    <div>
      <div className="flex justify-between items-center py-3 border-b border-border">
        <h5 className="text-mediumGrey text-sm font-semibold">Ride ID</h5>
        <p className="text-foundationBlue font-medium text-sm">
          {selectedRow?._id}
        </p>
      </div>
      <div className="flex justify-between items-center py-3 border-b border-border">
        <h5 className="text-mediumGrey text-sm font-semibold">
          Pickup Location
        </h5>
        <p className="text-foundationBlue font-medium text-sm">
          {selectedRow?.origin?.address}
        </p>
      </div>
      <div className="flex justify-between items-center py-3 border-b border-border">
        <h5 className="text-mediumGrey text-sm font-semibold">Drop Location</h5>
        <p className="text-foundationBlue font-medium text-sm">
          {selectedRow?.destination?.address}
        </p>
      </div>
      <div className="flex justify-between items-center py-3 border-b border-border">
        <h5 className="text-mediumGrey text-sm font-semibold">Ride Type</h5>
        <p className="text-foundationBlue font-medium text-sm">
          {selectedRow?.type}
        </p>
      </div>
      <div className="flex justify-between items-center py-3 border-b border-border">
        <h5 className="text-mediumGrey text-sm font-semibold">
          No of Passengers
        </h5>
        <p className="text-foundationBlue font-medium text-sm">
          {/* {selectedRow?.PASSENGERS} */} expected
        </p>
      </div>
      <div className="flex justify-between items-center py-3 border-b border-border">
        <h5 className="text-mediumGrey text-sm font-semibold">
          Payment Method
        </h5>
        <p className="text-foundationBlue font-medium text-sm">
          {/* {selectedRow?.PAYMENT} */} expected
        </p>
      </div>
      <div className="flex justify-between items-center py-3 border-b border-border">
        <h5 className="text-mediumGrey text-sm font-semibold">No of Luggage</h5>
        <p className="text-foundationBlue font-medium text-sm">10</p>
      </div>
      <div className="flex justify-between items-center py-3 border-b border-border">
        <h5 className="text-mediumGrey text-sm font-semibold">Promo-code</h5>
        <p className="text-foundationBlue font-medium text-sm">
          #4758-84757-85758
        </p>
      </div>
      <div className="flex justify-between items-center py-3 border-b border-border">
        <h5 className="text-mediumGrey text-sm font-semibold">Mode of Ride</h5>
        <p className="text-foundationBlue font-medium text-sm">
          Schedule for later
        </p>
      </div>
    </div>
  );
};

export default RideDetail;
