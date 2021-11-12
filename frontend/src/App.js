import React from 'react';
//route
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomeScreen from './components/screen/HomeScreen';
import ProductScreen from './components/screen/ProductScreen';
import Error from './pages/Error';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/product/:id' element={<ProductScreen />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer
        title='PROSHOP'
        description='Digital products ecommerce website!'
      />
    </Router>
  );
}

export default App;
