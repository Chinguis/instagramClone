import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import Home from './pages/Home.jsx'
import Profile from './pages/Profile.jsx'
import CreateAccount from './pages/CreateAccount.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile/:userId" element={<Profile />} />
        <Route path="/createAccount" element={<CreateAccount />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
