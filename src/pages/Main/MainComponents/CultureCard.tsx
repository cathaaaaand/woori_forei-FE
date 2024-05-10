import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import simpleLogo from '../../../asset/simpleLogo.png';
import * as St from './style';
import { activitiesMonthApi } from 'api/openApi';
import { SimpleCalendar } from 'components/Calendar/Calendar';

export interface CultureType {
  rcptbgndt: Date;
  rcptenddt: Date;
  activityId: number | undefined;
  placenm: string | undefined;
  svcnm: string | undefined;
}
const CultureCard = () => {
  const [programDate, SetProgramDate] = useState<Array<Date>>();
  const { data } = useQuery({
    queryKey: ['activityMonth'],
    queryFn: activitiesMonthApi,
  });
  const navigate = useNavigate();
  const ProgramClick = (Date: Array<Date>) => {
    SetProgramDate(Date);
  };
  const [pageCount, setPageCount] = useState(0);
  const arrayLength = data ? data?.length : 10;
  const pageNavigationNum =
    pageCount + 5 > arrayLength
      ? `${arrayLength} / ${arrayLength}`
      : `${pageCount + 5} / ${arrayLength}`;
  const pagelinenum = (pageCount + 5) / arrayLength;

  const pageBeforeBtnHandler = () => {
    if (pageCount < 1) {
      alert('첫 번째 페이지입니다!');
      return;
    }
    setPageCount(pageCount - 5);
  };
  const pageNextBtnHandler = () => {
    if (pageCount >= arrayLength - 1) {
      alert('마지막 페이지입니다!');
      return;
    }
    setPageCount(pageCount + 5);
  };
  return (
    <St.CardFrame>
      <div className="CardColumnWrapper">
        <St.CultureCardTitleFrame>
          <div className="CultureTitle">
            <img alt="금주 문화체험 프로그램 로고" src={simpleLogo} />
            <p>금주 문화체험 프로그램</p>
          </div>
          <St.PlusBtn onClick={() => navigate('/experience')}>
            <FiPlus size="45px" />
          </St.PlusBtn>
        </St.CultureCardTitleFrame>

        <div className="CardFlexWrapper">
          <SimpleCalendar programDate={programDate} />
          <div className="CardColumnWrapper">
            <div className="CardMapnWrapper">
              <St.BlueLine />
              {data
                ?.slice(pageCount, pageCount + 5)
                .map((value: CultureType) => (
                  <div
                    key={value.activityId}
                    onClick={() =>
                      ProgramClick([value.rcptbgndt, value.rcptenddt])
                    }
                  >
                    <St.CardDateFrame style={{ display: 'flex' }}>
                      <p className="Bold">{value.svcnm}</p>
                      <p className="Descript">{value.placenm}</p>
                    </St.CardDateFrame>
                    <St.BlueLine />
                  </div>
                ))}
            </div>
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
        </div>
      </div>
    </St.CardFrame>
  );
};

export default CultureCard;
