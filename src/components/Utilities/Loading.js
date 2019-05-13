import React from "react";

import "./Loading.scss";
import LoadingCircle from "./assets/LoadingCircle";

const Loading = () => {
  return (
    <div className="loading">
      <LoadingCircle color="#707070" strokeWidth="6" />
    </div>
  );
};

export default Loading;
