import "./App.css";
import Grid from "@mui/material/Grid";
import React, { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import customData from "./data.json";
import MediaCard from "./Components/MediaCard";
import InputComponent from "./Components/InputComponents";
const LOCAL_STORAGE_KEY = "buckleApp.cards";

function App() {
  const [data, setDate] = React.useState(customData);
  const [cards, setTodos] = useState([]);
  const cardRefName = useRef(); 

  console.log(data);

  // useEffect(() => {
  //   const storedCards = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   if (storedCards) setDate(storedCards);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cards));
  // }, [cards]);



  function handleAdd(e) {
    const text = cardRefName;
    console.log(text);
    if (text === "") return;
    console.log(text);
    setDate((prevCards) => ({
      ...prevCards,

      /// need to pass the right obj 
      comments: [
        {
          id: uuidv4(),
          user: { username: "maxblagun" },
          content: [text],
          replies: [
            {
              content:
                "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
              createdAt: "1 week ago",
              id: 3,
              replyingTo: "maxblagun",
              score: 4,
            },
          ],
        },
      ],
    }));
  }

  function handleDelete(e) {
    const newCards = data.comments.filter((item) => item.id !== item);
    setDate(newCards);
  }

  return (
    <Grid className="main">
      {data.comments.map((card) => {
        return (
          <MediaCard
            key={card.id}
            cardData={card}
            handleDelete={handleDelete}
          />
        );
      })}
      <InputComponent handleAdd={handleAdd} ref={cardRefName} />
    </Grid>
  );
}

export default App;
