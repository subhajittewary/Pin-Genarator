import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table, Button, Form } from "react-bootstrap";
import Message from "../components/Message";
import { deleteSetOfPin, updateSetOfPin } from "../actions/generatePinActions";

const ListScreen = () => {
  const dispatch = useDispatch();
  const allPins = useSelector((state) => state.generate);
  const { allPinItems } = allPins;
  const handleChange = (e, id) => {
    dispatch(updateSetOfPin({ value: e.target.value, id: id }));
  };

  const deletePin = (id) => {
    dispatch(deleteSetOfPin(id));
  };
  return (
    <Table striped bordered hover>
      <tbody>
        {allPinItems && allPinItems.length !== 0 ? (
          allPinItems.map((pins, index) => {
            return (
              <tr key={index}>
                <td>
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    value={pins.name ? pins.name : ""}
                    name={"name_" + pins.id}
                    onChange={(e) => handleChange(e, pins.id)}
                  ></Form.Control>
                </td>
                {pins.pins.map((pin, indexPin) => {
                  return <td key={indexPin}>{pin}</td>;
                })}
                <td key={index}>
                  {" "}
                  <Button
                    className="btn btn-danger"
                    onClick={() => deletePin(pins.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })
        ) : (
          <Message variant="danger">No pin found. </Message>
        )}
      </tbody>
    </Table>
  );
};

export default ListScreen;
