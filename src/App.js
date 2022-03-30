import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import RecentMovies from "./routes/RecentMovies";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/hello" element={<h1>Hello!</h1>} />
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} basename={process.env.PUBLIC_URL} />
        <Route path="/recent_movies" element={<RecentMovies />} basename={process.env.PUBLIC_URL} />
      </Routes>
    </Router>
  );
}

export default App;
