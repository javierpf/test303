import React from 'react';
import logo from './logo.svg';
import './App.css';
import glamorous from 'glamorous';
import ErrorDisplay from './components/ErrorDisplay';
import NewsPaper from './components/Newspaper';
import Post from './components/Post';
import { BrowserRouter as Router, Route } from "react-router-dom";

const StyledContainer = glamorous.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  alignContent: "center",
  justifyContent: "center",
  padding: 0,
  margin: 0,
  fontSize: 20,
});

const App = props => (
  <Router>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Super duper uber newspaper</h1>
      </header>
      <StyledContainer>
        <ErrorDisplay>
          <React.Fragment>
            <Route
              exact
              path="/"
              component={NewsPaper}
            />
            <Route
              exact
              path="/:postId"
              component={Post}
            />
          </React.Fragment>
        </ErrorDisplay>
      </StyledContainer>
    </div >
  </Router>
);


export default App;
