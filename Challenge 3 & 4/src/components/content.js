import React from "react";
import "../css/style.css";
import "../css/bootstrap.min.css";
import BeritaTerkiniBar from "./berita-terkini-bar";
import BeritaTerkini from "./berita-terkini";
import Headline from "./headline";
import { connect } from "unistore/react";
import { actions } from "../components/store";
const axios = require("axios");

class Content extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount = () => {};

  render() {
    // console.log(this.props.content[0]);
    let headlineNews = [];
    let a = [];
    if (this.props.articles.length > 0) {
      headlineNews = this.props.articles[0];
      a = this.props.articles.slice(1, 4);
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <BeritaTerkiniBar />
            {a.map(content => {
              return (
                <BeritaTerkini
                  content={content.content}
                  title={content.title}
                />
              );
            })}
          </div>
          <div className="col-8">
            <Headline headlineNews={headlineNews} />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  "articles, searchInput",
  actions
)(Content);
