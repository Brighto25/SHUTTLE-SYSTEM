import { useState } from "react";

function SignUpForm({ onLogin }) {
  const [name, setName] = useState("");
  const [index, setIndex] = useState("");
  const [programme, setProgramme] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (!name || !index || !programme || !password) {
      alert("Please fill in all fields.");
      return;
    }
    const newUser = { index, pass: password, name, programme };
    onLogin(newUser);
  };

  return (
    <div>
      <div className="form-group">
        <label>Full Name</label>
        <input
          type="text"
          placeholder="e.g. Kwame Asante"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Index Number</label>
        <input
          type="text"
          placeholder="e.g. UCC/CS/22/0101"
          value={index}
          onChange={(e) => setIndex(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Programme</label>
        <select
          value={programme}
          onChange={(e) => setProgramme(e.target.value)}
        >
          <option value="">Select programme</option>
          <option>BSc Computer Science</option>
          <option>BSc Information Technology</option>
          <option>BA Economics</option>
          <option>BSc Mathematics</option>
          <option>BSc Physics</option>
        </select>
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          placeholder="Create a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button className="btn btn-primary" onClick={handleSubmit}>
        Create Account →
      </button>
    </div>
  );
}

export default SignUpForm;
