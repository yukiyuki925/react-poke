import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ROUTES } from "./const";
import IndexPage from "../pages/IndexPage";
import DetailPage from "../pages/DetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.INDEX} element={<IndexPage />} />
        <Route path={ROUTES.DETAIL} element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
