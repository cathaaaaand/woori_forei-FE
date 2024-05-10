import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { IoArrowBack } from 'react-icons/io5';
import TourSearchCard from '../../pages/Tourism/TourSearchCard';
import * as St from './style';
import { informationApi } from 'api/openApi';

const Tourism = () => {
  const [search, setSearch] = useState('');
  const { data, isError, isLoading } = useQuery({
    queryKey: ['info'],
    queryFn: informationApi,
  });
  const OnChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setSearch(e.target.value);
  };
  const filteredData = data?.filter(
    (item: { rdnmadr: string; trsmicnm: string }) => {
      if (item.rdnmadr.includes(search) || item.trsmicnm.includes(search)) {
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
  };
  return (
    <St.TourTotalWrapper>
      <St.TourWrapper>
        <div>
          <div className="Title">
            <IoArrowBack />홈 &gt; 관광
          </div>
        </div>
        <div className="MainTitle">
          <St.Circle />
          서울 관광 안내소
        </div>
        <St.SearchInputFrame>
          <St.SearchInput
            placeholder="지역을 검색하세요."
            onChange={OnChange}
            value={search}
            onKeyPress={handleKeyPress}
          />
          <St.SearchInputBtn>
            <IoIosSearch size="30px" color="#636363" />
          </St.SearchInputBtn>
        </St.SearchInputFrame>
        <div className="Title">
          홈 &gt; 관광 &gt;
          <p>검색결과</p>
        </div>
        <div>
          {!isError ? (
            isLoading ? (
              <St.LoadingCard>
                <div id="loading" />
              </St.LoadingCard>
            ) : (
              <TourSearchCard data={filteredData} />
            )
          ) : (
            <TourSearchCard
              data={[
                {
                  id: 1,
                  trsmicnm: 'error',
                  summeroperopenhhmm: 'error',
                  summeroperclosehhmm: 'error',
                  engguidanceyn: 'N',
                  jpguidanceyn: 'N',
                  chguidanceyn: 'N',
                  guidancephonenumber: 'error',
                  rdnmadr: 'error',
                  homepageurl: 'error',
                },
              ]}
            />
          )}
        </div>
      </St.TourWrapper>
    </St.TourTotalWrapper>
  );
};

export default Tourism;
