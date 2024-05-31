import React, { useEffect, useState } from "react";
import "./History.css";
import Navbar from "../common/Navbar/navbar";
import HistoryCard from "./HistoryCard";

const dummyData = [
  {
    id: "1",
    title: "Learn React",
    date: "2024-06-01",
  },
  {
    id: "2",
    title: "Build a MERN Stack App",
    date: "2024-06-02",
  },
  {
    id: "3",
    title: "Deploy to Heroku",
    date: "2024-06-03",
  },
  {
    id: "4",
    title: "Understand Redux",
    date: "2024-06-04",
  },
  {
    id: "5",
    title: "Learn TypeScript",
    date: "2024-06-05",
  },
  {
    id: "6",
    title: "Master CSS Grid",
    date: "2024-06-06",
  },
  {
    id: "7",
    title: "Write Unit Tests",
    date: "2024-06-07",
  },
  {
    id: "8",
    title: "Integrate with REST APIs",
    date: "2024-06-08",
  },
  {
    id: "9",
    title: "Explore GraphQL",
    date: "2024-06-09",
  },
  {
    id: "10",
    title: "Optimize Performance",
    date: "2024-06-10",
    day: {
      dayName: "monday",
    },
  },
];

const changeTitle = () => {
  console.log("title changed");
};

const changeDescription = () => {
  console.log("Description changed");
};
const History = () => {
  // change in that variable tigger the use Effect functions : keep watch of any state variable

  const [title, setTitle] = useState();
  const [desc, setDecs] = useState();

  useEffect(() => {
    console.log("title changed");
  }, [title]);
  useEffect(() => {
    console.log("desc changed");
  }, [desc]);

  return (
    <div>
      <Navbar />
      <div className="history-main-container">
        <button onClick={changeTitle}>change title</button>
        <button
          onClick={() => {
            changeTitle();
            changeDescription();
          }}
        >
          change title and discription
        </button>
        <button onClick={changeDescription}>change discription</button>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <br />
        <input
          value={desc}
          type="text"
          onChange={(e) => {
            setDecs(e.target.value);
          }}
        />
        <br />
        title : {title}
        desc : {desc}
        {/* component */}
        {/* {dummyData.map((item) => (
          <HistoryCard key={item.id} data={item} />
        ))} */}
        {/* {dummyData.map((item) => (
         return(
           { item.title}
         ) />
        ))} */}
      </div>
      hi
    </div>
  );
};

export default History;
