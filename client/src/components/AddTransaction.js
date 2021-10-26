import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { Col, Form, FormGroup, Input, Label } from "reactstrap";

export const AddTransaction = () => {
  // const [transaction, setTransaction] = useState({});
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    let reqOptions = {
      url: "http://localhost:3001/transactions/add",
      method: "POST",
      data: {
        concept: e.target[1].value,
        amount: e.target[0].value,
        date: e.target[2].value,
        type: e.target[3].value,
      },
    };

    axios.request(reqOptions).then(function (response) {
      history.push("/");
    });
  };

  return (
    <Form className="container" onSubmit={handleSubmit}>
      <p className="fs-1">Add Transaction</p>

      <FormGroup row>
        <Label className="fs-5 align-self-center " for="amount" sm={2}>
          Amount:
        </Label>
        <Col sm={10}>
          <Input
            type="float"
            name="amount"
            id="amount"
            onChange={(e) => console.log(e)}
            placeholder="Example: 44.55"
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label className="fs-5 align-self-center " for="concept" sm={2}>
          Concept:
        </Label>
        <Col sm={10}>
          <Input
            type="text"
            name="concept"
            id="concept"
            placeholder="Example: "
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label className="fs-5 align-self-center " for="date" sm={2}>
          Date:
        </Label>
        <Col sm={10}>
          <Input
            type="date"
            name="date"
            id="date"
            placeholder="Transaction's date"
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label className="fs-5 align-self-center " for="type" sm={2}>
          Type:
        </Label>
        <Col sm={10}>
          <Input
            type="select"
            name="type"
            id="type"
            placeholder="Transaction's type"
          >
            <option value="">Select one</option>
            <option value="inflow">INFLOW</option>
            <option value="outflow">OUTFLOW</option>
          </Input>
        </Col>
      </FormGroup>
      <Input type="submit">SUBMIT</Input>
    </Form>
  );
};
