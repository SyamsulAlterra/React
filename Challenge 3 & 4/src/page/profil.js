import React from "react";
import "../css/style.css";
import "../css/bootstrap.min.css";
import Header from "../components/header";
import { connect } from "unistore/react";
import { actions } from "../components/store";

class Profil extends React.Component {
  render() {
    return (
      <div class="">
        <Header />
        <h1>{this.props.username}</h1>
        <h1>{this.props.email}</h1>
      </div>
    );
  }
}

export default connect(
  "username, email",
  actions
)(Profil);
