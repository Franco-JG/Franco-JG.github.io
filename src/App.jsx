import { lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SmoothScroll from './components/SmoothScroll';
import './styles/App.css'

const Home = lazy(() => import('./pages/Home'));
const Navbar = lazy(() => import('./components/navbar/Navbar'));

function App() {
  return (
    <Router>
      <SmoothScroll>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
      </SmoothScroll>
    </Router>
  );
}

export default App;