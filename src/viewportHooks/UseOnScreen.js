import React from "react";

export default function useOnScreen(ref, rootMargin = "0px") {
  //state and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        //Update our state when observer callback fires
        setIntersecting(entry.isIntersecting);
      },
      { rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      //eslint-disable-next-line
      observer.unobserve(ref.current);
    };
    //eslint-disable-next-line
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return isIntersecting;
}
