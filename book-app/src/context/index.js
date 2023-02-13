import { createContext, useState } from "react";

export const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    console.log(email, password);
    // const response = axios.post("http://localhost:8000/signup", {
    //   email,
    //   password,
    // });
    // const user = response.data; // {message: 'Amjilttai nevterlee', user: {}}
    // setUser(user);
  };

  const signup = () => {};

  const logout = () => {};

  return (
    <UserContext.Provider value={{ login, signup, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
