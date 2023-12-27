import "./App.css";
import { Route, Routes } from "react-router-dom";

import Main from "./page/main";
import NotFound from "./page/notfound";
import Ranking from "./page/ranking";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="ranking" element={<Ranking />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
