import { Routes, Route } from 'react-router-dom';

import './App.css';
import Calculator from './components/Calculator';
import Quotes from './components/displayQuote';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      <Route path="math-magicians/" element={<Layout />}>
        <Route index element={<Calculator />} />
        <Route path="math-magicians/quote" element={<Quotes />} />
      </Route>
    </Routes>
  );
}

export default App;
