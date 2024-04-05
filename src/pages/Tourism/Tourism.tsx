import React from 'react';
import * as St from './style';
import Card from 'components/Card/Card';

const Tourism = () => {
  return (
    <St.TourTotalWrapper>
      <St.TourWrapper>
        <div className="Title">서울시 관광 안내소 </div>
        <St.SearchInputFrame>
          <St.SearchInput placeholder="위치를 검색하세요." />
          <St.SearchInputBtn>검색</St.SearchInputBtn>
        </St.SearchInputFrame>
        <div className="Title">내 주변 관광 안내소 </div>
        <div>
          <Card />
        </div>
      </St.TourWrapper>
    </St.TourTotalWrapper>
  );
};

export default Tourism;
