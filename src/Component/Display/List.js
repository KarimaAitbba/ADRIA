import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import CreateButton from "./CreateButton";
import {
  getcomptes,
  getdemandes,
  getDemandeById
} from "../../actions/projectactions";
import ListLink from "../Links/ListLink";
import Search from "../Search/Search";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
class List extends React.Component {
  componentDidMount() {
    this.props.getcomptes();
    this.props.getdemandes();
  }
  constructor() {
    super();
    this.onClick = this.ClickDetail.bind(this);
  }
  ClickDetail = e => {
    e.preventDefault();
    this.props.getDemandeById(e.target.value, this.props.history);
  };

  render() {
    const { comptes } = this.props.compte;
    const { demandes } = this.props.demande;
    const { demande } = this.props.demande;

    return (
      <div>
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

        <Search />

        <div className="content mt-3">
          <div className="animated fadeIn">
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <strong className="card-title">My Requests</strong>
                  </div>
                  <div className="card-body">
                    <table
                      id="bootstrap-data-table-export"
                      className="table table-striped table-bordered"
                    >
                      <thead>
                        <tr>
                          <th>Account Number</th>
                          <th>Date of Request</th>
                          <th>Pattern</th>
                          <th>Number of Checkbooks</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {demandes.map(demande => (
                          <tr key={demande.id}>
                            <td>{demande.compte.numCompte} </td>
                            <td>{demande.dateCreation} </td>
                            <td> {demande.motif} </td>
                            <td>{demande.nombreCheque}</td>
                            <td>{demande.status} </td>
                            <td>
                              <Link to={`/updateRequest/${demande.id}`}>
                                <button
                                  type="button"
                                  class="btn btn-info btn-sm"
                                >
                                  <i class="fa fa-edit" />
                                  &nbsp; Update
                                </button>
                              </Link>
                              &nbsp;&nbsp;
                              <button
                                type="button"
                                class="btn btn-danger btn-sm"
                                data-toggle="modal"
                                data-target="#mediumModal"
                                onClick={this.ClickDetail}
                                value={demande.id}
                              >
                                <i class="fa fa-info" />
                                &nbsp; Detail
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="header">
                <div class="card-body">
                  <CreateButton />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="modal fade"
          id="mediumModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="mediumModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="mediumModalLabel">
                  Request Details
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
                <table className="table table-striped table-bordered">
                  <tbody key={demande.id}>
                    <tr>
                      <th>Pattern of Request</th>
                      <td>{demande.motif}</td>
                    </tr>
                    <tr>
                      <th>Date of Request</th>
                      <td>{demande.dateCreation}</td>
                    </tr>
                    <tr>
                      <th>Checkbook Number</th>
                      <td>{demande.nombreCheque}</td>
                    </tr>
                    <tr>
                      <th>Status</th>
                      <td>{demande.status} </td>
                    </tr>
                  </tbody>
                </table>
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
    );
  }
}

List.propTypes = {
  compte: PropTypes.object.isRequired,
  getcomptes: PropTypes.func.isRequired,
  demande: PropTypes.object.isRequired,
  getdemande: PropTypes.func.isRequired,
  getDemandeById: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  demande: state.demande,
  compte: state.compte,
  numCompte: state.numCompte
});

export default connect(
  mapStateToProps,
  { getcomptes, getdemandes, getDemandeById }
)(List);
