import React from "react";
import "../css/style.css";
import "../css/bootstrap.min.css";

class SearchHeader extends React.Component {
  render() {
    return (
      <table class="table-center search">
        <tr>
          <td>
            <input type="text" value="search" class="input-header" />
          </td>
          <td>
            <img src="https://dumielauxepices.net/sites/default/files/search-icon-circle-755348-7781912.png" />
          </td>
        </tr>
      </table>
    );
  }
}

export default SearchHeader;
