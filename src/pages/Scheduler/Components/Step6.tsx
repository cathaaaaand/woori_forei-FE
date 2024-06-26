import React, { useState } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { useRecoilState } from 'recoil';
import * as St from './style';
import { BestState } from 'recoil/openapiState';
export interface CardProps {
  data?:
    | Array<{
        cate3Name: string;
        hkorCity: string;
        hkorDong: string;
        hkorGu: string;
        hotelId: number;
        nameKor: string;
      }>
    | undefined;
}
const Step6 = (props: CardProps) => {
  const { data } = props;
  const [pageCount, setPageCount] = useState(0);
  const arrayLength = data ? data?.length : 20;
  const pageNavigationNum =
    pageCount + 3 > arrayLength
      ? `${arrayLength} / ${arrayLength}`
      : `${pageCount + 3} / ${arrayLength}`;
  const pagelinenum = (pageCount + 3) / arrayLength;
  const [btCheck, setBtCheck] = useRecoilState(BestState);
  const [clickCount, setClickCount] = useState(0);
  const getData = (id: number, title: string) => {
    if (clickCount < 1) {
      if (!btCheck.some((item) => item.title === title)) {
        setBtCheck((prev) => [...prev, { id, title, type: 'hotelId' }]); // 상태 업데이트 함수 안에서 업데이트된 상태를 이용합니다.
        setClickCount(clickCount + 1); // clickCount를 업데이트합니다.
      }
    } else {
      alert('1가지만 선택 가능합니다.');
      return;
    }
  };
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
  // const voidData = (value: string) => {
  //   return value === '' ? '없음' : value;
  // };
  return (
    <St.SearchCardOuterWrapper>
      <St.SearchCardWrapper>
        {data?.slice(pageCount, pageCount + 3).map((value) => (
          <St.SearchInnerWrapper
            key={value.hotelId}
            onClick={() => getData(value.hotelId, value.nameKor)}
          >
            <div className="BlueFocusBefore">
              <p className="DataTitle">{value.nameKor}</p>
              <p className="DataContent">
                <li>분류 : {value.cate3Name}</li>
                <li>
                  장소 :
                  {' ' +
                    value.hkorCity +
                    ' ' +
                    value.hkorGu +
                    ' ' +
                    value.hkorDong}
                </li>
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

export default Step6;
