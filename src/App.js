import "./App.css";

import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import NewsFeed from "./Components/NewsFeed";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

class App extends Component {
  // environment variables import
  mykey = process.env.REACT_APP_MYAPI;
  state = {
    progress: 0,
  };
  // this.state = {

  // }
  setProgress = (progress) => {          // accessed using this.  | ex : this.setProgress(0)
    this.setState({ progress: progress });
  };
  render() {
    console.log(this.mykey);
    return (
      <>
        <BrowserRouter>
          <LoadingBar
            color="#f11946"
            progress={this.state.progress}
            onLoaderFinished={() => this.setProgress(0)}
          />
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <NewsFeed
                  setProgress={this.setProgress}
                  key={"general"}
                  country={"in"}
                  category={"general"}
                />
              }
            ></Route>
            {/* key is added because we are using same componenet again and again so browser will not render component on clicking on navbar buttons so we use different key for every component so it will re render component */}

            <Route
              exact
              path="/business"
              element={
                <NewsFeed
                  setProgress={this.setProgress}
                  key={"business"}
                  country={"in"}
                  category={"business"}
                />
              }
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <NewsFeed
                  setProgress={this.setProgress}
                  key={"entertainment"}
                  country={"in"}
                  category={"entertainment"}
                />
              }
            ></Route>
            <Route
              exact
              path="/health"
              element={
                <NewsFeed
                  setProgress={this.setProgress}
                  key={"health"}
                  country={"in"}
                  category={"health"}
                />
              }
            ></Route>
            <Route
              exact
              path="/science"
              element={
                <NewsFeed
                  setProgress={this.setProgress}
                  key={"science"}
                  country={"in"}
                  category={"science"}
                />
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <NewsFeed
                  setProgress={this.setProgress}
                  key={"sports"}
                  country={"in"}
                  category={"sports"}
                />
              }
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <NewsFeed
                  setProgress={this.setProgress}
                  key={"technology"}
                  country={"in"}
                  category={"technology"}
                />
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
