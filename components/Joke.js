import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const Joke = () => {
  const [joke, setJoke] = useState({
    setup: "What's the object-oriented way to become wealthy?",
    delivery: "Inheritance.",
  });
  useEffect(() => {
    const fetchJoke = async () => {
      const result = await axios(
        "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,racist,sexist&type=twopart"
      );
      if (result && result.data) {
        setJoke(result.data);
      }
    };
    fetchJoke();
  }, []);

  return (
    <JokeStyle>
      {/* <button type="button">open me</button> */}
      {
        <div className={"joke"}>
          <div className={"joke-head"}>Geek joke of the day:</div>
          <div className={"joke-text"}>
            <p style={{ marginTop: "5px" }}>Q: "{joke.setup}"</p>
            <p>A: "{joke.delivery}"</p>
            <span className={"joke-credit"}>
              &nbsp;via&nbsp;
              <a href={"https://sv443.net/jokeapi/v2/"}>JokeApi</a>
            </span>
          </div>
        </div>
      }
    </JokeStyle>
  );
};

export default Joke;

const JokeStyle = styled.div`
  display: flex;
  padding: 25px;
  height: 300px;
  height: auto;
  align-items: center;
  .joke {
    margin: 0 auto;
  }
  .joke-head {
    font-family: "Courgette", cursive;
    color: var(--gradient-1);
    font-size: 28px;
    text-align: center;
  }
  .joke-text {
    line-height: 1.2;
    padding: 10px 0;
  }
  .joke-credit {
    font-size: 12px;
    float: right;
    a {
      text-decoration: underline;
    }
  }
`;
