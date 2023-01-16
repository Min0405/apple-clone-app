import './card2.css'
import useFadeIn from "../../../hooks/useFadeIn";
import useFadeOut from "../../../hooks/useFadeOut";

function Card2() {
  const scrollPosition = useFadeIn();
  const scrollPositions = useFadeOut();  

  return(
    <div className="Card">
      <div className="Card-sticky-container">
        <header className="card-sticky">
          <div className="card-slide-container">
            <div className="card-slide1"><img className="img" src={`https://www.apple.com/v/airpods-3rd-generation/d/images/overview/value-props/spatial_spiral__kekq9zxjllme_large.png`} alt="php" /></div>
            <div className="card-slide2"><h1 className={scrollPosition > 80 ? "scrolled-text1" : "scroll-text1"}> 사운드 방향성을 완전히 <br/> 새롭게. </h1></div>
            <div className="card-slide3">
              <h1 className={scrollPositions > 1000 ? "scroll-text2" : "scrolled-text2"}>
                동적 머리 추적 기술로 구현되는 개인 맞춤향 공간 음향은 음악이나 TV 프로그램, <br />
                영화 등을 감상할 때 사운드가 온몸을 휘감는 듯한 3차원 오디오를 만끽할 수 <br />
                있도록 해줍니다. 사운드가 주변의 모든 방향에서 들려오기 때문에 마치 당신만을 <br />
                위해 준비된 콘서트 장이나 극장에 가 있는 듯한 탁월한 몰입감을 선사하죠.
              </h1>
            </div>
            {/* className을 삼항 연산자로 원하는 수치만큼 스크롤이 되면 바꿔주게 만든다 */}
          </div>
        </header>
      </div>
    </div>
  )

}

export default Card2;

  
  // useEffect(() => {
  //   if(count < 214) {
  //     setTimeout(() => {
  //       setCount(count + 1)
  //     }, 50);
  //   } else {
  //     setCount(1)
  //   }
  // }, [count])

