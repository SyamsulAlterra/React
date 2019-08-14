import React from "react";
import "../css/style.css";
import "../css/bootstrap.min.css";
import Header from "../components/header";
import Content from "../components/content";
import { actions } from "../components/store";
import { connect } from "unistore/react";
// import { BrowserRouter as BR, Switch, Route } from "react-router-dom";

const axios = require("axios");

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.hostNews = "https://newsapi.org/v2/everything?";
    this.query = "q=Indonesia&";
    this.apikey = "apikey=1bc92a837b9f46b6a433a86582beab5b";
    this.state = {
      news: [{ description: "description", title: "title" }],
      searchInput: ""
    };
  }

  // componentDidMount = () => {
  //   let url = this.hostNews + this.query + this.apikey;
  //   if (this.props.searchInput == "") {
  //     axios.get(url).then(response => {
  //       this.setArticle(response.data.articles);
  //     });
  //   } else {
  //     url = this.hostNews + "q=" + this.props.searchInput + "&" + this.apikey;
  //     axios.get(url).then(response => {
  //       this.setArticle(response.data.articles);
  //     });
  //   }
  // };

  // onChange = keyword => {
  //   this.setState({ searchInput: keyword }, () => {
  //     let url = this.hostNews + this.query + this.apikey;
  //     if (this.props.searchInput == "") {
  //       axios.get(url).then(response => {
  //         this.setState({ news: response.data.articles });
  //       });
  //     } else {
  //       url = this.hostNews + "q=" + this.props.searchInput + "&" + this.apikey;
  //       axios.get(url).then(response => {
  //         this.setState({ news: response.data.articles });
  //       });
  //     }
  //   });
  // };

  // handleClick = category => {
  //   this.setState({ searchInput: category }, () => {
  //     let url =
  //       this.hostNews + "q=" + this.props.searchInput + "&" + this.apikey;
  //     axios.get(url).then(response => {
  //       this.setState({ news: response.data.articles });
  //     });
  //   });
  // };

  render() {
    console.log(this.props.searchInput);
    return (
      <div>
        <Header />
        <div className="blank" />
        <Content content={this.state.news} />
        <div className="blank" />
      </div>
    );
  }
}

export default connect(
  "searchInput",
  actions
)(Page);
