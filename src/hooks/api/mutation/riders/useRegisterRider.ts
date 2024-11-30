import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";

import axiosInstance from "@/hooks/axiosInstace";

type ResponseType = {
  success: boolean;
  data: string;
};

type InputType = {
  userId: string;
  command: string;
  message: string;
};

type ErrorType = { error: string; success: boolean };

const RegisterRider = (
  input: InputType
): Promise<ResponseType> => {
  return axiosInstance.post(`/rider/create`, input);
};



const useRegisterRider = () => {
    return useMutation<ResponseType, AxiosError<ErrorType>, InputType>({
      mutationFn: (input: InputType) => RegisterRider(input), 
    });
  };

export default useRegisterRider;
