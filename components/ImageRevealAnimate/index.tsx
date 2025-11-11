import { onMount, splitProps, JSX } from "solid-js";

interface ImageRevealProps extends JSX.ImgHTMLAttributes<HTMLImageElement> {
  img: string;
}

export function ImageReveal(props: ImageRevealProps) {
  const [local, rest] = splitProps(props, ["class", "img", "alt"]);
  let wrapperRef!: HTMLDivElement;
  let imgRef!: HTMLImageElement;

  onMount(async () => {
    // Lazy-load GSAP and ScrollTrigger
    const { gsap } = await import("gsap");
    const { ScrollTrigger } = await import("gsap/ScrollTrigger");
    gsap.registerPlugin(ScrollTrigger);

    if (!wrapperRef || !imgRef) return;

    // Initial state — hidden below the mask
    gsap.set(imgRef, {
      yPercent: 100,
      scale: 1.05,
      opacity: 0,
      willChange: "transform, opacity",
    });

    // Scroll animation
    gsap.to(imgRef, {
      yPercent: 0,
      scale: 1,
      opacity: 1,
      ease: "power3.out",
      duration: 1.2,
      scrollTrigger: {
        trigger: wrapperRef,
        start: "top 75%", // when the top of the element hits 85% of viewport height
        end: "bottom 20%", // until it leaves the viewport
        toggleActions: "play reverse play reverse", // replay on scroll in/out
        scrub: false, // set to true if you want animation tied to scroll speed
      },
    });
  });

  return (
    <div
      ref={wrapperRef}
      class={`relative overflow-hidden ${local.class || ""}`}
      style={{
        display: "block",
        "will-change": "transform",
      }}
    >
      <img
        ref={imgRef}
        src={local.img}
        alt={local.alt || ""}
        class="block w-full h-auto object-cover"
        {...rest}
      />
    </div>
  );
}
