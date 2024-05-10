//import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import * as St from './style';
export interface CardProps {
  data?:
    | Array<{
        id: number;
        trsmicnm: string;
        summeroperopenhhmm: string;
        summeroperclosehhmm: string;
        engguidanceyn: string;
        jpguidanceyn: string;
        chguidanceyn: string;
        guidancephonenumber: string;
        rdnmadr: string;
        homepageurl: string;
      }>
    | undefined;
}
const TourSearchCard = (props: CardProps) => {
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
  const lanStateChangeHandler = (eng: string, jpg: string, chg: string) => {
    if (!eng && !jpg && !chg) return;
    const langArray = [eng, jpg, chg];
    const langKo = ['영어', '중국어', '일어'];

    const count = langArray.reduce((total, lang) => {
      return lang === 'Y' ? total + 1 : total;
    }, 0);
    return count <= 0 ? ' 없음' : ' ' + langKo.slice(0, count).join(',');
  };
  const voidData = (value: string) => {
    return value === '' ? '없음' : value;
  };
  return (
    <St.SearchCardOuterWrapper>
      <St.SearchCardWrapper>
        {data?.slice(pageCount, pageCount + 3).map((value) => (
          <St.SearchInnerWrapper key={value.trsmicnm}>
            <div className="BlueFocusBefore">
              <p className="DataTitle">{value.trsmicnm}</p>
              <p className="DataContent">
                <li>
                  서비스시간 : {value.summeroperopenhhmm}~
                  {value.summeroperclosehhmm}
                </li>
                <li>
                  서비스언어 :
                  {lanStateChangeHandler(
                    value.engguidanceyn,
                    value.jpguidanceyn,
                    value.chguidanceyn,
                  )}
                </li>
                <li>주소 : {voidData(value.rdnmadr)}</li>
                <li>전화 : {value.guidancephonenumber.replace(/-/, ') ')}</li>
              </p>
            </div>
            <div className="DataUrl">
              {value.homepageurl === '' ? (
                voidData(value.homepageurl)
              ) : (
                <a href={value.homepageurl}>{voidData(value.homepageurl)}</a>
              )}
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

export default TourSearchCard;
