import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ROUTES } from "./const";
import IndexPage from "../pages/IndexPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.INDEX} element={<IndexPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
