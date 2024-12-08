import { useQuery } from "@tanstack/react-query";

import axiosInstance from "@/hooks/axiosInstace";
type ResType = {
  success: boolean;
  data: {
    items: RideDataItem[];
    pagedInfo: any;
  };
};

export interface RideDataItem {
  location: Location;
  _id: string;
  firstName: string;
  lastName: string;
  riderStatus: string;
  gender: string;
  address: string;
  profilePicUrl: string;
  verificationDocumentUrls: string[];
  vehicleType: string;
  riderType: string;
  vehicleModel: string;
  vehicleRegNo: string;
  vehicleInsurance: string;
  vehicleColor: string;
  vehicleCapacity: number;
  vehicleYear: number;
  vehicleMake: string;
  isBlocked: boolean;
  isVerified: boolean;
  isAvailable: string;
  email: string;
  password: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface Location {
  type: string;
  coordinates: number[];
}

export const QUERY_KEY_RIDES = "getRides";

const getRides = async (): Promise<ResType> => {
  const response = await axiosInstance.get(`/admin/riders/paginated`);

  return response.data;
};

const useGetRides = () => {
  return useQuery<ResType>({
    queryKey: [QUERY_KEY_RIDES],
    queryFn: getRides,
    staleTime: 10,
  });
};

export default useGetRides;
