import { useQuery } from '@tanstack/react-query';
import React from 'react';
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
            {TotalData.payload.slice(0, 3).map((value: SchedulerCreateType) => (
              <St.CardWrapper key={value.schedulerId}>
                <St.schedulerName>{value.schedulerName}</St.schedulerName>
                <div className="Card">
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
                  <div>
                    {value.startDate.slice(0, -9)}~{value.endDate.slice(0, -9)}
                  </div>
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
          </>
        )}
      </St.ListWrapper>
    </St.schedulerTotalFrame>
  );
};

export default SchedulerList;
