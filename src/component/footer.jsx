import styled from "styled-component";

const FooterDiv = styled.div`
  display: flex;
  align-items: center;
  width: 370px;
  height: 16px;
  padding-right: 0px;
  gap: 19.77px;
`;

const FooterText = styled.div`
  color: #929292;
  font-family: "Noto Sans";
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-right: 1px solid #929292;
  padding-right: 19.771px;
  &:first-child {
    padding-left: 0;
  }
  &:last-child {
    border-right: none;
    padding-right: 0;
  }
`;

export default function Footer() {
  return (
    <FooterDiv>
      <FooterText>이용약관</FooterText>
      <FooterText>개인정보처리방침</FooterText>
      <FooterText>고객센터</FooterText>
      <FooterText>사업자 정보확인</FooterText>
    </FooterDiv>
  );
}