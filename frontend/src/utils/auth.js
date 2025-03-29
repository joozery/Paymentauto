// utils/auth.js
export const isLoggedIn = () => {
    return !!localStorage.getItem("token");
  };
  
  export const getUser = () => {
    return JSON.parse(localStorage.getItem("user"));
  };