import React, { useEffect, useState } from "react";
import "./App.css";
import "./scss/Header.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StyleGuide from "./components/common/StyleGuide";
import Header from "./components/common/Header";
import FooterBar from "./components/common/FooterBar";
import News from "./pages/News";
import Show from "./pages/Show";
import Comment from "./pages/Comment";
import Ask from "./pages/Ask";
import Jobs from "./pages/Jobs";

function App() {
  const [data, setData] = useState();

  // useEffect(() => {
  //   const getData = async () => {
  //     const res = await fetch(
  //       "https://hacker-news.firebaseio.com/v0/topstories.json"
  //     )
  //       .then((res) => res.json()) //json 객체로 변환
  //       .then((res) => JSON.parse(JSON.stringify(res))); // 파싱
  //     const topIdData = res.map((it) => {
  //       return {
  //         id: it,
  //       };
  //     });
  //     console.log(topIdData);
  //     setData(topIdData);
  //   };
  //   getData();
  // }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<News topIdList={data}></News>}></Route>
          <Route path="/hkshow" element={<Show />}></Route>
          <Route path="/comments" element={<Comment />}></Route>
          <Route path="/styleguide" element={<StyleGuide></StyleGuide>}></Route>
          <Route path="/ask" element={<Ask></Ask>}></Route>
          <Route path="/jobs" element={<Jobs></Jobs>}></Route>
        </Routes>
        <FooterBar />
      </div>
    </BrowserRouter>
  );
}

export default App;
