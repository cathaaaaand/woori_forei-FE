import React from 'react';
import { GoTriangleRight } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';
import * as St from './style';

const Board = () => {
  const navigate = useNavigate();

  return (
    <St.BoardFrame>
      <St.BoardInnerFrame>
        <St.BoardTitleFrame>
          <p>게시판</p>
          <St.WriteBtn
            onClick={() => {
              navigate('/write');
            }}
          >
            글쓰기
          </St.WriteBtn>
        </St.BoardTitleFrame>

        <St.ContentTitle>인기글</St.ContentTitle>
        <St.BoardContentFrame>
          <div>안녕하세요~</div>
          <div>24.03.25</div>
        </St.BoardContentFrame>

        <St.ContentTitle>최신글</St.ContentTitle>
        <St.BoardContentFrame>
          <div>안녕하세요~</div>
          <div>24.03.25</div>
        </St.BoardContentFrame>

        <St.BoardPageFrame>
          <div>1/108</div>
          <GoTriangleRight size="30" />
        </St.BoardPageFrame>
      </St.BoardInnerFrame>
    </St.BoardFrame>
  );
};

export default Board;
