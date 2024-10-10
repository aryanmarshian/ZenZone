import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import HashLoader from "react-spinners/HashLoader";
import './CSS/Login.css';
import logo from "../assets/images/ZENZONE3.jpg";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const loginSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const payload = {
      email: formData.email,
      password: formData.password,
    };
    try {
      let res = await axios.post("http://localhost:3000/api/auth/login", payload);
      setFormData({
        email: "",
        password: "",
      });

      const { role, token } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      setLoading(false);
      toast.success(res.data.message);

      if (role === 'Admin') {
        navigate('/adminDashboard');
      } else if (role === "Doctor") {
        navigate("/addPatient");
      } else if (role === 'School') {
        navigate("/updateDetail");
      }
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="dash-top">
        <img onClick={() => navigate("/")} src={logo} alt="ZENZONE Logo" className="logo" />
        <span className="brand-name">ZENZONE</span> {/* Added brand name */}

        <button className="btn mt-0" onClick={() => navigate("/")}>Home</button>
      </div>

      {/* New two-column layout */}
      <div className="login-content">
        {/* Left side text */}
        <div className="left-text">
          If you can change your mind, you can change 
          <span className="highlight-blue"> your life</span>
        </div>

        {/* Login form */}
        <section className="login-section">
          <div className="form-container">
            <h3 className="welcome-title">Welcome Back 👋</h3>
            <form className="login-form" onSubmit={loginSubmitHandler}>
              <div className="input-group">
                <input
                  className="form-inp"
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="input-group">
                <input
                  className="form-inp"
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  autoComplete="off"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button disabled={loading} className="btn w-full" type="submit">
                {loading ? <HashLoader size={25} color="#fff" /> : "Login"}
              </button>
              <p className="register-text">
                Don't have an account?{" "}
                <Link to="/register" className="text-primaryColor hover:underline font-medium">
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;