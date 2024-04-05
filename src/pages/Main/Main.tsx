import React from 'react';
import * as St from './style';
import Card from 'components/Card/Card';
import Footer from 'components/Layout/Footer/Footer';
import Header from 'components/Layout/Header/Header';
import DramaPlace from 'components/Main/DramaPlace/DramaPlace';
import Popular from 'components/Main/Popular/Popular';

const Main = () => {
  return (
    <St.MainWrapper>
      <Header />
      <div className="ContentFrame">
        <div className="ComponentFrame">
          <p className="ContentTitle">인기있는 명소 Top 10</p>
          <Popular />
        </div>
        <div className="ComponentFrame">
          <p className="ContentTitle">금주 문화체험 프로그램</p>
          <Card />
        </div>
        <div className="ComponentFrame">
          <p className="ContentTitle">드라마,영화 촬영장소</p>
          <DramaPlace />
        </div>
      </div>
      <Footer />
    </St.MainWrapper>
  );
};

export default Main;
