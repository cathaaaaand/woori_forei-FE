import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
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
  console.log(data, boardLikeData);
  // const schedulerDeleteMutation = useMutation({
  //   mutationFn: boardDeleteApi,
  // });
  // const schedulerLikeMutation = useMutation({
  //   mutationFn: boardLikeApi ,
  // });

  // const deleteHandler = (id: number) => {
  //   schedulerDeleteMutation.mutate(id, {
  //     onSuccess: (data) => {
  //       alert(data.message);
  //       refetch();
  //     },
  //   });
  // };
  // const deleteHandler = (id: number) => {
  //   schedulerLikeMutation.mutate(id, {
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
        {/* <button onClick={() => deleteHandler(id)}>삭제</button> */}
        <St.ContentTitle>인기글</St.ContentTitle>
        <St.BoardContentFrame
          onClick={() => {
            navigate('/detail');
          }}
        >
          <div>안녕하세요~</div>
          <div>24.03.25</div>
        </St.BoardContentFrame>

        <St.ContentTitle>최신글</St.ContentTitle>
        <St.BoardContentFrame>
          <div>안녕하세요~</div>
          <div>24.03.25</div>
        </St.BoardContentFrame>

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
