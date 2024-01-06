import {
  DELETE_SET_OF_PIN,
  GENERATE_SET_OF_PIN,
  SAVE_SET_OF_PIN,
  UPDATE_SET_OF_PIN,
} from "../costants/pingenerateConstants";
export const generateSetOfPin =
  (noOfPins = 5) =>
  async (dispatch) => {
    const data = generatePin(noOfPins);
    dispatch({
      type: GENERATE_SET_OF_PIN,
      payload: data,
    });
  };

export const saveSetOfPin = (data) => async (dispatch, getState) => {
  dispatch({
    type: SAVE_SET_OF_PIN,
    payload: data,
  });
  localStorage.setItem(
    "allPinItems",
    JSON.stringify(getState().generate.allPinItems)
  );
};

export const deleteSetOfPin = (id) => async (dispatch, getState) => {
  dispatch({
    type: DELETE_SET_OF_PIN,
    payload: id,
  });
  localStorage.setItem(
    "allPinItems",
    JSON.stringify(getState().generate.allPinItems)
  );
};

export const updateSetOfPin = (data) => async (dispatch, getState) => {
  dispatch({
    type: UPDATE_SET_OF_PIN,
    payload: data,
  });
  localStorage.setItem(
    "allPinItems",
    JSON.stringify(getState().generate.allPinItems)
  );
};

const generatePin = (noOfPins) => {
  let setOfPin = [];
  for (let i = 0; i < noOfPins; i++) {
    const pin = Math.floor(Math.random() * 9000) + 1000;
    if (
      pin.toString().match(/(?:(?=123|234|345|456|567|678|789)\d)+\d/) ||
      pin.toString().match(/(?:(?=987|876|654|543|432|321|210)\d)+\d/)
    ) {
      noOfPins += 1;
    } else if (!pin.toString().match(/^(?!.*(.).*\1)\d{4}$/)) {
      noOfPins += 1;
    } else setOfPin.push(pin);
  }
  console.log("setOfPin",setOfPin)
  const id = (Math.random() + 1).toString(36).substring(2);
  return {
    id: id,
    pins: setOfPin,
    name: "",
  };
};
