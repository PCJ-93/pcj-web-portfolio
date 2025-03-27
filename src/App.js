import './App.css';

function App() {
  return (
    <div className="portContainer">

      <div className="portTitle">철중's Project Videos</div>

      <div className="video-container">
        <video autoPlay loop muted className="background-video1">
          <source src="https://PCJ-93.github.io/pcj-web-portfolio/videos/Prism.mp4" type="video/mp4" />
        </video>
        <div className="textBox">
        <br/>
          <p>1차 프로젝트</p><br/>
          <p>사이트명: Prism</p><br/>
          <p style={{fontSize:'15px'}}>이 프로젝트는 시중에 판매하지 않는 특이한 상품을 원하는 사람과 파는 사람을 연결시켜줘서 펀딩받고 충족요건달성시 판매하는 커뮤니티기반의 클라우드 펀딩 사이트 구현 입니다.<br/><br/>제가 맡은 파트는 판매리스트, 판매상세페이지, footer, header 입니다.</p>
        </div>
      </div>

      <div className="video-container">
        <video autoPlay loop muted className="background-video2">
          <source src="https://PCJ-93.github.io/pcj-web-portfolio/videos/TravelMaker.mp4" type="video/mp4" />
        </video>
        <div className="textBox">
          <p>2차 프로젝트</p><br/>
          <p>사이트명: TravelMaker</p><br/>
          <p style={{fontSize:'15px'}}>이 프로젝트는 전국의 로컬축제를 사용자에게 추천해주고 해당 축제 주변의 식당과, 숙박업소도 같이 보여줘서 지역경제 활성화도 기대하는 사이트 구현 입니다.<br/><br/>제가 맡은 파트는 메인페이지, 후기/질문 게시판 입니다.</p>
        </div>
      </div>
      
      <div className="video-container">
        <video autoPlay loop muted className="background-video3">
          <source src="https://PCJ-93.github.io/pcj-web-portfolio/videos/GreenConnect.mp4" type="video/mp4" />
        </video>
        <div className="textBox">
          <p>3차 프로젝트</p><br/>
          <p>사이트명: 그커장터</p><br/>
          <p style={{fontSize:'15px'}}>이 프로젝트는 농산물 직거래 사이트 구현 이며 직접 농사지은 농산물을 중간유통단계를 거치지 않고 구매자에게 직거래로 판매하여 판매자는 보다 신선한 농산물을 제공하고 구매자는 보다 저렴하게 농산물을 구매할 수 있는 사이트 구현 입니다.<br/><br/>제가 맡은 파트는 메인페이지, 판매글작성, 판매글리스트, 판매글상세페이지, 결제페이지, G-Pay( 사이트내 안전거래 화폐 )충전페이지 입니다.</p>
        </div>
      </div>

      <div className="portEnd">Thanks for watching</div>

    </div>
  );
}

export default App;
