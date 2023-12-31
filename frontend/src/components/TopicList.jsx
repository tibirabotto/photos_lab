import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  const { topics, photosByTopic } = props;

  const TopicListItemRendered =
    topics &&
    topics.map((data) => (
      <TopicListItem
        key={data.id}
        title={data.title}
        topicId={data.id}
        photosByTopic={photosByTopic}
      />
    ));
  return <div className="top-nav-bar__topic-list">{TopicListItemRendered}</div>;
};

export default TopicList;
