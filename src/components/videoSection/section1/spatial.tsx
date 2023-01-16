import { useEffect, useState } from "react";
import useFadeIn from "../../../hooks/useFadeIn";
import useScroll from "../../../hooks/useScroll";
import './spatial.css'

function Spatial() {
  // const [changeUrl, setChangeUrl] = useState({
  //   url: "",
  //   setUrl: ""
  // })

  // function setChange() {
  //   setChangeUrl("battery");
  // }

  // const [imageCount, setImageCount] = useState(365);
  // const [resetCount, setResetCount] = useState(0); //만약 210이 넘으면 210만큼 빼주기? => 스크롤 값을 조정해주는게 아니라 스크롤 값을 반환만 해주는거라서 여기서 수정 X ?
  const scroll = useScroll(365);
  const scrollPosition = useFadeIn();
  // const [changeUrl, setChangeUrl]= useState(String);

  //scroll 값이 210 이상이 되면 섹션 이름 바꾸기
  console.log(scroll)
  //섹션이름이 바뀌면서 훅 초기화 + useScroll 값 변경

  const [src, setSrc] = useState(`https://www.apple.com/105/media/us/airpods-3rd-generation/2021/3c0b27aa-a5fe-4365-a9ae-83c28d10fa21/anim/spatial-audio/large/${scroll.toString().padStart(4, '0')}.jpg`)

  useEffect (() => {
    if (scroll > 261) {
      setSrc(`https://www.apple.com/105/media/us/airpods-3rd-generation/2021/3c0b27aa-a5fe-4365-a9ae-83c28d10fa21/anim/runner/large/${(scroll - 261).toString().padStart(4, '0')}.jpg`)
    } else if(scroll > 210 ) {
      // setImageCount(60)
      // setResetCount(240)
      setSrc(`https://www.apple.com/105/media/us/airpods-3rd-generation/2021/3c0b27aa-a5fe-4365-a9ae-83c28d10fa21/anim/battery/large/${(scroll - 210).toString().padStart(4, '0')}.jpg`)
    } else {
      setSrc(`https://www.apple.com/105/media/us/airpods-3rd-generation/2021/3c0b27aa-a5fe-4365-a9ae-83c28d10fa21/anim/spatial-audio/large/${scroll.toString().padStart(4, '0')}.jpg`)
    }

    return () => {};

  }, [scroll])

//이미지 개수보다 이미지 카운트 값이 더 클때 발생되는 문제인데 이미지카운트 값을 0으로 초기화 시키면 210 이하가 되면서 이미지 주소가 다시 spatial-audio로 바뀜 

  // const imageList = ['https://www.apple.com/105/media/us/airpods-3rd-generation/2021/3c0b27aa-a5fe-4365-a9ae-83c28d10fa21/anim/spatial-audio/large/','https://www.apple.com/105/media/us/airpods-3rd-generation/2021/3c0b27aa-a5fe-4365-a9ae-83c28d10fa21/anim/battery/large/']
  // const [imageString, setImageString] = useState(imageList[0]);

  // useEffect(()=> {
  //   if(imageString.includes('spatial-audio')){
  //   if(scroll > 210){
  //       setImageString(imageList[1]);
  //       setImageCount(54);
  //     } 
  //   else if(scroll < 210) {
  //     setImageString(imageList[0]);
  //     setImageCount(220)
  //   }
  // },[])

  // function handleChange(event) {
  //   const newValue = event.target.vlaue;
  //   const inputName = event.target.name;

  //   console.log(newValue)

  // const handleChange = () => {
  //   let newUrl;
  //   if (scroll > 210) {
  //     newUrl =`https://www.apple.com/105/media/us/airpods-3rd-generation/2021/3c0b27aa-a5fe-4365-a9ae-83c28d10fa21/anim/battery/large/${scrolled.toString().padStart(4, '0')}.jpg`
  //   } else if (scroll < 210) {
  //     newUrl = `https://www.apple.com/105/media/us/airpods-3rd-generation/2021/3c0b27aa-a5fe-4365-a9ae-83c28d10fa21/anim/spatial-audio/large/${scrolled.toString().padStart(4, '0')}.jpg`
  //   }
  // }



  return(
    <div className="Spatial">
      <div className="Spatial-sticky-container">
        <header className="spatial-sticky">
          <div className="spatial-slide-container">
            <div className="spatial-slide1">
              <img className="img" src={src} alt="" />
            </div>
            <div className="spatial-slide2"><h1 className={scrollPosition > 80 ? "scroll-text" : "scrolled-text"}>온몸을 휘감는 3차원 오디오의 <br/> 개인 맞춤형 공간 음향, </h1></div>
            {/* className을 삼항 연산자로 원하는 수치만큼 스크롤이 되면 바꿔주게 만든다 */}
          </div>
        </header>
      </div>
    </div>
  )
}

export default Spatial;


// - scroll 조건문
//   - 스크롤 값이 210 이상이면
//      - 이미지 주소가 battery로 바뀜
//      - imageCount가 52로 바뀜  (battery의 이미지 개수 만큼)
//         - 이렇게 하면 210 이하가 되면서 이미지 주소가 다시 spatial-audio로 바뀐다
//      - battery의 스크롤 시작점을 spatial-audio 다음 스크롤 지점으로 설정
//         - 혹은 스크롤 값을 0으로 초기화