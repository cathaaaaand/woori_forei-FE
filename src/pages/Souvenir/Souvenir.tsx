import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import SoSearchCard from './SoSearchCard';
import * as St from './style';
import { seoulGoodsApi } from 'api/openApi';
import Map from 'components/Map/KakaoMap';

const Souvenir = () => {
  const [search, setSearch] = useState('');
  const [mapState, setMapState] = useState(0);
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
    console.log(search);
    setMapState(1);
  };
  const filteredData = data?.filter((item: { addr: string; nm: string }) => {
    if (item.nm.includes(search) || item.addr.includes(search)) {
      return true;
    } else {
      return false;
    }
  });
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      searchHandler();
    }
  };
  console.log(data);
  return (
    <St.BestPlaceWrapper>
      <St.BPWrapper>
        <div className="BPTitle">서울시 기념품 판매점 </div>
        <St.SearchInputFrame>
          <St.SearchInput
            placeholder="위치를 검색하세요."
            onChange={OnChange}
            value={search}
            onKeyPress={handleKeyPress}
          />
          <St.SearchInputBtn onClick={searchHandler}>검색</St.SearchInputBtn>
        </St.SearchInputFrame>
        <div className="BPTitle">내 주변 기념품 판매점</div>
        <div>
          <button onClick={() => setMapState(0)}>지도에서 검색하기</button>
          <button onClick={() => setMapState(1)}>검색결과</button>
        </div>
        <div className="BPMap">
          {mapState === 0 && <Map />}
          {mapState === 1 && (
            <SoSearchCard data={filteredData} search={search} />
          )}
        </div>
      </St.BPWrapper>
    </St.BestPlaceWrapper>
  );
};
export default Souvenir;
