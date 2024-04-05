import React from 'react';
import * as St from './style';

const DramaPlace = () => {
  return (
    <St.DramaWrapper>
      <div>
        <div className="smallFrame">
          <div className="small">1</div>
          <div className="small">2</div>
        </div>
        <div className="smallFrame">
          <div className="small">3</div>
          <div className="small">4</div>
        </div>
      </div>
      <div className="big">5</div>
    </St.DramaWrapper>
  );
};

export default DramaPlace;
