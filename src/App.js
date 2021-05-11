import Header from "./components/Layout/Header";
import React from "react";
import Meals from "./components/Meals/Meals";
const App = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Meals />
      </main>
      <h2>Let's get started!</h2>
    </React.Fragment>
  );
};

export default App;
