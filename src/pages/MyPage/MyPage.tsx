import { useMutation, useQuery } from '@tanstack/react-query';
import React from 'react';
import { BsPersonFill } from 'react-icons/bs';
import { GiPlainCircle } from 'react-icons/gi';
import { IoArrowBack } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import blueArrow from '../../asset/blueArrow.png';
import * as St from './style';
import UpdateProfile from './UpdateProfile';
import { boardMyWritingApi } from 'api/board';
import { commentMineApi } from 'api/comment';
import { imageDeleteApi, imageUploadApi } from 'api/image';
import { schedulerGetTotalApi } from 'api/schduler';
import { userDeleteApi, userProfileApi } from 'api/user';
import { useModal } from 'components/Common/Modal/Modal.hooks';

interface BoardType {
  boardId: number;
  content: string;
}
interface CommentType {
  commentId: number;
  boardId: number;
  commentContent: string;
}
interface SchedulerType {
  schedulerId: number;
  schedulerName: string;
}
const MyPage = () => {
  const navigate = useNavigate();
  const { mount } = useModal();
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['myPage'],
    queryFn: userProfileApi,
  });
  const { data: boardData } = useQuery<BoardType[]>({
    queryKey: ['myboard'],
    queryFn: boardMyWritingApi,
  });
  const { data: commentData } = useQuery<CommentType[]>({
    queryKey: ['mycomment'],
    queryFn: commentMineApi,
  });
  const { data: schedulerData } = useQuery<SchedulerType[]>({
    queryKey: ['myscheduler'],
    queryFn: schedulerGetTotalApi,
  });
  const imageUploadMutation = useMutation({
    mutationFn: imageUploadApi,
  });
  const imageDeleteMutation = useMutation({
    mutationFn: imageDeleteApi,
  });
  const userDeleteMutation = useMutation({
    mutationFn: userDeleteApi,
  });
  const imageUploadHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      alert('유효한 파일이 아닙니다');
      return;
    }
    const formData = new FormData();
    formData.append('images', e.target.files[0]);
    imageUploadMutation.mutate(formData, {
      onSuccess: (data) => {
        alert(data.message);
        setTimeout(() => {
          refetch();
        }, 300);
      },
      onError: (error) => {
        alert(error.message);
      },
    });
  };
  const imageDeleteHandler = () => {
    if (data && !data.image) {
      alert('삭제할 이미지가 없습니다!');
      return;
    }
    imageDeleteMutation.mutate('delete', {
      onSuccess: (data) => {
        console.log(data.message);
        alert('삭제되었습니다!');
        setTimeout(() => {
          refetch();
        }, 300);
      },
      onError: (error) => {
        alert(error.message);
      },
    });
  };

  const updateProfileHandler = () => {
    mount('updateProfile', <UpdateProfile data={data} />);
  };
  const userDeleteHandler = () => {
    const result = confirm('정말 탈퇴하시겠습니까?');
    if (result) {
      userDeleteMutation.mutate('delete', {
        onSuccess: (data) => {
          console.log(data.message);
          alert('삭제되었습니다!');
          // setTimeout(() => {
          //   navigate('/');
          // }, 300);
        },
        onError: (error) => {
          alert(error.message);
        },
      });
    } else {
      alert('취소되었습니다!');
    }
  };
  return (
    <St.MyPageFrame>
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
            {data.image ? (
              <img src={data.image.accessUrl} alt="프로필사진" />
            ) : (
              <label htmlFor="inputImg">
                <BsPersonFill color="white" size="65px" />
              </label>
            )}
          </St.IconFrame>
          <St.ImgUpdateFrame>
            <p>{data.nickname}</p>
            {data.image ? (
              <St.MyPageBtnFrame onClick={imageDeleteHandler}>
                삭제
              </St.MyPageBtnFrame>
            ) : (
              <>
                <label htmlFor="inputImg">
                  <St.MyPageBtnFrame>수정</St.MyPageBtnFrame>
                </label>
                <St.ImgChangeFrame>
                  <input
                    id="inputImg"
                    type="file"
                    accept="image/png, image/jpeg, image/jpg"
                    onChange={imageUploadHandler}
                  />
                </St.ImgChangeFrame>
              </>
            )}
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
                {boardData && boardData.length <= 0 && (
                  <p>작성한 글이 없습니다.</p>
                )}
                {boardData?.map((item) => (
                  <div
                    key={item.boardId}
                    onClick={() => navigate(`/detail/${item.boardId}`)}
                  >
                    {item.content}
                  </div>
                ))}
              </div>
              <St.MoreData>
                <img src={blueArrow} alt="blueArrow" />
              </St.MoreData>
            </div>
            <div className="Border">
              <p className="ListPostsTitle">작성한 댓글</p>
              <div className="ListPosts">
                {commentData && commentData.length <= 0 && (
                  <p>작성한 댓글이 없습니다.</p>
                )}
                {commentData?.slice(0, 5).map((item) => (
                  <div
                    key={item.commentId}
                    onClick={() => navigate(`/detail/${item.boardId}`)}
                  >
                    {item.commentContent}
                  </div>
                ))}
              </div>
              <St.MoreData>
                <img src={blueArrow} alt="blueArrow" />
              </St.MoreData>
            </div>
            <div className="Border">
              <p className="ListPostsTitle">만든 일정</p>
              <div className="ListPosts">
                {schedulerData && schedulerData.length <= 0 && (
                  <p>만든 일정이 없습니다.</p>
                )}
                {schedulerData?.slice(0, 5).map((item) => (
                  <div
                    key={item.schedulerId}
                    onClick={() => navigate('/schedulerlist')}
                  >
                    {item.schedulerName}
                  </div>
                ))}
              </div>
              <St.MoreData>
                <img src={blueArrow} alt="blueArrow" />
              </St.MoreData>
            </div>
          </St.ContentListFrame>
          <div>
            <St.WithdrawalBtn onClick={userDeleteHandler}>
              탈퇴
            </St.WithdrawalBtn>
            <St.pageUpdateBtn onClick={updateProfileHandler}>
              수정
            </St.pageUpdateBtn>
          </div>
        </St.MyPageInnerFrame>
      )}
    </St.MyPageFrame>
  );
};

export default MyPage;
