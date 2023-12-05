import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const { photos } = props;
  const PhotoListRendered =
    photos &&
    photos.map((data) => (
      <li key={data.id}>
        <PhotoListItem photo={data} />
      </li>
    ));
  return <ul className="photo-list">{PhotoListRendered}</ul>;
};

export default PhotoList;
