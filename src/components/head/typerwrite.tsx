import { useState, useEffect } from "react";

interface TypewriterProps {
  texts: string[];
  speed?: number;
  delay?: number;
}

export default function Typewriter({ texts, speed = 200, delay = 1000 }: TypewriterProps) {
  const [current, setCurrent] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (!texts || texts.length === 0) return;

    if (charIndex < texts[textIndex].length) {
      const timeout = setTimeout(() => {
        setCurrent((prev) => prev + texts[textIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setCurrent("");
      setCharIndex(0);
      setTextIndex((prev) =>
        prev + 1 < texts.length ? prev + 1 : 0
      );
    }, delay);

    return () => clearTimeout(timeout);
  }, [charIndex, textIndex, texts]);

  return (
    <>
      {current}
      <span className="animate-pulse">|</span>
    </>
  );
}
