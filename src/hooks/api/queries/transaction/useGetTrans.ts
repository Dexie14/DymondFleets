import { useQuery } from "@tanstack/react-query";

import axiosInstance from "@/hooks/axiosInstace";
type ResType = {
  success: boolean;
  data: {
    items: TransDataItem[];
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

export interface TransDataItem {
  _id: string;
  walletId: string;
  type: string;
  amount: number;
  currency: string;
  status: string;
  description: string;
  reference: string;
  providerReference: string;
  createdAt: string;
  updatedAt: string;
}

export const QUERY_KEY_TRANS = "getTrans";

const getTrans = async (params: Record<string, any> = {}): Promise<ResType> => {
  const response = await axiosInstance.get(`/admin/transaction/paginated`, {
    params,
  });

  return response.data;
};

const useGetTrans = (params?: Record<string, any>) => {
  return useQuery<ResType>({
    queryKey: [QUERY_KEY_TRANS, params],
    queryFn: () => getTrans(params),
    staleTime: 10,
  });
};

export default useGetTrans;
