import React from "react"
import {Container} from "react-bootstrap"
import Header from "./components/header/Header";
import CardContainer from "./components/cards/CardContainer";

function App() {
  return (
    <Container className="text-center mt-4">
    <Header/>
    <CardContainer/>

    </Container>
  );
}

export default App;
