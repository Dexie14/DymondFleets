import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";

import axiosInstance from "@/hooks/axiosInstace";

type ResponseType = {
  success: boolean;
  data: string;
};

// type InputType = {
//   userId: string;
//   command: string;
//   message: string;
// };

type ErrorType = { error: string; success: boolean };

const RegisterRider = (formData: FormData): Promise<ResponseType> => {
  return axiosInstance.post(`/rider/create`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

const useRegisterRider = () => {
  return useMutation<ResponseType, AxiosError<ErrorType>, FormData>({
    // mutationFn: (input: InputType) => RegisterRider(input),
    mutationFn: (formData: FormData) => RegisterRider(formData),
  });
};

export default useRegisterRider;
