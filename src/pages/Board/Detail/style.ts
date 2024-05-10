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
`;
export const TitleIconFrame = styled.div`
  display: flex;
  margin-bottom: 30px;
  font-size: 15px;
`;
export const TitleFrame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  width: 1350px;
  border-bottom: 1px solid #d2d2d2;
  margin-top: 85px;
  font-size: 18px;
`;
export const ContentFrame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 1350px;
  border-bottom: 1px solid #d2d2d2;
  margin-top: 50px;
  font-size: 18px;
`;
export const DetailImgFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1350px;
  height: 200px;
  border: 1px solid #d2d2d2;
  border-radius: 10px;
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
`;
export const Commentbtn = styled.button`
  width: 100px;
  height: 40px;
  border: none;
  font-size: 20px;
`;
export const CommentFrame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  .CommentTitle {
    font-size: 18pt;
    margin: 20px 20px 0px 20px;
  }
`;
export const BtnAlign = styled.div`
  text-align: end;
  margin-bottom: 40px;
`;
export const CommentInputFrame = styled.textarea`
  width: 1350px;
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
  font-size: 15px;
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
    border-bottom: 1px solid #d9d9d9;
    padding-bottom: 15px;
  }
`;
export const CommenListtbtn = styled.button`
  width: 50px;
  height: 25px;
  border: none;
  font-size: 10px;
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
