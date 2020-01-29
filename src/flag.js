import React, { Component } from "react";

class Flag extends Component {
  render() {
    if (this.props.flag.length > 0)
      return (
        <div>
            <h3>step 3</h3>
          <h3>Selected flag</h3>
          <div>{this.props.flag}</div>
          <div>
            <button
              onClick={() => {
                this.props.clearflag();
              }}
            >
              Clear flags
            </button>
          </div>
        </div>
      );
    else {
      return <div />;
    }
  }
}

export default Flag;
