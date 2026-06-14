import React, { useState } from "react";
import "./OpenFormPOPUP.css"; // See styling below

export default function OpenFormPOPUP() {
  // 1. Manage visibility state
  const [isOpen, setIsOpen] = useState(false);

  // 2. State to capture form data
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted email:", email);
    setIsOpen(false); // Close popup on submit
  };

  return (
    <div className="app-container">
      <h1>Welcome to the App</h1>
      
      {/* Trigger link to open the form popup */}
      <p>
        Need an account?{" "}
        <a 
          href="#open-form" 
          className="open-form-link"
          onClick={(e) => {
            e.preventDefault(); // Prevents default anchor navigation behavior
            setIsOpen(true);
          }}
        >
          Click here to fill the form
        </a>
      </p>

      {/* 3. Conditional rendering of the popup modal */}
      {isOpen && (
        <div className="popup-overlay" onClick={() => setIsOpen(false)}>
          {/* stopPropagation prevents closing the popup when clicking inside the form box */}
          <div className="popup-box" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              &times;
            </button>
            
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email Address:</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="submit-btn">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}