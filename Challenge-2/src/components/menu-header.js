import React from "react";
import "../css/style.css";
import "../css/bootstrap.min.css";
// import "../js/jquery-3.3.1.slim.min.js";
// import "../js/bootstrap.min.js";

class MenuHeader extends React.Component {
  render() {
    return (
      <div class="menu-header">
        <table class="table-center">
          <tr class="align-center">
            <td class="menu-item-list">SepakBola</td>
            <td class="menu-item-list">Ekonomi</td>
            <td class="menu-item-list">Politik</td>
            <td class="menu-item-list">Hiburan</td>
            <td class="menu-item-list">
              <div class="dropdown">
                <button
                  class="btn dropdown-toggle lainnya"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  lainnya
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                  <a class="dropdown-item" href="#">
                    tes
                  </a>
                </div>
              </div>
            </td>
          </tr>
        </table>
        {/* <link rel="stylesheet" href="../js/bootstrap.min.js" /> */}
        {/* <link rel="stylesheet" href="../js/jquery-3.3.1.slim.min.js" /> */}
      </div>
    );
  }
}

export default MenuHeader;
