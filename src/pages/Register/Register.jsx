import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "./../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, updateUserProfile } = useAuth();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (!/^(\+)?880\d{10}$/.test(phone) || phone.length !== 14) {
      setError(
        "Invalid phone number. Please enter a valid Bangladeshi mobile number starting with '+880'."
      );
      return;
    }

    const email = `${phone}@example.com`;
    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);

        updateUserProfile(name, phone)
          .then(() => {
            const savedUser = { name: name, phoneNumber: phone };
            axios.post("http://localhost:5000/users", savedUser).then((res) => {
              if (res.data.insertedId) {
                
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Successfully account created",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate("/");
              }
            });
          })
          .catch((error) => {
            console.error("Error updating user profile:", error);
          });
      })
      .catch((error) => {
        console.error("Error creating user:", error);
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
        Please Register
      </h3>
      <form className="p-10" onSubmit={handleRegister}>
        <label className="label">
          <span className="text-xl font-medium mb-3">Name</span>
        </label>
        <input
          type="text"
          className="input input-bordered w-2/3 mb-4"
          value={name}
          placeholder="Enter your Name"
          onChange={(e) => setName(e.target.value)}
        />
        <label className="label">
          <span className="text-xl font-medium mb-3">Phone Number</span>
        </label>
        <input
          type="tel"
          pattern="(\+)?880\d{10}"
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
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input type="submit" className="btn btn-primary" value="Register" />
        {error && <p className="text-error">{error}</p>}
      </form>
      <p className="ml-10 mb-10">
      Already registered? <Link className="text-secondary" to="/login">Go to login</Link>
      </p>
    </div>
  );
};

export default Register;
