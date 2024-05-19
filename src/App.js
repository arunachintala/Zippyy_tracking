import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Page4 from '../src/Components/Page4/Page4';
import Page3 from '../src/Components/Page3/Page3';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/page4" element={<Page4 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/" element={<Page4 />} />
      </Routes>
    </Router>
  );
}

export default App;
