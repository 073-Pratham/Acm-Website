import { Link, useNavigate } from "react-router-dom";
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
import { useLogin } from "../components/contexts/LoginContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { addLogin, loginData } = useLogin();

  useEffect(() => {
    if (loginData && loginData.status === true) {
      setLoggedIn(true);
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
      password: password,
    };

    axios
      .post("https://backend.infotrek24.tech/api/users/login", data)
      .then((response) => {
        console.log("Response")
        console.log(response, response.status);
        if (response.status === 200) {
          const curData = response.data;
          addLogin({
            data: {
              id: curData.data.id,
              token: curData.token,
              email: email,
              name: curData.data.name,
              dob: curData.data?.dob,
              gender: curData.data?.gender,
              status: true
            },
          });
          setLoggedIn(true);

          alert("You're successfully logged in.✅");
        } else {
          console.log("Login unsuccessful");
          alert("Login unsuccessful.❌");
        }
      })
      .catch((err) => {
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

      <section className="login-section flex items-center justify-center min-h-screen bg-green-1000">
        <div className="flex flex-col items-center justify-center text-off-white p-5 max-w-[90vw] sm:max-w-[60vw] lg:max-w-[45vw]">
          <h2 className="text-4xl sm:text-5xl font-black">INFOTREK'24</h2>
          <h1 className="text-6xl sm:text-7xl font-black mt-3">GET STARTED</h1>
          <p className="text-xl sm:text-2xl text-center mt-3">
            Embark on a digital journey with us. Explore, learn, and connect at
            our exciting online events.
          </p>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-green-1000 px-4 py-3 rounded w-full sm:w-[80%] lg:w-[70%] text-xl decoration-none outline-none mb-3"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="text-green-1000 px-4 py-3 rounded w-full sm:w-[80%] lg:w-[70%] text-xl decoration-none outline-none mb-3"
          />
          <button
            disabled={email.length === 0 || password.length === 0 || loading}
            className={`p-2 w-full sm:w-[50%] lg:w-[40%] rounded mt-3 text-2xl font-semibold ${
              email.length === 0 || password.length === 0 || loading
                ? "border"
                : "text-green-1000 bg-neon-80 border"
            }`}
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
          <div className="mt-4">
            <img src={logs} alt="img-1" className="random-img img-1" />
            <img src={hexa} alt="img-3" className="random-img img-3" />
            <img src={boatload} alt="img-2" className="random-img img-2" />
            <img src={deercliff} alt="img-4" className="random-img img-4" />
            <img src={semicircle} alt="img-5" className="random-img img-5" />
            <img src={sunrise} alt="img-6" className="random-img img-6" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
