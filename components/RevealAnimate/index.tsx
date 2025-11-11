import { onMount, splitProps, JSX } from "solid-js";
import { Dynamic } from "solid-js/web";

export function RevealWords(
  props: JSX.HTMLAttributes<HTMLElement> & { as?: keyof JSX.IntrinsicElements }
) {
  const [local, rest] = splitProps(props, ["as", "children", "class"]);
  let containerRef!: HTMLElement;

  onMount(async () => {
    const gsapModule = await import("gsap");
    const { ScrollTrigger } = await import("gsap/ScrollTrigger");
    const gsap = gsapModule.gsap || gsapModule.default || gsapModule;

    gsap.registerPlugin(ScrollTrigger);

    const el = containerRef;
    if (!el) return;

    el.style.visibility = "hidden";

    const text =
      typeof local.children === "string"
        ? local.children
        : el.textContent ?? "";

    const words = text.trim().split(/\s+/);
    el.innerHTML = "";

    const innerSpans: HTMLSpanElement[] = [];

    words.forEach((word, i) => {
      const wrapper = document.createElement("span");
      wrapper.style.display = "inline-block";
      wrapper.style.overflow = "hidden";
      wrapper.style.verticalAlign = "bottom";
      wrapper.style.paddingBottom = "0.1em";
      wrapper.style.position = "relative";

      const inner = document.createElement("span");
      inner.textContent = word;
      inner.style.display = "inline-block";
      inner.style.transform = "translateY(110%)";
      inner.style.willChange = "transform";

      wrapper.appendChild(inner);
      el.appendChild(wrapper);

      if (i < words.length - 1) {
        el.appendChild(document.createTextNode(" "));
      }

      innerSpans.push(inner);
    });

    el.style.visibility = "visible";
    el.style.opacity = "1";

    gsap.to(innerSpans, {
      y: "0%",
      duration: 1,
      ease: "power2.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: el,
        start: "top 75%",
        toggleActions: "play reverse play reverse",
        onLeaveBack: () => {
          gsap.set(innerSpans, { y: "100%" });
        },
      },
    });
  });

  return (
    <Dynamic
      component={local.as || "div"}
      ref={containerRef}
      class={`overflow-hidden reveal-hidden ${local.class || ""}`}
      style={{
        display: "inline-block",
        "white-space": "normal",
      }}
      {...rest}
    >
      {local.children}
    </Dynamic>
  );
}
