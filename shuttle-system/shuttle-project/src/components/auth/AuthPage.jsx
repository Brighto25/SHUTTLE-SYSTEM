import { useState } from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

function AuthPage({ onLogin }) {
  const [activeTab, setActiveTab] = useState("signin");

  return (
    <div id="page-auth">
      <div className="auth-box">
        <div className="auth-brand">
          <div className="logo">
            Shuttle<span>Pass</span>
          </div>
          <p>University of Cape Coast — Internal Shuttle Network</p>
        </div>

        <div className="auth-tabs">
          <button
            className={`auth-tab ${activeTab === "signin" ? "active" : ""}`}
            onClick={() => setActiveTab("signin")}
          >
            Sign In
          </button>
          <button
            className={`auth-tab ${activeTab === "signup" ? "active" : ""}`}
            onClick={() => setActiveTab("signup")}
          >
            Sign Up
          </button>
        </div>

        {activeTab === "signin" ? (
          <SignInForm onLogin={onLogin} />
        ) : (
          <SignUpForm onLogin={onLogin} />
        )}
      </div>
    </div>
  );
}

export default AuthPage;
