import React, { useEffect } from "react";

import "./App.scss";

import HomeRoute from "routes/HomeRoute";
import useApplicationData from "hooks/useApplicationData";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const URL_API = "http://localhost:8001";
  const {
    state,
    removeFromFavPhotoIds,
    setPhotoSelected,
    updateToFavPhotoIds,
    onOpenPhotoDetailsModal,
    onClosePhotoDetailsModal,
    setPhotoData,
    setTopicData,
  } = useApplicationData();

  useEffect(() => {
    fetch(`${URL_API}/api/photos`)
      .then((response) => response.json())
      .then((data) => setPhotoData(data));

    fetch(`${URL_API}/api/topics`)
      .then((response) => response.json())
      .then((data) => setTopicData(data));
  }, []);

  return (
    <div className="App">
      <HomeRoute topics={state.topicData} />
    </div>
  );
};

export default App;
