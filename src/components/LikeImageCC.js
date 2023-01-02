import React, { Component } from "react";

export default class LikeImageCC extends Component {
  render() {
    const { count, increase } = this.props;
    return (
      <div>
        <button onClick={increase}>Like Image {count}</button>
      </div>
    );
  }
}
