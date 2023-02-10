import React, { useEffect, useState } from "react";
import axios from "axios";
import { Typography, Button } from "@mui/material";
import { useParams } from "react-router-dom";
import BookTest from "../../components/BookTest";

const BookDetail = ({ books }) => {
  const loc = useParams();
  const book = books[loc.id];
  const [act, setAct] = useState(true);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      // const res = await fetch("https://dummyjson.com/products", {
      //   method: "post",
      // });
      // const d = await res.json();
      const d = await axios.get("http://localhost:8000/users");
      console.log(d.data);
      setData(d.data.users);
      setTimeout(() => {
        setIsLoading(false);
      }, 5000);
    } catch (error) {
      console.log("Err", error);
      setIsLoading(false);
      setError("Алдаа гарлаа.");
    }
  };

  // useEffect(() => {});
  useEffect(() => {
    // getData();
  }, []);

  return <BookTest book={book} />;
};

export default BookDetail;
//  {
//    /* <h1>{book.title}</h1>
//         <h3>{book.authors}</h3> */
//  }
//  {
//    /* <h1 style={{ fontSize: 100, fontFamily: "Digital-7" }}>
//           {hr.toString().padStart(2, "0") +
//             ":" +
//             min.toString().padStart(2, "0") +
//             ":" +
//             sec.toString().padStart(2, "0")}
//         </h1> */
//  }
