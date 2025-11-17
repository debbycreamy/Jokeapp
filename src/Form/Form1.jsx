import React, { useState, useEffect } from "react";
import { FaEyeSlash } from "react-icons/fa6";
import { IoEyeSharp } from "react-icons/io5";

const Form1 = () => {
  // STATE
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirm, setErrorConfirm] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  // LOAD SAVED EMAIL FROM localStorage
  useEffect(() => {
    const saved = localStorage.getItem("savedEmail");
    if (saved) setEmail(saved);
  }, []);

  // SIMPLE PASSWORD STRENGTH CHECK
  const getStrength = () => {
    if (password.length < 4) return "Weak";
    if (password.length < 7) return "Medium";
    return "Strong";
  };

  // Progress bar width
  const getStrengthWidth = () => {
    if (password.length === 0) return "0%";
    if (password.length < 4) return "33%";
    if (password.length < 7) return "66%";
    return "100%";
  };

  // Progress bar color
  const getStrengthColor = () => {
    if (password.length < 4) return "red";
    if (password.length < 7) return "orange";
    return "green";
  };

  // SUBMIT HANDLER
  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess("");
    setLoading(true);

    let valid = true;

    // EMAIL VALIDATION
    if (!email.includes("@")) {
      setErrorEmail("Invalid Email Address");
      valid = false;
    } else {
      setErrorEmail("");
    }

    // PASSWORD VALIDATION
    if (password.length < 6) {
      setErrorPassword("Password must be at least 6 characters");
      valid = false;
    } else {
      setErrorPassword("");
    }

    // CONFIRM PASSWORD CHECK
    if (confirm !== password) {
      setErrorConfirm("Passwords do not match");
      valid = false;
    } else {
      setErrorConfirm("");
    }

    if (!valid) {
      setLoading(false);
      return;
    }

    // SUCCESS SIMULATION
    setTimeout(() => {
      setSuccess("Signup Successful!");

      // SAVE EMAIL TO LOCAL STORAGE
      localStorage.setItem("savedEmail", email);

      // CLEAR FIELDS
      setPassword("");
      setConfirm("");
      setLoading(false);
    }, 1200);
  };

  return (
    
    <div style={{ padding: "20px", maxWidth: "350px" }}>
      <h2>Signup Form</h2>

      <form onSubmit={handleSubmit}>
        {/* EMAIL INPUT */}
        <input
          type="text"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        {/* ANIMATED ERROR */}
        {errorEmail && <p style={styles.error}>{errorEmail}</p>}

        {/* PASSWORD INPUT */}
        <div style={{ position: "relative" }}>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />

          {/* EYE ICON */}
          <span
            onClick={() => setShowPassword(!showPassword)}
            style={styles.eye}
          >
            {showPassword ? <IoEyeSharp /> : <FaEyeSlash />}
          </span>
        </div>

        {/* STRENGTH BAR */}
        {password && (
          <div style={styles.strengthBox}>
            <div
              style={{
                ...styles.strengthFill,
                width: getStrengthWidth(),
                background: getStrengthColor(),
              }}
            ></div>
          </div>
        )}

        {/* Password text strength */}
        {password && (
          <p style={{ fontWeight: "bold" }}>Strength: {getStrength()}</p>
        )}

        {/* ANIMATED ERROR */}
        {errorPassword && <p style={styles.error}>{errorPassword}</p>}

        {/* CONFIRM PASSWORD */}
        <input
          type="password"
          placeholder="Confirm password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          style={styles.input}
        />

        {errorConfirm && <p style={styles.error}>{errorConfirm}</p>}

        {/* SUBMIT BUTTON */}
        <button disabled={loading} style={styles.button}>
          {loading ? "Submitting..." : "Submit"}
        </button>

        {/* SUCCESS */}
        {success && <p style={styles.success}>{success}</p>}
      </form>
      
    </div>
  );
};

// STYLES
const styles = {
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    fontSize: "16px",
  },
  button: {
    width: "100%",
    padding: "10px",
    background: "black",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
  error: {
    color: "red",
    marginTop: "-5px",
    marginBottom: "10px",
    fontSize: "14px",
    animation: "fadeIn 0.3s ease",
  },
  success: {
    color: "green",
    marginTop: "10px",
    fontWeight: "bold",
  },
  eye: {
    position: "absolute",
    right: "10px",
    top: "10px",
    cursor: "pointer",
    fontSize: "20px",
  },
  strengthBox: {
    width: "100%",
    height: "5px",
    background: "#ddd",
    borderRadius: "5px",
    marginBottom: "10px",
  },
  strengthFill: {
    height: "100%",
    borderRadius: "5px",
    transition: "0.3s",
  },
};

export default Form1;
