import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import LoginOauth from './pages/LoginOauth/LoginOauth';
import FindList from './pages/FindList/FindList';
import StayDetail from './pages/StayDetail/StayDetail';
import EnterStore from './pages/EnterStore/EnterStore';
import MyPage from './pages/MyPage/MyPage';
import Map from '../src/components/Map/Map';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/LoginOauth" element={<LoginOauth />} />
        <Route path="/FindList" element={<FindList />} />
        <Route path="/StayDetail" element={<StayDetail />} />
        <Route path="/EnterStore" element={<EnterStore />} />
        <Route path="/MyPage/:id" element={<MyPage />} />
        <Route path="/Map" element={<Map />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
