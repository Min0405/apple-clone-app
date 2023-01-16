import { useEffect, useState } from "react";

export default function useFadeOut() {
  const [scrollPositions, setScrollPositions] = useState(0);

  const updateScroll = () => {
    setScrollPositions(window.scrollY || document.documentElement.scrollTop); //scroll Top의 위치를 알아내는 구문
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScroll); //scroll 수치 업데이트
  }, []);

  return scrollPositions;
}