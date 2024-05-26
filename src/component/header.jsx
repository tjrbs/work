import styled from "styled-component";

const HeaderDiv = styled.div`
  width: 986px;
  height: 62px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  #profile {
    margin-left: 6px;
  }
`;

const HeaderText = styled.div`
  color: #000;
  font-family: Pretendard;
  font-style: normal;
  font-size: 16px;
  font-weight: 600;
  margin-left: 80px;
  &:last-child {
    margin-left: 52px;
  }
  ${({ isLogin }) =>
    isLogin &&
    `
  margin-left: 25px;
`}
`;

const SearchDiv = styled.div`
  width: 276px;
  height: 32px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #f1f1f1;
  display: flex;
  align-items: center;
  margin-left: 221px;
  input {
    border: none;
    background-color: transparent;
    flex-grow: 1;
    margin-left: 10px;
  }
  img {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    margin-right: 15px;
  }
`;

export default function header({ type }) {
  const isLogin = type === "isLogin";
  return (
    <HeaderDiv>
      <img src="./img/헤더로고.png" alt="헤더로고" />
      <HeaderText>뉴스</HeaderText>
      <HeaderText>교과서</HeaderText>
      <SearchDiv>
        <input type="text" placeholder="Search..." />
        <img src="./img/검색돋보기.png" alt="검색돋보기" />
      </SearchDiv>
      {type === "isLogin" ? (
        <>
          <HeaderText isLogin={isLogin}>내이름</HeaderText>
          <img id="profile" src="./img/프로필.png" alt="프로필" />
        </>
      ) : (
        <HeaderText>로그인</HeaderText>
      )}
    </HeaderDiv>
  );
}