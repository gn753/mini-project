import React, { useEffect, useState } from "react";
import "./App.css";
import "./scss/Header.scss";
import "./scss/style-guide.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getStories, askStoriesUrl, newStoriesUrl } from "./util/api";
import Header from "./components/common/Header";
import News from "./pages/News";
import Show from "./pages/Show";
import Ask from "./pages/Ask";
import Jobs from "./pages/Jobs";
import AskContentView from "./pages/AskContentView";
import CommentsContainer from "./components/common/CommentsContainer";

export const StorisContext = React.createContext();

function App() {
  const [data, setData] = useState({});
  const [newsData, setNewsData] = useState({});
  useEffect(() => {
    getStories(askStoriesUrl).then((ids) => setData(ids));
    getStories(newStoriesUrl).then((ids) => setData(ids));
  }, []);
  return (
    <StorisContext.Provider value={data}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<News></News>}></Route>
            <Route path="/show" element={<Show />}></Route>
            <Route path="/ask" element={<Ask></Ask>}></Route>
            <Route
              path="/item/:urlId"
              element={<AskContentView></AskContentView>}
            ></Route>
            <Route
              path="/comments/:urlId"
              element={<CommentsContainer></CommentsContainer>}
            ></Route>
            <Route path="/jobs" element={<Jobs></Jobs>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </StorisContext.Provider>
  );
}

export default App;
