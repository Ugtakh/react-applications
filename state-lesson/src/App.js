import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { datas } from "./data";
import CardList from "./components/CardList";
import Search from "./components/Search";
import { useState } from "react";

function App() {
  const [userList, setUserList] = useState(datas);

  const changeText = (e) => {
    // setSearchValue(e.target.value);
    const filteredUser = datas.filter((user) =>
      user.first.toLowerCase().includes(e.target.value)
    );
    setUserList(filteredUser);
  };

  return (
    <div className="container">
      <h1>User List</h1>
      <Search handleChange={changeText} />
      <CardList users={userList} />
    </div>
  );
}

export default App;
