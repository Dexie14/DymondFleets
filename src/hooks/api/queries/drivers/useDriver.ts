import { useQuery } from "@tanstack/react-query";

import axiosInstance from "@/hooks/axiosInstace";
type ResType = {
  success: boolean;
  data: {
    items: DriverDataItem[];
    pagedInfo: PaginationType;
  };
};

export type PaginationType = {
  hasNext: boolean;
  hasPrevious: boolean;
  limit: number;
  page: number;
  total: number;
};

export interface DriverDataItem {
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

export const QUERY_KEY_DRIVERS = "getDrivers";

const getDrivers = async (params: Record<string, any> = {}): Promise<ResType> => {
  const response = await axiosInstance.get(`/admin/riders/paginated`, { params });

  return response.data;
};

const useGetDriver = (params?: Record<string, any>) => {
  return useQuery<ResType>({
    queryKey: [QUERY_KEY_DRIVERS, params],
    // queryFn: getDrivers,
    queryFn: () => getDrivers(params), 
    staleTime: 10,
  });
};

export default useGetDriver;
