import React, { Component } from "react";

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = { currentIndex: 0 };
    this.renderChildren = this.renderChildren.bind(this);
    this.setIndex = this.setIndex.bind(this);
  }

  renderChildren() {
    const { children, width, height } = this.props;
    const childStyle = {
      width: width,
      height: height,
    };

    return React.Children.map(children, (child) => {
      const childClone = React.cloneElement(child, { style: childStyle });
      return (
        <div
          style={{
            display: "inline-block",
          }}
        >
          {childClone}
        </div>
      );
    });
  }

  setIndex(index) {
    const len = this.props.children.length;
    const nextIndex = (index + len) % len;

    this.setState({ currentIndex: nextIndex });
  }

  render() {
    const { width, height } = this.props;
    const { currentIndex } = this.state;

    const offset = -currentIndex * width;

    const frameStyle = {
      width: width,
      height: height,
      whiteSpace: "nowrap",
      overflow: "hidden",
      position: "relative",
    };

    const imageRowStyle = {
      marginLeft: offset,
      transition: ".2s",
    };

    const buttonStyle = {
      position: "absolute",
      top: "40%",
      bottom: "40%",
      width: "10%",
      background: "rgba(0,0,0,0.2)",
      outline: "none",
      border: "none",
    };

    const leftButtonStyle = {
      ...buttonStyle,
      left: 0,
    };

    const rightButtonStyle = {
      ...buttonStyle,
      right: 0,
    };

    return (
      <div className="carousel">
        <div className="frame" style={frameStyle}>
          <button
            onClick={() => this.setIndex(currentIndex - 1)}
            style={leftButtonStyle}
          >
            向左
          </button>
          <div style={imageRowStyle}>{this.renderChildren()}</div>
          <button
            onClick={() => this.setIndex(currentIndex + 1)}
            style={rightButtonStyle}
          >
            向右
          </button>
        </div>
      </div>
    );
  }
}
