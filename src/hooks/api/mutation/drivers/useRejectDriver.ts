import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";

import axiosInstance from "@/hooks/axiosInstace";

type ResponseType = {
  success: boolean;
  data: string;
};

type InputType = {
  id: string;
  reason: string;
};

type ErrorType = { error: string; success: boolean };

const RejectDriver = (input: InputType): Promise<ResponseType> => {
    const { id, ...data } = input;
  return axiosInstance.patch(`/admin/reject/${id}`, data);
};

const useRejectDriver = () => {
  return useMutation<ResponseType, AxiosError<ErrorType>, InputType>({
    mutationFn: (input: InputType) => RejectDriver(input),
  });
};

export default useRejectDriver;
