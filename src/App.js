import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Features from "./scenes/features";
import Map from "./scenes/map";
import Gaussian from "./scenes/gaussian";
import Form from "./scenes/form";
import Decision from "./scenes/decision";
import KNeighbors from "./scenes/kneighbors";
import Business from "./scenes/business"
import FAQ from "./scenes/faq";
import RandomForest from "./scenes/randomforest";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import Bar from "./scenes/top10";
import AttackType from "./scenes/attacktype";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/cyberdawgs-dashboard" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/features" element={<Features />} />
              <Route path="/map" element={<Map />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/gaussian" element={<Gaussian />} />
              <Route path="/kneighbors" element={<KNeighbors />} />
              <Route path="/decision" element={<Decision />} />
              <Route path="/top10" element={<Bar />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/business" element={<Business />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/random" element={<RandomForest />} />
              <Route path="/attacktype" element={<AttackType />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;