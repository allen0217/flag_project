import React, { Component } from "react";
import Flag from "./flag.js";
import continents from "./continents.json";
import SearchBox from "./searchbox.js";

class App extends Component {
  state = {
    countries: null, flag: [],  continents: continents, clearflag: false
  };

  render() {
    console.log(this.state.countries);
    console.log(this.state.flag);
    console.log(this.state.continents);
    console.log(this.state.clearflag);
    return (
      <div>
        <center>Flag Picker</center>
        <center>The app will help you learn flags around the world in 3 steps</center>
        <div class="row">
          <div class="column">
            <td>
              <SearchBox
                continents={this.state.continents}
                setContinent={continent => {
                  this.setState({
                    countries: this.state.continents.filter(element => {
                      return element.continent === continent;
                    })[0].countries
                  });
                }}
              />
            </td>
          </div>
          <div class="column">
            <td>
              {this.state.countries ? (
                <SearchBox
                  clearflag={this.state.clearflag}
                  countries={this.state.countries}
                  setCountries={(data, check) => {
                    if (check === true) {
                      this.setState({ flag: [...this.state.flag, data] });
                    } else {
                      this.setState({
                        flag: this.state.flag.filter(element => {
                          return element !== data;
                        })
                      });
                    }
                  }}
                />
              ) : (
                <div />
              )}
            </td>
          </div>
          <div class="column">
            <Flag
              clearflag={() => {
                this.setState({ flag: [] });
                this.setState({ clearflag: true });
              }}
              flag={this.state.flag}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;