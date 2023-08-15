import UserLogin from './Components/Login/User/UserLogin';
import FlipkartHeader from './Components/Header/FlipkartHeader';
import React from 'react';
import { BrowserRouter as Router, Routes,  Route  } from 'react-router-dom';
import HomePage from './Components/Home/User/HomePage';
import ProductList from './Components/Home/User/ProductList';
import Rewards from './Components/Rewards/Rewards';
import SellerDashboard from './Components/Home/Seller/SellerDashboard';
import SellerRewards from './Components/Rewards/SellerRewards';

function App() {
  return (
    <Router>
      <div className="app">
        <FlipkartHeader />
        <Routes>
          // Route path to login page
          <Route path="/" element={<UserLogin />} />
          <Route path="/login" element={<UserLogin />} /> 
          <Route path="/home" element={<HomePage />} />
          <Route path="/user/products/:category" element={<ProductList />} />
          //route to reward 
          <Route path="/user/rewards" element={<Rewards />} />
          <Route path="/seller" element={<SellerDashboard />} />
          <Route path="/seller/rewards" element={<SellerRewards />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
