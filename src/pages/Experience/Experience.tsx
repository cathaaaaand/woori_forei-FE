import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import ExSearchCard from './ExSearchCard';
import * as St from './style';
import { activitiesApi } from 'api/openApi';
import Map from 'components/Map/KakaoMap';

const Experience = () => {
  const [search, setSearch] = useState('');
  const [mapState, setMapState] = useState(0);
  const { data } = useQuery({
    queryKey: ['activities'],
    queryFn: activitiesApi,
  });
  const OnChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setSearch(e.target.value);
  };
  const filteredData = data?.filter(
    (item: { placenm: string; svcnm: string }) => {
      if (item.svcnm.includes(search) || item.placenm.includes(search)) {
        return true;
      } else {
        return false;
      }
    },
  );
  const searchHandler = () => {
    if (!search) {
      alert('검색어를 입력해주세요!');
    }
    console.log(search);
    setMapState(1);
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      searchHandler();
    }
  };
  return (
    <St.BestPlaceWrapper>
      <St.BPWrapper>
        <div className="BPTitle">서울시 문화체험 프로그램</div>
        <St.SearchInputFrame>
          <St.SearchInput
            placeholder="위치를 검색하세요."
            value={search}
            onChange={OnChange}
            onKeyPress={handleKeyPress}
          />
          <St.SearchInputBtn onClick={searchHandler}>검색</St.SearchInputBtn>
        </St.SearchInputFrame>
        <div className="BPTitle">내 주변 문화체험 프로그램 </div>
        <div>
          <button onClick={() => setMapState(0)}>지도에서 검색하기</button>
          <button onClick={() => setMapState(1)}>검색결과</button>
        </div>
        <div className="BPMap">
          {mapState === 0 && <Map />}
          {mapState === 1 && (
            <ExSearchCard data={filteredData} search={search} />
          )}
        </div>
      </St.BPWrapper>
    </St.BestPlaceWrapper>
  );
};
export default Experience;
