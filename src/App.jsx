import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import AnimeQuiz from './pages/AnimeQuiz';

export default function App() {
  return <Router>
    <Routes>

      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/animeQuiz/:id' element={<AnimeQuiz />} />
    </Routes>

  </Router>;
}



