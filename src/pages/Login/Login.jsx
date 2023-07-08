import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    // const user = usersData.users.find((userData) => userData.phone === phone);
    // if (user && user.password === password) {
    //   const token = jwt.sign(user, "your-secret-key");
    //   setPhone("");
    //   setPassword("");
    //   setError("");
    // } else {
    //   setError("Invalid credentials");
    // }
  };

  return (
    <div className="card w-full md:w-1/2 shadow-2xl bg-base-100 mx-auto my-10">
      <h3 className="text-3xl font-bold uppercase text-center my-5">
        Please Login
      </h3>
      <form className="p-10" onSubmit={handleLogin}>
        <label className="label">
          <span className="text-xl font-medium mb-3">Phone Number</span>
        </label>
        <input
          type="number"
          className="input input-bordered w-2/3 mb-4"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <br />
        <label className="label">
          <span className="text-xl font-medium mb-3">Password</span>
        </label>
        <input
          type="password"
          className="input input-bordered w-2/3 mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input type="submit" className="btn btn-primary" value="Login" />
        {error && <p className="text-error">{error}</p>}
      </form>
      <p className="ml-10 mb-10">
          New here? <Link className="text-secondary" to="/register">Create a new account</Link>
      </p>
    </div>
  );
};

export default Login;
