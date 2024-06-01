import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react';
import * as St from './style';
import { boardCreateApi } from 'api/board';

const Write = () => {
  const [form, setForm] = useState({
    title: '',
    content: '',
  });
  // const [title, setTitle] = useState('');
  // const [content, setContent] = useState('');
  const [imgFile, setImgFile] = useState<File | null>(null);
  // const [imgPreview, setImgPreview] = useState('');
  const { title, content } = form;
  const boardCreateMutation = useMutation({ mutationFn: boardCreateApi });
  // const boardPatchMutation = useMutation({ mutationFn: boardPatchApi });

  const onChange = (e: { target: { name: string; value: unknown } }) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  };
  const imgOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files) {
      const file = e.target.files?.[0];
      setImgFile(file);
    }
    // const reader = new FileReader();

    // reader.onload = () => {
    //   const result = reader.result as ArrayBuffer;
    //   const blob = new Blob([result], { type: file.type });
    //   const blobUrl = URL.createObjectURL(blob);
    //   setImgPreview(blobUrl);
    // };
    // reader.readAsArrayBuffer(file);
  };
  // const boardPatchHandler = () => {
  //   const formData = new FormData();
  //   // const transfrom = JSON.stringify({ title, content });
  //   // const blob1 = new Blob([transfrom], { type: 'application/json' });
  //   formData.append('request', title);
  //   formData.append('request', content);
  //   if (imgFile) {
  //     formData.append('images', imgFile);
  //   }
  //   boardPatchMutation.mutate(formData, {
  //     onSuccess: (data) => {
  //       alert(data.message);
  //     },
  //     onError: (error) => {
  //       alert(error);
  //       return;
  //     },
  //   });
  // };
  const submitHandelr = () => {
    if (!title || !content || !imgFile) {
      alert('빈칸을 채워주세요');
      return;
    } else {
      const formData = new FormData();
      formData.append('images', imgFile);

      const transfrom = JSON.stringify(form);
      const blob1 = new Blob([transfrom], { type: 'application/json' });
      formData.append('request', blob1);

      boardCreateMutation.mutate(formData, {
        onSuccess: (data) => {
          alert(data.message);
        },
        onError: (error) => {
          alert(error);
          return;
        },
      });
    }
  };

  return (
    <St.WriteFrame>
      <St.WriteInnerFrame>
        <div>글쓰기</div>
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
          {/* {imgPreview ? (
              <img src={imgPreview} alt="이미지 업로드" />
            ) : ( */}
          <>
            <label htmlFor="inputImg">이미지 추가하기</label>
            <input
              id="inputImg"
              type="file"
              accept="image/*"
              onChange={imgOnChangeHandler}
            />
          </>
          {/* <St.WriteTitleBtn type="button" onClick={boardPatchHandler}>
              수정
            </St.WriteTitleBtn> */}
          {/* )} */}
        </St.WriteImgFrame>
      </St.WriteInnerFrame>
    </St.WriteFrame>
  );
};

export default Write;
