import React, { useState } from "react";
import "./button.styles.css";

function MainButton() {
  const [counter, setCounter] = useState(100);
  const [dislike, setDislike] = useState(25);

  const [likeToogle, setLikeToogle] = useState(false);
  const [dislikeToggle, setDislikeToggle] = useState(false);

  //   let likeToogle = false;
  //   let dislikeToggle = false;
  const likefunction = () => {
    setCounter(counter + 1);
    if (likeToogle) {
      setCounter(counter - 1);
    }
    setLikeToogle(!likeToogle);
  };
  const dislikefunction = () => {
    setDislike(dislike + 1);
    if (dislikeToggle) {
      setDislike(dislike - 1);
    }
    setDislikeToggle(!dislikeToggle);
  };

  return (
    <div>
      <button
        className={likeToogle ? "liked" : "like-button"}
        onClick={() => likefunction()}
      >
        <span>Like I {counter}</span>
      </button>
      <button
        className={dislikeToggle ? "dislike-button" : "disliked"}
        onClick={() => dislikefunction()}
      >
        <span>Dislike I {dislike}</span>
      </button>
      {/* <Button>Unlike</Button> */}
    </div>
  );
}

export default MainButton;
