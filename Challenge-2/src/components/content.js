import React from "react";
import "../css/style.css";
import "../css/bootstrap.min.css";
import BeritaTerkiniBar from "./berita-terkini-bar";
import BeritaTerkini from "./berita-terkini";
import Headline from "./headline";

class Content extends React.Component {
  render() {
    let a = [];
    for (let i = 0; i < 5; i++) {
      a.push(i);
    }
    // for (let i = 0; i < 4; i++) {
    // }
    // divisi.appendChild(<BeritaTerkini />);
    return (
      <div class="container">
        <div class="row">
          <div class="col-4">
            <BeritaTerkiniBar />
            {a.map(i => {
              return <BeritaTerkini ivalue={i + 1} />;
            })}
          </div>
          <div class="col-8">
            <Headline />
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
