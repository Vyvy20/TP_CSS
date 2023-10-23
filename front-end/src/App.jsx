import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./view/Login/login";
import "./App.css";
import { InterventionItem } from "./components/InterventionItem/interventionItem";
import { ListItervention } from "./view/ListItervention/ListItervention";
import { Header } from "./components/header/header";

export function App() {
  return (
    <main>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/listIntervention" element={<ListItervention />} />
        <Route
          path="/connect"
          element={<InterventionItem isEnable={true} textStatus={"je Part"} />}
        />
        <Route path="/test" element={<Header />} />
      </Routes>
    </main>
  );
}
