import React from "react";
import "./assets/css/cantClick.css";
class CantClick extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRandomized: false,
    };
  }
  randomNumber = () => {
    let RandomNumber = Math.floor(Math.random() * 100);
    return RandomNumber;
  };
  handleOnClick = () => {
    this.setState({ isRandomized: true });
  };
  render() {
    let ButtonHover = () => {
      return (
        <div
          className="Button-here"
          style={{
            top: `${this.randomNumber()}%`,
            bottom: `${this.randomNumber()}%`,
            left: `${this.randomNumber()}%`,
            right: `${this.randomNumber()}%`,
          }}
          onMouseEnter={this.handleOnClick}
        >
          <h2>30DaysOfReact</h2>
        </div>
      );
    };
    return (
      <div>
        <ButtonHover />
      </div>
    );
  }
}
export default CantClick;
