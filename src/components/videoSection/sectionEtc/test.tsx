import { useEffect, useState } from "react";
import useFadeIn from "../../../hooks/useFadeIn";
import useScroll from "../../../hooks/useScroll";
import './spatial.css'

function Test() {
  const scrollPosition = useFadeIn();
  // const [number, setNumber] = useState(0)

  // const set = () => {
  //   setNumber(number + 0)
  // }
  // const reset = () => {
  //   setNumber(number - 214)
  // }

  const frameCount = 214;
  const [scrolled, setScrolled] = useState(1);

  useEffect(() => {
    document.addEventListener("scroll", scrollProgress);
    return () => document.removeEventListener("scroll", scrollProgress);
  }, [])

  // if (scrolled > 213) {
  //   setNumber(reset)
  // } else if (scrolled < 213) {
  //   setNumber(set)
  // }

  


  // console.log(scrolled)
  function scrollProgress() {
     const scrollPx = document.documentElement.scrollTop; // 현재 스크롤 위치
     // 스크롤바 위치를 가져오는 방법 (현재 스크롤바의 위치를 숫자로 반환)
     // Element.scrollTop = 요소의 콘텐츠가 세로로 스크롤되는 픽셀 수를 가져오거나 설정
     // scrollTop = 요소의 상단에서 맨위에 표시되는 콘텐츠까지의 거리 

     const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
     // scrollHeight = 스크롤 시키지 않았을때의 전체 높이
     // clientHeight = 눈에 보이는 만큼의 높이

    const scrollFraction = scrollPx / winHeightPx;
    // scrollTop에서 사용자가 아래로 스크롤할 수 있는 최대값으로 나누면 사용자의 스크롤 진행률 값이 나옴

    const scrollLen = Math.min(
      frameCount - 1,
      Math.floor(scrollFraction * frameCount)
    )
    // 이미지 수에 진행률을 곱하고 Math.floor() 숫자를 내림하고,
    // Math.min() 최대 프레임 수로 감싸서 총 프레임 수를 초과하지 않도록 한다

     setScrolled(scrollLen)
  }  
  
  console.log(scrolled)

  return(
    <div className="Spatial">
      <div className="Spatial-sticky-container">
        <header className="spatial-sticky">
          <div className="spatial-slide-container">
            <div className="spatial-slide1"><img className="img" src={`https://www.apple.com/105/media/us/airpods-3rd-generation/2021/3c0b27aa-a5fe-4365-a9ae-83c28d10fa21/anim/${ scrolled > 213 ? "battery" : "spatial-audio" }/large/${scrolled.toString().padStart(4, '0')}.jpg`} alt="php" /></div>
            <div className="spatial-slide2"><h1 className={scrollPosition > 80 ? "scroll-text" : "scrolled-text"}>온몸을 휘감는 3차원 오디오의 <br/> 개인 맞춤형 공간 음향, </h1></div>
            {/* className을 삼항 연산자로 원하는 수치만큼 스크롤이 되면 바꿔주게 만든다 */}
          </div>
        </header>
      </div>
    </div>
  )
}

export default Test;
