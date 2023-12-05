import React from "react";

import "../styles/HomeRoute.scss";

import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";

const HomeRoute = (props) => {
  const {
    state,
    topics,
    photos,
    photosByTopic,
    updateToFavPhotoIds,
    removeFromFavPhotoIds,
    onOpenPhotoDetailsModal,
  } = props;
  return (
    <div className="home-route">
      <TopNavigation
        topics={topics}
        photosByTopic={photosByTopic}
        state={state}
      />
      <PhotoList
        photos={photos}
        state={state}
        updateToFavPhotoIds={updateToFavPhotoIds}
        removeFromFavPhotoIds={removeFromFavPhotoIds}
        onOpenPhotoDetailsModal={onOpenPhotoDetailsModal}
      />
    </div>
  );
};

export default HomeRoute;
