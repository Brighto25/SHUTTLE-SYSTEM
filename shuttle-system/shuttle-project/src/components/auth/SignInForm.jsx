import { useState } from "react";

function SignInForm({ onLogin }) {
  const [index, setIndex] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const DEMO_USERS = [
    {
      index: "UCC/CS/21/0042",
      pass: "demo123",
      name: "Kofi Mensah",
      programme: "BSc Computer Science",
    },
  ];

  const handleSubmit = () => {
    const user = DEMO_USERS.find(
      (u) => u.index === index && u.pass === password,
    );
    if (!user) {
      setError(true);
      return;
    }
    setError(false);
    onLogin(user);
  };

  return (
    <div>
      {error && (
        <div className="error-msg">Incorrect index number or password.</div>
      )}

      <div className="form-group">
        <label>Index Number</label>
        <input
          type="text"
          placeholder="e.g. UCC/CS/21/0042"
          value={index}
          onChange={(e) => setIndex(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button className="btn btn-primary" onClick={handleSubmit}>
        Sign In →
      </button>

      <p className="auth-hint">
        Demo: use index <b>UCC/CS/21/0042</b> / pass <b>demo123</b>
      </p>
    </div>
  );
}

export default SignInForm;
