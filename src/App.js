import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import RecentMovies from "./routes/RecentMovies";
import HighMovies from "./routes/HighMovies";
import RatedMovies from "./routes/RatedMovies";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/hello" element={<h1>Hello!</h1>} />
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} basename={process.env.PUBLIC_URL} />
        <Route path="/recent_movies" element={<RecentMovies />} basename={process.env.PUBLIC_URL} />
        <Route path="/2160p_movies" element={<HighMovies />} basename={process.env.PUBLIC_URL} />
        <Route path="/top_movies" element={<RatedMovies />} basename={process.env.PUBLIC_URL} />
      </Routes>
    </Router>
  );
}

export default App;
