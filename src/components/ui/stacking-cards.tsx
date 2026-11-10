// author: Khoa Phan <https://www.pldkhoa.dev>

"use client";

import {
  createContext,
  useContext,
  useRef,
  forwardRef,
  type HTMLAttributes,
  type PropsWithChildren,
} from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
  type UseScrollOptions,
} from "motion/react";

import { cn } from "@/lib/utils";

export interface StackingCardsProps
  extends PropsWithChildren, HTMLAttributes<HTMLDivElement> {
  scrollOptions?: UseScrollOptions;
  scaleMultiplier?: number;
  totalCards: number;
}

export interface StackingCardItemProps
  extends HTMLAttributes<HTMLDivElement>, PropsWithChildren {
  index: number;
  topPosition?: string;
}

export default function StackingCards({
  children,
  className,
  scrollOptions,
  scaleMultiplier = 0.025,
  totalCards,
  ...props
}: StackingCardsProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
    ...scrollOptions,
  });

  return (
    <StackingCardsContext.Provider
      value={{ progress: scrollYProgress, scaleMultiplier, totalCards }}
    >
      <div className={cn("relative", className)} ref={targetRef} {...props}>
        {children}
      </div>
    </StackingCardsContext.Provider>
  );
}

const StackingCardItem = forwardRef<HTMLDivElement, StackingCardItemProps>(
  (
    {
      index,
      topPosition,
      className,
      children,
      style,
      ...props
    },
    ref
  ) => {
    const {
      progress,
      scaleMultiplier,
      totalCards = 0,
    } = useStackingCardsContext();
    const scaleTo = 1 - (totalCards - index) * (scaleMultiplier ?? 0.025);
    const rangeScale = [index * (1 / totalCards), 1];
    const scale = useTransform(progress, rangeScale, [1, scaleTo]);
    const top = topPosition ?? `calc(84px + ${index * 12}px)`;

    return (
      <div
        ref={ref}
        className={cn("sticky", className)}
        style={{
          top,
          zIndex: index + 1,
          ...style,
        }}
        {...props}
      >
        <motion.div
          className="origin-top relative will-change-transform"
          style={{ scale }}
        >
          {children}
        </motion.div>
      </div>
    );
  }
);

StackingCardItem.displayName = "StackingCardItem";

const StackingCardsContext = createContext<{
  progress: MotionValue<number>;
  scaleMultiplier?: number;
  totalCards?: number;
} | null>(null);

export const useStackingCardsContext = () => {
  const context = useContext(StackingCardsContext);
  if (!context)
    throw new Error("StackingCardItem must be used within StackingCards");
  return context;
};

export { StackingCardItem };

