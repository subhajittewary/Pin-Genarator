import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { generateReducer } from "./reducers/pingenerateReducers";

const allPinItemsFromStorage = localStorage.getItem("allPinItems")
  ? JSON.parse(localStorage.getItem("allPinItems"))
  : [];

const initialState = {
  generate: {
    allPinItems: allPinItemsFromStorage,
  },
};

const reducer = combineReducers({
  generate: generateReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
