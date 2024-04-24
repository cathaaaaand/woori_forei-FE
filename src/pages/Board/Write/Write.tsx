import React, { useState } from 'react';
import * as St from './style';

const Write = () => {
  const initialValue = {
    id: 1,
    title: '',
    content: '',
    imgFile: '',
    createdAt: new Date().toString(),
  };
  const [defaultValue, setDefaultValue] = useState([
    {
      id: 1,
      title: '안녕하세요~',
      content: '뉴진스 팬미팅 동행 구합니다!',
      imgFile: '',
      createdAt: '24.03.25',
    },
  ]);
  const [form, setForm] = useState(initialValue);
  const { title, content, imgFile } = form;

  const onChange = (e: { target: { name: string; value: unknown } }) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  };

  const submitHandelr = () => {
    if (!title || !content) {
      alert('빈칸을 채워주세요');
      return;
    } else {
      setDefaultValue((prev) => [...prev, form]);
      console.log(defaultValue);
      //alert('등록되었습니다!');
      setForm(initialValue);
      //navigate("/board")
    }
  };

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
      setForm((form) => ({ ...form, imgFile: blobUrl }));
    };

    reader.readAsArrayBuffer(file);
  };
  return (
    <St.WriteFrame>
      <St.WriteInnerFrame>
        <div>글쓰기</div>
        <div>
          <St.TitleInputFrame>
            <St.WriteTitleInput
              name="title"
              onChange={onChange}
              placeholder="제목은 최대 20자까지 작성 가능합니다."
              value={title}
            />
            <St.WriteTitleBtn onClick={submitHandelr}>등록</St.WriteTitleBtn>
          </St.TitleInputFrame>
          <St.WriteContentInput
            name="content"
            onChange={onChange}
            placeholder="글을 작성해주세요."
            value={content}
          />
          <St.WriteImgFrame>
            {imgFile ? (
              <img src={imgFile} alt="이미지 업로드" />
            ) : (
              <>
                <label htmlFor="inputImg">이미지 추가하기</label>
                <input
                  id="inputImg"
                  type="file"
                  accept="image/png, image/jpeg, image/jpg"
                  onChange={imgUploadHandler}
                />
              </>
            )}
          </St.WriteImgFrame>
        </div>
      </St.WriteInnerFrame>
    </St.WriteFrame>
  );
};

export default Write;
