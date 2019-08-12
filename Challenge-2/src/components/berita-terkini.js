import React from "react";
import "../css/style.css";
import "../css/bootstrap.min.css";

class BeritaTerkini extends React.Component {
  render() {
    return (
      <table class="table-center berita-terkini">
        <tr>
          <td class="text">Nomor {this.props.ivalue}</td>
        </tr>
        <tr>
          <td class="text">Isi berita ke-{this.props.ivalue}</td>
        </tr>
      </table>
    );
  }
}

export default BeritaTerkini;
