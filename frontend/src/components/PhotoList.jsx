import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const {
    photos,
    updateToFavPhotoIds,
    removeFromFavPhotoIds,
    state,
    onOpenPhotoDetailsModal,
    setPhotoSelected,
  } = props;
  const PhotoListRendered =
    photos &&
    photos.map((data) => (
      <li key={data.id}>
        <PhotoListItem
          photo={data}
          state={state}
          updateToFavPhotoIds={updateToFavPhotoIds}
          removeFromFavPhotoIds={removeFromFavPhotoIds}
          onOpenPhotoDetailsModal={onOpenPhotoDetailsModal}
          setPhotoSelected={setPhotoSelected}
        />
      </li>
    ));
  return <ul className="photo-list">{PhotoListRendered}</ul>;
};

export default PhotoList;
