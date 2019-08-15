import {combineReducers} from "redux"
import errorReducer from "./errorReducer";
import compteReducer from "./compteReducer";
import demandeReducer from "./demandeReducer";

export default combineReducers(
    {
        errors:errorReducer,
        compte: compteReducer,
        demande: demandeReducer
    }
);