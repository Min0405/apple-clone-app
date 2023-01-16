import { useEffect, useState } from "react";
import useFadeIn from "../../../hooks/useFadeIn";
import useScroll from "../../../hooks/useScroll";
import './spatial.css'

function Test2() {
//   const [changeUrl, setChangeUrl] = useState({
//     url: "",
//     setUrl: ""
//   })

  // function setChange() {
  //   setChangeUrl("battery");
  // }

  const [imageCount, setImageCount] = useState(210);
  const scroll = useScroll(imageCount);
  const scrollPosition = useFadeIn();
  // const [changeUrl, setChangeUrl]= useState(String);

  //scroll 값이 210 이상이 되면 섹션 이름 바꾸기
  console.log(scroll)
  //섹션이름이 바뀌면서 훅 초기화 + useScroll 값 변경

  const imageList = ['https://www.apple.com/105/media/us/airpods-3rd-generation/2021/3c0b27aa-a5fe-4365-a9ae-83c28d10fa21/anim/spatial-audio/large/','https://www.apple.com/105/media/us/airpods-3rd-generation/2021/3c0b27aa-a5fe-4365-a9ae-83c28d10fa21/anim/battery/large/']

  const [imageString, setImageString] = useState('https://www.apple.com/105/media/us/airpods-3rd-generation/2021/3c0b27aa-a5fe-4365-a9ae-83c28d10fa21/anim/spatial-audio/large/');

  useEffect(()=> {
    if(imageString.includes('spatial-audio')){
      if(scroll >210){
        setImageString(imageList[1]);
        setImageCount(54);
      }
    }
  },[])

  // function handleChange(event) {
  //   const newValue = event.target.vlaue;
  //   const inputName = event.target.name;

  //   console.log(newValue)


  //   if (scroll > 210) {
  //     {changeUrl}
  //   } else if (scroll < 210) {
  //     {setChange}
  //   }
  // }



  return(
    <div className="Spatial">
      <div className="Spatial-sticky-container">
        <header className="spatial-sticky">
          <div className="spatial-slide-container">
            <div className="spatial-slide1"><img className="img" src={`https://www.apple.com/105/media/us/airpods-3rd-generation/2021/3c0b27aa-a5fe-4365-a9ae-83c28d10fa21/anim/${ scroll > 200 ? "battery" : "spatial-audio" }/large/${ imageString + scroll.toString().padStart(4, '0')}.jpg`} alt="php" /></div>
            <div className="spatial-slide2"><h1 className={scrollPosition > 80 ? "scroll-text" : "scrolled-text"}>온몸을 휘감는 3차원 오디오의 <br/> 개인 맞춤형 공간 음향, </h1></div>
            {/* className을 삼항 연산자로 원하는 수치만큼 스크롤이 되면 바꿔주게 만든다 */}
          </div>
        </header>
      </div>
    </div>
  )
}

export default Test2;
