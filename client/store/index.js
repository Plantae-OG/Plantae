import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import auth from "./auth";

//added reducers//
import orders from "./order";
import singleOrder from "./singleOrder";
import allUsers from "./user";
import singleUser from "./singleUser";
import product from "./product";
import singleProduct from "./singleProduct";
import activeCart from "./userOrder"

const reducer = combineReducers({
  auth,
  product,
  singleProduct,
  singleOrder,
  orders,
  activeCart,
  users: allUsers,
  user: singleUser,
});

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export * from "./auth";
