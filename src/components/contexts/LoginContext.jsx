import { createContext, useContext, useState } from "react";

export const useLogin = () => {
  return useContext(LoginContext);
}

const LoginContext = createContext({
  loginData: {
    id: "",
    name: "",
    email: "",
    dob: "",
    gender: "",
    token: "",
    status: ""
  },
  addLogin: (data) => {
    console.log("data", data);
  }
});

export const LoginProvider = ({ children }) => {
  // Initialize the state with data from local storage if available
  const [loginData, setLoginData] = useState(() => {
    const storedLoginData = localStorage.getItem("loginData");
    if (storedLoginData) {
      try {
        return JSON.parse(storedLoginData);
      } catch (error) {
        console.error("Failed to parse login data from local storage:", error);
        localStorage.removeItem("loginData");
        return {};
      }
    }
    return {};
  });

  const addLogin = (data) => {
    const loginInfo = data.data;
    setLoginData(loginInfo);
    try {
      console.log("Hiii", loginInfo)
      localStorage.setItem("loginData", JSON.stringify(loginInfo));
    } catch (error) {
      console.error("Failed to store login data in local storage:", error);
    }
  };

  return (
    <LoginContext.Provider value={{ loginData, addLogin }}>
      {children}
    </LoginContext.Provider>
  );
};
