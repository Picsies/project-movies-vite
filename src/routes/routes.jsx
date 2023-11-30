import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { MovieInfo } from "../pages/MovieInfo";
import { NotFoundPage } from "../pages/NotFoundPage";

const routes = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/movies/:movieId" element={<MovieInfo />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

export default routes;