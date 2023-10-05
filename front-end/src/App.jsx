import { Route, Routes } from "react-router-dom";
import "./App.css";
import { InputLogin } from "./components/inputLogin/inputLogin";
import { LoginPage } from "./view/Login/login";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/connect" element={<InputLogin type={"text"} placeHolder={"Identifiant"} id={"input_identifiant"} name={"identifiant"} onChange={() => {}} />} />
      </Routes>
    </main>
  );
}

export default App;
