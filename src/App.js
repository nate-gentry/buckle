import "./App.css";
import Grid from "@mui/material/Grid";
import React, { useState, useRef, useEffect } from "react";


import customData from "./data.json"
import MediaCard from "./Componnets/CardComponent";
import InputComponent from "./Componnets/InputComponent";

function App() {
  const [data, setDate] = React.useState(customData)

  return (
    <Grid container>
      <MediaCard />
      <MediaCard />
      <MediaCard />
      <InputComponent />
    </Grid>
  );
}

export default App;
