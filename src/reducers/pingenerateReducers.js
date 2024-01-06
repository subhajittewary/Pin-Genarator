import {
  DELETE_SET_OF_PIN,
  GENERATE_SET_OF_PIN,
  SAVE_SET_OF_PIN,
  UPDATE_SET_OF_PIN,
} from "../costants/pingenerateConstants";

export const generateReducer = (state = { allPinItems: [] }, action) => {
  switch (action.type) {
    case GENERATE_SET_OF_PIN: {
      console.log("state in generate mode =>", state);
      return { ...state, pinItems: action.payload };
    }
    case SAVE_SET_OF_PIN: {
      const pins = action.payload;
      const existItem = state.allPinItems.map((allPins) => {
        return allPins.pins.map((pinItem) => {
          if (pins.pins.includes(pinItem)) return true;
        });
      });

      if (existItem.length !== 0 && existItem.pop().pop()) {
        return { ...state, allPinItems: [...state.allPinItems], error: true };
      } else {
        return {
          ...state,
          allPinItems: [...state.allPinItems, pins],
          error: false,
        };
      }
    }
    case DELETE_SET_OF_PIN: {
      return {
        ...state,
        allPinItems: state.allPinItems.filter((x) => x.id !== action.payload),
      };
    }
    case UPDATE_SET_OF_PIN: {
      if (state.allPinItems) {
        state.allPinItems.map((pin) => {
          if (pin.id === action.payload.id) {
            pin.name = action.payload.value;
          }
        });
      }
      return { ...state, allPinItems: [...state.allPinItems] };
    }
    default:
      return state;
  }
};
