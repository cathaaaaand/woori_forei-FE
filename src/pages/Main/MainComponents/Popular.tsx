import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import simpleLogo from '../../../asset/simpleLogo.png';
import * as St from './style';
import { activitiesApi } from 'api/openApi';
export interface valueType {
  activityId: number | undefined;
  imgurl: string | undefined;
  placenm: string | undefined;
  svcnm: string | undefined;
}
const Popular = () => {
  const { data } = useQuery({
    queryKey: ['activity'],
    queryFn: activitiesApi,
  });

  const [pageCount, setPageCount] = useState(0);
  const arrayLength = data ? data?.length : 10;
  const pageNavigationNum =
    pageCount + 1 > arrayLength
      ? `${arrayLength} / ${arrayLength}`
      : `${pageCount + 1} / ${arrayLength}`;
  const pagelinenum = (pageCount + 1) / arrayLength;

  const pageBeforeBtnHandler = () => {
    if (pageCount < 1) {
      alert('첫 번째 페이지입니다!');
      return;
    }
    setPageCount(pageCount - 1);
  };
  const pageNextBtnHandler = () => {
    if (pageCount >= arrayLength - 1) {
      alert('마지막 페이지입니다!');
      return;
    }
    setPageCount(pageCount + 1);
  };
  const handleImageError: React.EventHandler<
    React.SyntheticEvent<HTMLImageElement, Event>
  > = (e) => {
    (e.target as HTMLImageElement).style.visibility = 'hidden';
  };
  return (
    <St.PopularWrapper>
      <div>
        <St.CardTitleFrame>
          <img alt="인기문화체험 로고" src={simpleLogo} />
          <p>인기 문화 체험</p>
        </St.CardTitleFrame>
        <St.CardContentFrame>
          <St.CardDescription>
            <div className="DContent">
              {data?.slice(pageCount, pageCount + 1).map((value: valueType) => (
                <div key={value.activityId}>
                  <div className="Dtitle">
                    {pageCount + 1 < 10 ? '0' + (pageCount + 1) : pageCount + 1}
                  </div>
                  <div className="DTag">체험</div>
                  <div className="DName">{value.placenm}</div>
                  <div className="Ddescription">{value.svcnm}</div>
                </div>
              ))}
            </div>
          </St.CardDescription>
          <div className="Card">
            {data?.slice(pageCount, pageCount + 2).map((value: valueType) => (
              <div key={value.activityId}>
                <St.ImgCard src={value.imgurl} onError={handleImageError} />
              </div>
            ))}
          </div>
        </St.CardContentFrame>
        <St.NavFrame>
          <St.NavTotalLine />
          <St.NavMovelLine $pagelinenum={pagelinenum} />
          <div>{pageNavigationNum}</div>
          <St.NextBeforeFrame>
            <St.NextBeforeBtn>
              <IoIosArrowBack onClick={pageBeforeBtnHandler} size="20px" />
            </St.NextBeforeBtn>
            <St.NextBeforeBtn>
              <IoIosArrowForward onClick={pageNextBtnHandler} size="20px" />
            </St.NextBeforeBtn>
          </St.NextBeforeFrame>
        </St.NavFrame>
      </div>
      {/* {count >= 3 && 
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
      {/* <div>
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
      /> */}
    </St.PopularWrapper>
  );
};

export default Popular;
