import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react';
// import { BsPerson } from 'react-icons/bs';
// import { FaCamera } from 'react-icons/fa';
import { GiPlainCircle } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';
import * as St from './style';
// import { imageUploadApi } from 'api/image';
import { ProfileUpdataApi } from 'api/user';
import { useModal } from 'components/Common/Modal/Modal.hooks';
interface UpdatePropsType {
  data: {
    username: string;
    nickname: string;
    email: string;
    description: string;
    mbti: string;
    birthday: string;
    nation: string;
  };
}
const UpdateProfile = (props: UpdatePropsType) => {
  const { data } = props;
  const { unmount } = useModal();

  const updateDataMutation = useMutation({
    mutationFn: ProfileUpdataApi,
  });
  const [updateForm, setUpdateForm] = useState({
    username: data.username,
    nickname: data.nickname,
    email: data.email,
    description: '',
    mbti: data.mbti,
    birthday: data.birthday,
    nation: data.nation,
  });
  const { username, nickname, email, description, mbti, birthday, nation } =
    updateForm;
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdateForm((item) => ({
      ...item,
      [name]: value,
    }));
  };
  const updateDataHandler = () => {
    //console.log(updateForm);
    updateDataMutation.mutate(updateForm, {
      onSuccess: (form) => {
        alert(form);
      },
      onError: (error) => {
        alert(error);
      },
    });
  };

  return (
    <St.UpdateProfileFrame>
      <St.UpdateBtn onClick={updateDataHandler}>수정하기</St.UpdateBtn>
      <St.CloseBtn onClick={() => unmount('updateProfile')}>
        <IoClose />
      </St.CloseBtn>

      <St.UpdateProfileTitle>
        <GiPlainCircle size="16px" color="30A8FF" />
        프로필 수정
      </St.UpdateProfileTitle>
      <St.InputFrame>
        <div style={{ display: 'flex', gap: '25px' }}>
          <div>
            <St.InputTitle>이름</St.InputTitle>
            <St.ValueFrame>
              <input
                name="username"
                className="EmailNicknameIput"
                value={username}
                onChange={onChange}
              />
            </St.ValueFrame>
          </div>
          <div>
            <St.InputTitle>닉네임</St.InputTitle>
            <St.ValueFrame>
              <input
                name="nickname"
                className="EmailNicknameIput"
                value={nickname}
                onChange={onChange}
              />
            </St.ValueFrame>
          </div>
        </div>
        <St.InputTitle>이메일 주소</St.InputTitle>
        <St.ValueFrame>
          <input
            name="email"
            className="ValueIput"
            value={email}
            onChange={onChange}
          />
        </St.ValueFrame>
        <St.InputTitle>소개</St.InputTitle>
        <St.ValueFrame>
          <input
            name="description"
            className="ValueIput"
            value={description}
            onChange={onChange}
          />
        </St.ValueFrame>
        <St.InputTitle>mbti</St.InputTitle>
        <St.ValueFrame>
          <input
            name="mbti"
            className="ValueIput"
            value={mbti}
            onChange={onChange}
          />
        </St.ValueFrame>
        <St.InputTitle>생일</St.InputTitle>
        <St.ValueFrame>
          <input
            name="birthday"
            className="ValueIput"
            value={birthday}
            onChange={onChange}
          />
        </St.ValueFrame>
        <St.InputTitle>국가</St.InputTitle>
        <St.ValueFrame>
          <input
            name="nation"
            className="ValueIput"
            value={nation}
            onChange={onChange}
          />
        </St.ValueFrame>
      </St.InputFrame>
    </St.UpdateProfileFrame>
  );
};

export default UpdateProfile;
