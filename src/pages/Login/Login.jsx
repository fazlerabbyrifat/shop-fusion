import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from './../../hooks/useAuth';
import Swal from "sweetalert2";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const {signIn} = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = `${phone}@example.com`;
    console.log(email)
    signIn(email, password)
    .then(result => {
        const user = result.user;
        console.log(user);
        setError("");
        Swal.fire({
          title: 'User successfully signed in',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        });
        navigate('/');
    })
    .catch((err) => {
        setError(err.message);
      });
  };

  const handlePhoneNumberChange = (e) => {
    const inputPhoneNumber = e.target.value;
    const cleanedPhoneNumber = inputPhoneNumber.replace(/\D/g, "").slice(0, 13);

    if (cleanedPhoneNumber.startsWith("880")) {
      setPhone(`+${cleanedPhoneNumber}`);
    } else if (cleanedPhoneNumber.startsWith("1")) {
      setPhone(`+880${cleanedPhoneNumber}`);
    } else {
      setPhone(cleanedPhoneNumber);
    }
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
          type="tel"
          className="input input-bordered w-2/3 mb-4"
          value={phone}
          onChange={handlePhoneNumberChange}
          placeholder="Enter your mobile number"
          required
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
