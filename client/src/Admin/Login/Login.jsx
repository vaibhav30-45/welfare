import "./Login.css";

import { useState } from "react";

import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash
} from "react-icons/fa";

import loginImage from "../../assets/admin-login.jpg";
// import logo from "../../assets/logo.png";

const Login = () => {

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({

    email: "",

    password: "",

    remember: false,

  });

  const handleChange = (e) => {

    const { name, value, type, checked } = e.target;

    setFormData({

      ...formData,

      [name]: type === "checkbox" ? checked : value,

    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    console.log(formData);

    // Backend Login API Here

  };

  return (

    <section className="admin-login">

      <div className="login-left">

        <img
          src={loginImage}
          alt="Admin Login"
        />

        <div className="left-overlay">

          <h1>

            SAHYOG

          </h1>

          <h2>

            Welfare Foundation

          </h2>

          <p>

            Welcome to the Admin Dashboard.

            Manage Programs, Events,

            Gallery and Donations from

            one secure place.

          </p>

        </div>

      </div>

      <div className="login-right">

        <form
          className="login-card"
          onSubmit={handleSubmit}
        >

          {/* Logo */}

          {/*

          <img
          src={logo}
          className="login-logo"
          alt=""
          />

          */}

          <span className="login-tag">

            ADMIN PANEL

          </span>

          <h2>

            Welcome Back 👋

          </h2>

          <p>

            Login to continue

          </p>
                    {/* Email */}

          <div className="input-group">

            <label>Email Address</label>

            <div className="input-box">

              <FaEnvelope className="input-icon" />

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />

            </div>

          </div>

          {/* Password */}

          <div className="input-group">

            <label>Password</label>

            <div className="input-box">

              <FaLock className="input-icon" />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />

              <span
                className="password-toggle"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}
              </span>

            </div>

          </div>

          {/* Remember */}

          <div className="login-options">

            <label className="remember-me">

              <input
                type="checkbox"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
              />

              Remember Me

            </label>

            <a href="/forgot-password">

              Forgot Password?

            </a>

          </div>

          {/* Button */}

          <button
            type="submit"
            className="login-btn"
          >
            Login
          </button>

          {/* Bottom */}

          <div className="login-footer">

            <p>

              © 2026 Sahyog Welfare Foundation

            </p>

          </div>

        </form>

      </div>

    </section>

  );

};

export default Login;