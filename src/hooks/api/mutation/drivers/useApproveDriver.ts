import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";

import axiosInstance from "@/hooks/axiosInstace";

type ResponseType = {
  success: boolean;
  data: string;
};

type InputType = {
  id: string;
};

type ErrorType = { error: string; success: boolean };

const ApproveDriver = (input: InputType): Promise<ResponseType> => {
    const { id, ...data } = input;
  return axiosInstance.patch(`/admin/approve/driver/${id}`, data);
};

const useApproveDriver = () => {
  return useMutation<ResponseType, AxiosError<ErrorType>, InputType>({
    mutationFn: (input: InputType) => ApproveDriver(input),
  });
};

export default useApproveDriver;
