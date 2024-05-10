import React, { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/Card/Card';
import * as St from './style';
import { ChooseCalendar } from 'components/Calendar/Calendar';
import SearchCard from 'components/Card/SearchCard';

const Scheduler = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  const nextStepHandler = () => {
    // if (step >= 4) {
    //   console.log(4);
    // }
    setStep(step + 1);
  };
  const beforeStepHandler = () => {
    if (step < 1) {
      navigate('/');
    }
    setStep(step - 1);
  };
  return (
    <St.SchedulerTotalWrapper>
      <St.SchedulerWrapper>
        {step < 5 && (
          <IoIosArrowBack
            className="BeforeArrow "
            onClick={beforeStepHandler}
          />
        )}
        {step === 0 && (
          <>
            <div className="Title">여행지를 선택해주세요.</div>
            <St.SearchInputFrame>
              <St.SearchInput placeholder="직접 검색하기" />
              <St.SearchInputBtn>검색</St.SearchInputBtn>
            </St.SearchInputFrame>
            <div>
              <Card />
            </div>
          </>
        )}
        {step === 1 && (
          <>
            <div className="Title">날짜를 선택해주세요.</div>
            <ChooseCalendar />
          </>
        )}
        {step === 2 && (
          <>
            <div className="Title">4/3에 방문할 명소를 선택해주세요.</div>
            <St.SearchInputFrame>
              <St.SearchInput placeholder="직접 검색하기" />
              <St.SearchInputBtn>검색</St.SearchInputBtn>
            </St.SearchInputFrame>
            <div>
              <Card />
            </div>
          </>
        )}
        {step === 3 && (
          <>
            <div className="Title">4/3에 즐길 체험을 선택해주세요.</div>
            <St.SearchInputFrame>
              <St.SearchInput placeholder="직접 검색하기" />
              <St.SearchInputBtn>검색</St.SearchInputBtn>
            </St.SearchInputFrame>
            <div>
              <SearchCard />
            </div>
          </>
        )}
        {step === 4 && (
          <>
            <div className="Title">4/3에 방문할 맛집을 선택해주세요.</div>
            <St.SearchInputFrame>
              <St.SearchInput placeholder="직접 검색하기" />
              <St.SearchInputBtn>검색</St.SearchInputBtn>
            </St.SearchInputFrame>
            <div>
              <SearchCard />
            </div>
          </>
        )}
        {step === 5 && (
          <>
            <St.FinalTitle className="Title">
              스케줄이 정해졌어요!
            </St.FinalTitle>
          </>
        )}
        {step < 5 && <St.StepBtn onClick={nextStepHandler}>다음</St.StepBtn>}
      </St.SchedulerWrapper>
    </St.SchedulerTotalWrapper>
  );
};

export default Scheduler;
