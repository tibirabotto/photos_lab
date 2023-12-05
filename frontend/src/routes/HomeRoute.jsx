import React from "react";

import "../styles/HomeRoute.scss";

import TopNavigation from "components/TopNavigationBar";

const HomeRoute = (props) => {
  const { topics } = props;
  return (
    <div className="home-route">
      <TopNavigation topics={topics} />
    </div>
  );
};

export default HomeRoute;
