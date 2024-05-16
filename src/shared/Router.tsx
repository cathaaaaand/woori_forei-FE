import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import BestPlace from 'pages/BestPlace/BestPlace';
import Board from 'pages/Board/Board';
import Detail from 'pages/Board/Detail/Detail';
import Write from 'pages/Board/Write/Write';
import Experience from 'pages/Experience/Experience';
import Faq from 'pages/Faq/Faq';
import FaqDetail from 'pages/Faq/FaqDetail/FaqDetail';
import FaqWrite from 'pages/Faq/FaqWrite/FaqWrite';
import Hotel from 'pages/Hotel/Hotel';
import Login from 'pages/Login/Login';
import Main from 'pages/Main/Main';
import MyPage from 'pages/MyPage/MyPage';
import Restaurant from 'pages/Restaurant/Restaurant';
import Scheduler from 'pages/Scheduler/Scheduler';
import SignUp from 'pages/SignUp/SignUp';
import Souvenir from 'pages/Souvenir/Souvenir';
import Tourism from 'pages/Tourism/Tourism';

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/tour" element={<Tourism />} />
          <Route path="/place" element={<BestPlace />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/souvenir" element={<Souvenir />} />
          <Route path="/hotel" element={<Hotel />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/scheduler" element={<Scheduler />} />
          <Route path="/board" element={<Board />} />
          <Route path="/write" element={<Write />} />
          <Route path="/detail/:boardId" element={<Detail />} />
          <Route path="/mypage/:userId" element={<MyPage />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/faqwrite" element={<FaqWrite />} />
          <Route path="/faqdetail" element={<FaqDetail />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
