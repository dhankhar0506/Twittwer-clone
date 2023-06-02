/* eslint-disable react/no-unescaped-entities */
import { BiDotsHorizontalRounded } from "react-icons/bi";
import style from "./WhatsNew.module.css";
import "rsuite/dist/rsuite.min.css";
import { useState } from "react";

const Tweets = [
  {
    id: 3,
    topics: "Trending in Web-Devlopment",
    hashTag: "#jai-functioup",
    tweetsNo: "31.3K Tweets",
  },
  {
    id: 0,
    topics: "Sports ",
    hashTag: "#Geeta phogat",
    tweetsNo: "60.9K Tweets",
  },
  {
    id: 1,
    topics: "Entertainment · Trending",
    hashTag: "#Bibbta phogat",
    tweetsNo: "59.4K Tweets",
  },
  {
    id: 2,
    topics: "Politics · Trending",
    hashTag: "#Jai-Modi",
    tweetsNo: "1,681 Tweets",
  },
  {
    id: 3,
    topics: "Akashy Kumar",
    hashTag: "#Jai-maaaaa-kallliiiiiii",
    tweetsNo: "31.3K Tweets",
  },
  {
    id: 4,
    topics: "NBA . Earlier today",
    hashTag: "React-devtaaa0",
    tweetsNo: "3,123 Tweets",
  },
];

export default function WhatsNew() {
  // const [pop, setPop] = useState(false);
  const [allNew, setAllNew] = useState(Tweets);
  const [showInt, setShowInt] = useState(true);
  function handleTweetDelete(index1) {
    console.log(index1);
    const newTweet = allNew.filter((ele) => ele.id != index1);
    setAllNew(newTweet);
  }
  return (
    <div className={style.MainDiv}>
      <p className={style.heading}>What's New</p>
      {allNew.map((ele) => (
        <div className={style.Div} key={ele.hashTag}>
          <div>
            <p className={style.para1}>{ele.topics}</p>
            <p style={{ fontWeight: "800" }}>{ele.hashTag}</p>
            <p className={style.para1}>{ele.tweetsNo}</p>
          </div>
          {showInt && (
            <BiDotsHorizontalRounded
              className={style.icon}
              onClick={() => setShowInt(false)}
            />
          )}{" "}
          {showInt ? (
            ""
          ) : (
            <div className={style.button}>
              <span>
                <button
                  onClick={() => {
                    setShowInt(true);
                  }}
                >
                  ✔Back
                </button>
              </span>
              <span>
                <button
                  onClick={() => {
                    handleTweetDelete(ele.id);
                  }}
                >
                  ❌Delete
                </button>
              </span>
            </div>
          )}
        </div>
      ))}
      <button className={style.button}>Show more</button>
    </div>
  );
}
