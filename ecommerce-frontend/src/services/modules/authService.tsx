import axiosInstance from "../api/axiosInstance";

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
      const uuid = response.data.uuid;
      // Lưu token, uuid vào localStorage
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
    localStorage.removeItem("authUuid");
    delete axiosInstance.defaults.headers.Authorization;

    return true;
  },
};

export default authService;
