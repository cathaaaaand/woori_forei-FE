import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { IoArrowBack } from 'react-icons/io5';
import * as St from './style';
import { informationApi } from 'api/openApi';
import SearchCard from 'components/Card/SearchCard';

const Tourism = () => {
  const { data, isError, isLoading, isSuccess } = useQuery({
    queryKey: ['info'],
    queryFn: informationApi,
  });
  useEffect(() => {
    if (isLoading || isSuccess) {
      console.log(data);
    }
    if (isError) {
      //console.log(isError);
    }
  }, []);

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
        <div className="Title">홈 &gt; 관광 &gt; 검색결과</div>
        <div>
          {!isError ? (
            isLoading ? (
              <St.LoadingCard>
                <div id="loading" />
              </St.LoadingCard>
            ) : (
              <SearchCard data={data} />
            )
          ) : (
            <SearchCard
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
