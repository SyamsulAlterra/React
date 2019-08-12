import React from "react";
import "../css/style.css";
import "../css/bootstrap.min.css";
import Header from "../components/header";
import Content from "../components/content";

class Page extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div class="blank" />
        <Content />
        <div class="blank" />
      </div>
    );
  }
}

export default Page;
