import { useState } from "react";
import authService from "../services/modules/authService";
import { showToast, ToastType } from "../utils/toast";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      showToast(ToastType.ERROR, "Mật khẩu không khớp!");
      return;
    }

    try {
      const response = await authService.register({ email, password });
      console.log("Register successful:", response.data);
      showToast(ToastType.SUCCESS, "Đăng ký thành công!");
    } catch (error) {
      console.error("Register failed:", error);
      showToast(ToastType.ERROR, "Đăng ký thất bại!");
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
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
