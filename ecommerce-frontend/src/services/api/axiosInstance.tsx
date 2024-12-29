import axios from "axios";

// Lấy token từ localStorage
const token = localStorage.getItem("authToken");

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_ECOMMERCE_BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: token ? `Bearer ${token}` : "",
  },
});

// Interceptor để xử lý lỗi hoặc logging nếu cần
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.log("Token expired or unauthorized");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
