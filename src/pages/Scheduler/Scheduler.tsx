import { useMutation, useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import { LuPlus } from 'react-icons/lu';
import Card from '../../components/Card/Card';
import * as St from './style';
import {
  schedulerActivitiesApi,
  schedulerCreateApi,
  schedulerDeleteApi,
  schedulerGetTotalApi,
  schedulerHotelsApi,
  schedulerLandmarksApi,
  // schedulerInformationApi,
  schedulerPutApi,
  schedulerRestaurantsApi,
  schedulerSeoulgoodsApi,
} from 'api/schduler';
import { ChooseCalendar } from 'components/Calendar/Calendar';
import SearchCard from 'components/Card/SearchCard';

interface SchedulerCreateType {
  schedulerId: number;
  schedulerName: string;
  startDate: string;
  endDate: string;
  createdAt: string;
  modifiedAt: string;
  members: [
    {
      userId: number;
      username: string;
      nickname: string;
      userEmail: string;
    },
  ];
  openAPIs?: [
    {
      id: number;
      name: string;
      type: string;
    },
  ];
}
const Scheduler = () => {
  //const navigate = useNavigate();
  const [nameForm, setNameForm] = useState({
    schedulerName: '',
    memberEmails: '',
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
  const { data: TotalData, refetch } = useQuery({
    queryKey: ['schedulerGetTotal'],
    queryFn: schedulerGetTotalApi,
  });
  const activitiesMutation = useMutation({
    mutationFn: schedulerActivitiesApi,
  });
  const hotelsCreateMutation = useMutation({
    mutationFn: schedulerHotelsApi,
  });
  // const informationCreateMutation = useMutation({
  //   mutationFn: schedulerInformationApi,
  // });
  const landmarksMutation = useMutation({
    mutationFn: schedulerLandmarksApi,
  });
  const restaurantsCreateMutation = useMutation({
    mutationFn: schedulerRestaurantsApi,
  });
  const seoulGoodsMutation = useMutation({
    mutationFn: schedulerSeoulgoodsApi,
  });
  const schedulerPutMutation = useMutation({
    mutationFn: schedulerPutApi,
  });
  const schedulerDeleteMutation = useMutation({
    mutationFn: schedulerDeleteApi,
  });

  const schedulerCreateHandler = () => {
    schedulerCreateMutation.mutate(
      {
        schedulerName: '??와의 여행',
        startDate: '2024-05-26T11:30:00',
        endDate: '2024-06-29T11:30:00',
        memberEmails: ['visepa4726@mfyax.com'],
      },
      {
        onSuccess: async (data) => {
          alert(data.message);
          setSchedulerId(data.payload.schedulerId);
          await refetch();
          setStep(3);
        },
        onError: (error) => {
          alert(error);
        },
      },
    );
  };
  const schedulerDeleteHandler = (id: number) => {
    schedulerDeleteMutation.mutate(id, {
      onSuccess: (data) => {
        alert(data.message);
        refetch();
      },
    });
  };
  const schedulerPutHandler = (id: number) => {
    schedulerPutMutation.mutate(
      {
        schedulerData: {
          schedulerName: '업데이트된 프로젝트 기획 회의',
          startDate: '2024-05-28T15:00:00',
          endDate: '2024-05-29T18:00:00',
          memberEmails: ['c47da4c77bf6@drmail.in'],
        },
        schedulerId: id,
      },
      {
        onSuccess: (data) => {
          alert(data.message);
          refetch();
        },
      },
    );
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
  // const informationHandler = () => {
  //   informationCreateMutation.mutate({
  //     Information: {
  //       informationId: 2,
  //       visitStart: '2024-05-29T15:00:00',
  //       visitEnd: '2024-05-29T11:00:00',
  //     },
  //     schedulerId: schedulerId,
  //   });
  // };

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
  return (
    <St.SchedulerTotalWrapper>
      <St.SchedulerWrapper>
        {step === 0 && (
          <>
            <div className="Title">
              <p>스케줄러 목록</p>
              <button onClick={() => setStep(1)}>+</button>
            </div>

            <St.ListWrapper>
              {TotalData &&
                TotalData.payload
                  .slice(0, 3)
                  .map((value: SchedulerCreateType) => (
                    <St.CardWrapper key={value.schedulerId}>
                      <div>{value.schedulerName}</div>
                      <div className="Card">
                        <button
                          onClick={() =>
                            schedulerDeleteHandler(value.schedulerId)
                          }
                        >
                          스케줄러 삭제
                        </button>
                        <button
                          onClick={() => schedulerPutHandler(value.schedulerId)}
                        >
                          스케줄러 수정
                        </button>
                        <div>
                          {value.members.map((member) => (
                            <div key={member.userEmail}>{member.userEmail}</div>
                          ))}
                        </div>
                        <div>
                          여행 기간:{value.startDate}~{value.endDate}
                        </div>
                        <div>생성 날짜:{value.createdAt}</div>
                        <div>수정 날짜:{value.modifiedAt}</div>
                        <div>
                          {value?.openAPIs?.map((api, idx: number) => (
                            <div key={idx}>
                              <St.CardNumber>{idx}</St.CardNumber>
                              <div>{api.name}</div>
                              <div>{api.type}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </St.CardWrapper>
                  ))}
            </St.ListWrapper>
          </>
        )}
        {step === 1 && (
          <>
            <div className="Title">일정의 이름, 멤버를 입력해주세요.</div>
            <button
              onClick={() => {
                setStep(0);
              }}
            >
              스케줄러 목록으로 이동
            </button>
            일정의 이름:
            <St.SInput
              value={schedulerName}
              name="schedulerName"
              onChange={onChange}
            />
            함께할 멤버 입력
            <St.SInput
              value={memberEmails}
              name="memberEmails"
              onChange={onChange}
            />
            <button>
              <St.Circle>
                <LuPlus color="white" size="30" />
              </St.Circle>
            </button>
            <St.StepBtn onClick={() => setStep(2)}>다음</St.StepBtn>
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
