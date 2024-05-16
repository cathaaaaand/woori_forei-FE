import { useQuery } from '@tanstack/react-query';
import moment from 'moment';
import React from 'react';
import { FiPlus } from 'react-icons/fi';
import {
  IoIosArrowForward,
  IoIosArrowBack,
  IoIosArrowDown,
} from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import {
  SmartAccordion,
  SmartAccordionHeader,
  SmartAccordionBody,
} from '../../components/Common/Accordin/Accordin';
import * as St from './style';
import { boardLikeGetApi, boardRecentApi } from 'api/board';

const Board = () => {
  const navigate = useNavigate();
  const { data, isLoading: isRecent } = useQuery({
    queryKey: ['boardRecent'],
    queryFn: boardRecentApi,
  });
  const { data: boardLikeData, isLoading: isLike } = useQuery({
    queryKey: ['boardLikeGet'],
    queryFn: boardLikeGetApi,
  });
  const dataLength = () => {
    if (!isRecent) {
      return '총 ' + data.length + ' 건';
    }
  };
  const boardLikeDataLength = () => {
    if (!isLike) {
      return '총 ' + boardLikeData.length + ' 건';
    }
  };
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
        </St.BoardTitleFrame>
        <div>
          <St.ContentTitle>
            <p className="length">{boardLikeDataLength()}</p>
            <St.WriteBtnFrame>
              <div className="typeLabel">
                <p>인기글</p>
              </div>
              <St.WriteBtn
                onClick={() => {
                  navigate('/write');
                }}
              >
                <FiPlus />
              </St.WriteBtn>
            </St.WriteBtnFrame>
          </St.ContentTitle>
          {!isRecent &&
            boardLikeData
              ?.slice(0, 4)
              .map(
                (value: {
                  boardId: number;
                  title: string;
                  content: string;
                  createdAt: string;
                }) => (
                  <St.BoardContentFrame key={value.boardId}>
                    <SmartAccordion>
                      <SmartAccordionHeader>
                        <div>
                          <p>{moment(value.createdAt).format('YYYY-MM-DD')}</p>
                          <p>{value.title}</p>
                        </div>
                        <St.AccordionBtn>
                          <IoIosArrowDown size="20px" />
                        </St.AccordionBtn>
                      </SmartAccordionHeader>
                      <SmartAccordionBody>
                        <p>{value.content}</p>
                      </SmartAccordionBody>
                      {/* <button onClick={() => deleteHandler(id)}>삭제</button> */}
                    </SmartAccordion>
                  </St.BoardContentFrame>
                ),
              )}
        </div>
        <div>
          <St.ContentTitle>
            <p className="length">{dataLength()}</p>
            <St.WriteBtnFrame>
              <div className="typeLabel">
                <p>최신글</p>
              </div>
              <St.WriteBtn
                onClick={() => {
                  navigate('/detail/:boardId');
                }}
              >
                <FiPlus />
              </St.WriteBtn>
            </St.WriteBtnFrame>
          </St.ContentTitle>
          {!isLike &&
            data
              ?.slice(0, 4)
              .map(
                (value: {
                  boardId: number;
                  title: string;
                  content: string;
                  createdAt: string;
                }) => (
                  <St.BoardContentFrame key={value.boardId}>
                    <SmartAccordion>
                      <SmartAccordionHeader>
                        <div>
                          <p>{moment(value.createdAt).format('YYYY-MM-DD')}</p>
                          <p>{value.title}</p>
                        </div>
                        <St.AccordionBtn>
                          <IoIosArrowDown size="20px" />
                        </St.AccordionBtn>
                      </SmartAccordionHeader>
                      <SmartAccordionBody>
                        <p>{value.content}</p>
                      </SmartAccordionBody>
                      {/* <button onClick={() => deleteHandler(id)}>삭제</button> */}
                    </SmartAccordion>
                  </St.BoardContentFrame>
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
