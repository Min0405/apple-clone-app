import { useEffect, useState } from "react"

export default function useScroll(imageNumber:number) {
  const frameCount = imageNumber;

  const [scrolled, setScrolled] = useState(1);

  useEffect(() => {
    document.addEventListener("scroll", scrollProgress);
    return () => document.removeEventListener("scroll", scrollProgress);
  }, [])



  function scrollProgress() {
     const scrollPx = document.documentElement.scrollTop; // 현재 스크롤 위치
     // 스크롤바 위치를 가져오는 방법 (현재 스크롤바의 위치를 숫자로 반환)
     // Element.scrollTop = 요소의 콘텐츠가 세로로 스크롤되는 픽셀 수를 가져오거나 설정
     // scrollTop = 요소의 상단에서 맨위에 표시되는 콘텐츠까지의 거리 
    //  console.log(scrollPx)

     const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
     // scrollHeight = 스크롤 시키지 않았을때의 전체 높이
     // clientHeight = 눈에 보이는 만큼의 높이

    const scrollFraction = scrollPx / winHeightPx;
    // scrollTop에서 사용자가 아래로 스크롤할 수 있는 최대값으로 나누면 사용자의 스크롤 진행률 값이 나옴

    // const scrollLen = Math.min(
    //   frameCount - 1,
    //   Math.floor(scrollFraction * (frameCount + reset)) //reset하기 위해 스크롤 내린만큼 빼줘서 다시 처음으로 돌아가는 코드 시도
    // )
    const scrollLen = 
      Math.floor(scrollFraction * frameCount) //reset하기 위해 스크롤 내린만큼 빼줘서 다시 처음으로 돌아가는 코드 시도
    
    // 이미지 수에 진행률을 곱하고 Math.floor() 숫자를 내림하고,
    // Math.min() 최대 프레임 수로 감싸서 총 프레임 수를 초과하지 않도록 한다

     setScrolled(scrollLen)
  }  

  return scrolled;
}