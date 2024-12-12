import { useQuery } from "@tanstack/react-query";

import axiosInstance from "@/hooks/axiosInstace";
type ResType = {
  success: boolean;
  data: {
    items: UserDataItem[];
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

export interface UserDataItem {
  _id: string;
  phoneNumber: string;
  email: string;
  firstName: string;
  lastName: string;
  isVerified: boolean;
  isBlocked: boolean;
  userRegistrationCompleted: boolean;
  createdAt: string;
  updatedAt: string;
  userlocation: userlocationType;
  __v: number;
}

export interface userlocationType {
  coordinates: Coordinates;
  address: string;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export const QUERY_KEY_USERS = "getUsers";

const getUsers = async (params: Record<string, any> = {}): Promise<ResType> => {
  const response = await axiosInstance.get(`/admin/users/paginated`, {
    params,
  });

  return response.data;
};

const useGetUsers = (params?: Record<string, any>) => {
  return useQuery<ResType>({
    queryKey: [QUERY_KEY_USERS, params],
    queryFn: () => getUsers(params),
    staleTime: 10,
  });
};

export default useGetUsers;
