import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import * as St from './style';
import {
  // schedulerDeleteApi,useMutation,
  schedulerGetTotalApi,
  // schedulerPutApi,
} from 'api/schduler';
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
const SchedulerList = () => {
  const { data: TotalData, isSuccess } = useQuery({
    queryKey: ['schedulerGetTotal'],
    queryFn: schedulerGetTotalApi,
  });
  const [pageCount, setPageCount] = useState(0);
  const arrayLength = TotalData ? TotalData.payload?.length : 20;
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
  // const schedulerPutMutation = useMutation({
  //   mutationFn: schedulerPutApi,
  // });
  // const schedulerDeleteMutation = useMutation({
  //   mutationFn: schedulerDeleteApi,
  // });
  // const schedulerDeleteHandler = (id: number) => {
  //   schedulerDeleteMutation.mutate(id, {
  //     onSuccess: (data) => {
  //       alert(data.message);
  //     },
  //   });
  // };
  // const schedulerPutHandler = (id: number) => {
  //   schedulerPutMutation.mutate(
  //     {
  //       schedulerData: {
  //         schedulerName: '업데이트된 프로젝트 기획 회의',
  //         startDate: '2024-05-28T15:00:00',
  //         endDate: '2024-05-29T18:00:00',
  //         memberEmails: ['c47da4c77bf6@drmail.in'],
  //       },
  //       schedulerId: id,
  //     },
  //     {
  //       onSuccess: (data) => {
  //         alert(data.message);
  //       },
  //     },
  //   );
  // };
  console.log(TotalData);
  return (
    <St.schedulerTotalFrame>
      <div className="Title">
        <St.Circle />
        <p>스케줄러 목록</p>
      </div>

      <St.ListWrapper>
        {!isSuccess ? (
          <>
            <div id="loading" />
          </>
        ) : (
          <>
            {TotalData.payload
              .slice(pageCount, pageCount + 3)
              .map((value: SchedulerCreateType) => (
                <St.CardWrapper key={value.schedulerId}>
                  <St.schedulerName>{value.schedulerName}</St.schedulerName>
                  <St.Nemo>
                    {/* <button
                    onClick={() => schedulerDeleteHandler(value.schedulerId)}
                  >
                    스케줄러 삭제
                  </button> */}
                    {/* <button onClick={() => schedulerPutHandler(value.schedulerId)}>
                  스케줄러 수정
                </button> */}
                    {/* <div>
                    {value.members.map((member) => (
                      <div key={member.userEmail}>{member.userEmail}</div>
                    ))}
                  </div> */}
                    <St.schedulerDay>
                      {value.startDate.slice(0, -9)}~
                      {value.endDate.slice(0, -9)}
                    </St.schedulerDay>
                    <St.schedulerMembers>
                      <div>여행할 멤버:</div>
                      {value.members.map((item, index) => (
                        <div key={item.userId}>
                          {item.username}
                          {index % 2 === 0 && ','}
                        </div>
                      ))}
                    </St.schedulerMembers>
                    <div>
                      {value?.openAPIs?.map((api, idx: number) => (
                        <St.CheckFrame key={idx}>
                          <div className="index">{idx}</div>
                          <div className="iTitle">{api.name}</div>
                        </St.CheckFrame>
                      ))}
                    </div>
                  </St.Nemo>
                </St.CardWrapper>
              ))}
          </>
        )}
      </St.ListWrapper>
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
    </St.schedulerTotalFrame>
  );
};

export default SchedulerList;
