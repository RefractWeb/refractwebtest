import { useEffect, useRef, useState } from "react";
import { Clipboard, Maximize2 } from "lucide-react";
import { useSafari } from "@/hooks/useSafari";

export default function CodeEditorReplica() {
  const codeRef = useRef<HTMLElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const isSafari = useSafari();
  const charsRef = useRef<HTMLSpanElement[]>([]);
  const isPrepared = useRef(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const codeContainer = codeRef.current;
    if (!codeContainer || isPrepared.current || isSafari) return;

    function prepareTextForTyping(element: Node): void {
      const children = Array.from(element.childNodes);

      children.forEach((node) => {
        if (node.nodeType === Node.TEXT_NODE) {
          const text = node.textContent;
          if (!text) return;
          if (text.trim() === "" && text.includes("\n")) return;

          const fragment = document.createDocumentFragment();

          text.split("").forEach((char) => {
            const span = document.createElement("span");
            span.textContent = char;
            span.className = "typing-char";
            span.style.opacity = "1";
            fragment.appendChild(span);
          });

          node.parentNode?.replaceChild(fragment, node);
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          prepareTextForTyping(node);
        }
      });
    }

    prepareTextForTyping(codeContainer);

    const allChars = Array.from(
      codeContainer.querySelectorAll("span.typing-char"),
    ) as HTMLSpanElement[];

    charsRef.current = allChars;
    isPrepared.current = true;

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isSafari]);

  useEffect(() => {
    if (isSafari || !isHovered || charsRef.current.length === 0) return;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    charsRef.current.forEach((char) => {
      char.style.opacity = "0";
    });

    let index = 0;
    let lastTime = 0;
    const BATCH_SIZE = 3;

    function typeFrame(timestamp: number): void {
      if (index >= charsRef.current.length) return;

      const elapsed = timestamp - lastTime;
      if (elapsed < 1) {
        rafRef.current = requestAnimationFrame(typeFrame);
        return;
      }
      lastTime = timestamp;

      const end = Math.min(index + BATCH_SIZE, charsRef.current.length);
      for (let i = index; i < end; i++) {
        charsRef.current[i].style.opacity = "1";
      }
      index = end;

      if (index < charsRef.current.length) {
        rafRef.current = requestAnimationFrame(typeFrame);
      }
    }

    rafRef.current = requestAnimationFrame(typeFrame);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isHovered, isSafari]);

  return (
    <div className="absolute top-0 right-0 object-cover">
      {!isSafari && (
        <style>{`
          .typing-char {
            transition: opacity 0.05s ease;
          }
        `}</style>
      )}

      <div
        className="relative w-full pr-10 py-2 rounded-md max-w-sm bg-[#0C112DED] rounded-bl-xl overflow-hidden shadow-lg border border-border/50 group transform-gpu cursor-crosshair hover:scale-101 transition-all duration-500"
        style={{
          boxShadow: "-15px 15px 115px rgba(245, 151, 104, 0.12)",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute z-5 bg-[#B05D41] blur-3xl opacity-80 size-70 -bottom-40 right-0 blur-gpu"></div>
        <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-primary2/10 blur-[60px] rounded-full pointer-events-none z-0 blur-gpu" />

        <div className="relative z-10 flex flex-row pt-3 pb-2 px-3">
          <div className="flex flex-col text-right pr-3 select-none text-muted-foreground/30 text-xs shrink-0">
            {Array.from({ length: 22 }, (_, i) => (
              <div key={i}>{i + 15}</div>
            ))}
          </div>

          <div className="flex-1 overflow-x-hidden relative">
            <code
              ref={codeRef}
              className="block text-xs md:text-sm text-muted-foreground whitespace-pre"
            >
              {"\t"}
              <span className="text-rose-400">async function</span>
              <span className="text-foreground/80"> </span>
              <span className="text-primary2">initiateAgent</span>
              <span className="text-foreground/80">() {"{"}</span>
              {"\n"}
              {"\t"} {"\t"}
              <span className="text-rose-400">const</span>
              <span className="text-foreground/80"> </span>
              <span className="text-violet-400">agent</span>
              <span className="text-foreground/80"> = </span>
              <span className="text-rose-400">new</span>
              <span className="text-foreground/80"> </span>
              <span className="text-teal-300">RefractAI</span>
              <span className="text-foreground/80">({"{"}</span>
              {"\n"}
              {"\t"} {"\t"} {"\t"}
              <span className="text-violet-400">model</span>
              <span className="text-foreground/80">: </span>
              <span className="text-sky-400">"intelligence-v1"</span>
              <span className="text-foreground/80">,</span>
              {"\n"}
              {"\t"} {"\t"} {"\t"}
              <span className="text-violet-400">context</span>
              <span className="text-foreground/80">: </span>
              <span className="text-sky-400">"orchestration"</span>
              {"\n"}
              {"\t"} {"\t"}
              <span className="text-foreground/80">{"});"}</span>
              {"\n\n"}
              {"\t"} {"\t"}
              <span className="text-rose-400">const</span>
              <span className="text-foreground/80"> </span>
              <span className="text-violet-400">analysis</span>
              <span className="text-foreground/80"> = </span>
              <span className="text-rose-400">await</span>
              <span className="text-foreground/80"> </span>
              <span className="text-violet-400">agent</span>
              <span className="text-foreground/80">.</span>
              <span className="text-primary2">analyze</span>
              <span className="text-foreground/80">({"{"}</span>
              {"\n"}
              {"\t"} {"\t"} {"\t"}
              <span className="text-violet-400">input</span>
              <span className="text-foreground/80">: </span>
              <span className="text-violet-400">strategy</span>
              <span className="text-foreground/80">,</span>
              {"\n"}
              {"\t"} {"\t"} {"\t"}
              <span className="text-violet-400">optimizeFor</span>
              <span className="text-foreground/80">: </span>
              <span className="text-sky-400">"authority"</span>
              {"\n"}
              {"\t"} {"\t"}
              <span className="text-foreground/80">{"});"}</span>
              {"\n\n"}
              {"\t"} {"\t"}
              <span className="text-rose-400">return</span>
              <span className="text-foreground/80"> </span>
              <span className="text-violet-400">analysis</span>
              <span className="text-foreground/80">.</span>
              <span className="text-primary2">execute</span>
              <span className="text-foreground/80">();</span>
              {"\n"}
              {"\t"}
              <span className="text-foreground/80">{"}"}</span>
            </code>
          </div>
        </div>

        <div className="flex items-center gap-3 pb-4 px-6">
          <button className="text-muted-foreground hover:text-foreground transition">
            <Clipboard size={13} strokeWidth={1.5} />
          </button>
          <button className="text-muted-foreground hover:text-foreground transition">
            <Maximize2 size={13} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  );
}
