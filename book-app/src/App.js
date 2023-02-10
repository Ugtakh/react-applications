import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BookList from "./pages/BookList";
import BookDetail from "./pages/BookDetail";
import { books } from "./data";
import { UserContext } from "./context";

import { createTheme, ThemeProvider } from "@mui/material";
import Timer from "./pages/Timer";

function App() {
  const [userName, setUserName] = useState("Naraa");
  // const [isDark, setIsDark] = useState(false);

  // const theme = createTheme({
  //   palette: {
  //     mode: isDark ? "dark" : "light",
  //     primary: {
  //       main: isDark ? "#449988" : "#228630",
  //     },
  //     ...(isDark
  //       ? {
  //           background: {
  //             default: "#F38630",
  //             paper: "#995511",
  //           },
  //         }
  //       : {
  //           background: {
  //             default: "#228630",
  //             paper: "#228630",
  //           },
  //         }),
  //   },
  // });

  // const changeMode = (e) => {
  //   setIsDark(!isDark);
  //   console.log("First", e.target.checked);
  // };

  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/books" element={<BookList books={books} />} />

        <Route path="/books/:id" element={<BookDetail books={books} />} />

        <Route path="/timer" element={<Timer />} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;

// <ThemeProvider>
//       {/* theme={theme} */}
// {/* <Navbar changeMode={changeMode} /> */ }
// </ThemeProvider>
