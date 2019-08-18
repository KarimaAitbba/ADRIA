import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  creacteDemande,
  getcomptes,
  getDemandeById
} from "../../actions/projectactions";
import UpdateLink from "../Links/UpdateLink";
class UpdateRequest extends Component {
  componentDidMount() {
    //recuperation de l'id de la demande
    const { id } = this.props.match.params;
    this.props.getcomptes();
    this.props.getDemandeById(id, this.props.history);
  }

  constructor() {
    super();
    this.state = {
      id: "",
      motif: "",
      status: "registred",
      nombreCheque: "",
      compte: {
        abonne: {},
        beneficiaire: "",
        numCompte: "",
        soldeComptable: "",
        soldeCompte: ""
      }
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  //Pour afficher les valeurs de lobjet demande dans les champs
  //les props reçu a partir du server
  componentWillReceiveProps(nextProps) {
    const {
      id,
      motif,
      status,
      nombreCheque,
      compte
    } = nextProps.demande.demande;
    this.setState({
      id,
      motif,
      status,
      nombreCheque,
      compte
    });
    this.state.compte = nextProps.demande.demande.compte;
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const newDemande = {
      id: this.state.id,
      motif: this.state.motif,
      nombreCheque: this.state.nombreCheque,
      status: this.state.status,
      compte: this.state.compte
    };
    console.log(newDemande);
    this.props.creacteDemande(newDemande, this.props.history);
  }

  render() {
    const { demande } = this.props.demande;
    const { comptes } = this.props.compte;
    return (
      <center>
        <link rel="apple-touch-icon" href="apple-icon.png" />
        <link rel="shortcut icon" href="favicon.ico" />
        <link
          rel="stylesheet"
          href="vendors/bootstrap/dist/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="vendors/font-awesome/css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          href="vendors/themify-icons/css/themify-icons.css"
        />
        <link
          rel="stylesheet"
          href="vendors/flag-icon-css/css/flag-icon.min.css"
        />
        <link
          rel="stylesheet"
          href="vendors/selectFX/css/cs-skin-elastic.css"
        />
        <link rel="stylesheet" href="vendors/jqvmap/dist/jqvmap.min.css" />
        <link rel="stylesheet" href="assets/css/style.css" />
        <UpdateLink />
        <div class="content  mt-4">
          <div class="animated fadeIn">
            <div class="row">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
              &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
              <div class="col-md-8">
                <div class="card">
                  <div class="card-header">
                    <strong>Veuillez remplir ces champs (Step 1) </strong>{" "}
                    <small> </small>
                  </div>
                  <form onSubmit={this.onSubmit}>
                    <div class="card-body card-block">
                      <input
                        type="hidden"
                        name="id"
                        value={this.state.id}
                        onChange={this.onChange.bind(this)}
                      />
                      <div class="form-group">
                        <label for="disabledSelect" class=" form-control-label">
                          Account Number
                        </label>
                        <br />
                        <div>
                          <div class="input-group">
                            <div class="input-group-addon">
                              <i class="fa fa-user" />
                            </div>

                            <select
                              id="disabledSelect"
                              disabled
                              class="form-control"
                              data-placeholder="Choose a Number..."
                              defaultValue={"-1"}
                              tabIndex="1"
                              name="compte"
                              onChange={this.onChange.bind(this)}
                            >
                              <option value={this.state.compte}>
                                {demande.compte
                                  ? demande.compte.numCompte
                                  : "en cours"}
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div class="form-group">
                        <label class=" form-control-label">
                          Pattern of this Request
                        </label>
                        <div class="input-group">
                          <div class="input-group-addon">
                            <i class="fa fa-edit" />
                          </div>

                          <input
                            class="form-control"
                            name="motif"
                            value={this.state.motif}
                            onChange={this.onChange.bind(this)}
                            required
                          />
                        </div>
                        <small class="form-text text-muted">
                          ex. decsription
                        </small>
                      </div>
                      <div class="form-group">
                        <label class=" form-control-label">
                          Number of checkbooks
                        </label>
                        <div class="input-group">
                          <div class="input-group-addon">
                            <i class="fa fa-asterisk" />
                          </div>
                          <input
                            class="form-control"
                            name="nombreCheque"
                            type="number"
                            value={this.state.nombreCheque}
                            onChange={this.onChange.bind(this)}
                            required
                          />
                        </div>
                        <small class="form-text text-muted">between 1-10</small>
                      </div>
                      <div class="form-group">
                        <label class=" form-control-label">
                          Date of this Request
                        </label>
                        <div class="input-group">
                          <div class="input-group-addon">
                            <i class="fa fa-calendar" />
                          </div>

                          <input
                            class="form-control"
                            name="motif"
                            value={demande.dateCreation}
                            disabled
                          />
                        </div>
                      </div>
                      <button
                        type="submit"
                        class="btn btn-secondary"
                        data-toggle="modal"
                        data-target="#staticModal"
                      >
                        <i class="fa fa-edit" />
                        &nbsp; Update Request
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div
            class="modal fade"
            id="staticModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="staticModalLabel"
            aria-hidden="true"
            data-backdrop="static"
          >
            <div class="modal-dialog modal-sm" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="staticModalLabel">
                    Result
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <p>
                    You successfully updated this Request! You Can see it in the
                    Dashboard.
                  </p>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </center>
    );
  }
}
UpdateRequest.propTypes = {
  getDemandeById: PropTypes.func.isRequired,
  creacteDemande: PropTypes.func.isRequired,
  compte: PropTypes.object.isRequired,
  demande: PropTypes.object.isRequired,
  getcomptes: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  compte: state.compte,
  demande: state.demande
});

export default connect(
  mapStateToProps,
  { creacteDemande, getcomptes, getDemandeById }
)(UpdateRequest);
