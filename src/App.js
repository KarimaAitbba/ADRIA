import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./Strore";
import Dashboard from "./Component/Dashboard/Dashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddDemande from "./Component/Display/AddDemande";
import List from "./Component/Display/List";
import UpdateRequest from "./Component/UpdateRequest/UpdateRequest";
function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className="App">
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/AddDemande" component={AddDemande} />
          <Route exact path="/List" component={List} />
          <Route exact path="/updateRequest/:id" component={UpdateRequest} />
        </div>
      </Provider>
    </Router>
  );
}

export default App;
