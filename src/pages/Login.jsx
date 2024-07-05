import { Link, redirect, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import axios from "axios";
import { useState, useEffect } from "react";
import logs from "../assets/logs.svg";
import boatload from "../assets/boatload.svg";
import hexa from "../assets/hexa.svg";
import deercliff from "../assets/deercliff.svg";
import semicircle from "../assets/semicircle.svg";
import sunrise from "../assets/sunrise.svg";

import "./styles/login.css";
import { useLogin } from "../components/contexts/LoginContext"

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {addLogin, loginData} = useLogin();

  useEffect(() => {
    if(loginData && loginData.status === true){
      setLoggedIn(true)
    }
    if (loggedIn) {
      navigate("/");
    }
  }, [loggedIn]);



  const signIn = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      email: email,
      password: password
    };
  
    axios
      .post("https://typeracer-backend.onrender.com/api/users/login", data)
      .then(response => {
        console.log(response, response.status);
        if (response.status === 200) {
          const curData = response.data;

          addLogin({  
            data: {
              token: curData.token,
              email: email,
              name: curData.data.name,
              role: curData.data.role,
              status: true
            }
           });
          setLoggedIn(true);
  
          // Handle successful login here, e.g., redirecting to another page
          // Example: navigate('/')
  
          alert("You're successfully logged in.✅");
        } else {
          console.log("Login unsuccessful");
          alert("Login unsuccessful.❌");
        }
      })
      .catch(err => {
        console.log("IM HERE");
        console.log(err);
        alert("Login unsuccessful.❌");
      })
      .finally(() => {
        setLoading(false);
      });
  };
  
  return (
    <>
    {loginData && <div className="bg-black text-white">{loginData.email}</div>}
    
    <section className="login-section w-[100vw] h-[100vh] bg-green-1000 flex items-center justify-center">
      <div className="flex flex-column items-center justify-center text-off-white p-5 max-w-[45vw]">
        <h2 className="text-4xl font-black">INFOTREK'24</h2>
        <h1 className="text-center text-6xl font-black">GET STARTED</h1>
        <p className="text-xl text-center mt-3">
          Embark on a digital journey with us. Explore, learn, and connect at
          our exciting online events.
        </p>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="text-green-1000 px-4 py-3 rounded w-100 text-xl decoration-none outline-none mb-3"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="text-green-1000 px-4 py-3 rounded w-100 text-xl decoration-none outline-none mb-3"
        />
        <button
          disabled={
            email.length === 0 || password.length === 0 || loading
          }
          className={
            email.length === 0 || password.length === 0 || loading
              ? "p-2 w-100 rounded mt-3 text-2xl font-semibold border"
              : "p-2 w-100 rounded mt-3 text-2xl font-semibold text-green-1000 bg-neon-80 border"
          }
          onClick={signIn}
        >
          {loading ? <div className="loader"></div> : "LOGIN"}
        </button>
        <div className="mt-2 text-xl">
          New?
          <Link
            className="text-neon-100 ml-2 no-underline hover:text-neon-80"
            to="/register"
          >
            Register
          </Link>
        </div>
        <img src={logs} alt="img-1" key={uuid()} className="random-img img-1" />
        <img src={hexa} alt="img-3" key={uuid()} className="random-img img-3" />
        <img
          src={boatload}
          alt="img-2"
          key={uuid()}
          className="random-img img-2"
        />
        <img
          src={deercliff}
          alt="img-4"
          key={uuid()}
          className="random-img img-4"
        />
        <img
          src={semicircle}
          alt="img-5"
          key={uuid()}
          className="random-img img-5"
        />
        <img
          src={sunrise}
          alt="img-6"
          key={uuid()}
          className="random-img img-6"
        />
      </div>
    </section>
    </>
  );
}

export default Login;

// import React, { useState } from "react";
// import { useLogin } from "../components/contexts/LoginContext";

// export default function Login() {
//   const { loginData, addLogin } = useLogin();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   console.log("aya aya", loginData)

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addLogin({
//       data: {
//         token: "curData.token",
//         email: email,
//         name: "curData.data.name",
//         role: "curData.data.role",
//         status: true,
//       },
//     });
//     setEmail("");
//     setPassword("");
//   };

//   return (
//     <form className="flex" onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Write Name..."
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
//       />
//       <input
//         type="password"
//         placeholder="Write Password..."
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
//       />
//       <button
//         type="submit"
//         className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
//       >
//         Add
//       </button>
//     </form>
//   );
// }
