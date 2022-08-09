import React from "react";
import { Container } from "components/commonStyles";
import AppHeader from "components/navbar";
import ModelCanvas from "components/model";

function App() {
  return (
    <Container>
      <AppHeader />
      <ModelCanvas />
    </Container>
  );
}

export default App;
