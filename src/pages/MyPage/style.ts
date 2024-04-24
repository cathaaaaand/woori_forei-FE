import { styled } from 'styled-components';

export const MyPageFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20pt;
`;
export const MyPageInnerFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 1440px;
  padding: 50px;
`;
export const MyPageBtnFrame = styled.div`
  width: 70px;
  height: 35px;
  border: 1px solid #5c8bd1;
  border-radius: 10px;
  background: white;
  text-align: center;

  label {
    font-size: 14pt;
  }

  input {
    display: none;
  }
`;
export const ImgUpdateFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 70px;
  margin-bottom: 120px;
`;
export const IconFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 136px;
  height: 136px;
  border: 1px solid black;
  border-radius: 50%;
  img {
    width: 134px;
    height: 134px;
    border-radius: 50%;
    object-fit: cover;
  }
`;
export const ContentListFrame = styled.div`
  display: flex;
  gap: 200px;
  font-size: 15pt;

  .ListPostsTitle {
    margin-bottom: 75px;
  }
  .ListPosts {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
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
