import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import deoksugung from '../../../asset/deoksugung.jpg';
import eunpeong from '../../../asset/eunpeong.jpg';
import hanoktown from '../../../asset/hanoktown.jpg';
import koex from '../../../asset/koex.jpg';
import Ltower from '../../../asset/Ltower.jpg';
import meongdong from '../../../asset/meongdong.jpg';
import palace from '../../../asset/palace.jpg';
import simpleLogo from '../../../asset/simpleLogo.png';
import tower from '../../../asset/tower.jpg';
import yongsan from '../../../asset/yongsan.jpg';
import * as St from './style';
import { landmarksFilternApi } from 'api/openApi';

export interface CardType {
  id: number;
  postSj: string;
  cmmnUseTime: string;
  cmmnRstde: string;
  cmmnTelno: string;
  address: string;
  cmmnHmpgUrl: string;
}
const CultureCard = () => {
  const { data } = useQuery({
    queryKey: ['top10'],
    queryFn: landmarksFilternApi,
  });
  const navigate = useNavigate();
  const [pageCount, setPageCount] = useState(0);
  const arrayLength = data ? data?.length : 10;
  const photoArray = [
    palace,
    Ltower,
    deoksugung,
    meongdong,
    hanoktown,
    tower,
    yongsan,
    eunpeong,
    koex,
  ];
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
  const voidData = (value: string) => {
    return value === '' ? '없음' : value;
  };
  const rank = pageCount + 1 + '위';
  return (
    <St.CardFrame>
      <div className="CardColumnWrapper">
        <St.CultureCardTitleFrame>
          <div className="CultureTitle">
            <img alt="추천 명소 top 10 로고" src={simpleLogo} />
            <p>추천 명소 top 10</p>
          </div>
          <St.PlusBtn onClick={() => navigate('/experience')}>
            <FiPlus size="45px" />
          </St.PlusBtn>
        </St.CultureCardTitleFrame>

        <div className="CardFlexWrapper">
          <div className="CardColumnWrapper">
            <div className="CardMapnWrapper">
              {data?.slice(pageCount, pageCount + 1).map((value: CardType) => (
                <St.ImaCardFrame key={value.postSj}>
                  <img
                    className="ImgCardSquare4"
                    src={photoArray[pageCount]}
                    alt="사진"
                  />
                  <div className="BlueFocusBefore">
                    <div className="DataTitle">
                      <p> {rank}</p>
                      <p> {value.postSj}</p>
                    </div>
                    <p className="DataContent">
                      <li>서비스시간 :{' ' + voidData(value.cmmnUseTime)}</li>
                      <li>휴무일 :{' ' + voidData(value.cmmnRstde)}</li>
                      <li>주소 : {voidData(value.address)}</li>
                      <li>전화 : {voidData(value.cmmnTelno)}</li>
                    </p>
                  </div>
                </St.ImaCardFrame>
              ))}
            </div>
            <St.NavLocation>
              <St.NavFrame>
                <St.NavTotalLine />
                <St.NavMovelLine $pagelinenum={pagelinenum} />
                <div>{pageNavigationNum}</div>
                <St.NextBeforeFrame>
                  <St.NextBeforeBtn>
                    <IoIosArrowBack
                      onClick={pageBeforeBtnHandler}
                      size="20px"
                    />
                  </St.NextBeforeBtn>
                  <St.NextBeforeBtn>
                    <IoIosArrowForward
                      onClick={pageNextBtnHandler}
                      size="20px"
                    />
                  </St.NextBeforeBtn>
                </St.NextBeforeFrame>
              </St.NavFrame>
            </St.NavLocation>
          </div>
        </div>
      </div>
    </St.CardFrame>
  );
};

export default CultureCard;
