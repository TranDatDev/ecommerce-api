import axiosInstance from "../api/axiosInstance";

interface AuthData {
  email: string;
  password: string;
}

const authService = {
  login: async (data: AuthData) => {
    const response = await axiosInstance.post("/auth/login", data);

    // Kiểm tra và lưu token vào localStorage
    if (response.data && response.data.token) {
      const token = response.data.token;

      // Lưu token vào localStorage
      localStorage.setItem("authToken", token);

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

    return axiosInstance.post("/auth/logout");
  },
};

export default authService;
