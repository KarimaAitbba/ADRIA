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
      compte: {}
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

    this.props.creacteDemande(newDemande, this.props.history);
  }

  render() {
    const { demande } = this.props.demande;
    const { comptes } = this.props.compte;
    return (
      <center>
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
                        onChange={this.onChange}
                      />
                      <div class="form-group">
                        <label class=" form-control-label">
                          Account Number
                        </label>
                        <br />
                        <div>
                          <div class="input-group">
                            <div class="input-group-addon">
                              <i class="fa fa-user" />
                            </div>

                            <select
                              id="select"
                              class="form-control"
                              data-placeholder="Choose a Number..."
                              defaultValue={"-1"}
                              tabIndex="1"
                              name="compte"
                              onChange={this.onChange.bind(this)}
                              required
                            >
                              <option value="-1">Choose a number...</option>
                              {comptes.map(compte => (
                                <option
                                  value={JSON.stringify(compte)}
                                  key={compte.numCompte}
                                >
                                  {compte.numCompte}
                                </option>
                              ))}
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
                        <small class="form-text text-muted">ex. xxxxxx</small>
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
