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
  origin: Location;
  destination: Location;
  _id: string;
  userId: string;
  riderId: string;
  type: string;
  status: string;
  amount: number;
  distance: number;
  currency: string;
  description: string;
  reference: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface Location {
  address: string;
  coordinates: {
    lat: string;
    lng: string;
  };
}

export const QUERY_KEY_RIDES = "getRides";

const getRides = async (params: Record<string, any> = {}): Promise<ResType> => {
  const response = await axiosInstance.get(`/admin/trips/paginated`, {
    params,
  });

  return response.data;
};

const useGetRides = (params?: Record<string, any>) => {
  return useQuery<ResType>({
    queryKey: [QUERY_KEY_RIDES, params],
    // queryFn: getRides,
    queryFn: () => getRides(params),
    staleTime: 10,
  });
};

export default useGetRides;
