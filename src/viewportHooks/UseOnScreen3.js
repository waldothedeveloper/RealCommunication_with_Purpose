import React from "react";

export default function useOnScreen3(ref, rootMargin = "0px") {
  const [isShowing, setShowing] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowing(entry.isIntersecting);
      },
      {
        rootMargin
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      //eslint-disable-next-line
      observer.unobserve(ref.current);
    };
    //eslint-disable-next-line
  }, []);

  return isShowing;
}
