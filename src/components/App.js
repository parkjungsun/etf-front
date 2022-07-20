import { Route, Routes } from "react-router-dom";

import Etf from "./etf";

function App() {
  return (
    <>
      <Routes>
        <Route path="/etf/:id" element={<Etf />} />
        <Route path="/*" element={<Etf />}/>
      </Routes>
    </>
  );
}

export default App;
