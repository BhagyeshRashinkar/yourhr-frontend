import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from "./SignUp";
import SuccessPage from './SuccessPage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<SignUp></SignUp>} />
          <Route path="/success" element={<SuccessPage></SuccessPage>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

