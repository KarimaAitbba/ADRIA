import React, { Component } from "react";

export default class UpdateLink extends Component {
  render() {
    return (
      <div>
        <div class="breadcrumbs">
          <div class="col-sm-4">
            <div class="page-header float-left">
              <div class="page-title">
                <h1>Dashboard</h1>
              </div>
            </div>
          </div>
          <div class="col-sm-8">
            <div class="page-header float-right">
              <div class="page-title">
                <ol class="breadcrumb text-right">
                  <li>
                    <a href="/">Dashboard</a>
                  </li>
                  <li class="active">Update Request</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
