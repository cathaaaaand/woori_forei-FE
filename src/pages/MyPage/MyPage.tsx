import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { BsPersonFill } from 'react-icons/bs';
import { GiPlainCircle } from 'react-icons/gi';
import { RxTriangleDown } from 'react-icons/rx';
import * as St from './style';
import UpdateProfile from './UpdateProfile';
import { userProfileApi } from 'api/user';
import { useModal } from 'components/Common/Modal/Modal.hooks';

const MyPage = () => {
  const { mount } = useModal();
  const { data, isLoading } = useQuery({
    queryKey: ['myPage'],
    queryFn: userProfileApi,
  });

  const updateProfileHandler = () => {
    mount('updateProfile', <UpdateProfile data={data} />);
  };
  return (
    <St.MyPageFrame>
      {isLoading && <div id="loading" />}
      {!isLoading && (
        <St.MyPageInnerFrame>
          <div>홈 &gt; 마이페이지</div>
          <div>
            <GiPlainCircle size="16px" color="30A8FF" />
            마이페이지
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
              <RxTriangleDown size="49px" color="30A8FF" />
            </div>
            <div className="Border">
              <p className="ListPostsTitle">작성한 글</p>
              <div className="ListPosts">
                <p>뉴진스 팬미팅 동행 구합니다!</p>
                <p>뉴진스 팬미팅 동행 구합니다!</p>
                <p>뉴진스 팬미팅 동행 구합니다!</p>
                <p>뉴진스 팬미팅 동행 구합니다!</p>
                <p>뉴진스 팬미팅 동행 구합니다!</p>
              </div>
              <RxTriangleDown size="49px" color="30A8FF" />
            </div>
            <div></div>
          </St.ContentListFrame>

          <St.WithdrawalBtn>회원탈퇴하기</St.WithdrawalBtn>
        </St.MyPageInnerFrame>
      )}
    </St.MyPageFrame>
  );
};

export default MyPage;
