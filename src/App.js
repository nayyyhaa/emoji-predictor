import React from "react";
import "./styles.css";
import { useState } from "react";

let emojiDictionary = {
  "â¤ï¸": "Heart",
  "ð": "Beaming Face with Smiling Eyes",
  "ð": "Smiling Face with Heart-Eyes",
  "ð«": "Dizzy",
  "ð¤ª": "Zany Face",
  "ð³ï¸âð": "Pride",
  "ð¤¡": "Clown Face",
  "ðï¸": "Hand with Fingers Splayed",
  "ð": "Rainbow",
  "ð": "Clapping Hands",
  "ð": "Raising Hands",
  "â¨": "Sparkles",
  "ð": "Pizza",
  "âï¸": "Sun"
};
let emojiList = Object.keys(emojiDictionary); //object to list

export default function App() {
  const [userInput, setUserInput] = useState("");
  function inputHandler(event) {
    let anotherInput = event.target.value;
    if (anotherInput in emojiDictionary) {
      setUserInput(emojiDictionary[anotherInput]);
    } else {
      setUserInput("Sorry! we don't have that in our DB yet.");
    }
  }
  function clickHandler(item) {
    setUserInput(emojiDictionary[item]);
  }
  function getBg(index) {
    if (index % 2 === 0) {
      return "white";
    }
    return "pink";
  }
  return (
    <div className="App">
      <h1 style={{ backgroundColor: "yellow", color: "blue" }}>
        {" "}
        Welcome to ð¤ªemoji's jungle
      </h1>
      <input
        onChange={inputHandler}
        placeholder="Enter emoji here"
        style={{ padding: "1rem" }}
      />
      <h1>meaning: {userInput}</h1>
      {/* <ul>
        {emojiList.map(function (item, index) {
          return (
            <li key={index} onClick={
              () => clickHandler(item)} style={{ backgroundColor: getBg(index) }}>
              {/* pass item */}
      {/* {item}
            </li>
          );
        })}
      </ul> */}
      <h5>some emoji's in our DB</h5>
      {emojiList.map(function (emoji, index) {
        return (
          <span
            onClick={() => clickHandler(emoji)}
            style={{
              backgroundColor: getBg(index),
              padding: "1rem",
              margin: "0.5rem",
              display: "inline-block",
              cursor: "pointer",
              fontSize: "25px"
            }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
