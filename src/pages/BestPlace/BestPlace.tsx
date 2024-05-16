import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { IoArrowBack } from 'react-icons/io5';
import BtSearchCard from './BtSearchCard';
import * as St from './style';
import { landmarksnApi } from 'api/openApi';
// import Map from 'components/Map/KakaoMap';

const BestPlace = () => {
  const [search, setSearch] = useState('');
  // const [mapState, setMapState] = useState(0);
  const { data } = useQuery({
    queryKey: ['landmark'],
    queryFn: landmarksnApi,
  });
  const OnChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setSearch(e.target.value);
  };

  const filteredData = data?.filter(
    (item: { postSj: string; address: string }) => {
      if (item.postSj.includes(search) || item.address.includes(search)) {
        return true;
      } else {
        return false;
      }
    },
  );

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      searchHandler();
    }
  };
  const searchHandler = () => {
    if (!search) {
      alert('검색어를 입력해주세요!');
      return;
    }
    // setMapState(1);
  };

  return (
    <St.BestPlaceWrapper>
      <St.BPWrapper>
        <div className="BPTitle">
          <IoArrowBack />홈 &gt; 관광 &gt;<p>명소</p>
        </div>
        <div className="BPMainTitle">
          <St.Circle />
          서울 명소
        </div>
        <St.SearchInputFrame>
          <St.SearchInput
            placeholder="위치를 검색하세요."
            onChange={OnChange}
            value={search}
            onKeyPress={handleKeyPress}
          />
          <St.SearchInputBtn onClick={searchHandler}>
            <IoIosSearch size="30px" color="#636363" />
          </St.SearchInputBtn>
        </St.SearchInputFrame>
        <div className="BPTitle">
          홈 &gt; 관광 &gt;명소&gt;<p className="highLight">검색결과</p>
        </div>
        {/* <div>
          <button onClick={() => setMapState(0)}>지도에서 검색하기</button>
          <button onClick={() => setMapState(1)}>검색결과</button>
        </div> */}
        <div className="BPMap">
          {/* {mapState === 0 && <Map />} */}
          {/* {mapState === 1 && ( */}
          <BtSearchCard data={filteredData} />
          {/* )} */}
        </div>
      </St.BPWrapper>
    </St.BestPlaceWrapper>
  );
};
export default BestPlace;
