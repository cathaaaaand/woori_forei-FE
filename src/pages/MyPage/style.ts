import { styled } from 'styled-components';

export const MyPageFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20pt;
  #loading {
    display: inline-block;
    width: 50px;
    height: 50px;
    border: 3px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    border-top-color: black;
    animation: spin 1s ease-in-out infinite;
    -webkit-animation: spin 1s ease-in-out infinite;
  }

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;
export const MyPageInnerFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 1440px;
`;
export const MyPageBtnFrame = styled.div`
  width: 68px;
  height: 38px;
  border: 1px solid #30a8ff;
  border-radius: 10px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
`;
export const ImgUpdateFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 29px;
  margin-bottom: 20px;
`;

export const IconFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 136px;
  height: 136px;
  border: none;
  border-radius: 50%;
  background: linear-gradient(
    137deg,
    rgba(101, 189, 245, 1) 37%,
    rgba(33, 139, 221, 1) 100%
  );
  img {
    width: 134px;
    height: 134px;
    border-radius: 50%;
    object-fit: cover;
  }
`;
export const IntroduceFrame = styled.div`
  width: max-content;
  max-width: 600px;
  word-break: break-all;
  height: 50px;
  overflow-y: auto;
  font-size: 20px;
`;
export const ContentListFrame = styled.div`
  display: flex;
  gap: 88px;
  font-size: 15pt;
  .Border {
    width: 475px;
    height: 414px;
    border: 1px solid #b9b9b9;
    border-radius: 5px;
    box-shadow:
      0 10px 20px rgba(0, 0, 0, 0.1),
      0 6px 6px rgba(0, 0, 0, 0.15);
  }
  .ListPostsTitle {
    margin-bottom: 75px;
    color: #3e3e3e;
  }
  .ListPosts {
    border-top: 0.5px solid #a5a5a5;
    border-bottom: 0.5px solid #a5a5a5;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
`;
export const InputFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 30px;
`;
export const WithdrawalBtn = styled.button`
  position: absolute;
  left: 60px;
  bottom: 50px;
  border: none;
  background: transparent;
  font-size: 15pt;
  color: #838383;
`;
export const ImgFrame = styled.div`
  position: relative;
  width: 150px;
  height: 165px;
  margin-bottom: 30px;
`;
export const UpdateProfileFrame = styled.div`
  width: 800px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  overflow-y: scroll;
  padding: 50px;
`;
export const UpdateBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 45px;
  background: transparent;
  border: none;
  font-size: 18pt;
`;
export const CloseBtn = styled.button`
  position: absolute;
  top: 20px;
  left: 25px;
  background: transparent;
  border: none;
  font-size: 18pt;
`;
export const ImgChangeFrame = styled.div`
  position: absolute;
  bottom: 15px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  border: 1px solid black;
  border-radius: 50%;
  background: white;
  z-index: 98;
  label {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14pt;}
  
    }
    
  #inputImg {
       display: none;
  }
  
`;

export const InputTitle = styled.div`
  font-size: 20pt;
  color: black;
`;
export const InputBtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;
export const ValueFrame = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  color: black;

  .EmailNicknameIput {
    width: 220px;
    height: 60px;
    border: 1px solid #d2d2d2;
    border-radius: 10px;
    padding-left: 30px;
    font-size: 20pt;
    margin-top: 20px;
  }

  .ValueIput {
    width: 465px;
    height: 60px;
    border: 1px solid #d2d2d2;
    border-radius: 10px;
    padding-left: 80px;
    font-size: 20pt;
  }
`;
export const deleteBtn = styled.button`
  background: transparent;
  border: none;
  transform: translate(0px, 2px);
`;