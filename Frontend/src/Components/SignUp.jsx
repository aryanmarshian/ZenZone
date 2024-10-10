/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import HashLoader from "react-spinners/HashLoader";
import signupImg from "../assets/images/signup.gif";
import logo from "../assets/images/ZENZONE3.jpg";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "Admin",
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const signupSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const payload = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      role: formData.role,
    };

    try {
      let res = await axios.post("http://localhost:3000/api/auth/register", payload);
      setFormData({
        name: "",
        email: "",
        password: "",
        role: "Admin",
      });
      setLoading(false);
      toast.success(res.data.message);
      navigate("/login");
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.dashTop}>
        <img
          onClick={() => navigate("/")}
          src={logo}
          alt="Logo"
          style={styles.logo}
        />
        <span className="brand-name">ZENZONE</span> {/* Added brand name */}
        <button
          style={styles.homeButton}
          onClick={() => navigate("/")}
        >
          Home
        </button>
      </div>

      <section style={styles.section}>
        <div style={styles.formContainer}>
          <h3 style={styles.welcomeTitle}>
            Create <span style={styles.highlightText}>Account</span>
          </h3>

          <form style={styles.form} onSubmit={signupSubmitHandler}>
            <div style={styles.inputGroup}>
              <input
                style={styles.input}
                type="text"
                placeholder="Full Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div style={styles.inputGroup}>
              <input
                style={styles.input}
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div style={styles.inputGroup}>
              <input
                style={styles.input}
                type="password"
                placeholder="Password"
                name="password"
                autoComplete="off"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>

            <div style={styles.inputGroup}>
              <label htmlFor="role" style={styles.label}>You are a:</label>
              <select
                name="role"
                id="role"
                value={formData.role}
                onChange={handleInputChange}
                style={styles.select}
              >
                <option value="Admin">Admin</option>
                <option value="Doctor">User</option>
                
              </select>
            </div>

            <button disabled={loading} style={styles.submitButton} type="submit">
              {loading ? <HashLoader size={25} color="#fff" /> : "Sign up"}
            </button>

            <p style={styles.registerText}>
              Already have an account?{" "}
              <Link to="/login" style={styles.loginLink}>
                Login
              </Link>
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "#f4f4f4",
  },
  dashTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: "15px 20px",
    backgroundColor: "#2B4C5D",
    position: "fixed",
    top: 0,
    zIndex: 1000,
  },
  logo: {
    height: "70px",
    cursor: "pointer",
  },
  homeButton: {
    backgroundColor: "#58849a ",
    color: "white",
    padding: "12px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background 0.3s",
  },
  section: {
    marginTop: "150px", // Increased margin to shift the form container down
    padding: "20px",
    width: "100%",
    maxWidth: "900px", // You can adjust this width if needed
  },
  formContainer: {
    background: "#ffffff",
    padding: "20px 40px",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "700px",
    margin: "0 auto",
  },
  welcomeTitle: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#2b5171", 
    
    marginBottom: "20px",
  },
  highlightText: {
    color: "#396e85",
  },
  inputGroup: {
    marginBottom: "15px",
  },
  input: {
    width: "100%",
    padding: "12px",
    border: "1px solid #396e85",
    borderRadius: "100px",
    transition: "border 0.3s",
  },
  label: {
    display: "block",
    marginBottom: "8px",
    color: "#2b5171",
    fontWeight: "bold",
  },
  select: {
    width: "100%",
    padding: "12px",
    border: "1px solid #396e85",
    borderRadius: "100px",
  },
  submitButton: {
    backgroundColor: "#58849a ",
  
  color: "#fff",//
    padding: "12px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    width: "100%",
    transition: "background 0.3s",
  },
  registerText: {
    marginTop: "15px",
    textAlign: "center",
    color: "#2b5171",
  },
  loginLink: {
    color: "#396e85",
    fontWeight: "medium",
    textDecoration: "none",
  },
};

export default SignUp;