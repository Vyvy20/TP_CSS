import { Route, Routes } from "react-router-dom";
import "./App.css";
import TestRoute from "./TestRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/connect" element={<TestRoute />} />
      </Routes>
    </>
  );
}

export default App;
