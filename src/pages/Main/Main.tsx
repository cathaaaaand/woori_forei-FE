import React from 'react';
import { useNavigate } from 'react-router-dom';
import bibimbap from '../../asset/bibimbap.jpeg';
import chickenSoup from '../../asset/chickenSoup.jpeg';
import koreanFood from '../../asset/koreanFood.jpeg';
import mainScheduler from '../../asset/mainScheduler.png';
import porkbelly from '../../asset/porkbelly.jpeg';
import simpleLogo from '../../asset/simpleLogo.png';
import tteokppoki from '../../asset/tteokppoki.jpeg';
import CultureCard from './MainComponents/CultureCard';
import Popular from './MainComponents/Popular';
import * as St from './style';

const Main = () => {
  const navigate = useNavigate();
  return (
    <St.MainWrapper>
      <div className="ContentFrame">
        <div className="ComponentFrame">
          <Popular />
        </div>
        <div>
          <img
            src={mainScheduler}
            alt="스케줄러"
            onClick={() => navigate('/scheduler')}
          />
        </div>
        <div className="ComponentFrame">
          <CultureCard />
        </div>
        <St.ImaCardFrame>
          <div className="CultureTitle">
            <img alt="금주 문화체험 프로그램 로고" src={simpleLogo} />
            <p>Best 음식 추천</p>
          </div>
          <div className="Flex">
            <div>
              <div className="Flex">
                <div className="ImgCardSquare">
                  <img src={tteokppoki} alt="분식" />
                  <p>ⓒ한국관광공사 포토코리아</p>
                  <p> &emsp;한국관광공사 김지호</p>
                </div>
                <div className="ImgCardSquare">
                  <img src={chickenSoup} alt="삼계탕" />
                  <p>ⓒ한국관광공사 포토코리아</p>
                  <p> &emsp;한국관광공사 프레임스튜디오</p>
                </div>
              </div>
              <div className="Flex">
                <div className="ImgCardSquare">
                  <img src={bibimbap} alt="비빔밥" />
                  <p>ⓒ한국관광공사 포토코리아</p>
                  <p> &emsp;한국관광공사 김지호</p>
                </div>
                <div className="ImgCardSquare">
                  <img src={koreanFood} alt="한식" />
                  <p>ⓒ한국관광공사 포토코리아</p>
                  <p> &emsp;한국관광공사 프레임스튜디오</p>
                </div>
              </div>
            </div>
            <div className="ImgCardSquare4">
              <img src={porkbelly} alt="삼겹살" />
              <p>ⓒ한국관광공사 포토코리아</p>
              <p> &emsp;알렉스 분도</p>
            </div>
          </div>
        </St.ImaCardFrame>
      </div>
    </St.MainWrapper>
  );
};

export default Main;
