import { styled } from 'styled-components';

export const DetailFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;
  font-size: 20pt;
`;

export const DetailInnerFrame = styled.div`
  display: flex;
  flex-direction: column;
  width: 1440px;
  padding: 60px;
  padding: 70px 45px 100px 45px;
  .FaTitle {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-left: 130px;
    p {
      font-weight: bold;
      font-size: 35px;
    }
  }
`;
export const DetailContentFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;
`;
export const TitleIconFrame = styled.div`
  display: flex;
  margin-bottom: 30px;
  font-size: 15px;
`;
export const TitleFrame = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  width: 1005px;
  justify-content: space-between;
  margin-top: 85px;
  font-size: 18px;
`;
export const ContentFrame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 23px;
  width: 1005px;
  margin-top: 20px;
  font-size: 18px;
`;
export const DetailImgFrame = styled.div`
  display: flex;
  align-items: center;
  width: 1005px;
  height: 200px;
  color: #888888;

  img {
    height: 200px;
    object-fit: cover;
  }
`;
export const ContentTextFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;
  background: #f1f7ff;
  width: 1005px;
  padding: 40px;
  border-radius: 10px;
  .SubTitle {
    display: flex;
    align-items: center;
    gap: 19px;
    color: #3a3a3a;
  }
`;
export const Commentbtn = styled.button`
  width: 100px;
  height: 40px;
  border: none;
  font-size: 20px;
  background: #0084e3;
  color: white;
  border-radius: 5px;
`;
export const LikebtnFrame = styled.button`
  width: 30px;
  height: 30px;
  border: 1px solid #b4b4b4;
  border-radius: 50%;
  font-size: 20px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;
export const Likebtn = styled.button`
  width: 100px;
  height: 40px;
  border: none;
  font-size: 20px;
`;
export const CommentFrame = styled.div`
  display: flex;
  width: 1005px;
  flex-direction: column;
  gap: 30px;

  .CommentTitle {
    color: #3a3a3a;
    font-weight: bold;
    font-size: 19pt;
    margin: 63px 20px 0px 0px;
  }
`;
export const BtnAlign = styled.div`
  text-align: end;
  margin-bottom: 40px;
`;
export const CommentInputFrame = styled.textarea`
  width: 1005px;
  height: 200px;
  border: 1px solid #d2d2d2;
  border-radius: 10px;
  color: #888888;
  padding: 30px;
  font-size: 15pt;
`;
export const CommentListFrame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  font-size: 19px;
  border-top: 0.5px solid #d9d9d9;
  .ListTitleFrame {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 17px;
  }
  .ListTitle {
    display: flex;
    align-items: center;
    gap: 20px;
    font-size: 17px;
  }
  .Comment {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 30px 20px 30px 0px;
  }
`;
export const UpdateDeleteBtn = styled.button`
  border: 1px solid transparent;
  background: transparent;
  margin-top: 3px;
  height: 25px;
  border-radius: 50%;
  &:hover {
    background: #a7a7a7;
  }
`;
export const DateNickName = styled.div`
  display: flex;
  gap: 13px;
  color: #a5a5a5;
`;
export const CommentTotal = styled.div`
  width: 1005px;
  border-bottom: 0.5px solid #d9d9d9;
`;
export const CommenListtbtn = styled.button`
  width: 68px;
  height: 30px;
  border: 1px solid #858585;
  font-size: 16px;
  border-radius: 5px;
  background: white;
`;
export const CommentLine = styled.div`
  width: 20px;
  height: 38px;
  border-right: 1px solid #d9d9d9;
  margin: 10px;
`;
export const UserTitle = styled.div`
  font-size: 17px;
`;
export const CommentEvenFrame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 15px;
`;
export const CommentCount = styled.div`
  text-align: center;
`;
export const Circle = styled.div`
  background: #30a8ff;
  width: 16px;
  height: 16px;
  border: 1px solid transparent;
  border-radius: 50%;
`;
