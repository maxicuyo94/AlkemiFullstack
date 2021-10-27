import React, { useContext } from "react";
import { Card, CardTitle, CardText, Button } from "reactstrap";
import { apiRequest } from "../helpers/apiRequest";
import { useHistory } from "react-router";
import moment from "moment";
import { AppContext } from "../provider/index";

export const TransactionCard = ({ info }) => {
  const history = useHistory();

  const [state, setState] = useContext(AppContext);
  const toggle = () => setState({ ...state, modal: !state.modal, info: info });

  const handleDelete = () => {
    apiRequest("DELETE", "delete", { id: info.id })
      .then(() => {
        history.go(0);
      })
      .catch((error) => {
        console.log(error);
      });
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
      style={{
        backgroundColor: "#282c34",
        borderColor: preset[info.type].color,
        marginTop: "1vh",
      }}
    >
      <CardTitle tag="h5">
        {preset[info.type].icon} ${info?.amount}
        <Button
          className="float-end"
          onClick={handleDelete}
          size="sm"
          outline
          color="danger"
        >
          X
        </Button>
      </CardTitle>
      <CardText>Concept: {info?.concept}</CardText>
      <CardText className="float-start">
        {moment(info?.date).format("DD/MM/YYYY")}
      </CardText>
      <Button onClick={toggle}>EDIT</Button>
    </Card>
  );
};
