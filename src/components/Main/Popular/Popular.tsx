import React, { useState } from 'react';
import { GoTriangleDown, GoTriangleUp } from 'react-icons/go';
import * as St from './style';

const Popular = () => {
  const defaultData = [
    { id: 1, img: '1', place: '명동', like: 15, traffic: '낮음' },
    { id: 2, img: '2', place: '남산', like: 14, traffic: '낮음' },
    { id: 3, img: '3', place: '강남', like: 13, traffic: '낮음' },
    { id: 4, img: '4', place: '4', like: 12, traffic: '낮음' },
    { id: 5, img: '5', place: '5', like: 11, traffic: '낮음' },
    { id: 6, img: '6', place: '6', like: 10, traffic: '낮음' },
  ];
  const [count, setCount] = useState(0);
  const beforeHandler = () => {
    if (count < 3) {
      return;
    }
    setCount(count - 3);
  };
  const afterHandler = () => {
    if (count >= defaultData.length - 3) {
      return;
    }
    setCount(count + 3);
  };
  return (
    <St.PopularWrapper>
      {/* {count >= 3 &&  */}
      <GoTriangleUp
        size="24"
        onClick={beforeHandler}
        style={{ visibility: count >= 3 ? 'visible' : 'hidden' }}
      />
      {defaultData.slice(count, count + 3).map((data) => (
        <div key={data.id} className="Card">
          {/* <div>
          <img/>
        </div> */}
          <div>
            {data.id}. {data.place}
          </div>
          <St.flexFrame>
            <div>좋아요 {data.like}</div>
            <div>혼잡도 {data.traffic}</div>
          </St.flexFrame>
        </div>
      ))}
      <GoTriangleDown
        size="24"
        onClick={afterHandler}
        style={{
          visibility: count < defaultData.length - 3 ? 'visible' : 'hidden',
        }}
      />
    </St.PopularWrapper>
  );
};

export default Popular;
