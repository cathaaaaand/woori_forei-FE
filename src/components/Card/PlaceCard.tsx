import React from 'react';
import * as St from './style';

const PlaceCard = () => {
  const defaultValue = [
    { place: '이태원동', hotelList: ['hotel1', ' hotel2', 'hotel3'] },
    { place: '보광동', hotelList: ['hotel1', ' hotel2', 'hotel3'] },
    { place: '한남동', hotelList: ['hotel1', ' hotel2', 'hotel3'] },
  ];
  return (
    <St.PlaceCard>
      {defaultValue.map((value, idx) => (
        <div className="CardFrame" key={idx}>
          <div>{value.place}</div>
          <div className="Card">
            {value.hotelList.map((item, idx) => (
              <div key={idx}>{item}</div>
            ))}
          </div>
        </div>
      ))}
    </St.PlaceCard>
  );
};

export default PlaceCard;
