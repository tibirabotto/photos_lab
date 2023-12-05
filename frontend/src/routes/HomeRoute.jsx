import React from "react";

import "../styles/HomeRoute.scss";

import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";

const HomeRoute = (props) => {
  const { topics, photos, photosByTopic } = props;
  return (
    <div className="home-route">
      <TopNavigation topics={topics} photosByTopic={photosByTopic} />
      <PhotoList photos={photos} />
    </div>
  );
};

export default HomeRoute;
