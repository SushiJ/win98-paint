import { useLayoutEffect, useState } from "react";
const useWindowHeight = () => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useLayoutEffect(() => {
    const windowSizeHandler = () => {
      setWindowHeight(window.innerHeight);
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", windowSizeHandler);

    return () => {
      window.removeEventListener("resize", windowSizeHandler);
    };
  }, [])
  // useEffect(() => {
  //   const windowSizeHandler = () => {
  //     setWindowSize([window.innerWidth, window.innerHeight]);
  //   };
  //   window.addEventListener("resize", windowSizeHandler);
  //
  //   return () => {
  //     window.removeEventListener("resize", windowSizeHandler);
  //   };
  // }, []);

  return {
    windowHeight,
    windowWidth
  };
};

export default useWindowHeight;
