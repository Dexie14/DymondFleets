import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";

import axiosInstance from "@/hooks/axiosInstace";

type ResponseType = {
  success: boolean;
  data: string;
};

type ErrorType = { error: string; success: boolean };

const LoginAdmin = (formData: FormData): Promise<ResponseType> => {
  return axiosInstance.post(`/admin/login`, formData);
};

const useLoginAdmin = () => {
  return useMutation<ResponseType, AxiosError<ErrorType>, FormData>({
    mutationFn: (formData: FormData) => LoginAdmin(formData),
  });
};

export default useLoginAdmin;
