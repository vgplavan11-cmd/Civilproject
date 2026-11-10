"use client";

import { useMotionValue, motion, useSpring, useTransform } from "motion/react";
import React, { useRef } from "react";
import { ArrowRight } from "lucide-react";

export interface InteractiveLinkItem {
  heading: string;
  imgSrc: string;
  subheading: string;
  href: string;
}

export interface InteractiveHoverLinksProps {
  links?: InteractiveLinkItem[];
  className?: string;
  onLinkClick?: () => void;
  compact?: boolean;
  activePath?: string;
}

export function InteractiveHoverLinks({
  links = INTERACTIVE_LINKS,
  className = "",
  onLinkClick,
  compact = false,
  activePath = "",
}: InteractiveHoverLinksProps) {
  return (
    <nav className={`bg-transparent w-full ${className}`} aria-label="Civil Engineering Navigation">
      <div className="mx-auto w-full">
        {links.map((link) => {
          const isActive = activePath === link.href || (link.href !== "/" && activePath.startsWith(link.href));
          return (
            <InteractiveLink
              key={link.heading}
              {...link}
              onLinkClick={onLinkClick}
              compact={compact}
              isActive={isActive}
            />
          );
        })}
      </div>
    </nav>
  );
}

interface LinkProps {
  heading: string;
  imgSrc: string;
  subheading: string;
  href: string;
  onLinkClick?: () => void;
  compact?: boolean;
  isActive?: boolean;
}

function InteractiveLink({
  heading,
  imgSrc,
  subheading,
  href,
  onLinkClick,
  compact = false,
  isActive = false,
}: LinkProps) {
  const ref = useRef<HTMLAnchorElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 25 });

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["35%", "65%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["55%", "45%"]);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onClick={onLinkClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      initial="initial"
      whileHover="whileHover"
      className={`group relative flex items-center justify-between border-b border-slate-200 transition-colors duration-300 ${
        isActive
          ? "border-neutral-950 bg-neutral-100/60"
          : "hover:border-neutral-950"
      } ${compact ? "py-3 px-2 sm:py-3.5" : "py-4 md:py-6"}`}
    >
      <div className="pr-2 z-10">
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -4 },
          }}
          transition={{
            type: "tween",
            ease: [0.16, 1, 0.3, 1],
            duration: 0.3,
            staggerChildren: 0.03,
            delayChildren: 0.05,
          }}
          className={`relative z-10 block font-black tracking-tight transition-colors duration-300 ${
            isActive
              ? "text-neutral-950"
              : "text-slate-400 group-hover:text-slate-950"
          } ${
            compact
              ? "text-xl sm:text-2xl xl:text-3xl"
              : "text-3xl sm:text-4xl md:text-5xl"
          }`}
        >
          {heading.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 4 },
              }}
              transition={{
                type: "tween",
                ease: [0.16, 1, 0.3, 1],
                duration: 0.25,
              }}
              className="inline-block"
              key={i}
            >
              {l === " " ? "\u00A0" : l}
            </motion.span>
          ))}
        </motion.span>
        <span
          className={`relative z-10 mt-0.5 block text-xs transition-colors duration-300 ${
            isActive
              ? "font-semibold text-neutral-950"
              : "font-medium text-slate-500 group-hover:text-black"
          }`}
        >
          {subheading}
        </span>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-10%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-10deg", opacity: 0 },
          whileHover: { scale: 1, rotate: "6deg", opacity: 1 },
        }}
        transition={{
          type: "tween",
          ease: [0.16, 1, 0.3, 1],
          duration: 0.3,
        }}
        src={imgSrc}
        className="pointer-events-none absolute z-30 h-20 w-32 sm:h-24 sm:w-36 rounded-xl object-cover shadow-2xl border-2 border-white ring-1 ring-slate-900/10 hidden md:block"
        alt={`Preview for ${heading}`}
      />

      <div className="overflow-hidden shrink-0">
        <motion.div
          variants={{
            initial: {
              x: "100%",
              opacity: 0,
            },
            whileHover: {
              x: "0%",
              opacity: 1,
            },
          }}
          transition={{
            type: "tween",
            ease: [0.16, 1, 0.3, 1],
            duration: 0.25,
          }}
          className="relative z-10 p-1 sm:p-2"
        >
          <ArrowRight className="size-5 sm:size-6 text-neutral-950 group-hover:translate-x-1 transition-transform" />
        </motion.div>
      </div>
    </motion.a>
  );
}

export const INTERACTIVE_LINKS: InteractiveLinkItem[] = [
  {
    heading: "Home",
    subheading: "Building Spaces, Elevating Lives",
    imgSrc: "/images/nav/home.jpg",
    href: "/",
  },
  {
    heading: "Projects",
    subheading: "Turnkey 2BHK, 3BHK & Villa Models",
    imgSrc: "/images/nav/projects.jpg",
    href: "/projects",
  },
  {
    heading: "About Us",
    subheading: "Our Story & Architectural Vision",
    imgSrc: "/images/nav/about.jpg",
    href: "/about",
  },
  {
    heading: "Contact Us",
    subheading: "Madurai Office, Site Visits & Estimates",
    imgSrc: "/images/nav/contact.jpg",
    href: "/contact",
  },
  {
    heading: "Estimator",
    subheading: "Instant Construction Cost Calculator",
    imgSrc: "/images/nav/estimator.jpg",
    href: "/estimator",
  },
];

export default InteractiveHoverLinks;
