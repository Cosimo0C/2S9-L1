const ButtonComponent = function (props) {
  return (
    <>
      <div className="bottone">
        <button style={{ backgroundColor: "#FF0000" }}>{props.tit}</button>
      </div>
    </>
  );
};
export default ButtonComponent;
