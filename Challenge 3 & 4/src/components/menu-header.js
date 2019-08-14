import React from "react";
import "../css/style.css";
import "../css/bootstrap.min.css";
import { Link, Redirect, withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "./store";
const axios = require("axios");

// import "../js/jquery-3.3.1.slim.min.js";
// import "../js/bootstrap.min.js";

class MenuHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { category: "", status: "" };
  }

  componentDidMount() {
    this.setState({ status: localStorage.getItem("status") });
  }

  sepakBola = async () => {
    await this.props.setSearchInput("premier league");
    let hostNews = "https://newsapi.org/v2/everything?";
    let query = "q=Indonesia&";
    let apikey = "apikey=f36d39ed6dca46759870db4ee3c9e304";
    let url = hostNews + query + apikey;
    if (this.props.searchInput == "") {
      console.log(url);
      axios.get(url).then(response => {
        this.props.setArticle(response.data.articles);
      });
    } else {
      url = hostNews + "q=" + this.props.searchInput + "&" + apikey;
      console.log(url);
      axios.get(url).then(response => {
        this.props.setArticle(response.data.articles);
      });
    }
  };

  ekonomi = async () => {
    await this.props.setSearchInput("economy");
    let hostNews = "https://newsapi.org/v2/everything?";
    let query = "q=Indonesia&";
    let apikey = "apikey=f36d39ed6dca46759870db4ee3c9e304";
    let url = hostNews + query + apikey;
    if (this.props.searchInput == "") {
      console.log(url);
      axios.get(url).then(response => {
        this.props.setArticle(response.data.articles);
      });
    } else {
      url = hostNews + "q=" + this.props.searchInput + "&" + apikey;
      console.log(url);
      axios.get(url).then(response => {
        this.props.setArticle(response.data.articles);
      });
    }
  };

  politik = async () => {
    await this.props.setSearchInput("politics");
    let hostNews = "https://newsapi.org/v2/everything?";
    let query = "q=Indonesia&";
    let apikey = "apikey=f36d39ed6dca46759870db4ee3c9e304";
    let url = hostNews + query + apikey;
    if (this.props.searchInput == "") {
      console.log(url);
      axios.get(url).then(response => {
        this.props.setArticle(response.data.articles);
      });
    } else {
      url = hostNews + "q=" + this.props.searchInput + "&" + apikey;
      console.log(url);
      axios.get(url).then(response => {
        this.props.setArticle(response.data.articles);
      });
    }
  };

  hiburan = async () => {
    await this.props.setSearchInput("hiburan");
    let hostNews = "https://newsapi.org/v2/everything?";
    let query = "q=Indonesia&";
    let apikey = "apikey=f36d39ed6dca46759870db4ee3c9e304";
    let url = hostNews + query + apikey;
    if (this.props.searchInput == "") {
      console.log(url);
      axios.get(url).then(response => {
        this.props.setArticle(response.data.articles);
      });
    } else {
      url = hostNews + "q=" + this.props.searchInput + "&" + apikey;
      console.log(url);
      axios.get(url).then(response => {
        this.props.setArticle(response.data.articles);
      });
    }
  };

  signup = () => {
    this.props.setStatus("false");
    // this.setState({ status: "false" }, () => {
    // });
  };

  renderRedirect = () => {
    if (this.props.status === "false") {
      return <Redirect to="/" />;
    }
  };

  render() {
    return (
      <div className="menu-header">
        {this.renderRedirect()}
        <table className="table-center">
          <tbody>
            <tr className="align-center">
              <td className="menu-item-list">
                <Link to="/sepak_bola" onClick={this.sepakBola}>
                  SepakBola
                </Link>
              </td>
              <td className="menu-item-list">
                <Link to="/ekonomi" onClick={this.ekonomi}>
                  Ekonomi
                </Link>
              </td>
              <td className="menu-item-list">
                <Link to="/politik" onClick={this.politik}>
                  Politik
                </Link>
              </td>
              <td className="menu-item-list">
                <Link to="/hiburan" onClick={this.hiburan}>
                  Hiburan
                </Link>
              </td>
              <td className="menu-item-list" onClick={this.signup}>
                Signup
              </td>
              <td className="menu-item-list">
                <Link to="/profil">Profil</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default connect(
  "status, searchInput, articles",
  actions
)(withRouter(MenuHeader));
