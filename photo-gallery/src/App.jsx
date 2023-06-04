import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SharedLayout from './pages/SharedLayout';
import HomePage from './pages/HomePage';
import ImgCardPage from './pages/ImgCardPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />}/>
          <Route path="/gallery" element={<ImgCardPage />}></Route>
        </Route>
      </Routes>   
    </BrowserRouter>
  )
}

export default App;
