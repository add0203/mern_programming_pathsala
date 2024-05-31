import React from "react";
import "./HistoryCard.css";
const HistoryCard = ({ data }) => {
  return (
    <div>
      title : {data.title}
      date : {data.date}
      image : {data.image}
      image : {data.day?.dayName}
    </div>
  );
};

export default HistoryCard;
