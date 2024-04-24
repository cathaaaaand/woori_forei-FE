import React from 'react';
import { IoPersonOutline } from 'react-icons/io5';
import * as St from './style';

const Detail = () => {
  return (
    <St.DetailFrame>
      <St.DetailInnerFrame>
        <div>게시판</div>
        <St.TitleFrame>
          <div>3/31에 경복궁 함께 가실 분~</div>
          <St.TitleIconFrame>
            <IoPersonOutline />
            <div>닉네임</div>
          </St.TitleIconFrame>
        </St.TitleFrame>
        <St.ContentFrame>
          <St.ContentTextFrame>
            <p>3/31에 경복궁 함께 가실 분 계신가요?</p>
            <p>
              저는 한국인이고, 역사에 관심이 많아 외국인분들의 가이드 역할을
              해드리고 싶어요.
            </p>
            <p>참여를 원하시는 분들께서는 댓글을 달아주세요!</p>
            <p>제가 답글로 저와 연락할 수 있는 링크를 달아드릴게요.</p>
            <p>또, 많은 분들이 볼 수 있게 좋아요도 부탁드려요 ^_^ </p>
            <p>오늘 날씨가 추운데 따뜻하게 입으세요~</p>
          </St.ContentTextFrame>
          <St.DetailImgFrame>
            <p>이미지</p>
          </St.DetailImgFrame>
          <St.BtnAlign>
            <St.Commentbtn>좋아요</St.Commentbtn>
          </St.BtnAlign>
        </St.ContentFrame>
        <St.CommentFrame>
          <div className="CommentTitle">댓글</div>
          <St.CommentInputFrame placeholder="댓글을 작성해주세요." />
          <St.BtnAlign>
            <St.Commentbtn>댓글쓰기</St.Commentbtn>
          </St.BtnAlign>
        </St.CommentFrame>
        <St.CommentListFrame>
          <div className="Comment">
            <div className="ListTitle">
              <p>User1</p>
              <St.CommenListtbtn>답글쓰기</St.CommenListtbtn>
            </div>
            <p>몇 시 쯤 도착하실 예정인가요?</p>
            <St.CommentLine />
            <St.UserTitle>닉네임</St.UserTitle>
            <div>3시 30분 쯤 도착할 것 같아요~</div>
          </div>
          <St.CommentEvenFrame>
            <div className="ListTitle">
              <St.UserTitle>User2</St.UserTitle>
              <St.CommenListtbtn>답글쓰기</St.CommenListtbtn>
            </div>
            <p>재미있겠네요~^^</p>
          </St.CommentEvenFrame>
          <St.CommentCount>1/1</St.CommentCount>
        </St.CommentListFrame>
      </St.DetailInnerFrame>
    </St.DetailFrame>
  );
};

export default Detail;
