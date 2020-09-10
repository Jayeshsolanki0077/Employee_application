import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import LoginReducer from "./login-reducer";
import EmployeeReducer from "./employee-reducer";


const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  login: LoginReducer,
  data: EmployeeReducer
});

export default persistReducer(persistConfig, rootReducer);
