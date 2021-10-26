import React from "react";
import { apiRequest } from "../helpers/apiRequest";
import { useHistory } from "react-router-dom";

import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";

export const AddTransaction = () => {
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = {
      concept: e.target[1].value,
      amount: e.target[0].value,
      date: e.target[2].value,
      type: e.target[3].value,
    };

    apiRequest("POST", "/add", data)
      .then(() => {
        history.go(0);
      })
      .catch((e) => console.log(e));
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
            type="number"
            step="0.01"
            name="amount"
            id="amount"
            placeholder="Example: 44,55"
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
            placeholder="Example: Salary"
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
      <Button size="lg" block>
        Submit
      </Button>
      {/* <Input type="submit">SUBMIT</Input> */}
    </Form>
  );
};
