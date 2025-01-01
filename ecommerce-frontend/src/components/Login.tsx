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
    <div>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
