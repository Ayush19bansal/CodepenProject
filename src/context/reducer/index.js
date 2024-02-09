import {combineReducers} from "redux";
import UserAuthReducer from "./UserAuthReducer";
import ProjectReducer from "./ProjectReducer";

const myReducer=combineReducers({
    user: UserAuthReducer,
    project: ProjectReducer
})

export default myReducer;