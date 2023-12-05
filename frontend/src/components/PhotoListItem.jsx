import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const { urls, user, location, id } = props.photo;

  const handleOnClick = () => {};

  return (
    <div className="photo-list__item">
      <PhotoFavButton />
      <img
        src={urls.regular}
        className="photo-list__image"
        alt="image-source"
        onClick={() => handleOnClick()}
      />
      <div className="photo-list__user-details">
        <img
          src={user.profile}
          className="photo-list__user-profile"
          alt="image-source"
        />
        <div className="photo-list__user-info">
          <span>{user.username}</span>
          <br />
          <span className="photo-list__user-location">{location.city}</span>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
