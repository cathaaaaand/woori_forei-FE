import { useMutation, useQuery } from '@tanstack/react-query';
import moment from 'moment';
import React, { useState } from 'react';
import { HiDotsVertical } from 'react-icons/hi';
import { IoIosHeartEmpty, IoMdHeart } from 'react-icons/io';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import Dropdown from './Dropdown/Dropdown';
import * as St from './style';
import { boardLikeApi, boardSingleApi } from 'api/board';
import { commentApi, commentPatchMeApi } from 'api/comment';
import { beforeCommentState, commentIdState } from 'recoil/detailState';

const Detail = () => {
  const { boardId } = useParams();
  const vaildBoradId = boardId ? Number(boardId) : 0;
  const [commentContent, setCommentContent] = useState('');
  const [singleCommentId, setSingleCommentId] = useRecoilState(commentIdState);
  const commentPatchApi = commentPatchMeApi(Number(singleCommentId));
  const [beforeComment, setBeforeComment] = useRecoilState(beforeCommentState);
  const [btnShow, setBtnShow] = useState<number | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [inputShow, setinputShow] = useState<number | null>(null);
  const {
    data: boardSingleData,
    isSuccess,
    refetch,
  } = useQuery({
    queryKey: ['singContent'],
    queryFn: () => boardSingleApi(vaildBoradId),
  });
  const [isLike, setIsLike] = useState(false);
  const commentCreateApi = commentApi(vaildBoradId);
  const commentCreateMutation = useMutation({ mutationFn: commentCreateApi });

  const commentCreateHandler = () => {
    commentCreateMutation.mutate(commentContent, {
      onSuccess: (data) => {
        alert(data.message);
        refetch();
        setCommentContent('');
      },
      onError: (error) => {
        alert(error);
        return;
      },
    });
  };
  const likeMutation = useMutation({ mutationFn: boardLikeApi });
  const likeHandler = () => {
    likeMutation.mutate(vaildBoradId, {
      onSuccess: (data) => {
        alert(data.message);
        setIsLike(!isLike);
        sessionStorage.setItem('isLike', `${isLike}`);
      },
      onError: (error) => {
        alert(error);
        return;
      },
    });
  };
  const showDropdownHandler = (index: number) => {
    setBtnShow((prevIndex) => (prevIndex === index ? null : index));
    setinputShow((prevIndex) => (prevIndex === index ? null : index));
  };
  const cancelHandler = () => {
    setSingleCommentId('0');
    setBeforeComment('');
  };
  const commentPatchMutation = useMutation({ mutationFn: commentPatchApi });
  const UpdateCommentSubmitHandler = () => {
    commentPatchMutation.mutate(beforeComment, {
      onSuccess: (data) => {
        alert(data.message);
      },
      onError: (error) => {
        alert(error);
        return;
      },
    });
  };
  return (
    <St.DetailFrame>
      <St.DetailInnerFrame>
        <div className="FaTitle">
          <St.Circle />
          <p>댓글달기</p>
        </div>
        {isSuccess && (
          <St.DetailContentFrame key={boardSingleData.boardId}>
            <St.TitleFrame>
              <div>{boardSingleData.title}</div>
              <St.DateNickName>
                <p>{boardSingleData.nickname}</p>
                {moment(boardSingleData.createdAt).format('YYYY.MM.DD')}
              </St.DateNickName>
            </St.TitleFrame>
            <St.ContentFrame>
              <St.ContentTextFrame>
                <div className="SubTitle">
                  <St.Circle />
                  {boardSingleData.title}
                </div>

                <>
                  <St.DetailImgFrame>
                    <img src={boardSingleData.accessUrls[0]} />
                  </St.DetailImgFrame>
                  {boardSingleData.content}
                </>
              </St.ContentTextFrame>

              <St.LikebtnFrame onClick={likeHandler}>
                {isLike == false ? <IoIosHeartEmpty /> : <IoMdHeart />}
              </St.LikebtnFrame>
            </St.ContentFrame>
            <St.CommentFrame>
              <div className="CommentTitle">댓글</div>
              <St.CommentInputFrame
                placeholder="댓글을 작성해주세요."
                value={commentContent}
                onChange={(e) => {
                  setCommentContent(e.target.value);
                }}
              />
              <St.BtnAlign onClick={commentCreateHandler}>
                <St.Commentbtn>댓글쓰기</St.Commentbtn>
              </St.BtnAlign>
            </St.CommentFrame>
            <St.CommentTotal>
              {boardSingleData.comments.map(
                (
                  value: {
                    commentId: string;
                    createAt: string;
                    username: string;
                    commentContent: string;
                  },
                  idx: number,
                ) => (
                  <St.CommentListFrame key={value.commentId}>
                    <div className="Comment">
                      <div className="ListTitleFrame">
                        <div className="ListTitle">
                          <St.DateNickName>
                            {moment(value.createAt).format('YYYY.MM.DD')}
                          </St.DateNickName>
                          <p>{value.username}</p>
                          <div>
                            {value.commentId !== singleCommentId ? (
                              <p>{value.commentContent}</p>
                            ) : (
                              <>
                                <input
                                  value={beforeComment}
                                  onChange={(e) =>
                                    setBeforeComment(e.target.value)
                                  }
                                />
                                <button onClick={UpdateCommentSubmitHandler}>
                                  등록
                                </button>
                                <button onClick={cancelHandler}>취소</button>
                              </>
                            )}
                          </div>
                        </div>
                        <St.UpdateDeleteBtn
                          onClick={() => showDropdownHandler(idx)}
                        >
                          <HiDotsVertical />
                          {btnShow === idx && (
                            <>
                              <Dropdown
                                commentId={value.commentId}
                                correctComment={idx}
                                refetch={refetch}
                                beforeCommentValue={value.commentContent}
                              />
                            </>
                          )}
                        </St.UpdateDeleteBtn>
                      </div>
                    </div>
                  </St.CommentListFrame>
                ),
              )}
            </St.CommentTotal>
          </St.DetailContentFrame>
        )}
      </St.DetailInnerFrame>
    </St.DetailFrame>
  );
};

export default Detail;
