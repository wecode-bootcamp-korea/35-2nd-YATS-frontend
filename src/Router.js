import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Login from './pages/Login/Login';
import LoginOauth from './pages/LoginOauth/LoginOauth';
import FindList from './pages/FindList/FindList';
import StayDetail from './pages/StayDetail/StayDetail';
import RoomDetail from './pages/RoomDetail/RoomDetail';
import EnterStore from './pages/EnterStore/EnterStore';
import MyPage from './pages/MyPage/MyPage';
import Footer from './components/Footer/Footer';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/LoginOauth" element={<LoginOauth />} />
        <Route path="/FindList" element={<FindList />} />
        <Route path="/StayDetail/:id" element={<StayDetail />} />
        <Route path="/RoomDetail/:id" element={<RoomDetail />} />
        <Route path="/EnterStore" element={<EnterStore />} />
        <Route path="/MyPage/:tab" element={<MyPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
