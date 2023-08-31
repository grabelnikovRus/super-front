import { useRef, type FC, useEffect, memo } from "react";

interface OnScrollProps {
  cb: () => void;
}

const OnScroll: FC<OnScrollProps> = ({ cb }) => {
  const target = useRef<HTMLDivElement>(null);
  const scrollAreaElement = document.querySelector(".content");

  useEffect(() => {
    if (!scrollAreaElement) return;

    const options = {
      root: scrollAreaElement,
      rootMargin: "20px 20px 20px 35px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) cb();
    }, options);

    if (target.current) observer.observe(target.current);

    return () => {
      if (observer && target.current) observer.unobserve(target.current);
    };
  }, []);

  return <div ref={target} />;
};

export const OnScrollMemo = memo(OnScroll);
