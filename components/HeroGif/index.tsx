
import { createSignal, onMount } from "solid-js";

export const HeroGif = (props: {
  class?: string;
  gifPreview: string;
  gifPreviewMobile: string;
}) => {
  const [isMobile, setIsMobile] = createSignal(false);

  onMount(() => {
    setIsMobile(window.innerWidth < 768);
  });

  return (
    <div
      class={`relative w-full h-100vh md:h-110vh overflow-hidden ${props.class || ""}`}>

      <div class="absolute inset-0 bg-black z-0" />

      <video
        src={isMobile() ? props.gifPreviewMobile : props.gifPreview}
        class="w-full h-full object-cover z-10 relative object-[center_20%]"
        autoplay
        muted
        loop
        playsinline
        preload="auto"
        style={`
          -webkit-mask-image: linear-gradient(to bottom, black 20%, transparent 100%);
          mask-image: linear-gradient(to bottom, black 20%, transparent 100%);
        `}
      />

      <div class="absolute inset-0 bg-black/40 z-20 pointer-events-none" />
    </div>
  );
};