import "./App.css";
import { Route, Routes } from "react-router-dom";

import Main from "./page/main";
import NotFound from "./page/notfound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
