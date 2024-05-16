import React, { useState } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import * as St from './style';
export interface CardProps {
  data?:
    | Array<{
        activityId: number;
        svcurl: string;
        payatnm: string;
        placenm: string;
        svcnm: string;
        rcptbgndt: string;
        rcptenddt: string;
        vmax: string;
        vmin: string;
        minclassnm: string;
      }>
    | undefined;
}
const ExSearchCard = (props: CardProps) => {
  const { data } = props;
  const [pageCount, setPageCount] = useState(0);
  const arrayLength = data ? data?.length : 20;
  const pageNavigationNum =
    pageCount + 3 > arrayLength
      ? `${arrayLength} / ${arrayLength}`
      : `${pageCount + 3} / ${arrayLength}`;
  const pagelinenum = (pageCount + 3) / arrayLength;

  const pageBeforeBtnHandler = () => {
    if (pageCount < 3) {
      alert('첫 번째 페이지입니다!');
      return;
    }
    setPageCount(pageCount - 3);
  };
  const pageNextBtnHandler = () => {
    if (pageCount >= arrayLength - 3) {
      alert('마지막 페이지입니다!');
      return;
    }
    setPageCount(pageCount + 3);
  };
  const voidData = (value: string) => {
    return value === '' ? '없음' : value;
  };
  return (
    <St.SearchCardOuterWrapper>
      {data?.slice(pageCount, pageCount + 3).map((value) => (
        <St.SearchInnerWrapper key={value.activityId}>
          <div className="BlueFocusBefore">
            <p className="DataTitle">{value.svcnm}</p>
            <p className="DataContent">
              <li>
                전시기간 :{value.rcptbgndt}~{value.rcptenddt}
              </li>
              <li>가격:{value.payatnm}</li>
              <li>분류:{value.minclassnm}</li>
              <li>
                운영시간 :{value.vmin}~{value.vmax}
              </li>
              <li>장소 : {voidData(value.placenm)}</li>
            </p>
          </div>
          {/* <div className="DataUrl">
              {value.svcurl === '' ? (
                voidData(value.svcurl)
              ) : (
                <a href={value.svcurl}>{voidData(value.svcurl)}</a>
              )}
            </div> */}
        </St.SearchInnerWrapper>
      ))}
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
    </St.SearchCardOuterWrapper>
  );
};

export default ExSearchCard;
