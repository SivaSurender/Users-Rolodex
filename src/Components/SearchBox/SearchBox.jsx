import { Component } from "react";
import "./search-box.styles.css"

class SearchBox extends Component{

    render() {
        const {searchComponent, propclassName, propPlaceholder } = this.props;
        return (
          <div>
            <input
              className={`search-box ${propclassName}`}
              type="search"
              placeholder={propPlaceholder}
              onChange={searchComponent}
            />
          </div>
        );
    }

}

export default SearchBox