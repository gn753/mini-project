import React, { useEffect, useState } from "react";
import "./App.css";
import "./scss/Header.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StyleGuide from "./components/common/StyleGuide";
import Header from "./components/common/Header";
import HkNews from "./pages/HkNews";
import HkShow from "./pages/HkShow";
import HkComment from "./pages/HkComment";

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
          <Route path="/" element={<HkNews topIdList={data}></HkNews>}></Route>
          <Route path="/hkshow" element={<HkShow />}></Route>
          <Route path="/comments" element={<HkComment />}></Route>
          <Route path="/styleguide" element={<StyleGuide></StyleGuide>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
