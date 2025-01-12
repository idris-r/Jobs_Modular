import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CvProvider } from './context/CvContext';
import SideMenu from './components/SideMenu';
import InputPage from './pages/InputPage';
import AnalysisPage from './pages/AnalysisPage';
import ActionableItemsPage from './pages/ActionableItemsPage';
import OptimizeCvPage from './pages/OptimizeCvPage';
import CoverLetterPage from './pages/CoverLetterPage';
import './App.css';

function App() {
  return (
    <CvProvider>
      <BrowserRouter>
        <div className="app-container">
          <SideMenu />
          <main className="content-area">
            <Routes>
              <Route path="/" element={<InputPage />} />
              <Route path="/analysis" element={<AnalysisPage />} />
              <Route path="/actionable-items" element={<ActionableItemsPage />} />
              <Route path="/optimize-cv" element={<OptimizeCvPage />} />
              <Route path="/cover-letter" element={<CoverLetterPage />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </CvProvider>
  );
}

export default App;
