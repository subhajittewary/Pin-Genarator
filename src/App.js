import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./App.css";
import "./bootstrap.min.css";
import HomeScreen from "./screens/HomeScreen";
import ListScreen from "./screens/ListScreen";
import AddSectionButton from "./screens/AddSectionButton";
import Header from "./components/Header";
const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/saved" exact component={ListScreen} />
          <Route path="/section" exact component={AddSectionButton} />
        </Container>
      </main>
    </Router>
  );
};

export default App;
