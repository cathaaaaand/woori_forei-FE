import { useMutation } from '@tanstack/react-query';
import React, { useRef, useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import { LuPlus } from 'react-icons/lu';
import { useRecoilState } from 'recoil';
import Card from '../../components/Card/Card';
import * as St from './style';
import {
  schedulerActivitiesApi,
  schedulerCreateApi,
  schedulerHotelsApi,
  schedulerLandmarksApi,
  schedulerRestaurantsApi,
  schedulerSeoulgoodsApi,
} from 'api/schduler';
import { ChooseCalendar } from 'components/Calendar/Calendar';
import SearchCard from 'components/Card/SearchCard';
import { dateState } from 'recoil/dataState';

interface InputItem {
  id: number;
  title: string;
}
interface stringArray {
  schedulerName: string;
  memberEmails: Array<string>;
}
const Scheduler = () => {
  //const navigate = useNavigate();
  const nextId = useRef<number>(1);
  const [inputItems, setInputItems] = useState<InputItem[]>([
    { id: 0, title: '' },
  ]);
  const addInput = () => {
    const input = {
      id: nextId.current,
      title: '',
    };
    setInputItems([...inputItems, input]);
    nextId.current += 1;
  };
  // const deleteInput = (index: number) => {
  //   setInputItems(inputItems.filter((item) => item.id !== index));
  // };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (index > inputItems.length) return;
    const inputItemsCopy: InputItem[] = JSON.parse(JSON.stringify(inputItems));
    inputItemsCopy[index].title = e.target.value;
    setInputItems(inputItemsCopy);
  };

  const [dateSave] = useRecoilState(dateState);
  const [nameForm, setNameForm] = useState<stringArray>({
    schedulerName: '',
    memberEmails: [],
  });
  const onChange = (e: { target: { name: string; value: unknown } }) => {
    const { name, value } = e.target;
    setNameForm((form) => ({ ...form, [name]: value }));
  };

  const { schedulerName } = nameForm;
  const [step, setStep] = useState(1);
  const [schedulerId, setSchedulerId] = useState(0);
  // const [isScheduler, setIsSchedulerId] = useState(false);

  const schedulerCreateMutation = useMutation({
    mutationFn: schedulerCreateApi,
  });

  const activitiesMutation = useMutation({
    mutationFn: schedulerActivitiesApi,
  });
  const hotelsCreateMutation = useMutation({
    mutationFn: schedulerHotelsApi,
  });
  const landmarksMutation = useMutation({
    mutationFn: schedulerLandmarksApi,
  });
  const restaurantsCreateMutation = useMutation({
    mutationFn: schedulerRestaurantsApi,
  });
  const seoulGoodsMutation = useMutation({
    mutationFn: schedulerSeoulgoodsApi,
  });

  const schedulerCreateHandler = () => {
    if (schedulerName && Array.isArray(dateSave)) {
      const value = {
        schedulerName: '다은이와의 여행',
        startDate: `2024-05-19T11:30:00`,
        endDate: `2024-05-30T8:30:00`,
        memberEmails: ['niweci1387@facais.com'],
      };
      console.log(value);
      schedulerCreateMutation.mutate(value, {
        onSuccess: async (data) => {
          alert(data.message);
          setSchedulerId(data.payload.schedulerId);
          setStep(3);
        },
        onError: (error) => {
          console.log(dateSave[0]);
          alert(error);
        },
      });
    }
  };

  const landmarkHandler = () => {
    landmarksMutation.mutate({
      Landmarks: {
        landmarkId: 2,
        visitStart: '2024-05-30T15:00:00',
        visitEnd: '2024-05-30T11:00:00',
      },
      schedulerId,
    });
    setStep(4);
  };
  const activitiesHandler = () => {
    activitiesMutation.mutate({
      Activities: {
        activityId: 1,
        visitStart: '2024-06-26T10:00:00',
        visitEnd: '2024-06-26T14:00:00',
      },
      schedulerId,
    });
    setStep(5);
  };

  const restaurantsHandler = () => {
    restaurantsCreateMutation.mutate({
      Restaurants: {
        restaurantId: 2,
        visitStart: '2024-04-06T15:00:00',
        visitEnd: '2024-04-07T11:00:00',
      },
      schedulerId: schedulerId,
    });
    setStep(6);
  };
  const hotelsHandler = () => {
    hotelsCreateMutation.mutate({
      Hotels: {
        hotelId: 2,
        stayStart: '2024-06-03T15:00:00',
        stayEnd: '2024-06-03T11:00:00',
      },
      schedulerId,
    });
    setStep(7);
  };
  const seoulGoodsHandler = () => {
    seoulGoodsMutation.mutate({
      Seoulgoods: {
        goodsId: 2,
        visitStart: '2024-04-06T15:00:00',
        visitEnd: '2024-04-07T11:00:00',
      },
      schedulerId,
    });
    setStep(8);
  };

  const nextIdStep = () => {
    const member = inputItems.map((item) => item.title);
    setNameForm({ ...nameForm, memberEmails: member });
    setStep(2);
  };

  return (
    <St.SchedulerTotalWrapper>
      <St.SchedulerWrapper>
        {step === 1 && (
          <>
            <div className="STitle">
              <St.Circle />
              <p>일정의 이름, 멤버를 입력해주세요.</p>
            </div>
            <St.InputBtnFrame>
              <div>
                <label>일정의 이름</label>
                <St.SInput
                  value={schedulerName}
                  name="schedulerName"
                  onChange={onChange}
                />
              </div>
              <div>
                <label>함께할 멤버 입력</label>

                {inputItems.map((item, index) => (
                  <St.SInput
                    key={index}
                    className={`title-${index}`}
                    onChange={(e) => handleChange(e, index)}
                    value={item.title}
                  />
                ))}
              </div>
            </St.InputBtnFrame>
            <St.InputBtn onClick={addInput}>
              <St.GCircle>
                <LuPlus color="white" size="30" />
              </St.GCircle>
            </St.InputBtn>
            <St.StepBtn onClick={nextIdStep}>다음</St.StepBtn>
          </>
        )}
        {step === 2 && (
          <>
            <div className="Title">날짜를 선택해주세요.</div>
            <ChooseCalendar />
            <St.StepBtn onClick={schedulerCreateHandler}>다음</St.StepBtn>
          </>
        )}
        {step === 3 && (
          <>
            <div className="Title">4/3에 방문할 명소를 선택해주세요.</div>
            <St.SearchInputFrame>
              <St.SearchInput placeholder="직접 검색하기" />
              <St.SearchInputBtn>검색</St.SearchInputBtn>
            </St.SearchInputFrame>
            <div>
              <Card />
            </div>
            <St.StepBtn onClick={landmarkHandler}>다음</St.StepBtn>
          </>
        )}
        {step === 4 && (
          <>
            <div className="Title">4/3에 즐길 체험을 선택해주세요.</div>
            <St.SearchInputFrame>
              <St.SearchInput placeholder="직접 검색하기" />
              <St.SearchInputBtn>검색</St.SearchInputBtn>
            </St.SearchInputFrame>
            <div>
              <SearchCard />
            </div>
            <St.StepBtn onClick={activitiesHandler}>다음</St.StepBtn>
          </>
        )}
        {step === 5 && (
          <>
            <div className="Title">4/3에 방문할 맛집을 선택해주세요.</div>
            <St.SearchInputFrame>
              <St.SearchInput placeholder="직접 검색하기" />
              <St.SearchInputBtn>검색</St.SearchInputBtn>
            </St.SearchInputFrame>
            <div>
              <SearchCard />
            </div>
            <St.StepBtn onClick={restaurantsHandler}>다음</St.StepBtn>
          </>
        )}
        {step === 6 && (
          <>
            <div className="Title">4/3에 방문할 호텔을 선택해주세요.</div>
            <St.SearchInputFrame>
              <St.SearchInput placeholder="직접 검색하기" />
              <St.SearchInputBtn>검색</St.SearchInputBtn>
            </St.SearchInputFrame>
            <div>
              <SearchCard />
            </div>
            <St.StepBtn onClick={hotelsHandler}>다음</St.StepBtn>
          </>
        )}
        {step === 7 && (
          <>
            <div className="Title">
              4/3에 방문할 기념품판매소를 선택해주세요.
            </div>
            <St.SearchInputFrame>
              <St.SearchInput placeholder="직접 검색하기" />
              <St.SearchInputBtn>검색</St.SearchInputBtn>
            </St.SearchInputFrame>
            <div>
              <SearchCard />
            </div>
            <St.StepBtn onClick={seoulGoodsHandler}>다음</St.StepBtn>
          </>
        )}
        {step === 8 && (
          <St.FinalTitle className="Title">스케줄이 정해졌어요!</St.FinalTitle>
        )}
      </St.SchedulerWrapper>
    </St.SchedulerTotalWrapper>
  );
};

export default Scheduler;
