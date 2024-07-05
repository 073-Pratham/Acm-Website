import Nav from "./components/Nav";
import Hero from "./components/Hero";
import ChatButton from "./components/ChatButton";
import { LoginProvider, useLogin } from "./components/contexts/LoginContext";
import { useState } from "react";
import { useEffect } from "react";
import Login from "./pages/Login";

function App() {

  const {loginData} = useLogin();
  return (
    <>
    <Nav/>
    <Hero />
    <ChatButton />
    </>
  );
}

export default App;




