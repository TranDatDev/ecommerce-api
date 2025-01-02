import axiosInstance from "../api/axiosInstance";
import { jwtDecode } from "jwt-decode";

interface JwtPayload {
  id: string;
  email: string;
  role: string;
  uuid: string;
}

interface AuthData {
  email: string;
  password: string;
}

const authService = {
  login: async (data: AuthData) => {
    const response = await axiosInstance.post("/auth/login", data);

    // Kiểm tra và lưu token, uuid vào localStorage
    if (response.data && response.data.token) {
      const token = response.data.token;
      const decoded = jwtDecode<JwtPayload>(token);
      const uuid = decoded.uuid;
      localStorage.setItem("authToken", token);
      localStorage.setItem("authUuid", uuid);
      // Cập nhật Authorization header cho các request sau
      axiosInstance.defaults.headers.Authorization = `Bearer ${token}`;
    }

    return response;
  },

  register: async (data: AuthData) => {
    return axiosInstance.post("/auth/register", data);
  },

  logout: async () => {
    // Xóa token khỏi localStorage và header
    localStorage.removeItem("authToken");
    delete axiosInstance.defaults.headers.Authorization;

    return true;
  },
};

export default authService;
