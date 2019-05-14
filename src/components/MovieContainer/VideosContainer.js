import React from "react";

import "./VideosContainer.scss";

const VideoContainer = props => {
  return (
    <section className="videos-wrapper">
      <div className="videos-container">
        {props.headerText && (
          <header>
            <h2>{props.headerText}</h2>
          </header>
        )}
        {props.videos
          .filter(video => {
            return (
              video.type.toLowerCase() === "trailer" ||
              video.type.toLowerCase() === "teaser"
            );
          })
          .map(video => {
            return (
              <div key={video.key} className="videos-item">
                <div className="videos-thumbnail">
                  <img
                    src={`https://img.youtube.com/vi/${
                      video.key
                    }/hqdefault.jpg`}
                    alt={`YouTube: ${video.name}`}
                  />
                </div>
                <p>
                  ({video.type}){video.name}
                </p>
              </div>
            );
          })}
      </div>
    </section>
  );
};
export default VideoContainer;
