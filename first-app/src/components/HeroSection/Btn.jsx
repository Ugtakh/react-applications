const Btn = (props) => {
  const handleClick = (name) => {
    alert("Hello-" + name);
  };

  return (
    <button
      className={props.classNer}
      href="{item.link}"
      onClick={() => {
        handleClick(props.name);
      }}
    >
      <img src={props.icon} alt="icon" />
      {props.name}
    </button>
  );
};

export default Btn;
