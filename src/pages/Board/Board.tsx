import { useQuery } from '@tanstack/react-query';
import moment from 'moment';
import React from 'react';
import {
  IoIosArrowForward,
  IoIosArrowBack,
  IoIosArrowDown,
} from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import * as St from './style';
import { boardLikeGetApi, boardRecentApi } from 'api/board';

const Board = () => {
  const navigate = useNavigate();
  const { data } = useQuery({
    queryKey: ['boardRecent'],
    queryFn: boardRecentApi,
  });
  const { data: boardLikeData } = useQuery({
    queryKey: ['boardLikeGet'],
    queryFn: boardLikeGetApi,
  });
  // const dataLength = () => {
  //   if (!isLoading) {
  //     return '총 ' + data.length + ' 건';
  //   }
  // };
  // const boardLikeDataLength = () => {
  //   if (!isLoading) {
  //     return '총 ' + boardLikeData.length + ' 건';
  //   }
  // };
  // const BoardDeleteMutation = useMutation({
  //   mutationFn: boardDeleteApi,
  // }); {boardLikeData.length}
  // const BoardLikeMutation = useMutation({
  //   mutationFn: boardLikeApi ,
  // });

  // const deleteHandler = (id: number) => {
  //   BoardDeleteMutation.mutate(id, {
  //     onSuccess: (data) => {
  //       alert(data.message);
  //       refetch();
  //     },
  //   });
  // };
  // const deleteHandler = (id: number) => {
  //   BoardLikeMutation.mutate(id, {
  //     onSuccess: (data) => {
  //       alert(data.message);
  //       refetch();
  //     },
  //   });
  // };
  return (
    <St.BoardFrame>
      <St.BoardInnerFrame>
        <St.BoardTitleFrame>
          <div className="FaTitle">
            <St.Circle />
            <p>게시판</p>
          </div>
          <St.WriteBtn
            onClick={() => {
              navigate('/write');
            }}
          >
            글쓰기
          </St.WriteBtn>
        </St.BoardTitleFrame>
        <div>
          <St.ContentTitle>
            {/* <p className="length">{dataLength()}</p> */}
            <div className="typeLabel">
              <p>인기글</p>
            </div>
          </St.ContentTitle>
          {boardLikeData
            ?.slice(0, 4)
            .map(
              (value: {
                boardId: number;
                title: string;
                createdAt: string;
              }) => (
                <St.BoardContentFrame
                  key={value.boardId}
                  onClick={() => {
                    navigate('/detail');
                  }}
                >
                  <div>
                    <p>{moment(value.createdAt).format('YYYY-MM-DD')}</p>
                    <p>{value.title}</p>
                  </div>
                  <St.AccordionBtn>
                    <IoIosArrowDown size="20px" />
                  </St.AccordionBtn>
                  {/* <button onClick={() => deleteHandler(id)}>삭제</button> */}
                </St.BoardContentFrame>
              ),
            )}
        </div>
        <div>
          <St.ContentTitle>
            {/* <p className="length">{boardLikeDataLength()}</p> */}
            <p className="typeLabel">최신글</p>
          </St.ContentTitle>
          {data
            ?.slice(0, 4)
            .map(
              (value: {
                boardId: number;
                title: string;
                createdAt: string;
              }) => (
                <div key={value.boardId}>
                  <St.BoardContentFrame>
                    <div>
                      <p>{moment(value.createdAt).format('YYYY-MM-DD')}</p>
                      <p>{value.title}</p>
                    </div>
                    <St.AccordionBtn>
                      <IoIosArrowDown size="20px" />
                    </St.AccordionBtn>
                  </St.BoardContentFrame>
                </div>
              ),
            )}
        </div>
        <St.BoardPageFrame>
          <IoIosArrowBack size="20px" />
          <div>1 2 3 4</div>
          <IoIosArrowForward size="20px" />
        </St.BoardPageFrame>
      </St.BoardInnerFrame>
    </St.BoardFrame>
  );
};

export default Board;
