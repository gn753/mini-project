import React, { useEffect, useState } from "react";
import "./App.css";
import "./scss/Header.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StyleGuide from "./components/common/StyleGuide";
import Header from "./components/common/Header";
import News from "./pages/News";
import Show from "./pages/Show";
import Comment from "./pages/Comment";
import Ask from "./pages/Ask";
import Jobs from "./pages/Jobs";

function App() {
  const [data, setData] = useState();
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<News></News>}></Route>
          <Route path="/show" element={<Show />}></Route>
          <Route path="/comments" element={<Comment />}></Route>
          <Route path="/styleguide" element={<StyleGuide></StyleGuide>}></Route>
          <Route path="/ask" element={<Ask></Ask>}></Route>
          <Route path="/jobs" element={<Jobs></Jobs>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
