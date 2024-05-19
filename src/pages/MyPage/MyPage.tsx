import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { BsPersonFill } from 'react-icons/bs';
import { GiPlainCircle } from 'react-icons/gi';
import { IoArrowBack } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import blueArrow from '../../asset/blueArrow.png';
import * as St from './style';
import UpdateProfile from './UpdateProfile';
// import { boardMyWritingApi } from 'api/board';
// import { commentMineApi } from 'api/comment';
import { userProfileApi } from 'api/user';
import { useModal } from 'components/Common/Modal/Modal.hooks';

const MyPage = () => {
  const navigate = useNavigate();
  const { mount } = useModal();
  const { data, isLoading } = useQuery({
    queryKey: ['myPage'],
    queryFn: userProfileApi,
  });
  // const { data: boardData } = useQuery({
  //   queryKey: ['myboard'],
  //   queryFn: boardMyWritingApi,
  // });
  // const { data: commentData } = useQuery({
  //   queryKey: ['mycomment'],
  //   queryFn: commentMineApi,
  // });
  // console.log(boardData);
  // console.log(commentData);
  const updateProfileHandler = () => {
    mount('updateProfile', <UpdateProfile data={data} />);
  };
  return (
    <St.MyPageFrame>
      {/* {isLoading && <div id="loading" />} */}
      {!isLoading && (
        <St.MyPageInnerFrame>
          <div className="BPTopLine">
            <div className="BPTitle">
              <IoArrowBack onClick={() => navigate('/')} />홈 &gt;
              <p className="highLight">마이페이지</p>
            </div>
            <St.MyPageTitle>
              <GiPlainCircle size="16px" color="30A8FF" />
              마이페이지
            </St.MyPageTitle>
          </div>
          <St.IconFrame>
            {/* {imgFile ? (
              <img src={imgFile} alt="프로필사진" />
            ) : ( */}
            <BsPersonFill color="white" size="65px" />
            {/* )} */}
          </St.IconFrame>
          <St.ImgUpdateFrame>
            <p>{data.nickname}</p>
            <St.MyPageBtnFrame onClick={updateProfileHandler}>
              수정
            </St.MyPageBtnFrame>
          </St.ImgUpdateFrame>
          <St.IntroduceFrame>
            <div>
              {data?.description
                ? data?.description
                : '프로필 소개글을 작성해주세요 :)'}
            </div>
          </St.IntroduceFrame>
          <St.ContentListFrame>
            <div className="Border">
              <p className="ListPostsTitle">작성한 글</p>
              <div className="ListPosts">
                <p>뉴진스 팬미팅 동행 구합니다!</p>
                <p>뉴진스 팬미팅 동행 구합니다!</p>
                <p>뉴진스 팬미팅 동행 구합니다!</p>
                <p>뉴진스 팬미팅 동행 구합니다!</p>
                <p>뉴진스 팬미팅 동행 구합니다!</p>
              </div>
              <St.MoreData>
                <img src={blueArrow} alt="blueArrow" />
              </St.MoreData>
            </div>
            <div className="Border">
              <p className="ListPostsTitle">작성한 댓글</p>
              <div className="ListPosts">
                <p>뉴진스 팬미팅 동행 구합니다!</p>
                <p>뉴진스 팬미팅 동행 구합니다!</p>
                <p>뉴진스 팬미팅 동행 구합니다!</p>
                <p>뉴진스 팬미팅 동행 구합니다!</p>
                <p>뉴진스 팬미팅 동행 구합니다!</p>
              </div>
              <St.MoreData>
                <img src={blueArrow} alt="blueArrow" />
              </St.MoreData>
            </div>
            <div className="Border">
              <p className="ListPostsTitle">만든 일정</p>
              <div className="ListPosts">
                <p>뉴진스 팬미팅 동행 구합니다!</p>
                <p>뉴진스 팬미팅 동행 구합니다!</p>
                <p>뉴진스 팬미팅 동행 구합니다!</p>
                <p>뉴진스 팬미팅 동행 구합니다!</p>
                <p>뉴진스 팬미팅 동행 구합니다!</p>
              </div>
              <St.MoreData>
                <img src={blueArrow} alt="blueArrow" />
              </St.MoreData>
            </div>
          </St.ContentListFrame>
          <div>
            <St.WithdrawalBtn>탈퇴</St.WithdrawalBtn>
            <St.pageUpdateBtn>수정</St.pageUpdateBtn>
          </div>
        </St.MyPageInnerFrame>
      )}
    </St.MyPageFrame>
  );
};

export default MyPage;
