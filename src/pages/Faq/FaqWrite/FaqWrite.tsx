import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react';
import * as St from './style';
import { FaqPostApi } from 'api/faq';

const FaqWrite = () => {
  const initialValue = {
    faqTitle: '',
    faqContent: '',
  };
  const faqPostMutation = useMutation({ mutationFn: FaqPostApi });
  const [form, setForm] = useState(initialValue);
  const { faqTitle, faqContent } = form;

  const onChange = (e: { target: { name: string; value: unknown } }) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  };

  const submitHandelr = () => {
    if (!faqTitle || !faqContent) {
      alert('빈칸을 채워주세요');
      return;
    }
    faqPostMutation.mutate(form, {
      onSuccess: (data) => {
        console.log(data.message);
        console.log(form);
      },
      onError: (error) => {
        console.log(error);
        console.log(form);
      },
    });
    // } else {
    //   //      setDefaultValue((prev) => [...prev, form]);
    //   //alert('등록되었습니다!');
    //   // setForm(initialValue);
    //   //navigate("/board")
    // }
  };

  // const imgUploadHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (!e.target.files) {
  //     alert('유효한 파일이 아닙니다');
  //     return;
  //   }
  //   const file = e.target.files[0];
  //   const reader = new FileReader();

  //   reader.onload = () => {
  //     const result = reader.result as ArrayBuffer;
  //     const blob = new Blob([result], { type: file.type });
  //     const blobUrl = URL.createObjectURL(blob);
  //     setForm((form) => ({ ...form, imgFile: blobUrl }));
  //   };

  //   reader.readAsArrayBuffer(file);
  // };
  return (
    <St.WriteFrame>
      <St.WriteInnerFrame>
        <div>FAQ</div>
        <div>
          <St.TitleInputFrame>
            <St.WriteTitleInput
              name="faqTitle"
              onChange={onChange}
              placeholder="제목은 최대 20자까지 작성 가능합니다."
              value={faqTitle}
            />
            <St.WriteTitleBtn onClick={submitHandelr}>등록</St.WriteTitleBtn>
          </St.TitleInputFrame>
          <St.WriteContentInput
            name="faqContent"
            onChange={onChange}
            placeholder="글을 작성해주세요."
            value={faqContent}
          />
          <St.WriteImgFrame>
            {/* {imgFile ? (
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
            )} */}
          </St.WriteImgFrame>
        </div>
      </St.WriteInnerFrame>
    </St.WriteFrame>
  );
};

export default FaqWrite;
