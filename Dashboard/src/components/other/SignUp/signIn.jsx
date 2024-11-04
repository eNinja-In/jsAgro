import React, { useState } from "react";
import loginStyle from "./signIn.module.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State to store error messages
  const [isSubmitting, setIsSubmitting] = useState(false); // State to disable button
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page
    setError(""); // Reset error before submitting

    // Disable the button immediately
    setIsSubmitting(true);

    try {
      // Make the request to the backend
      console.log({ email, password });
      let response = await fetch(`http://localhost:8080/api/auth/login-user`, {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Response status:", response.status); // Log response status for debugging

      // Check the response status before proceeding
      if (response.status === 200) {
        // Parse the response if successful
        let result = await response.json();
        console.log("Result:", result); // Log result for debugging

        if (result.success) {
          // Store the user data in localStorage
          localStorage.setItem("JSteamMember", JSON.stringify(result));
          // Navigate to the home page after successful login
          navigate("/");
        } else {
          setError(result.message); // Show error message from the response
        }
      } else {
        // If status is not 200, throw an error
        setError("Failed to log in. Please check your credentials.");
      }
    } catch (error) {
      // Catch any network or unexpected errors
      setError(
        "An error occurred while trying to log in. Please try again later."
      );
      console.error("Error:", error); // Log error for debugging
    } finally {
      // Re-enable the button after 2 seconds
      setTimeout(() => {
        setIsSubmitting(false);
      }, 2000);
    }
  };

  return (
    <div className={loginStyle.authContainer}>
      <div className={loginStyle.form}>
        <h2>Login to JS-Agro</h2>

        {/* Display error message */}
        {!error ? (
          <p className={loginStyle.noError}>JS-Agro No Error</p>
        ) : (
          <p className={loginStyle.error}>{error}</p>
        )}

        <form onSubmit={handleSubmit}>
          <div className={loginStyle.formGroup}>
            <input
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={loginStyle.formGroup}>
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className={loginStyle.loginbtn}
            disabled={isSubmitting} // Disable button if isSubmitting is true
          >
            {isSubmitting ? "Please wait..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
