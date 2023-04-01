import { Routes, Route } from 'react-router-dom';

import './App.css';
import Calculator from './components/Calculator';
import Quotes from './components/displayQuote';
import Layout from './components/Layout';
import Home from './components/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="quote" element={<Quotes />} />
      </Route>
    </Routes>
  );
}

export default App;
