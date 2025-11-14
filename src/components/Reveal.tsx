"use client";

import { useEffect, useRef } from "react";

type Props = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
};

export default function Reveal({ as: Tag = "section", className, children }: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("reveal-show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref as any} className={["reveal", className].filter(Boolean).join(" ")}> 
      {children}
    </Tag>
  );
}
