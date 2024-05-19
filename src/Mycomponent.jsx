function Login(props) {
    const start = "로그인";
    const name = start.onclick;
    const divStyle = {
    display: 'flex',
    alignItems: 'center',
  };
    return (
        <header style={divStyle}>
          <img style={{lineHeight: "normal", marginRight: "250px"}} src="file:///C:/Users/lsg05/Downloads/%E1%84%80%E1%85%A1%E1%84%85%E1%85%A9%E1%84%92%E1%85%A7%E1%86%BC%20%E1%84%85%E1%85%A9%E1%84%80%E1%85%A9%20(2).svg" alt="투자가 머니" />
        <p  style={{
            color: "#000",
            fontFamily: "Pretendard",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal",
            marginRight: "100px"
          }}>
        뉴스
      </p>

      <p style={{
            color: "#000",
            fontFamily: "Pretendard",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal",
            marginRight: "250px",
          }}>
        교과서
      </p>
      <div src="file:///C:/Users/lsg05/Downloads/magnify%20(1).svg">
      <input type="text" name="message" placeholder="search..."
      style={{
          borderRadius: "20px",
          background: "#F1F1F1",
          width: "276px",
          height: "32px",
          flexShrink: "0",
          marginRight: "50px",
          }} />
        </div>
        <button>
          {start}
        </button>
        </header>
    )
}

function Message(props) {
    return (
        <div>
          <p style={{
          marginTop: "50px",
          height: "11.158px",
          flexShrink: "0",
          color: "#929292",
          fontFamily: "Noto Sans",
          fontSize: "10px",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "normal",
          marginRight: "20px",
        }}>
        이용약관 | 개인정보처리방침 | 고객센터 | 사업지 정보확인
      </p>
        </div>
    )
}

function Btn(props) {
  const name = '버튼'
    return (
        <div>
          <button style={{
          display: "flex",
          width: "378px",
          height: "52px",
          padding: "17px 0px",
          justifyContent: "center",
          alignItems: "center",
          flexShrink: "0",
          borderRadius: "7px",
          background: "var(--Main, #85D6D1)",
        }}>
        {name}
      </button>
        </div>
    )
}

function App(props) {
    return (
        <div>
           <Login />
           <Message />
           <Btn /> 
        </div>
    );
}

export default App;