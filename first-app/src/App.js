// import css from "./App.module.css";
import "./App.css";
import { users } from "./data";
import { UserCard } from "./components/UserCard/UserCard";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
export default App;
