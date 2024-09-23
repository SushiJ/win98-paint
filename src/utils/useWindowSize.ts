import { useLayoutEffect, useState } from "react";
const useWindowHeight = () => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useLayoutEffect(() => {
    const windowSizeHandler = () => {
      setWindowHeight(window.innerHeight);
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

  return windowHeight;
};

export default useWindowHeight;
