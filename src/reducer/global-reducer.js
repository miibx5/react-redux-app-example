import { combineReducers } from "redux";
import fieldReducer from "../components/field/fieldReducer";
const GlobalReducers = combineReducers({
    field: fieldReducer
});
export default GlobalReducers;
