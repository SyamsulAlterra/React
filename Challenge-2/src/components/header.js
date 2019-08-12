import React from "react";
import "../css/style.css";
import "../css/bootstrap.min.css";
import LogoHeader from "./logo-header";
import MasukDaftar from "./masuk-daftar";
import MenuHeader from "./menu-header";
import SearchHeader from "./search-header";

class Header extends React.Component {
  render() {
    return (
      <div class="container-fluid header-bg">
        <div class="row">
          <div class="col-2">
            <table class="height100">
              <td class="align-middle">
                <LogoHeader />
              </td>
            </table>
          </div>
          <div class="col-4">
            <table class="height100">
              <td class="align-middle">
                <MenuHeader />
              </td>
            </table>
          </div>
          <div class="col-4">
            <table class="height100">
              <td class="align-middle">
                <SearchHeader />
              </td>
            </table>
          </div>
          <div class="col-2">
            <table class="height100">
              <td class="align-middle">
                <MasukDaftar />
              </td>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
