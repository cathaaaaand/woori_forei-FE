import React from 'react';
import { GoTriangleLeft, GoTriangleRight } from 'react-icons/go';
import * as St from './style';

const Card = () => {
  const defaultArray = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
  ];
  return (
    <St.CardFrame>
      <GoTriangleLeft size="30" />
      <div className="CardWrapper">
        {defaultArray.slice(0, 3).map((data) => (
          <div key={data.id} className="Card">
            img{data.id}
          </div>
        ))}
      </div>
      <GoTriangleRight size="30" />
    </St.CardFrame>
  );
};

export default Card;
