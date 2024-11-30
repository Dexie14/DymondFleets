import { useQuery } from "@tanstack/react-query";

import axiosInstance from "@/hooks/axiosInstace";
type ResType = {
  success: boolean;
  data: any;
};

export const QUERY_KEY_PROFILE = "GetProfile";

const getProfile = async (): Promise<ResType> => {
  const response = await axiosInstance.get(`/admin/profile`);

  return response.data;
};

  const useGetNews = () => {
    return useQuery<ResType>({
      queryKey: [QUERY_KEY_PROFILE], 
      queryFn: getProfile, 
      staleTime: Infinity, 
    });
  };

export default useGetNews;
