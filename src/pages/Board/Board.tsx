/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from '@tanstack/react-query';
import moment from 'moment';
import React, { useState } from 'react';
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [likePage, setLikePage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
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
  const pageBeforeBtnHandler = () => {
    alert('첫 번째 페이지입니다!');
  };
  const pageNextBtnHandler = () => {
    alert('마지막 페이지입니다!');
  };
  const getPage = (data: any) => {
    const arrayLength = data ? data?.length : 20;
    const range = [];
    const pages = [];

    for (let i = 1; i <= Math.floor(arrayLength / 4); i++) {
      range.push(i);
    }

    for (const i of range) {
      pages.push(i);
    }

    return pages;
  };
  const pageChangeHandler = (page: number) => {
    setCurrentPage(page);
  };
  const pageLikeChangeHandler = (page: number) => {
    setLikePage(page);
  };
  console.log(4 * (currentPage - 1), 4 * currentPage);
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
              ?.slice(4 * (likePage - 1), 4 * likePage)
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
                        <St.BoardToDetailBtn
                          onClick={() => navigate(`/detail/${value.boardId}`)}
                        >
                          <p>답글 달러 가기</p>
                          <St.NextBeforeBtn>
                            <IoIosArrowForward size="20px" />
                          </St.NextBeforeBtn>
                        </St.BoardToDetailBtn>
                      </SmartAccordionBody>
                    </SmartAccordion>
                  </St.BoardContentFrame>
                ),
              )}
          <St.NextBeforeFrame>
            <St.NextBeforeBtn onClick={pageBeforeBtnHandler}>
              <IoIosArrowBack size="20px" />
            </St.NextBeforeBtn>
            {getPage(boardLikeData).map((page, index) => (
              <St.PageNationBtn
                key={index}
                onClick={() => pageLikeChangeHandler(page)}
              >
                {page}
              </St.PageNationBtn>
            ))}
            <St.NextBeforeBtn onClick={pageNextBtnHandler}>
              <IoIosArrowForward size="20px" />
            </St.NextBeforeBtn>
          </St.NextBeforeFrame>
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
                  navigate('/write');
                }}
              >
                <FiPlus />
              </St.WriteBtn>
            </St.WriteBtnFrame>
          </St.ContentTitle>
          {!isLike &&
            data
              ?.slice(4 * (currentPage - 1), 4 * currentPage)
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
                        <St.BoardToDetailBtn
                          onClick={() => navigate(`/detail/${value.boardId}`)}
                        >
                          <p>답글 달러 가기</p>
                          <St.NextBeforeBtn>
                            <IoIosArrowForward size="20px" />
                          </St.NextBeforeBtn>
                        </St.BoardToDetailBtn>
                      </SmartAccordionBody>
                    </SmartAccordion>
                  </St.BoardContentFrame>
                ),
              )}
          <St.NextBeforeFrame>
            <St.NextBeforeBtn onClick={pageBeforeBtnHandler}>
              <IoIosArrowBack size="20px" />
            </St.NextBeforeBtn>
            {getPage(data).map((page, index) => (
              <St.PageNationBtn
                key={index}
                onClick={() => pageChangeHandler(page)}
              >
                {page}
              </St.PageNationBtn>
            ))}
            <St.NextBeforeBtn onClick={pageNextBtnHandler}>
              <IoIosArrowForward size="20px" />
            </St.NextBeforeBtn>
          </St.NextBeforeFrame>
        </div>
      </St.BoardInnerFrame>
    </St.BoardFrame>
  );
};

export default Board;
