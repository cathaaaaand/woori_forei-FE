import React, { useState } from 'react';
import * as St from './style';
import PlaceCard from 'components/Card/PlaceCard';

const HomeStay = () => {
  const [search, setSearch] = useState('');
  const OnChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setSearch(e.target.value);
  };

  const searchHandler = () => {
    if (!search) {
      alert('검색어를 입력해주세요!');
    }
    console.log(search);
  };
  return (
    <St.BestPlaceWrapper>
      <St.BPWrapper>
        <div className="BPTitle">서울시 홈스테이</div>
        <St.SearchInputFrame>
          <St.SearchInput
            placeholder="위치를 검색하세요."
            onChange={OnChange}
            value={search}
          />
          <St.SearchInputBtn onClick={searchHandler}>검색</St.SearchInputBtn>
        </St.SearchInputFrame>
        <div className="BPTitle">내 주변 홈스테이 </div>
        <div style={{ textAlign: 'center', fontSize: '22pt' }}>
          <div> 현재 내 위치</div>
          <div> 서울특별시 용산구 이태원로 지하 177</div>
        </div>
        <div className="BPMap">
          <PlaceCard />
        </div>
      </St.BPWrapper>
    </St.BestPlaceWrapper>
  );
};
export default HomeStay;
