import { useMutation, useQuery } from '@tanstack/react-query';
import moment from 'moment';
import React, { useRef, useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import { IoIosSearch } from 'react-icons/io';
import { LuPlus } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import Step3 from './Components/Step3';
import Step4 from './Components/Step4';
import Step5 from './Components/Step5';
import Step6 from './Components/Step6';
import Step7 from './Components/Step7';
import * as St from './style';
import {
  activitiesApi,
  hotelsnApi,
  landmarksnApi,
  restaurantsApi,
  seoulGoodsApi,
} from 'api/openApi';
import {
  schedulerActivitiesApi,
  schedulerCreateApi,
  schedulerHotelsApi,
  schedulerLandmarksApi,
  schedulerRestaurantsApi,
  schedulerSeoulgoodsApi,
} from 'api/schduler';
import { ChooseCalendar } from 'components/Calendar/Calendar';
import { dateState } from 'recoil/dataState';
import { BestState } from 'recoil/openapiState';

interface InputItem {
  id: number;
  title: string;
}
interface stringArray {
  schedulerName: string;
  memberEmails: Array<string>;
}
const Scheduler = () => {
  const navigate = useNavigate();
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
  const [search, setSearch] = useState('');
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (index > inputItems.length) return;
    const inputItemsCopy: InputItem[] = JSON.parse(JSON.stringify(inputItems));
    inputItemsCopy[index].title = e.target.value;
    setInputItems(inputItemsCopy);
  };

  const [dateSave, setDateSave] = useRecoilState(dateState);
  const initialDate = dateSave[0] ? dateSave[0].slice(0, -5) : '';
  const [schedulerDate, setSchedulerDate] = useState(initialDate);

  const [nameForm, setNameForm] = useState<stringArray>({
    schedulerName: '',
    memberEmails: [],
  });
  const onChange = (e: { target: { name: string; value: unknown } }) => {
    const { name, value } = e.target;
    setNameForm((form) => ({ ...form, [name]: value }));
  };

  const { schedulerName, memberEmails } = nameForm;
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
  const { data: landmark } = useQuery({
    queryKey: ['landmark'],
    queryFn: landmarksnApi,
  });
  const { data: activities } = useQuery({
    queryKey: ['activities'],
    queryFn: activitiesApi,
  });
  const { data: restaurants } = useQuery({
    queryKey: ['restaurants'],
    queryFn: restaurantsApi,
  });
  const { data: hotels } = useQuery({
    queryKey: ['hotels'],
    queryFn: hotelsnApi,
  });
  const { data: goods } = useQuery({
    queryKey: ['goods'],
    queryFn: seoulGoodsApi,
  });
  const dateString = Array.isArray(dateSave)
    ? dateSave.map((item) => moment(`${item}`).format('YYYY-MM-DD')).join(' ~ ')
    : moment(`${new Date()}`).format('YYYY-MM-DD');
  const filteredData = landmark?.filter(
    (item: { postSj: string; address: string }) => {
      if (item.postSj.includes(search) || item.address.includes(search)) {
        return true;
      } else {
        return false;
      }
    },
  );
  const filteredData4 = activities?.filter(
    (item: { placenm: string; svcnm: string }) => {
      if (item.svcnm.includes(search) || item.placenm.includes(search)) {
        return true;
      } else {
        return false;
      }
    },
  );
  const filteredData5 = restaurants?.filter(
    (item: { fdReprsntMenu: string; address: string; postSj: string }) => {
      if (
        item.fdReprsntMenu.includes(search) ||
        item.address.includes(search) ||
        item.postSj.includes(search)
      ) {
        return true;
      } else {
        return false;
      }
    },
  );
  const filteredData6 = hotels?.filter(
    (item: {
      nameKor: string;
      hkorCity: string;
      hkorGu: string;
      hkorDong: string;
    }) => {
      if (
        item.hkorCity.includes(search) ||
        item.hkorGu.includes(search) ||
        item.hkorDong.includes(search) ||
        item.nameKor.includes(search)
      ) {
        return true;
      } else {
        return false;
      }
    },
  );
  const filteredData7 = goods?.filter((item: { addr: string; nm: string }) => {
    if (item.nm.includes(search) || item.addr.includes(search)) {
      return true;
    } else {
      return false;
    }
  });
  const [btCheck, setBtCheck] = useRecoilState(BestState);
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
    if (!dateSave[1]) {
      alert('2일 이상 선택해주세요');
      return;
    }
    if (schedulerName && Array.isArray(dateSave)) {
      const fisrt0Date = new Date(dateSave[1]).setDate(
        new Date(dateSave[1]).getDate(),
      );
      const second6Date = new Date(dateSave[0]).setDate(
        new Date(dateSave[0]).getDate() + 6,
      );
      if (second6Date < fisrt0Date) {
        alert('최대 6일간의 스케줄을 만들 수 있습니다!');
      } else {
        const value = {
          schedulerName,
          startDate: dateSave[0].slice(0, -5),
          endDate: dateSave[1].slice(0, -5),
          memberEmails,
        };
        schedulerCreateMutation.mutate(value, {
          onSuccess: async (data) => {
            alert(data.message);
            setSchedulerId(data.payload.schedulerId);
            setSchedulerDate(dateSave[0].slice(0, -5));
            setStep(0);
          },
          onError: (error) => {
            alert(error);
          },
        });
      }
    }
  };

  const schedulerEl = ['명소', '체험', '맛집', '호텔', '기념품판매소'];
  const [selectedElements, setSelectedElements] =
    useState<Array<string>>(schedulerEl);
  const ElHandler = (element: string) => {
    setSelectedElements((prevSelectedElements) =>
      prevSelectedElements.filter((item) => item !== element),
    );
    switch (element) {
      case '명소':
        setStep(3);
        break;
      case '체험':
        setStep(4);
        break;
      case '맛집':
        setStep(5);
        break;
      case '호텔':
        setStep(6);
        break;
      case '기념품판매소':
        setStep(7);
        break;
    }
  };
  const dateChange = (date: string) => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + 1);
    return newDate.toISOString().slice(0, -5);
  };
  const landmarkHandler = () => {
    const targetItem = btCheck.find((item) => item.type === 'landmarkId');
    if (targetItem) {
      landmarksMutation.mutate({
        Landmarks: {
          landmarkId: targetItem.id,
          visitStart: schedulerDate,
          visitEnd: schedulerDate,
        },
        schedulerId,
      });
    }
    setSearch('');
    if (selectedElements.length > 0) {
      setSchedulerDate(dateChange(schedulerDate));
      setStep(0);
    } else {
      setStep(8);
    }
  };
  const activitiesHandler = () => {
    const targetItem = btCheck.find((item) => item.type === 'activityId');
    if (targetItem) {
      activitiesMutation.mutate({
        Activities: {
          activityId: targetItem.id,
          visitStart: schedulerDate,
          visitEnd: schedulerDate,
        },
        schedulerId,
      });
    }
    setSearch('');
    if (selectedElements.length > 0) {
      setSchedulerDate(dateChange(schedulerDate));
      setStep(0);
    } else {
      setStep(8);
    }
  };

  const restaurantsHandler = () => {
    const targetItem = btCheck.find((item) => item.type === 'restaturantId');
    if (targetItem) {
      restaurantsCreateMutation.mutate({
        Restaurants: {
          restaurantId: targetItem.id,
          visitStart: schedulerDate,
          visitEnd: schedulerDate,
        },
        schedulerId: schedulerId,
      });
    }
    setSearch('');
    if (selectedElements.length > 0) {
      setSchedulerDate(dateChange(schedulerDate));
      setStep(0);
    } else {
      setStep(8);
    }
  };
  const hotelsHandler = () => {
    const targetItem = btCheck.find((item) => item.type === 'hotelId');
    if (targetItem) {
      hotelsCreateMutation.mutate({
        Hotels: {
          hotelId: targetItem.id,
          stayStart: schedulerDate,
          stayEnd: schedulerDate,
        },
        schedulerId,
      });
    }
    setSearch('');
    if (selectedElements.length > 0) {
      setSchedulerDate(dateChange(schedulerDate));
      setStep(0);
    } else {
      setStep(8);
    }
  };
  const seoulGoodsHandler = () => {
    const targetItem = btCheck.find((item) => item.type === 'seoulGoodsId');
    if (targetItem) {
      seoulGoodsMutation.mutate({
        Seoulgoods: {
          goodsId: targetItem.id,
          visitStart: schedulerDate,
          visitEnd: schedulerDate,
        },
        schedulerId,
      });
    }
    setSearch('');
    if (selectedElements.length > 0) {
      setSchedulerDate(dateChange(schedulerDate));
      setStep(0);
    } else {
      setStep(8);
    }
  };

  const nextIdStep = () => {
    const member = inputItems.map((item) => item.title);
    setNameForm({ ...nameForm, memberEmails: member });
    setBtCheck([]);
    setDateSave([]);
    setStep(2);
  };
  return (
    <St.SchedulerTotalWrapper>
      <St.SchedulerWrapper>
        {step === 0 && (
          <>
            <div>
              {schedulerDate?.slice(0, -9)} 에 진행할 프로그램을 선택해주세요
            </div>
            <div>
              {selectedElements.map((element, index) => (
                <button key={index} onClick={() => ElHandler(element)}>
                  {element}
                </button>
              ))}
            </div>
          </>
        )}
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
                <label>함께할 멤버 이메일 입력</label>

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
        {step > 2 && (
          <>
            <>
              <div className="Title">
                <St.Circle />
                {step < 8 && schedulerDate.slice(0, -9)}
                {step === 3 && <p>에 방문할 명소를 선택해주세요.</p>}
                {step === 4 && <p>에 방문할 체험을 선택해주세요.</p>}
                {step === 5 && <p>에 방문할 맛집 선택해주세요.</p>}
                {step === 6 && <p>에 방문할 호텔를 선택해주세요.</p>}
                {step === 7 && <p>에 방문할 기념품판매소를 선택해주세요.</p>}
                {step === 8 && <p>스케줄이 정해졌어요!</p>}
              </div>
            </>

            {step < 8 && (
              <>
                <St.SearchInputFrame>
                  <St.SearchInput
                    placeholder="직접 검색하기"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <St.SearchInputBtn>
                    <IoIosSearch size="30px" color="#636363" />
                  </St.SearchInputBtn>
                </St.SearchInputFrame>
              </>
            )}
            <St.NemoFrame>
              <St.Nemo>
                <div style={{ margin: '30px' }}>{dateString}</div>
                {btCheck.map((value, index: number) => (
                  <St.CheckFrame key={value.id}>
                    <p className="index">{index + 1}</p>
                    <p className="iTitle">{value.title}</p>
                  </St.CheckFrame>
                ))}
              </St.Nemo>
              {step === 3 && <Step3 data={filteredData} />}
              {step === 4 && <Step4 data={filteredData4} />}
              {step === 5 && <Step5 data={filteredData5} />}
              {step === 6 && <Step6 data={filteredData6} />}
              {step === 7 && <Step7 data={filteredData7} />}
            </St.NemoFrame>

            {step === 3 && (
              <St.StepBtn onClick={landmarkHandler}>다음</St.StepBtn>
            )}
            {step === 4 && (
              <St.StepBtn onClick={activitiesHandler}>다음</St.StepBtn>
            )}
            {step === 5 && (
              <St.StepBtn onClick={restaurantsHandler}>다음</St.StepBtn>
            )}
            {step === 6 && (
              <St.StepBtn onClick={hotelsHandler}>다음</St.StepBtn>
            )}
            {step === 7 && (
              <St.StepBtn onClick={seoulGoodsHandler}>다음</St.StepBtn>
            )}
            {step === 8 && (
              <St.StepBtn onClick={() => navigate('/schedulerlist')}>
                스케줄러 목록 보러가기
              </St.StepBtn>
            )}
          </>
        )}
      </St.SchedulerWrapper>
    </St.SchedulerTotalWrapper>
  );
};

export default Scheduler;
