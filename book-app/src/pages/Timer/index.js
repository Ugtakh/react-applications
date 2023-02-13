import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context";

const Timer = () => {
  const { setUserName } = useContext(UserContext);
  const navigate = useNavigate();
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <div>
      <h1>Timer: {count}</h1>
      <button
        onClick={() => {
          setUserName("SODOO");
          navigate("/books/0");
        }}
      >
        Neriig Uurchluh
      </button>
    </div>
  );
};

export default Timer;
