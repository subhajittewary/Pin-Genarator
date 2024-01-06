import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Button, Container } from "react-bootstrap";
import { generateSetOfPin, saveSetOfPin } from "../actions/generatePinActions";
import Message from "../components/Message";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { pinItems, error } = useSelector((state) => state.generate);
  const [errorGen, setError] = useState(null);
  const generatePin = () => {
    dispatch(generateSetOfPin(5));
  };
  const savePin = () => {
    if (pinItems) {
      dispatch(saveSetOfPin(pinItems));
    } else {
      setError("Pins not generated.");
    }
  };
  return (
    <Container style={{ marginTop: "9rem" }}>
      {errorGen ? <Message variant="danger"> {errorGen} </Message> : null}
      {error ? (
        <Message variant="danger">
          {" "}
          Each pin must be unique, please regenerate.{" "}
        </Message>
      ) : null}
      <Table bordered>
        <tbody>
          {!pinItems ? (
            <tr>
              <td>xxxx</td>
              <td>xxxx</td>
              <td>xxxx</td>
              <td>xxxx</td>
            </tr>
          ) : (
            <tr>
              {pinItems.pins.map((pin, index) => {
                return <td key={index}>{pin}</td>;
              })}
            </tr>
          )}
          <tr style={{ border: "none" }}>
            <td colSpan={2} style={{ border: "none" }}>
              <Button variant="outline-info" onClick={generatePin}>
                Generate
              </Button>
            </td>
            <td colSpan={2} style={{ border: "none" }}>
              <Button
                variant="outline-info"
                style={{ width: "7rem" }}
                onClick={savePin}
              >
                Save
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default HomeScreen;
