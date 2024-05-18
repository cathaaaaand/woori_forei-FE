/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  QueryObserverResult,
  RefetchOptions,
  useMutation,
} from '@tanstack/react-query';
import React from 'react';
import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';
import { commentDeleteApi } from 'api/comment';
import {
  beforeCommentState,
  commentIdState,
  detailState,
} from 'recoil/detailState';
interface DropdownType {
  commentId: string;
  refetch: (
    options?: RefetchOptions | undefined,
  ) => Promise<QueryObserverResult<any, Error>>;
  beforeCommentValue: string;
}
const Dropdown = (props: DropdownType) => {
  const { commentId, refetch, beforeCommentValue } = props;
  const commentDeleteMutation = useMutation({ mutationFn: commentDeleteApi });
  const [isUpdate, setIsUpdate] = useRecoilState(detailState);
  const [singleCommentId, setSingleCommentId] = useRecoilState(commentIdState);
  const [beforeComment, setBeforeComment] = useRecoilState(beforeCommentState);
  const commentDeleteHandler = () => {
    commentDeleteMutation.mutate(Number(commentId), {
      onSuccess: (data) => {
        alert(data.message);
      },
      onError: (error) => {
        alert(error);
        return;
      },
    });
    refetch();
  };
  const updateCommentInputHandler = () => {
    setIsUpdate(!isUpdate);
    setBeforeComment(beforeCommentValue);
    setSingleCommentId(commentId);
  };
  return (
    <DropdownFrame>
      <div onClick={updateCommentInputHandler}>수정하기</div>
      <div onClick={commentDeleteHandler}>삭제하기</div>
    </DropdownFrame>
  );
};

export default Dropdown;

export const DropdownFrame = styled.div`
  display: grid;
  font-size: 15px;
  width: 65px;
  background: #f1f7ff;
  gap: 10px;
  justify-items: center;
  align-items: center;
  position: absolute;
  right: 410px;
  padding: 5px;
`;
