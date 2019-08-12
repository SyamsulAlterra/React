import React from "react";
import "../css/style.css";
import "../css/bootstrap.min.css";
import logo from "../logo.svg";

class LogoHeader extends React.Component {
  render() {
    return (
      <table>
        <tr>
          <td>
            <img class="header-logo" src={logo} alt="" />
          </td>
          <td>KabarKabar</td>
        </tr>
      </table>
    );
  }
}

export default LogoHeader;
