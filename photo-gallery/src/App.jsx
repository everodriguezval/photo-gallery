import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SharedLayout from './pages/SharedLayout';
import HomePage from './pages/HomePage';
import ImgCardPage from './pages/ImgCardPage';
import SpeciesSheet from './components/SpeciesSheet';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />}/>
          <Route path="/gallery" element={<ImgCardPage />}></Route>
          <Route path="/species_sheet" element={<SpeciesSheet />}></Route>
        </Route>
      </Routes>   
    </BrowserRouter>
  )
}

export default App;
