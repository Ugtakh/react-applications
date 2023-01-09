import { Button } from "react-bootstrap";

const Btn = (props) => {
  return (
    <Button
      variant="danger"
      onClick={() => {
        props.handleChange(props.menu.category);
      }}
    >
      {props.menu.name}
    </Button>
  );
};
export default Btn;
