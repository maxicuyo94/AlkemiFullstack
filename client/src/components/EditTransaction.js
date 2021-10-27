import React, { useContext } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Col,
  Label,
  FormGroup,
  Form,
} from "reactstrap";
import { AppContext } from "../provider/index";
import { useHistory } from "react-router-dom";
import { apiRequest } from "../helpers/apiRequest";
import moment from "moment";

export const EditTransaction = () => {
  let history = useHistory();

  // const [modal, setModal] = useState(false);
  const [state, setState] = useContext(AppContext);

  const toggle = () => setState({ ...state, modal: !state.modal });

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = {
      id: state.info.id,
      concept: e.target[1].value,
      amount: e.target[0].value,
      date: e.target[2].value,
    };

    apiRequest("PUT", "/update", data)
      .then(() => {
        history.go(0);
      })
      .catch((e) => console.log(e));
  };
  const handleChange = (e) => {
    e.preventDefault();
    // console.log(e);
    setState({
      ...state,
      info: { ...state.info, [e.target.name]: e.target.value },
    });
  };
  return (
    <div>
      <Modal isOpen={state.modal} toggle={toggle} className={"className"}>
        <ModalHeader toggle={toggle}>Edit Transaction</ModalHeader>
        <ModalBody>
          <Form className="container" onSubmit={handleSubmit}>
            <FormGroup row>
              <Label for="amount" sm={2}>
                Amount:
              </Label>
              <Col sm={10}>
                <Input
                  value={state.info?.amount}
                  onChange={handleChange}
                  type="number"
                  step="0.01"
                  name="amount"
                  id="amount"
                  bsSize="sm"
                  placeholder="Example: 44,55"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="concept" sm={2}>
                Concept:
              </Label>
              <Col sm={10}>
                <Input
                  value={state.info?.concept}
                  onChange={handleChange}
                  type="text"
                  name="concept"
                  id="concept"
                  bsSize="sm"
                  placeholder="Example: Salary"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="date" sm={2}>
                Date:
              </Label>
              <Col sm={10}>
                <Input
                  onChange={handleChange}
                  defaultValue={moment(state.info?.date).format("YYYY-MM-DD")}
                  type="date"
                  name="date"
                  id="date"
                  bsSize="sm"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="type" sm={2}>
                Type:
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  plaintext
                  defaultValue={state.info?.type.toUpperCase()}
                />
              </Col>
            </FormGroup>
            <Button className="float-end">Submit</Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};
