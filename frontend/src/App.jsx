import React, { useEffect } from "react";

import "./App.scss";

import HomeRoute from "routes/HomeRoute";
import useApplicationData from "hooks/useApplicationData";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

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

  const photosByTopic = (topic_id) => {
    fetch(`${URL_API}/api/topics/photos/${topic_id}`)
      .then((response) => response.json())
      .then((data) => setPhotoData(data));
  };

  return (
    <div className="App">
      <HomeRoute
        state={state}
        topics={state.topicData}
        photos={state.photoData}
        photosByTopic={photosByTopic}
        setPhotoSelected={setPhotoSelected}
        updateToFavPhotoIds={updateToFavPhotoIds}
        removeFromFavPhotoIds={removeFromFavPhotoIds}
        onOpenPhotoDetailsModal={onOpenPhotoDetailsModal}
      />
      {state.isPhotoDetailsModalOpen && (
        <PhotoDetailsModal
          onClosePhotoDetailsModal={onClosePhotoDetailsModal}
          selectedPhoto={state.selectedPhoto}
          updateToFavPhotoIds={updateToFavPhotoIds}
          removeFromFavPhotoIds={removeFromFavPhotoIds}
          state={state}
          setPhotoSelected={setPhotoSelected}
          onOpenPhotoDetailsModal={onOpenPhotoDetailsModal}
        />
      )}
    </div>
  );
};

export default App;
