import "./home.css";
const Room = (props) => {
  return (
    <div
      style={{ border: "1px black solid" }}
      className="mx-1 p-3"
      onClick={props.onSelected}>
      <h3>{props.room.name}</h3>
      <img
        src="https://www.kindpng.com/picc/m/403-4036484_living-room-cartoon-png-transparent-png.png"
        alt="Home"
        style={{ width: "160px" }}></img>
    </div>
  );
};
export default Room;
