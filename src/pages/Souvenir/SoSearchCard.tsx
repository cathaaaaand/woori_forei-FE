import React, { useState } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import * as St from './style';
export interface CardProps {
  data?:
    | Array<{
        seoulGoodsId: number;
        state: string;
        tel: string;
        nm: string;
        addr: string;
      }>
    | undefined;
  search: string;
}
const SoSearchCard = (props: CardProps) => {
  const { data, search } = props;
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
      <St.SearchCardWrapper>
        <div>{search ? '검색결과:' + search : '전체결과'}</div>
        {data?.slice(pageCount, pageCount + 3).map((value) => (
          <St.SearchInnerWrapper key={value.seoulGoodsId}>
            <div className="BlueFocusBefore">
              <p className="DataTitle">{value.nm}</p>
              <p className="DataContent">
                <li>운영여부 : {value.state}</li>
                <li>전화번호 : {value.tel}</li>
                <li>주소 : {voidData(value.addr)}</li>
              </p>
            </div>
          </St.SearchInnerWrapper>
        ))}
      </St.SearchCardWrapper>
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

export default SoSearchCard;
