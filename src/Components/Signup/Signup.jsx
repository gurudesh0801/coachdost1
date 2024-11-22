import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    phone: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState(null); // For success or error messages
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/users/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: "success", text: data.message });
        console.log("User signed up successfully:", data);
        alert("Successfully signed up!");

        // Navigate to another page (e.g., Dashboard) after successful signup
        navigate("/admindashboard"); // Change '/dashboard' to the target route
      } else {
        setMessage({ type: "error", text: data.message || "Signup failed" });
      }
    } catch (error) {
      setMessage({
        type: "error",
        text: "An error occurred. Please try again.",
      });
      console.error("Error during signup:", error);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Signup</h2>
        {message && <p className={`message ${message.type}`}>{message.text}</p>}
        <form className="signup-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            name="phone"
            pattern="[0-9]{10}"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit" className="signup-btn">
            Signup
          </button>
        </form>
        <p className="or-divider">OR</p>
        <div className="social-signup">
          <button
            onClick={() => alert("Google Signup Clicked")}
            className="social-btn google"
          >
            Signup with Google
          </button>
          <button
            onClick={() => alert("LinkedIn Signup Clicked")}
            className="social-btn linkedin"
          >
            Signup with LinkedIn
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
