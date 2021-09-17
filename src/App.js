import React, { useState } from "react";

import "./App.css";
import InputList from "./component/InputList";
import Title from "./component/Title";
import Todos from "./component/Todos";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";


const useStyles = makeStyles({
  container: {
    width: "100% !important",
    height: "80%",
    margin: "0px",
    padding: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "5px",
    backgroundColor: "#ffff",
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Container maxWidth="sm" className={classes.container}>
        <Title />
        <InputList />
        <Todos />
      </Container>
    </div>
  );
}
export default App;
