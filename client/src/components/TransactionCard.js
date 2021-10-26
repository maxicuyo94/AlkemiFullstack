import React from "react";
import { Card, CardTitle, CardText, Button } from "reactstrap";
import { apiRequest } from "../helpers/apiRequest";
import { useHistory } from "react-router";

export const TransactionCard = ({ info }) => {
  const history = useHistory();
  const handleDelete = async () => {
    try {
      const res = await apiRequest("DELETE", "delete", { id: info.id });
      console.log(res.data);
      history.go(0);
    } catch (error) {
      console.log(error);
    }
  };

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
        <Button onClick={handleDelete} size="sm" outline color="danger">
          X
        </Button>
      </CardTitle>
      <CardText>Concept: {info?.concept}</CardText>
      <CardText>Date: {info?.date}</CardText>
    </Card>
  );
};
