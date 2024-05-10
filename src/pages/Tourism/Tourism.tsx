import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { IoIosSearch } from 'react-icons/io';
import { IoArrowBack } from 'react-icons/io5';
import TourSearchCard from '../../pages/Tourism/TourSearchCard';
import * as St from './style';
import { informationApi } from 'api/openApi';

const Tourism = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['info'],
    queryFn: informationApi,
  });

  return (
    <St.TourTotalWrapper>
      <St.TourWrapper>
        <div>
          <IoArrowBack />
          <div className="Title">홈 &gt; 관광</div>
        </div>
        <div className="Title">서울시 관광 안내소 </div>
        <St.SearchInputFrame>
          <St.SearchInput placeholder="지역을 검색하세요." />
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
              <TourSearchCard data={data} />
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
