import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CreateCampaign from './pages/CreateCampaign';
import CampaignHistory from './pages/CampaignHistory';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<CreateCampaign />} />
        <Route path="/history" element={<CampaignHistory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
