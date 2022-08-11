import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Login from './pages/Login/Login';
import LoginOauth from './pages/LoginOauth/LoginOauth';
import SignUp from './pages/SignUp/SignUp';
import FindList from './pages/FindList/FindList';
import StayDetail from './pages/StayDetail/StayDetail';
import EnterStore from './pages/EnterStore/EnterStore';
import MyPage from './pages/MyPage/MyPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/LoginOauth" element={<LoginOauth />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/FindList" element={<FindList />} />
        <Route path="/StayDetail" element={<StayDetail />} />
        <Route path="/EnterStore" element={<EnterStore />} />
        <Route path="/MyPage/:tab" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
