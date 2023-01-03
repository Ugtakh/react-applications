// import styles from "./UserCard.module.css";
import "./UserCard.css";

export const UserCard = (props) => {
  return (
    <div className="card">
      <div>{/* <img src={user.imageUrl} alt="zurag" /> */}</div>
      <div>
        <h2 className="AppLink">Name: {props.name}</h2>
        <p>Age: {props.age}</p>
      </div>
    </div>
  );
};

// export default UserCard;
