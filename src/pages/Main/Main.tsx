import React from 'react';
import { useNavigate } from 'react-router-dom';
import mainScheduler from '../../asset/mainScheduler.png';
import CultureCard from './MainComponents/CultureCard';
//import DramaPlace from './MainComponents/DramaPlace';
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
        {/* <div className="ComponentFrame">
          <p className="ContentTitle">드라마,영화 촬영장소</p>
          <DramaPlace />
        </div> */}
      </div>
    </St.MainWrapper>
  );
};

export default Main;
