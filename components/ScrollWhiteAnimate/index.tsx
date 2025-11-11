import { onMount, splitProps, JSX } from "solid-js";

interface ScrollColorTextProps extends JSX.HTMLAttributes<HTMLDivElement> {}

function parseRgbString(rgbStr: string) {
  const m = rgbStr.match(/rgba?\(\s*([0-9]+)[ ,]+([0-9]+)[ ,]+([0-9]+)(?:[ ,]+([0-9.]+))?\s*\)/);
  if (!m) return null;
  return { r: +m[1], g: +m[2], b: +m[3], a: m[4] ? +m[4] : 1 };
}

let gsapLoaded = false;

export function ScrollColorText(props: ScrollColorTextProps) {
  const [local, rest] = splitProps(props, ["children", "class"]);
  let wrapperRef!: HTMLDivElement;

  onMount(async () => {
    const { gsap } = await import("gsap");
    const { ScrollTrigger } = await import("gsap/ScrollTrigger");

    if (!gsapLoaded) {
      gsap.registerPlugin(ScrollTrigger);
      gsapLoaded = true;
    }

    // Delay to ensure DOM/layout complete
    await new Promise(r => setTimeout(r, 50));

    const wrapper = wrapperRef;
    if (!wrapper) return;

    const textNodes: Text[] = [];
    const walker = document.createTreeWalker(wrapper, NodeFilter.SHOW_TEXT, null);
    let node: Node | null;
    while ((node = walker.nextNode())) {
      if (node.textContent?.trim()) textNodes.push(node as Text);
    }

    const spanElements: HTMLElement[] = [];
    textNodes.forEach((textNode) => {
      const parent = textNode.parentNode as HTMLElement;
      const text = textNode.textContent || "";
      const frag = document.createDocumentFragment();

      const parts = text.split(/(\s+)/);
      const parentColor = window.getComputedStyle(parent).color;
      const parsed = parseRgbString(parentColor);
      const targetColor = parsed ? `rgb(${parsed.r}, ${parsed.g}, ${parsed.b})` : "#fff";
      const startColor = parsed
        ? `rgba(${parsed.r}, ${parsed.g}, ${parsed.b}, 0.3)`
        : "rgba(255,255,255,0.3)";

      parts.forEach((word) => {
        if (/^\s+$/.test(word)) {
          frag.appendChild(document.createTextNode(word));
        } else {
          const span = document.createElement("span");
          span.textContent = word;
          span.style.display = "inline-block";
          span.style.color = startColor;
          span.dataset.targetColor = targetColor;
          frag.appendChild(span);
          spanElements.push(span);
        }
      });

      parent.replaceChild(frag, textNode);
    });

    gsap.to(spanElements, {
      color: (i, el: HTMLElement) => el.dataset.targetColor || "#fff",
      ease: "none",
      stagger: 0.8,
      scrollTrigger: {
        trigger: wrapper,
        start: "top 75%",
        end: "bottom 70%",
        scrub: true,
        invalidateOnRefresh: true,
      },
    });

    // Refresh after full load
    window.addEventListener("load", () => ScrollTrigger.refresh());
  });

  return (
    <div
      ref={wrapperRef}
      class={local.class}
      style={{
        "white-space": "normal",
        "overflow-wrap": "break-word",
        "line-height": "1.6",
        display: "block",
      }}
      {...rest}
    >
      {local.children}
    </div>
  );
}
