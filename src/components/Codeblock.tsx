import { useEffect, useRef, useState } from "react";
import { Clipboard, Maximize2 } from "lucide-react";

export default function CodeEditorReplica() {
  const codeRef = useRef<HTMLElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const charsRef = useRef<HTMLSpanElement[]>([]);
  const isPrepared = useRef(false);
  const animationTimeouts = useRef<NodeJS.Timeout[]>([]);

  // Prepare spans on mount
  useEffect(() => {
    const codeContainer = codeRef.current;
    if (!codeContainer || isPrepared.current) return;

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
            span.style.opacity = "1"; // Initially visible
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

    // Cleanup on unmount
    return () => {
      animationTimeouts.current.forEach(clearTimeout);
    };
  }, []);

  // Animate on hover
  useEffect(() => {
    if (!isHovered || charsRef.current.length === 0) return;

    // Clear any existing animation
    animationTimeouts.current.forEach(clearTimeout);
    animationTimeouts.current = [];

    // Reset all to hidden
    charsRef.current.forEach((char) => {
      char.style.opacity = "0";
    });

    let index = 0;

    function typeChar(): void {
      if (index < charsRef.current.length) {
        const charSpan = charsRef.current[index];
        charSpan.style.opacity = "1";

        const delay = charSpan.textContent === " " ? 0 : Math.random();
        const timeoutId = setTimeout(typeChar, delay);
        animationTimeouts.current.push(timeoutId);
        index++;
      }
    }

    const initialTimeout = setTimeout(typeChar, 100);
    animationTimeouts.current.push(initialTimeout);
  }, [isHovered]);

  return (
    <div className="absolute top-0 right-0 object-cover ">
      <style>{`
        .typing-char {
          transition: opacity 0.05s ease;
        }
      `}</style>

      <div /* Code block */
        className="relative w-full max-w-90 bg-[#0C112DED] rounded-bl-xl overflow-hidden shadow-lg border border-border/50 group"
        style={{
          boxShadow: "-15px 15px 115px rgba(245, 151, 104, 0.12)",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Glow */}
        <div className="absolute z-5 bg-[#B05D41] blur-[100px] -rotate-90 size-70 -bottom-40 right-0"></div>
        <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-primary2/10 blur-[60px] rounded-full pointer-events-none z-0" />

        <div className="relative z-10 flex flex-row pt-3 pb-2 px-3">
          {/* Line Numbers */}
          <div className="flex flex-col text-right pr-3 select-none text-muted-foreground/30 text-xs shrink-0">
            {Array.from({ length: 22 }, (_, i) => (
              <div key={i}>{i + 9}</div>
            ))}
          </div>

          {/* Code */}
          <div className="flex-1 overflow-x-hidden relative">
            <code
              ref={codeRef}
              className="block text-xs text-muted-foreground whitespace-pre"
            >
              {"\t"}
              <span className="text-primary2">removeChildren</span>
              <span className="text-foreground/80">(</span>
              <span className="text-[#C478FF]">gutters</span>
              <span className="text-foreground/80">);</span>
              {"\n\n"}
              {"\t"}
              <span className="text-[#FF32C6]">for</span>
              <span className="text-foreground/80"> (</span>
              <span className="text-[#FF32C6]">var</span>
              <span className="text-foreground/80"> </span>
              <span className="text-[#C478FF]">i</span>
              <span className="text-foreground/80"> = </span>
              <span className="text-[#3FA4FF]">0</span>
              <span className="text-foreground/80">; </span>
              <span className="text-[#C478FF]">i</span>
              <span className="text-foreground/80"> &lt; </span>
              <span className="text-[#C478FF]">specs</span>
              <span className="text-foreground/80">.</span>
              <span className="text-[#1AC69C]">length</span>
              <span className="text-foreground/80">; ++</span>
              <span className="text-[#C478FF]">i</span>
              <span className="text-foreground/80">) {"{"}</span>
              {"\n"}
              {"\t"} {"\t"}
              <span className="text-[#FF32C6]">var</span>
              <span className="text-foreground/80"> </span>
              <span className="text-[#C478FF]">gutterClass</span>
              <span className="text-foreground/80"> = </span>
              <span className="text-[#C478FF]">specs</span>
              <span className="text-foreground/80">[</span>
              <span className="text-[#C478FF]">i</span>
              <span className="text-foreground/80">];</span>
              {"\n"}
              {"\t"} {"\t"}
              <span className="text-[#FF32C6]">var</span>
              <span className="text-foreground/80"> </span>
              <span className="text-[#C478FF]">gElt</span>
              <span className="text-foreground/80"> = </span>
              <span className="text-[#C478FF]">gutters</span>
              <span className="text-foreground/80">.</span>
              <span className="text-[#1AC69C]">appendChild</span>
              <span className="text-foreground/80">(</span>
              {"\n"}
              {"\t"} {"\t"}
              {"\t"}
              <span className="text-primary2">elt</span>
              <span className="text-foreground/80">(</span>
              {"\n"}
              {"\t"} {"\t"}
              {"\t"} {"\t"}
              <span className="text-[#3FA4FF]">"div"</span>
              <span className="text-foreground/80">,</span>
              {"\n"}
              {"\t"} {"\t"}
              {"\t"} {"\t"}
              <span className="text-[#FF32C6]">null</span>
              <span className="text-foreground/80">,</span>
              {"\n"}
              {"\t"} {"\t"}
              {"\t"} {"\t"}
              <span className="text-[#3FA4FF]">"CodeMirror-gutter "</span>
              <span className="text-foreground/80"> + </span>
              <span className="text-[#C478FF]">gutterClass</span>
              {"\n"}
              {"\t"} {"\t"}
              {"\t"}
              <span className="text-foreground/80">)</span>
              {"\n"}
              {"\t"} {"\t"}
              <span className="text-foreground/80">);</span>
              {"\n"}
              {"\t"} {"\t"}
              <span className="text-[#FF32C6]">if</span>
              <span className="text-foreground/80"> (</span>
              <span className="text-[#C478FF]">gutterClass</span>
              <span className="text-foreground/80"> == </span>
              <span className="text-[#3FA4FF]">"CodeMirror-linenumbers"</span>
              <span className="text-foreground/80">) {"{"}</span>
              {"\n"}
              {"\t"} {"\t"}
              {"\t"}
              <span className="text-[#C478FF]">cm</span>
              <span className="text-foreground/80">.</span>
              <span className="text-[#1AC69C]">display</span>
              <span className="text-foreground/80">.</span>
              <span className="text-[#1AC69C]">lineGutter</span>
              <span className="text-foreground/80"> = </span>
              <span className="text-[#C478FF]">gElt</span>
              <span className="text-foreground/80">;</span>
              {"\n"}
              {"\t"} {"\t"}
              {"\t"}
              <span className="text-[#C478FF]">gElt</span>
              <span className="text-foreground/80">.</span>
              <span className="text-[#1AC69C]">style</span>
              <span className="text-foreground/80">.</span>
              <span className="text-[#1AC69C]">width</span>
              <span className="text-foreground/80"> = (</span>
              <span className="text-[#C478FF]">cm</span>
              <span className="text-foreground/80">.</span>
              <span className="text-[#1AC69C]">display</span>
              <span className="text-foreground/80">.</span>
              <span className="text-[#1AC69C]">lineNumWidth</span>
              <span className="text-foreground/80"> || </span>
              <span className="text-[#3FA4FF]">1</span>
              <span className="text-foreground/80">) + </span>
              <span className="text-[#3FA4FF]">"px"</span>
              <span className="text-foreground/80">;</span>
              {"\n"}
              {"\t"} {"\t"}
              <span className="text-foreground/80">{"}"}</span>
              {"\n"}
              {"\t"}
              <span className="text-foreground/80">{"}"}</span>
              {"\n\n"}
              {"\t"}
              <span className="text-[#C478FF]">gutters</span>
              <span className="text-foreground/80">.</span>
              <span className="text-[#1AC69C]">style</span>
              <span className="text-foreground/80">.</span>
              <span className="text-[#1AC69C]">display</span>
              <span className="text-foreground/80"> = </span>
              <span className="text-[#C478FF]">i</span>
              <span className="text-foreground/80"> ? </span>
              <span className="text-[#3FA4FF]">""</span>
              <span className="text-foreground/80"> : </span>
              <span className="text-[#3FA4FF]">"none"</span>
              <span className="text-foreground/80">;</span>
              {"\n"}
              {"\t"}
              <span className="text-primary2">updateGutterSpace</span>
              <span className="text-foreground/80">(</span>
              <span className="text-[#C478FF]">cm</span>
              <span className="text-foreground/80">);</span>
              {"\n\n"}
              {"\t"}
              <span className="text-[#FF32C6]">return</span>
              <span className="text-foreground/80"> </span>
              <span className="text-[#FF32C6]">false</span>
              <span className="text-foreground/80">;</span>
              {"\n"}
              <span className="text-foreground">{"}"}</span>
            </code>
          </div>
        </div>

        {/* Footer */}
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
