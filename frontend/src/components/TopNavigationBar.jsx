import React from "react";

import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";

const TopNavigation = (props) => {
  const { topics, photosByTopic, state } = props;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} state={state} photosByTopic={photosByTopic} />
      <FavBadge isFavPhotoExist={state.favPhotoIds.length > 0} />
    </div>
  );
};

export default TopNavigation;
