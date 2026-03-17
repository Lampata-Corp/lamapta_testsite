import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useMemo, useState } from "react";

const ROTATING_WORDS = [
  "european policy",
  "earth action",
  "polar science",
  "GeoAI",
  "Innovation",
  "urban analytics",
  "engineering",
  "open source",
] as const;

const FROZEN_HEADLINE = {
  fromWord: "GeoSpatial Data",
  toWord: "Intelligence",
} as const;

const SLOT_FROM_WIDTH_CH = Math.max(
  ...ROTATING_WORDS.map((word) => word.length),
  FROZEN_HEADLINE.fromWord.length,
);
const SLOT_TO_WIDTH_CH = Math.max(
  ...ROTATING_WORDS.map((word) => word.length),
  FROZEN_HEADLINE.toWord.length,
);

const CYCLE_INTERVAL_MS = 2000;
const FROZEN_DURATION_MS = 5000;
const CYCLES_BEFORE_FREEZE = 12;

type ActiveSlot = "from" | "to";

type HeadlineState = {
  fromWord: string;
  toWord: string;
  phase: "cycling" | "frozen";
  cycleCount: number;
  activeSlot: ActiveSlot;
};

function pickRandomWord(excludedWords: string[] = []) {
  const availableWords = ROTATING_WORDS.filter((word) => !excludedWords.includes(word));
  const pool = availableWords.length ? availableWords : ROTATING_WORDS;

  return pool[Math.floor(Math.random() * pool.length)];
}

function createCyclingState(): HeadlineState {
  const fromWord = pickRandomWord([FROZEN_HEADLINE.fromWord]);
  const toWord = pickRandomWord([fromWord, FROZEN_HEADLINE.toWord]);

  return {
    fromWord,
    toWord,
    phase: "cycling",
    cycleCount: 0,
    activeSlot: "from",
  };
}

export function AnimatedHeadline() {
  const shouldReduceMotion = useReducedMotion();
  const initialState = useMemo(() => createCyclingState(), []);
  const [headline, setHeadline] = useState<HeadlineState>(initialState);

  useEffect(() => {
    if (shouldReduceMotion) {
      setHeadline({
        ...FROZEN_HEADLINE,
        phase: "frozen",
        cycleCount: 0,
        activeSlot: "from",
      });
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setHeadline((current) => {
        if (current.phase === "frozen") {
          return createCyclingState();
        }

        if (current.cycleCount + 1 >= CYCLES_BEFORE_FREEZE) {
          return {
            ...FROZEN_HEADLINE,
            phase: "frozen",
            cycleCount: 0,
            activeSlot: "from",
          };
        }

        if (current.activeSlot === "from") {
          return {
            ...current,
            fromWord: pickRandomWord([current.fromWord, current.toWord]),
            cycleCount: current.cycleCount + 1,
            activeSlot: "to",
          };
        }

        return {
          ...current,
          toWord: pickRandomWord([current.toWord, current.fromWord]),
          cycleCount: current.cycleCount + 1,
          activeSlot: "from",
        };
      });
    }, headline.phase === "cycling" ? CYCLE_INTERVAL_MS : FROZEN_DURATION_MS);

    return () => window.clearTimeout(timeoutId);
  }, [headline.phase, headline.cycleCount, shouldReduceMotion]);

  return (
    <span className="inline-flex max-w-full flex-wrap items-baseline gap-x-[0.22em] gap-y-[0.05em]">
      <span>From</span>
      <AnimatedWord word={headline.fromWord} widthCh={SLOT_FROM_WIDTH_CH} />
      <span>to</span>
      <AnimatedWord word={headline.toWord} widthCh={SLOT_TO_WIDTH_CH} />
    </span>
  );
}

function AnimatedWord({ word, widthCh }: { word: string; widthCh: number }) {
  return (
    <span
      className="relative inline-grid align-baseline"
      style={{ minWidth: `${widthCh + 0.6}ch` }}
    >
      <span className="invisible col-start-1 row-start-1 whitespace-nowrap">{word}</span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={word}
          initial={{ opacity: 0, y: "0.34em" }}
          animate={{ opacity: 1, y: "0em" }}
          exit={{ opacity: 0, y: "-0.26em" }}
          transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 whitespace-nowrap"
        >
          {word}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
