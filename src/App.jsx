import { Route, Routes } from 'react-router-dom';
import Box from '@mui/material/Box';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Products from './pages/Products.jsx';
import Promotions from './pages/Promotions.jsx';
import Contacts from './pages/Contacts.jsx';

export default function App() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Box component="main" sx={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/za-nas" element={<About />} />
          <Route path="/produkti" element={<Products />} />
          <Route path="/promocii" element={<Promotions />} />
          <Route path="/kontakti" element={<Contacts />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
}
