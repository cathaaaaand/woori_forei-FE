import React, { useState } from 'react';
import { BsPerson } from 'react-icons/bs';
import * as St from './style';

const MyPage = () => {
  const [imgFile, setImgFile] = useState('');

  const imgUploadHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      alert('유효한 파일이 아닙니다');
      return;
    }
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const result = reader.result as ArrayBuffer;
      const blob = new Blob([result], { type: file.type });
      const blobUrl = URL.createObjectURL(blob);
      setImgFile(blobUrl);
    };

    reader.readAsArrayBuffer(file);
  };
  const updateImgHandler = () => {
    setImgFile('');
  };
  return (
    <St.MyPageFrame>
      <St.MyPageInnerFrame>
        <St.IconFrame>
          {imgFile ? (
            <img src={imgFile} alt="프로필사진" />
          ) : (
            <BsPerson size="65px" />
          )}
        </St.IconFrame>
        <St.ImgUpdateFrame>
          <p>닉네임</p>
          <St.MyPageBtnFrame onClick={updateImgHandler}>
            <label htmlFor="inputImg">수정</label>
            <input
              id="inputImg"
              type="file"
              accept="image/png, image/jpeg, image/jpg"
              onChange={imgUploadHandler}
            />
          </St.MyPageBtnFrame>
        </St.ImgUpdateFrame>
        <St.ContentListFrame>
          <div>
            <p className="ListPostsTitle">작성한 글</p>
            <div className="ListPosts">
              <p>뉴진스 팬미팅 동행 구합니다!</p>
              <p>뉴진스 팬미팅 동행 구합니다!</p>
              <p>뉴진스 팬미팅 동행 구합니다!</p>
              <p>뉴진스 팬미팅 동행 구합니다!</p>
              <p>뉴진스 팬미팅 동행 구합니다!</p>
            </div>
          </div>
          <div>
            <p className="ListPostsTitle">작성한 글</p>
            <div className="ListPosts">
              <p>뉴진스 팬미팅 동행 구합니다!</p>
              <p>뉴진스 팬미팅 동행 구합니다!</p>
              <p>뉴진스 팬미팅 동행 구합니다!</p>
              <p>뉴진스 팬미팅 동행 구합니다!</p>
              <p>뉴진스 팬미팅 동행 구합니다!</p>
            </div>
          </div>
        </St.ContentListFrame>

        <St.WithdrawalBtn>회원탈퇴하기</St.WithdrawalBtn>
      </St.MyPageInnerFrame>
    </St.MyPageFrame>
  );
};

export default MyPage;
