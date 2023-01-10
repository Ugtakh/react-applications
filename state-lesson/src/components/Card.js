import Card from "react-bootstrap/Card";

function CardItem(props) {
  return (
    <Card style={{ width: "18rem", margin: 10 }}>
      <Card.Img variant="top" src={props.user.profileImg} />
      <Card.Body>
        <Card.Title>{props.user.first}</Card.Title>
        <Card.Text>
          {props.user.email} - {props.user.address}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardItem;
