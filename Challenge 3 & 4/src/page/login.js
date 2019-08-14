import React from "react";
import "../css/style.css";
import "../css/bootstrap.min.css";
import { Link, Redirect, Route, withRouter } from "react-router-dom";
import Header from "../components/header";
import { connect } from "unistore/react";
import { actions } from "../components/store";
const axios = require("axios");

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", status: "" };
  }

  componentDidMount() {
    this.setState({ status: localStorage.getItem("status") });
    this.renderRedirect();
  }

  handleLogin = async () => {
    // let url = "https://syamsul4-react.free.beeceptor.com/login";
    // await axios.post(url).then(response => {
    this.props.setNama(this.state.username);
    this.props.setEmail(this.state.password);
    this.props.setStatus("true");
    await this.props.setSearchInput("");
    let hostNews = "https://newsapi.org/v2/everything?";
    let query = "q=Indonesia&";
    let apikey = "apikey=f36d39ed6dca46759870db4ee3c9e304";
    let url = hostNews + query + apikey;
    console.log(this.props.searchInput);
    if (this.props.searchInput == "") {
      axios.get(url).then(response => {
        this.props.setArticle(response.data.articles);
      });
    } else {
      url = hostNews + "q=" + this.props.searchInput + "&" + apikey;
      axios.get(url).then(response => {
        this.props.setArticle(response.data.articles);
      });
    }
    this.props.history.push("/home");
    // });
  };

  renderRedirect = () => {
    if (this.state.status === "true") {
      return <Redirect to="/home" />;
    }
  };

  handlePassword = e => {
    const pass = e.target.value;
    this.setState({ password: pass });
  };

  handleUsername = e => {
    const user = e.target.value;
    this.setState({ username: user });
  };

  render() {
    return (
      <div class="login">
        {/* {this.renderRedirect()} */}
        <Header />
        <h1>
          Yuk diisi user sama emailnya biar bisa di liat di profil(sembarang
          juga boleh)
        </h1>
        <p>
          sekali aja mas 'ngeclick submitnya' ini banyak pake 'await', ty :)
        </p>
        <label for="username">Username:</label> <br />
        <input
          type="text"
          name="username"
          id="username"
          onChange={this.handleUsername}
        />
        <br />
        <label for="password">Email:</label> <br />
        <input
          type="text"
          name="password"
          id="password"
          onChange={this.handlePassword}
        />
        <br />
        <button onClick={this.handleLogin}>submit</button>
      </div>
    );
  }
}

export default connect(
  "username, email, status, searchInput",
  actions
)(withRouter(Login));
