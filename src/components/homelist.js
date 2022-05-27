import { useEffect, useState } from "react";
import Home from "./home";
import Room from "./room";
import { FormattedMessage } from "react-intl";

const HomeList = () => {
  const [list, setList] = useState([]);
  const [selected, setSelected] = useState(null);
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);
  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/josejbocanegra/0067d2b28b009140fee423cfc84e40e6/raw/6e6b11160fbcacb56621b6422684d615dc3a0d33/spaces.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setList(data);
      });

    fetch(
      "https://gist.githubusercontent.com/josejbocanegra/92c90d5f2171739bd4a76d639f1271ea/raw/9effd124c825f7c2a7087d4a50fa4a91c5d34558/rooms.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setRooms(data);
      });
  }, []);

  const listItems = list.map((item) => {
    return (
      <Home
        key={item.id}
        item={item}
        onSelected={() => {
          setSelected(item);
          setSelectedRoom(null);
        }}
      />
    );
  });

  const listRooms = rooms
    .filter((item) => {
      return item.homeId === selected?.id;
    })
    .map((item) => {
      console.log(item);
      return (
        <Room
          key={item.name}
          room={item}
          onSelected={() => {
            setSelectedRoom(item);
          }}
        />
      );
    });

  const listDevices = selectedRoom?.devices.map((device, i) => {
    return (
      <tr>
        <td>{i}</td>
        <td>{device.id}</td>
        <td>{device.name}</td>
        <td>{device.desired.value}</td>
      </tr>
    );
  });

  if (list.length === 0) {
    return <div>Loading...</div>;
  } else {
    // For each element in the list create a Home element
    return (
      <div className="container pt-5">
        <h2 style={{ textAlign: "left" }} className="mb-5">
          <FormattedMessage id="myspaces" />
        </h2>
        <div className="d-flex justify-content-center">{listItems}</div>
        {selected && (
          <div className="detail mt-5">
            <h2 style={{ textAlign: "left" }} className="mb-5">
              <FormattedMessage id="myrooms" />
            </h2>
            <div className="row">
              <div className="col-md-6 d-flex justify-content-center">
                {listRooms}
              </div>
              <div className="col-md-6">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">ID</th>
                      <th scope="col">
                        <FormattedMessage id="device" />
                      </th>
                      <th scope="col">
                        <FormattedMessage id="value" />
                      </th>
                    </tr>
                  </thead>
                  <tbody>{listDevices}</tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
};
export default HomeList;
