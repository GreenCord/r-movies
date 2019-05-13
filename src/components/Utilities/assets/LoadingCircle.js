import React from "react";

import "./LoadingCircle.scss";

const LoadingCircle = props => {
  return (
    <div className="loader-wrapper">
      <svg className="loading-circle" viewBox="25 25 50 50">
        <circle
          cx="50"
          cy="50"
          r="20"
          fill="none"
          stroke={props.color}
          strokeWidth={props.strokeWidth}
          className="loading-circle-stroke"
        />
      </svg>
    </div>
  );
};

export default LoadingCircle;
