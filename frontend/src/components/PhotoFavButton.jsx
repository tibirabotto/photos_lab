import React from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton(props) {
  const { updateToFavPhotoIds, removeFromFavPhotoIds, photoId, state } = props;

  const handleFavorite = () => {
    if (state.favPhotoIds.includes(photoId)) {
      removeFromFavPhotoIds(photoId);
    } else {
      updateToFavPhotoIds(photoId);
    }
  };

  return (
    <div className="photo-list__fav-icon" onClick={handleFavorite}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon
          displayAlert={false}
          selected={state.favPhotoIds.includes(photoId)}
        />
      </div>
    </div>
  );
}

export default PhotoFavButton;
