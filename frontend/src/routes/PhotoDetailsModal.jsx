import React, { useEffect, useState } from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "components/PhotoList";
import PhotoFavButton from "components/PhotoFavButton";

const PhotoDetailsModal = (props) => {
  const {
    onClosePhotoDetailsModal,
    selectedPhoto,
    state,
    updateToFavPhotoIds,
    removeFromFavPhotoIds,
    onOpenPhotoDetailsModal,
    setPhotoSelected,
  } = props;

  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button"
        onClick={onClosePhotoDetailsModal}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__image">
        <PhotoFavButton
          updateToFavPhotoIds={updateToFavPhotoIds}
          photoId={selectedPhoto.id}
          state={state}
          removeFromFavPhotoIds={removeFromFavPhotoIds}
        />
        <img src={selectedPhoto.urls.full} width={760} height={500} />
      </div>
      <div className="photo-details-modal__photographer-details">
        <img
          className="photo-details-modal__photographer-profile"
          src={selectedPhoto.user.profile}
          alt="Photographer"
        />
        <div className="photo-details-modal__photographer-info">
          <div>{selectedPhoto.user.username}</div>
          <div className="photo-details-modal__photographer-location">
            {selectedPhoto.location.city}
          </div>
        </div>
      </div>
      <hr />
      <span>Related Photos</span>
      {selectedPhoto.similar_photos && (
        <PhotoList
          photos={Object.values(selectedPhoto.similar_photos)}
          state={state}
          updateToFavPhotoIds={updateToFavPhotoIds}
          removeFromFavPhotoIds={removeFromFavPhotoIds}
          onOpenPhotoDetailsModal={onOpenPhotoDetailsModal}
          setPhotoSelected={setPhotoSelected}
        />
      )}
    </div>
  );
};

export default PhotoDetailsModal;
