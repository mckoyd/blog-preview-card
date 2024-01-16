import React from "react";
import "./App.css";
import { ReactComponent as IllustrationArticleSVG } from "./assets/images/illustration-article.svg";
import Headshot from "./assets/images/image-avatar.webp";

const cardConstants = {
  LEARNING: "Learning",
  PUBLISHED: "Published 21 Dec 2023",
  HTMLCSSTITLE: "HTML & CSS foundations",
  HTMLCSSDESCRIPTION:
    "These languages are the backbone of every website, defining structure, content, and presentation.",
  NAME: "Greg Hooper",
};

function App() {
  return (
    <div className="app">
      <div className="bpc-container">
        <div className="ias-container">
          <IllustrationArticleSVG className="ias-svg" />
        </div>
        <div className="learning-title-container">
          <p className="learning-title">{cardConstants.LEARNING}</p>
        </div>
        <div className="published-container">
          <p className="publishing-text">{cardConstants.PUBLISHED}</p>
        </div>
        <div className="htmlcsstitle-container">
          <h2 className="htmlcsstitle-text">{cardConstants.HTMLCSSTITLE}</h2>
        </div>
        <div className="htmlcssdescription-container">
          <p className="htmlcssdescription-text">
            {cardConstants.HTMLCSSDESCRIPTION}
          </p>
        </div>
        <div className="footer-name-pic">
          <img src={Headshot} className="avatar" />
          <p className="name-text">{cardConstants.NAME}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
