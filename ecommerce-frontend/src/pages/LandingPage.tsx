import React from "react";
import { Link } from "react-router";

const LandingPage: React.FC = () => {
  return (
    <div className="">
      <h1>Ecommerce</h1>
      <p>Đăng nhập để thực hiện</p>
      <Link to="/login">
        <button>Go to Login</button>
      </Link>
    </div>
  );
};

export default LandingPage;
