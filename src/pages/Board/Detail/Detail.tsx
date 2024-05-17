import { useMutation, useQuery } from '@tanstack/react-query';
import moment from 'moment';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import * as St from './style';
import { boardSingleApi } from 'api/board';
import {
  commentApi,
  // commentTotalApi,
  //   commentDeleteApi,
  //   commentPatchApi,
} from 'api/comment';
const Detail = () => {
  const { boardId } = useParams();
  const vaildBoradId = boardId ? Number(boardId) : 0;
  const [commentContent, setCommentContent] = useState('');
  // const { data: commentTotalData } = useQuery({
  //   queryKey: ['commentTotal'],
  //   queryFn: () => commentTotalApi(vaildBoradId),
  // });
  const { data: boardSingleData, isSuccess } = useQuery({
    queryKey: ['singContent'],
    queryFn: () => boardSingleApi(vaildBoradId),
  });
  const commentCreateApi = commentApi(vaildBoradId);
  const commentCreateMutation = useMutation({ mutationFn: commentCreateApi });

  const commentCreateHandler = () => {
    commentCreateMutation.mutate(
      {
        commentContent,
      },
      {
        onSuccess: (data) => {
          alert(data.message);
        },
        onError: (error) => {
          alert(error);
          return;
        },
      },
    );
  };
  // const commentPatchMutation = useMutation({ mutationFn: commentPatchApi });
  // commentPatchMutation.mutate(
  //   {
  //     commentContent,
  //   },
  //   {
  //     onSuccess: (data) => {
  //       alert(data.message);
  //     },
  //     onError: (error) => {
  //       alert(error);
  //       return;
  //     },
  //   },
  // );
  // const id = 3;
  // const commentDeleteMutation = useMutation({ mutationFn: commentDeleteApi });
  // commentDeleteMutation.mutate(id, {
  //   onSuccess: (data) => {
  //     alert(data.message);
  //   },
  //   onError: (error) => {
  //     alert(error);
  //     return;
  //   },
  // });
  // console.log(commentTotalData);
  return (
    <St.DetailFrame>
      <St.DetailInnerFrame>
        <div className="FaTitle">
          <St.Circle />
          <p>댓글달기</p>
        </div>
        {isSuccess && (
          <div key={boardSingleData.boardId}>
            <St.TitleFrame>
              <div>{boardSingleData.title}</div>
              <div>
                <p>{boardSingleData.nickname}</p>
                <p>{moment(boardSingleData.createdAt).format('YYYY-MM-DD')}</p>
              </div>
            </St.TitleFrame>
            <St.ContentFrame>
              <St.ContentTextFrame>
                {boardSingleData.accessUrls && (
                  <St.DetailImgFrame>
                    <img src={boardSingleData.accessUrls[0]} />
                  </St.DetailImgFrame>
                )}
                {boardSingleData.content}
              </St.ContentTextFrame>
              <St.BtnAlign>
                <St.Commentbtn>좋아요</St.Commentbtn>
              </St.BtnAlign>
            </St.ContentFrame>
          </div>
        )}
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
        {/* {commentTotalData.payload.map(
          (value: { commentId: number; username: string }) => (
            <St.CommentListFrame key={value.commentId}>
              <div className="Comment">
                <div className="ListTitle">
                  <p>{value.username}</p>
                  <St.CommenListtbtn>답글쓰기</St.CommenListtbtn>
                </div>
                <p>몇 시 쯤 도착하실 예정인가요?</p>
                <St.CommentLine />
                <St.UserTitle>닉네임</St.UserTitle>
                <div>3시 30분 쯤 도착할 것 같아요~</div>
              </div>
              {/* <St.CommentEvenFrame>
            <div className="ListTitle">
              <St.UserTitle>User2</St.UserTitle>
              <St.CommenListtbtn>답글쓰기</St.CommenListtbtn>
            </div>
            <p>재미있겠네요~^^</p>
          </St.CommentEvenFrame> */}
        {/* </St.CommentListFrame>
          ),
        )} */}
        <St.CommentCount>1/1</St.CommentCount>
      </St.DetailInnerFrame>
    </St.DetailFrame>
  );
};

export default Detail;
