import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Galleria from "./Components/Galleria";
import MyFooter from "./Components/MyFooter";
import MyNav from "./Components/MyNav";
import TvShows from "./Components/TvShows";
import Home from "./Pages/home";
import MovieDetails from "./Pages/MovieDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <div id="app">
          <MyNav />
          {/* <TvShows /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tv-show" element={<TvShows />} />
            <Route path="/details/:id" element={<MovieDetails />} />
          </Routes>
          <MyFooter />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
