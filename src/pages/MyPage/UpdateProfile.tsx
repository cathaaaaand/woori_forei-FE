import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react';
// import { BsPerson } from 'react-icons/bs';
// import { FaCamera } from 'react-icons/fa';
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
  // const imageUploadMutation = useMutation({
  //   mutationFn: imageUploadApi,
  // });
  const updateDataMutation = useMutation({
    mutationFn: ProfileUpdataApi,
  });
  const [updateForm, setUpdateForm] = useState({
    username: data.username,
    nickname: data.nickname,
    email: data.email,
    description: data.description,
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
    updateDataMutation.mutate(
      {
        username: '김말이',
        nickname: '김말이',
        email: 'a57659b0e81b@drmail.in',
        description: null,
        mbti: 'intp',
        birthday: '10-11',
        nation: 'japan',
        schedulerId: null,
        boardId: null,
        commentId: null,
        image: null,
      },
      {
        onSuccess: (form) => {
          alert(form);
        },
        onError: (error) => {
          alert(error);
        },
      },
    );
  };
  // const imageUploadHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (!e.target.files) {
  //     alert('유효한 파일이 아닙니다');
  //     return;
  //   }
  //   const formData = new FormData();

  //   formData.append('images', e.target.files[0]);
  //   imageUploadMutation.mutate(formData, {
  //     onSuccess: (data) => {
  //       alert(data.message);
  //       setUpdateForm((prev) => ({ ...prev, image: data.payload }));
  //     },
  //     onError: (error) => {
  //       alert(error.message);
  //     },
  //   });
  // };

  // const deleteHandler = () => {
  //   //setUpdateForm((prev) => ({ ...prev, image: '' }));
  // };
  return (
    <St.UpdateProfileFrame>
      <St.UpdateBtn onClick={updateDataHandler}>수정하기</St.UpdateBtn>
      <St.CloseBtn onClick={() => unmount('updateProfile')}>
        <IoClose />
      </St.CloseBtn>

      {/* <St.ImgFrame>
        <St.IconFrame> */}
      {/* {image ? (
            <img src={image} alt="프로필사진" />
          ) : ( */}
      {/* <BsPerson size="65px" /> */}
      {/* )} */}
      {/* </St.IconFrame>
        <St.ImgChangeFrame> */}
      {/* {!image ? ( */}
      {/* <> */}
      {/* <label htmlFor="inputImg">
            <FaCamera size="25px" />
          </label>
          <input
            id="inputImg"
            type="file"
            accept="image/png, image/jpeg, image/jpg"
            onChange={imageUploadHandler} */}
      {/* /> */}
      {/* </>
          ) : ( */}
      {/* <St.deleteBtn onClick={deleteHandler}>
            <IoClose size="30px" />
          </St.deleteBtn>
          {/* )} */}
      {/* </St.ImgChangeFrame>
      </St.ImgFrame> */}

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
