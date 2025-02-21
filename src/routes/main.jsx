import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default MainRoutes;