import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Index from './pages/Index/Index';
import About from './pages/About/About';
import ContactMe from './pages/Contact/ContactMe';

function App() {
  return (
    <>
    <header>
      <nav>
        
        <ul>
          <li className='nav-logo'>Sucre</li>
          <li><Link to="/">Index</Link></li>
          <li><Link to="/about">Study&Research</Link></li>      
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
    <Routes>
      <Route path="/" element={<Index></Index>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/contact" element={<ContactMe></ContactMe>}></Route>
      {/* 其他路由可以在这里添加 */}
    </Routes>
    </>
  );
}

export default App;
