import React, { Component } from "react";
import continents from "./continents.json";

class SearchBox extends Component {
  state = {
    input: "", flag: false, selected: "", selectflag: false
  };
  onchange = e => {
    this.setState({ input: e.target.value });
  };
  render() {
    //console.log(continents);
    if (!this.props.countries) {
      return (
        <div>
            <h3>step 1</h3>
          <h3>Select continent</h3>
          <input
            value={this.state.input}
            list="continents_list"
            id="continents_id"
            name="continents"
            onChange={e => {
              this.onchange(e);
            }}
            onClick={() => {
              this.setState({ flag: true });
            }}
          />
          <ul className="list-group">
            {continents
              .filter(element => {
                return (
                  element.continent.toLowerCase().indexOf(this.state.input) !==
                  -1
                );
              })
              .map(item => (
                <li
                  className="borders"
                  hidden={this.state.flag === false ? true : false}
                  onClick={() => {
                    this.setState({
                      flag: false,
                      selected: item.continent,
                      selectflag: true
                    });
                    this.props.setContinent(item.continent);
                  }}
                  
                  value={item.continent}
                  data-category={item}
                  key={item.continent}
                >
                  {item.continent}
                </li>
              ))}
          </ul>
          <p hidden={this.state.selectflag === true ? false : true}>
             You selected <br/><span>{this.state.selected}</span> 
          </p>
        </div>
      );
    } else if (this.props.countries.length > 0) {
      return (
        <div>
            <h3>step 2</h3>
          <h3>Select countries</h3>
          <input
            value={this.state.input}
            list="continents_list"
            id="continents_id"
            name="continents"
            onChange={e => {
              this.onchange(e);
            }}
            onClick={() => {
              this.setState({ flag: true });
            }}
          />
          <ul className="list-group">
            {this.props.countries
              .filter(element => {
                return (
                  element.name.toLowerCase().indexOf(this.state.input) !== -1
                );
              })
              .map(item => (
                <li
                  hidden={this.state.flag === true ? false : true}
                  className="list-group-item"
                  value={item.continent}
                  data-category={item}
                  key={item.name}
                >
                  <input
                    onClick={event => {
                      this.props.setCountries(item.flag, event.target.checked);
                    }}
                    type="checkbox"
                  />
                  {item.name}
                </li>
              ))}
          </ul>
        </div>
      );
    }
  }
}

export default SearchBox;
