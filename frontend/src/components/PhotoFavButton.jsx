import React from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton() {
  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon displayAlert={false} selected={false} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
