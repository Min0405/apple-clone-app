/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useEffect, useState } from "react"
import './battery.css'

function Battery() {
  // const [count, setCount] = useState(1);
  const [scrolled, setScrolled] = useState(1);
  const [scrollPosition, setScrollPosition] = useState(0);


  useEffect(() => {
    window.addEventListener("scroll", updateScroll)
  }, []);

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollProgress);
    return () => window.removeEventListener("scroll", scrollProgress);
  }, [])

  const scrollProgress = () => {

     const scrollpx = document.documentElement.scrollTop;
     const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;

     const scrollLen = Math.ceil(scrollpx / winHeightPx * 100 / 1.89);
     setScrolled(scrollLen)
   }

  return(
    <div className="Battery">
      <div className="Battery-sticky-container">
        <header className="battery-sticky">
          <div className="battery-slide-container">
            {/* <img src={`https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index.toString().padStart(4, '0')}.jpg`} alt="pho"/> */}
            <div className="battery-slide1"><img className="img" src={`https://www.apple.com/105/media/us/airpods-3rd-generation/2021/3c0b27aa-a5fe-4365-a9ae-83c28d10fa21/anim/battery/large/${scrolled.toString().padStart(4, '0')}.jpg`} alt="phot" /></div>
            <div className="battery-slide2"><h1 className={scrollPosition > 80 ? "scroll-text" : "scrolled-text"} id={scrollPosition > 770 ? "scrolling-text" : "scroll-text"}>당신의 귀에 꼭 맞게 사운드를 <br/> 조정해주는 적응형 EQ,</h1></div>
          </div>
        </header>
      </div>
    </div>
  )

}

export default Battery;

  
  // useEffect(() => {
  //   if(count < 214) {
  //     setTimeout(() => {
  //       setCount(count + 1)
  //     }, 50);
  //   } else {
  //     setCount(1)
  //   }
  // }, [count])

