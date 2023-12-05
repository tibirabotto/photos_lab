import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const { title, topicId, photosByTopic } = props;

  const handleClick = () => {
    photosByTopic(topicId);
  };

  return (
    <div className="topic-list__item" onClick={handleClick}>
      {title}
    </div>
  );
};

export default TopicListItem;
