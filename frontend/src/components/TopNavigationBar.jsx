import React from "react";

import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";
import FavIcon from "./FavIcon";

const TopNavigation = (props) => {
  const { topics, photosByTopic } = props;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} photosByTopic={photosByTopic} />
      <FavIcon />
    </div>
  );
};

export default TopNavigation;
