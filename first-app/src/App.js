// import css from "./App.module.css";
// import "./App.scss";
// import Home from "./page/home";
// import Detail from "./page/detail";
import "./custome.scss";
import { Button } from "react-bootstrap";

function App() {
  // return <Detail />;
  return (
    <div>
      <Button variant="primary">Primary</Button>{" "}
      <Button variant="secondary">Secondary</Button>{" "}
      <Button variant="success">Success</Button>{" "}
      <Button variant="warning">Warning</Button>{" "}
      <Button variant="danger">Danger</Button>{" "}
      <Button variant="info">Info</Button>{" "}
      <Button variant="light">Light</Button>{" "}
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
    </div>
  );
}
export default App;
