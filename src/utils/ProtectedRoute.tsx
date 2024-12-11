import { useNavigate, Outlet } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";
import { useEffect } from "react";

export const ProtectedRoute = () => {
  const { accessToken } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      navigate("/login");
    }
  }, [accessToken, navigate]);
  if (!accessToken) {
    return null;
  }

  return <Outlet />;
};
