import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { creacteDemande, getcomptes } from "../../actions/projectactions";
import AddLinks from "../Links/AddLinks";
class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      motif: "",
      status: "registred",
      nombreCheque: "",
      compte: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const newDemande = {
      motif: this.state.motif,
      nombreCheque: this.state.nombreCheque,
      status: this.state.status,
      compte: JSON.parse(this.state.compte)
    };

    this.props.creacteDemande(newDemande, this.props.history);
  }

  componentDidMount() {
    this.props.getcomptes();
  }

  render() {
    const { comptes } = this.props.compte;
    return (
      <center>
        <AddLinks />
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
                              onChange={this.onChange}
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
                        <i class="fa fa-plus" />
                        &nbsp; Add Request
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
                    You successfully added this Request! You Can see it in the
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

Form.propTypes = {
  creacteDemande: PropTypes.func.isRequired,
  compte: PropTypes.object.isRequired,
  getcomptes: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  compte: state.compte
});

export default connect(
  mapStateToProps,
  { creacteDemande, getcomptes }
)(Form);
