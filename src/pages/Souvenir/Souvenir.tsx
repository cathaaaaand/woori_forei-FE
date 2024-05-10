import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import * as St from './style';
import { seoulGoodsApi } from 'api/openApi';
import Map from 'components/Map/KakaoMap';

const Souvenir = () => {
  const [search, setSearch] = useState('');
  const OnChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setSearch(e.target.value);
  };
  const { data } = useQuery({
    queryKey: ['goods'],
    queryFn: seoulGoodsApi,
  });
  const searchHandler = () => {
    if (!search) {
      alert('검색어를 입력해주세요!');
    }
  };

  return (
    <St.BestPlaceWrapper>
      <St.BPWrapper>
        <div className="BPTitle">서울시 기념품 판매점 </div>
        <St.SearchInputFrame>
          <St.SearchInput
            placeholder="위치를 검색하세요."
            onChange={OnChange}
            value={search}
          />
          <St.SearchInputBtn onClick={searchHandler}>검색</St.SearchInputBtn>
        </St.SearchInputFrame>
        <div className="BPTitle">내 주변 기념품 판매점</div>
        <div className="BPMap">
          <Map data={data} />
        </div>
      </St.BPWrapper>
    </St.BestPlaceWrapper>
  );
};
export default Souvenir;
