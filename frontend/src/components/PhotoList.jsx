import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const { photos, updateToFavPhotoIds, removeFromFavPhotoIds, state } = props;
  const PhotoListRendered =
    photos &&
    photos.map((data) => (
      <li key={data.id}>
        <PhotoListItem
          photo={data}
          state={state}
          updateToFavPhotoIds={updateToFavPhotoIds}
          removeFromFavPhotoIds={removeFromFavPhotoIds}
        />
      </li>
    ));
  return <ul className="photo-list">{PhotoListRendered}</ul>;
};

export default PhotoList;
