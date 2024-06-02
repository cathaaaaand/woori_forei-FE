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
import { imageGetApi, imageUploadApi } from 'api/image';
import { schedulerGetTotalApi } from 'api/schduler';
import { userProfileApi } from 'api/user';
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
  // const [imgGet, setImgGet] = useState(null);
  const { data, isLoading } = useQuery({
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
  const { data: imgGetData } = useQuery({
    queryKey: ['myImg'],
    queryFn: imageGetApi,
  });
  // console.log(imgGetData);
  const imageUploadMutation = useMutation({
    mutationFn: imageUploadApi,
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
      },
      onError: (error) => {
        alert(error.message);
      },
    });
  };
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
            {imgGetData ? (
              <img src={imgGetData} alt="프로필사진" />
            ) : (
              <BsPersonFill color="white" size="65px" />
            )}
          </St.IconFrame>
          <St.ImgUpdateFrame>
            <p>{data.nickname}</p>
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
            <St.WithdrawalBtn>탈퇴</St.WithdrawalBtn>
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
