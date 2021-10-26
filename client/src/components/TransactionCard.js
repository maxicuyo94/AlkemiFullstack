import React from "react";
import { Card, CardTitle, CardText } from "reactstrap";

export const TransactionCard = ({ info }) => {
  // const [info, setInfo] = useState({
  //   amount: 45.55,
  //   concept: "asdfaaszxcvzxcvzxcdfassd",
  //   date: "0001-11-01T00:00:00.000Z",
  //   id: "52e6975f-4c96-4dac-b4d9-8b954a11023e",
  //   type: "inflow",
  // });

  const preset = {
    inflow: {
      color: "limegreen",
      icon: (
        <i className="fas fa-sign-in-alt" style={{ color: "limegreen" }}></i>
      ),
    },
    outflow: {
      color: "tomato",
      icon: (
        <i
          className="fas fa-sign-out-alt fa-flip-horizontal "
          style={{ color: "tomato" }}
        ></i>
      ),
    },
  };

  return (
    <Card
      body
      outline
      inverse
      // color={preset[info.type].color}
      style={{
        backgroundColor: "#282c34",
        borderColor: preset[info.type].color,
        maxWidth: "700px",
        alignSelf: "center",
        marginTop: "1vh",
      }}
    >
      <CardTitle tag="h5">
        {preset[info.type].icon} ${info?.amount}
      </CardTitle>
      <CardText>Concept: {info?.concept}</CardText>
      <CardText>Date: {info?.date}</CardText>
    </Card>
  );
};
