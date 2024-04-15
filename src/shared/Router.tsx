import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BestPlace from 'pages/BestPlace/BestPlace';
import Experience from 'pages/Experience/Experience';
import HomeStay from 'pages/HomeStay/HomeStay';
import Hotel from 'pages/Hotel/Hotel';
import Login from 'pages/Login/Login';
import Main from 'pages/Main/Main';
import Restaurant from 'pages/Restaurant/Restaurant';
import Scheduler from 'pages/Scheduler/Scheduler';
import SignUp from 'pages/SignUp/SignUp';
import Souvenir from 'pages/Souvenir/Souvenir';
import Tourism from 'pages/Tourism/Tourism';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/tour" element={<Tourism />} />
        <Route path="/place" element={<BestPlace />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/souvenir" element={<Souvenir />} />
        <Route path="/homeStay" element={<HomeStay />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/scheduler" element={<Scheduler />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
