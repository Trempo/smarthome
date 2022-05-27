import "./home.css";
import { FormattedMessage } from "react-intl";

const Home = (props) => {
  return (
    <div
      style={{ border: "1px black solid" }}
      className="mx-1 p-3"
      onClick={props.onSelected}>
      <img
        src="https://www.picng.com/upload/house/png_house_84417.png"
        alt="Home"
        style={{ width: "160px" }}></img>
      <h3 className="mt-3">
        {props.item.type === "house" ? (
          <FormattedMessage id="typeHouse" />
        ) : (
          <FormattedMessage id="typeLoft" />
        )}
        {" " + props.item.name.split(" ")[1]}
      </h3>
      <p>{props.item.address}</p>
    </div>
  );
};
export default Home;
