import React from "react";
import "../css/style.css";
import "../css/bootstrap.min.css";

class BeritaTerkiniBar extends React.Component {
  render() {
    return (
      <table class="table-center berita-terkini-bar">
        <tr>
          <td class="align-left width">Berita Terkini</td>
          <td class="align-right">
            <a href="">lihat semua</a>
          </td>
        </tr>
      </table>
    );
  }
}

export default BeritaTerkiniBar;
