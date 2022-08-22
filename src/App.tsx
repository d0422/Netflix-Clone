import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Tv from "./pages/Tv";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="movies/:movieId" element={<Home />}></Route>
          </Route>
          <Route path="/tv" element={<Tv />}>
            <Route path=":TvId" element={<Tv />}></Route>
          </Route>
          <Route path="/search" element={<Search />}>
            <Route path=":TvId" element={<Search />}></Route>
            <Route path=":movieId" element={<Search />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
