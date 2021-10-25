import React, { useState } from "react";
import { Card, Button, CardTitle, CardText } from "reactstrap";

export const TransactionCard = () => {
  const [info, setInfo] = useState({
    amount: 45.55,
    concept: "asdfaaszxcvzxcvzxcdfassd",
    date: "0001-11-01T00:00:00.000Z",
    id: "52e6975f-4c96-4dac-b4d9-8b954a11023e",
    type: "inflow",
  });


  return (
    <div>
      <Card
        body
        outline
        inverse
        color="success"
        style={{ backgroundColor: "#333", borderColor: "#333" }}
      >
        <CardTitle tag="h5">Special Title Treatment</CardTitle>
        <CardText>
          With supporting text below as a natural lead-in to additional content.
        </CardText>
        <Button>Button</Button>
      </Card>
    </div>
  );
};
