import {combineReducers} from "redux";
import UserAuthReducer from "./UserAuthReducer";
import ProjectReducer from "./ProjectReducer";
import SearchReducer from "./SearchReducer";

const myReducer=combineReducers({
    user: UserAuthReducer,
    project: ProjectReducer,
    search:SearchReducer,
})

export default myReducer;