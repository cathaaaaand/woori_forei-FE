import React from 'react';
import { useNavigate } from 'react-router-dom';
import blossom from '../../asset/blossom.jpg';
import gangnam from '../../asset/gangnam.jpg';
import hanok2 from '../../asset/hanok2.jpg';
import mainScheduler from '../../asset/mainScheduler.png';
// import palace from '../../asset/palace.jpg';
import simpleLogo from '../../asset/simpleLogo.png';
// import tower from '../../asset/tower.jpg';
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
            <p>사진으로 보는 서울</p>
          </div>
          <div className="Flex">
            <div>
              <div className="Flex">
                <div className="ImgCardSquare">
                  <img src={hanok2} alt="한옥마을" />
                  <p>ⓒ한국관광공사 포토코리아-박근형</p>
                </div>
                <div className="ImgCardSquare">
                  <img src={blossom} alt="벚꽃" />
                  <p>ⓒ한국관광공사 포토코리아-한국관광공사 김지호</p>
                </div>
              </div>
              <div className="Flex">
                <div className="ImgCardSquare">
                  <img src={gangnam} alt="강남" />
                  <p>ⓒ한국관광공사 포토코리아-한국관광공사 김미숙</p>
                </div>
                <div className="ImgCardSquare">
                  <img src={blossom} alt="벚꽃" />
                  <p>ⓒ한국관광공사 포토코리아-한국관광공사 김지호</p>
                </div>
              </div>
            </div>
            <div>
              <div className="Flex">
                <div className="ImgCardSquare">
                  <img src={hanok2} alt="한옥마을" />
                  <p>ⓒ한국관광공사 포토코리아-박근형</p>
                </div>
                <div className="ImgCardSquare">
                  <img src={blossom} alt="벚꽃" />
                  <p>ⓒ한국관광공사 포토코리아-한국관광공사 김지호</p>
                </div>
              </div>
              <div className="Flex">
                <div className="ImgCardSquare">
                  <img src={gangnam} alt="강남" />
                  <p>ⓒ한국관광공사 포토코리아-한국관광공사 김미숙</p>
                </div>
                <div className="ImgCardSquare">
                  <img src={blossom} alt="벚꽃" />
                  <p>ⓒ한국관광공사 포토코리아-한국관광공사 김지호</p>
                </div>
              </div>
            </div>
          </div>
        </St.ImaCardFrame>
      </div>
    </St.MainWrapper>
  );
};

export default Main;
