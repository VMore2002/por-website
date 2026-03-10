import { useEffect, useRef, useState } from "react";

export const useInViewProgress = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
};

