import { useState } from "react";
import useFadeIn from "../../../hooks/useFadeIn";
import useFadeOut from "../../../hooks/useFadeOut";
import useScroll from "../../../hooks/useScroll";
import './runner.css'

function Runner() {
  const scroll = useScroll(109);
  const scrollPosition = useFadeIn();
  const scrollPositions = useFadeOut();
  // const [changeUrl, setChangeUrl]= useState(String);

  //scroll 값이 210 이상이 되면 섹션 이름 바꾸기
  console.log(scroll)
  //섹션이름이 바뀌면서 훅 초기화 + useScroll 값 변경

  return(
    <div className="Runner">
      <div className="Runner-sticky-container">
        <header className="runner-sticky">
          <div className="runner-slide-container">
            {/* <img src={`https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index.toString().padStart(4, '0')}.jpg`} alt="pho"/> */}
            <div className="runner-slide1"><img className={scroll < 40 ? "img" : "scale-down"} src={`https://www.apple.com/105/media/us/airpods-3rd-generation/2021/3c0b27aa-a5fe-4365-a9ae-83c28d10fa21/anim/runner/large/${scroll.toString().padStart(4, '0')}.jpg`} alt="phot" /></div>
            <div className="runner-slide2"><h1 className={scrollPosition > 760 ? "scrolled-text1" : "scroll-text1"}>비가 와도, <br/> 땀이 비 오듯 해도 <br/> 끄떡없는 방수 기능까지.</h1></div>
            <div className="runner-slide3"><h1 className={scrollPositions > 810 ? "scroll-text2" : "scrolled-text2"}>사뭇 마법 같은 <br/> 경험을 선사합니다.</h1></div>
          </div>
        </header>
      </div>
    </div> 
  )

}

export default Runner;

  
  // useEffect(() => {
  //   if(count < 214) {
  //     setTimeout(() => {
  //       setCount(count + 1)
  //     }, 50);
  //   } else {
  //     setCount(1)
  //   }
  // }, [count])

