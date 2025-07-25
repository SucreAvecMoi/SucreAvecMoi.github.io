import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Index from './pages/Index';
import About from './pages/About';
import ContactMe from './pages/ContactMe';

function App() {
  return (
    <>
    <header >
      <nav>
        <ul>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/about">关于我们</Link></li>      
          <li><Link to="/contact">联系我们</Link></li>
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
