import { useState } from "react";
import authService from "../services/modules/authService";
import { showToast, ToastType } from "../utils/toast";
import { useNavigate } from "react-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await authService.login({ email, password });
      showToast(ToastType.SUCCESS, "Đăng nhập thành công!");
      const uuid = response.data.uuid;
      navigate(`/dashboard/${uuid}`);
    } catch (error) {
      showToast(ToastType.ERROR, "Đăng nhập thất bại!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Đăng nhập
        </h2>

        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <input
            type="password"
            placeholder="Mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          onClick={handleLogin}
          className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          Đăng nhập
        </button>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-500">
            Chưa có tài khoản?{" "}
            <a href="/register" className="text-blue-600 hover:underline">
              Đăng ký ngay
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
