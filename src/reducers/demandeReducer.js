import {
  GET_DEMANDE,
  GET_DEMANDEBYID,
  GET_DEMANDEBYCOMPTE,
  GET_DEMANDEBYCOMPTEandSTATUT,
  GET_DEMANDEBYSTATUT,
  GET_DEMANDEBYDATE
} from "../actions/types";

const intitialState = {
  demandes: [],
  demande: {}
};

export default function(state = intitialState, action) {
  switch (action.type) {
    case GET_DEMANDE:
      return {
        ...state,
        demandes: action.payload
      };

    case GET_DEMANDEBYID:
      return {
        ...state,
        demande: action.payload
      };

    case GET_DEMANDEBYCOMPTE:
      return {
        ...state,
        demandes: action.payload //l'important
      };

    case GET_DEMANDEBYCOMPTEandSTATUT:
      return {
        ...state,
        demandes: action.payload
      };
    case GET_DEMANDEBYSTATUT:
      return {
        ...state,
        demandes: action.payload
      };

    case GET_DEMANDEBYDATE:
      return {
        ...state,
        demandes: action.payload
      };
    default:
      return state;
  }
}
