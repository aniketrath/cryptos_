import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import { CoinStats, Coins , LoginPage , Logout} from './Pages/index'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Coins />} />
        <Route path="/coinstats" element={<CoinStats />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/logout" element={<Logout />} />
        {/* <Route path="/nfts" element={<Nfts />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
