import { useQuery } from "@tanstack/react-query";

import axiosInstance from "@/hooks/axiosInstace";
type ResType = {
  success: boolean;
  data: any
};

export const QUERY_KEY_OVERVIEW = "getOverview";

const getOverview = async (): Promise<ResType> => {
  const response = await axiosInstance.get(`/admin/overview`);

  return response.data;
};

const useGetOverview = () => {
  return useQuery<ResType>({
    queryKey: [QUERY_KEY_OVERVIEW],
    queryFn: getOverview,
    staleTime: 10,
  });
};

export default useGetOverview;
