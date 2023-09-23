import { useState } from "react";
import "./index.css";

const Component1 = () => {
  const [news, setNews] = useState([
    "Local Cat Discovers Secret to World Peace, Demands Unlimited Catnip Supply",
    "Breaking News: Sock Monster Finally Captured in Local Dryer",
    "Town Elects Potato as Mayor, Residents Thrilled by New 'Couch Potato' Leadership",
    "Man Claims to Have Invented Silent Alarm Clock, Neighbors Beg to Differ",
    "Scientists Prove That Chocolate Is a Vegetable, Recommend Daily Intake for Health",
    "Penguin Named New Head of Antarctic Tourism Board, Promises Cooler Vacations",
    "Ingenious Toddler Trades Single Carrot for Parents' Entire Candy Stash",
    "Local Grandma Sets World Record for Extreme Knitting, Creates Sweater for Entire Town",
    "Breaking: UFO Lands in Backyard, Alien Requests Directions to the Closest Pizza Place",
    "World's Laziest Man Invents 'Remote Control' for TV Remote Control"
  ]);
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

  const nextFunction = () => {
    if (currentNewsIndex === news.length - 1) {
      // If at the end of the news, reset to the beginning
      setCurrentNewsIndex(0);
    } else {
      // Otherwise, increment the currentNewsIndex
      setCurrentNewsIndex(currentNewsIndex + 1);
    }
  };

  return (
    <div>
      <h4>{news[currentNewsIndex]}</h4>
      <button onClick={nextFunction}>Next</button>
    </div>
  );
};

export default Component1;
