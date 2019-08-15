import axios from "axios";
import {
  GET_ERRORS,
  GET_COMPTE,
  GET_DEMANDE,
  GET_DEMANDEBYID,
  GET_DEMANDEBYCOMPTE,
  GET_DEMANDEBYCOMPTEandSTATUT,
  GET_DEMANDEBYSTATUT,
  GET_DEMANDEBYDATE
} from "./types";
import { async } from "q";

export const creacteDemande = (demande, history) => async dispatch => {
  const res = await axios.post(
    "http://localhost:8080/api/demande/ajouter",
    demande
  );
  // history.push("/");
};

export const getcomptes = () => async dispatch => {
  const res = await axios.get(
    "http://localhost:8080/api/demande/all/accounts?username=Hanb"
  );

  dispatch({
    type: GET_COMPTE,
    payload: res.data
  });
};

export const getdemandes = () => async dispatch => {
  const res = await axios.get(
    "http://localhost:8080/api/demande/all?username=Hanb"
  );

  dispatch({
    type: GET_DEMANDE,
    payload: res.data
  });
};

export const getDemandeById = (id, history) => async dispatch => {
  const res = await axios.get(
    `http://localhost:8080/api/demande//DemandeById?username=Hanb&id=${id}`
  );

  dispatch({
    type: GET_DEMANDEBYID,
    payload: res.data
  });
};

export const getDemandeByCompte = (numCompte, history) => async dispatch => {
  const res = await axios.get(
    `http://localhost:8080/api/demande/account?numCompte=${numCompte}`
  );

  dispatch({
    type: GET_DEMANDEBYCOMPTE,
    payload: res.data
  });
};

export const getDemandeByCompteAndStatut = (
  numCompte,
  statut,
  history
) => async dispatch => {
  const res = await axios.get(
    `http://localhost:8080/api/demande/account/statusAccount?numCompte=${numCompte}&status=${statut}`
  );

  dispatch({
    type: GET_DEMANDEBYCOMPTEandSTATUT,
    payload: res.data
  });
};

export const getDemandeByStatut = (statut, history) => async dispatch => {
  const res = await axios.get(
    `http://localhost:8080/api/demande/Usernamestatus?username=Hanb&status=${statut}`
  );

  dispatch({
    type: GET_DEMANDEBYSTATUT,
    payload: res.data
  });
};

export const getDemandeByDate = (date, history) => async dispatch => {
  const res = await axios.get(
    `http://localhost:8080/api/demande/Usernamestatus?username=Hanb&dateCreation=${date}&dateEnvoie=${date}`
  );

  dispatch({
    type: GET_DEMANDEBYDATE,
    payload: res.data
  });
};
