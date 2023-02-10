import React from "react";
import { useContext } from "react";
import { UserContext } from "../../context";

const BookTest = ({ book }) => {
  const { userName } = useContext(UserContext);

  //   console.log(name);

  return (
    <div>
      {console.log("Return worked", book)}
      <div>{/* <img src={book.thumbnailUrl} alt="" /> */}</div>
      <div>
        <h2>{userName}</h2>
        <h2>{book.title}</h2>
        <img src={book.thumbnailUrl} alt="" />
        <button
          onClick={() => {
            // setUserName("Saraa");
          }}
        >
          Change
        </button>

        {/* {isLoading && <h4>Уншиж байна</h4>}
        {!isLoading && error && <div>{error}</div>}
        {!isLoading && !error && data.map((d) => <h2>{d.name}</h2>)} */}
      </div>
    </div>
  );
};

export default BookTest;
