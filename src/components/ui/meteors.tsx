"use client"

import React, { useMemo } from "react"
import { cn } from "@/lib/utils"

interface MeteorsProps {
  number?: number
  minDelay?: number
  maxDelay?: number
  minDuration?: number
  maxDuration?: number
  angle?: number
  className?: string
}

export const Meteors = ({
  number = 20,
  minDelay = 0.2,
  maxDelay = 1.2,
  minDuration = 2,
  maxDuration = 10,
  angle = 215,
  className,
}: MeteorsProps) => {
  const meteorStyles = useMemo(() => {
    const width = typeof window !== "undefined" ? window.innerWidth : 1920
    return [...new Array(number)].map((_, i) => ({
      "--angle": -angle + "deg",
      top: "-5%",
      left: `calc(0% + ${(i * 7919 + 104729) % width}px)`,
      animationDelay: ((i * 7 + 13) % (maxDelay * 10)) / 10 + minDelay + "s",
      animationDuration: ((i * 3 + 17) % ((maxDuration - minDuration) * 10)) / 10 + minDuration + "s",
    } as React.CSSProperties))
  }, [number, minDelay, maxDelay, minDuration, maxDuration, angle])

  return (
    <>
      {meteorStyles.map((style, idx) => (
        <span
          key={idx}
          style={style}
          className={cn(
            "animate-meteor pointer-events-none absolute size-0.5 rounded-full bg-zinc-500 shadow-[0_0_0_1px_#ffffff10]",
            className
          )}
        >
          <div className="pointer-events-none absolute top-1/2 -z-10 h-px w-[50px] -translate-y-1/2 bg-gradient-to-r from-zinc-500 to-transparent" />
        </span>
      ))}
    </>
  )
}
