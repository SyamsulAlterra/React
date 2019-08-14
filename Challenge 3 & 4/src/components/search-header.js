import React from "react";
import "../css/style.css";
import "../css/bootstrap.min.css";
import { connect } from "unistore/react";
import { actions } from "../components/store";
const axios = require("axios");

class SearchHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    // let hostNews = "https://newsapi.org/v2/everything?";
    // let query = "q=Indonesia&";
    // let apikey = "apikey=f36d39ed6dca46759870db4ee3c9e304";
    // let url = hostNews + query + apikey;
    // if (this.props.searchInput == "") {
    //   axios.get(url).then(response => {
    //     this.props.setArticle(response.data.articles);
    //   });
    // } else {
    //   url = hostNews + "q=" + this.props.searchInput + "&" + apikey;
    //   axios.get(url).then(response => {
    //     this.props.setArticle(response.data.articles);
    //   });
    // }
  };

  onChange = async e => {
    const input = e.target.value;

    await this.props.setSearchInput(input);
    let hostNews = "https://newsapi.org/v2/everything?";
    let query = "q=Indonesia&";
    let apikey = "apikey=f36d39ed6dca46759870db4ee3c9e304";
    let url = hostNews + query + apikey;
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
  };

  render() {
    return (
      <table className="table-center search">
        <tbody>
          <tr>
            <td>
              <input
                type="search"
                placeholder="search"
                onChange={this.onChange}
              />
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default connect(
  "searchInput",
  actions
)(SearchHeader);
