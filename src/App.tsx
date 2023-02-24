import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./page/NoPage";
import HomePage from './page/HomePage';
import DashboardPage from './page/DashboardPage';
import LoginPage from './page/LoginPage';
import SignupPage from './page/SignupPage';
import TempPage from './page/TempPage';
import UserProvider from "./store/context";

function App() {

  return (
    <UserProvider>
      <BrowserRouter>
      <Routes>

          <Route path="/" element={<HomePage />}/>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/signup" element={<SignupPage />}/>
          <Route path="/dashboard" element={<DashboardPage />}/>
          <Route path="/temp" element={<TempPage />}/>
  
          <Route path="*" element={<NoPage />} />

      </Routes>
    </BrowserRouter>
    </UserProvider>
    
  );
}

export default App;