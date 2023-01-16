import './airpods.css'
import useFadeIn from '../../../hooks/useFadeIn';
import useScroll from '../../../hooks/useScroll';

function Airpods() {
  const scroll = useScroll(1.9);
  const scrollPosition = useFadeIn();

  return(
    <div className="Airpods">
      <div className="Airpods-sticky-container">
        <header className="airpods-sticky">
          <div className="airpods-slide-container">
            {/* <img src={`https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index.toString().padStart(4, '0')}.jpg`} alt="pho"/> */}
            <div className="airpods-slide1"><img className="img" src={`https://www.apple.com/105/media/us/airpods-3rd-generation/2021/3c0b27aa-a5fe-4365-a9ae-83c28d10fa21/anim/battery/large/${scroll.toString().padStart(4, '0')}.jpg`} alt="phot" /></div>
            <div className="airpods-slide2"><h1 className={scrollPosition > 80 ? "scroll-text" : "scrolled-text"} id={scrollPosition > 770 ? "scrolling-text" : "scroll-text"}>당신의 귀에 꼭 맞게 사운드를 <br/> 조정해주는 적응형 EQ,</h1></div>
          </div>
        </header>
      </div>
    </div>
  )

}

export default Airpods;

  
  // useEffect(() => {
  //   if(count < 214) {
  //     setTimeout(() => {
  //       setCount(count + 1)
  //     }, 50);
  //   } else {
  //     setCount(1)
  //   }
  // }, [count])

