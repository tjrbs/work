function Login(props) {
  const handleClick = 'onClick'
    const divStyle = {
    display: 'flex',
    alignItems: 'center',
  };

    return (
        <header style={divStyle}>
          <img style={{lineHeight: "normal", marginRight: "250px"}} src="public/img/헤더로고.png" alt="투자가 머니" />
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

      <div img="public/img/검색돋보기.png">
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

        <button onClick={handleClick}>
          로그인
        </button>
        </header>
    )
}

function Newlogin(props) {
    const divStyle = {
    display: 'flex',
    alignItems: 'center',
  };
  <div>
        <div>
          <p style={{
            color: '#000',
fontFamily: 'Pretendard',
fontSize: '24px',
fontStyle: 'normal',
fontWeight: '700',
lineHeight: 'normal',
letterSpacing: '-0.36px',
          }}>
            사용자 로그인
          </p>
        </div>

        <div>
          <p style={{
            color: '#000',
fontFamily: 'Pretendard',
fontSize: '14px',
fontStyle: 'normal',
fontWeight: '500',
lineHeight: 'normal',
letterSpacing: '-0.21px',
          }}>
          이메일 주소
          </p>
            <padding>
          <input type="email"  style={{
            width: '1440px',
            height: '1024px',
          }}/>
            </padding>
        </div>

        <div>
          <p style={{
            color: '#000',
fontFamily: 'Pretendard',
fontSize: '14px',
fontStyle: 'normal',
fontWeight: '500',
lineHeight: 'normal',
letterSpacing: '-0.21px',
          }}>
          비빌번호
          </p>
            <pading>
          <input type="password"  style={{
            width: '1440px',
            height: '1024px',
          }}/>
            </pading>
        </div>

        <div>
          <p style={{
            color: 'var(--Sub-Text, #797979)',
fontFamily: 'Pretendard',
fontSize: '12px',
fontStyle: 'normal',
fontWeight: '500',
lineHeight: 'normal',
letterSpacing: '-0.18px',
          }}>
            아이디 기억하기
          </p>
        </div>
  </div>        
}

function Btn(props) {
  const name = '로그인'
    return (
        <padding>
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
        </padding>
    )
}

function Footer(props) {
    return (
        <footer>
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
        </footer>
    )
}

function App(props) {
    return (
        <div>
           <Login />
           <Newlogin />
           <Btn />
           <Footer />
        </div>
    );
}

export default App;