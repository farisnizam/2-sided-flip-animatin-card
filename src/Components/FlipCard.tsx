import React, { ReactElement, useState } from "react";
import "./FlipCard.css";

interface FlipCardProps {
  frontTitle?: string;
  frontContent?: string[];
  frontImage?: string;
  backTitle?: string;
  backContent?: string;
  backImage?: string;
}

const defaultFrontContent = [
  "Detail 1",
  "Detail 2",
  "Detail 3",
  "Detail 4",
  "Detail 5"
];

const defauntBackContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.";

const FlipCard = ({
  frontTitle = "Front Title",
  frontContent = defaultFrontContent,
  frontImage,
  backTitle = "Back Title",
  backContent = defauntBackContent,
  backImage
}: FlipCardProps) => {
  return (
    <div className="flip-card-container">
      <div className="flip-card">
        <div
          className="card-front"
          style={!frontImage ? { background: "#176B87" } : {}}
        >
          <figure>
            <div className="img-bg"></div>
            {frontImage && <img src={frontImage} alt={frontTitle} />}
            <figcaption>{frontTitle}</figcaption>
          </figure>
          <ul>
            {frontContent.map((data, index) => {
              return <li key={index}>{data}</li>;
            })}
          </ul>
        </div>

        <div
          className="card-back"
          style={!backImage ? { background: "#CEDEBD" } : {}}
        >
          <figure>
            <div className="img-bg"></div>
            {backImage && <img src={backImage} alt={frontTitle} />}
            {backTitle && <figcaption>{backTitle}</figcaption>}
          </figure>

          <div className="card-details">
            <p>{backContent}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
