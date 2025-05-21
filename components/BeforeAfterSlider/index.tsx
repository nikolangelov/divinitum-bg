import { Slider, SliderButton, SliderContext, SliderProvider } from "solid-slider";
import { createSignal, JSX, onCleanup, onMount, Show, useContext } from "solid-js";
import RiPlayMiniLine from '~icons/ri/play-mini-line';
import RiPlayReverseMiniLine from '~icons/ri/play-reverse-mini-line';

const [disableSliderDrag, setDisableSliderDrag] = createSignal(false);

export function DotsUnderSlider(props: { services: { title: string }[] }) {
  const [context] = useContext(SliderContext);
  const [isDesktop, setIsDesktop] = createSignal(false);

  const goToSlide = (index: number) => {
    context().moveTo(index);
  };

  onMount(() => {
    const checkMediaQuery = () => setIsDesktop(window.matchMedia("(min-width: 768px)").matches);
    checkMediaQuery();
    window.addEventListener("resize", checkMediaQuery);
    onCleanup(() => window.removeEventListener("resize", checkMediaQuery));
  });

  return (
    <>
      {isDesktop() ? (
        <div class="dots-container" style="text-align: center; margin-top: 20px;">
          {props.services.map((service, index) => (
            <button
              onClick={() => goToSlide(index)}
              class={`dot ${context()?.current() === index ? "active" : ""}`}
              style={{ margin: "0 5px", padding: "8px", cursor: "pointer", border: "none", background: context()?.current() === index ? "#7c1d2a" : "#f0f0f0" }}
              title={service.title}
            >
            </button>
          ))}
        </div>
      ) : (
        <div class="dots-container" style="text-align: center; margin-top: 5px;">
          {props.services.map((service, index) => (
            <button
              onClick={() => goToSlide(index)}
              class={`dot ${context()?.current() === index ? "active" : ""}`}
              style={{ margin: "0 3px", padding: "5px", cursor: "pointer", border: "none", background: context()?.current() === index ? "#7c1d2a" : "#f0f0f0" }}
              title={service.title}
            >
            </button>
          ))}
        </div>
      )}
    </>
  );
}

export const BeforeAfterSlider = ({ children, buttonClass, ...props }: { children: JSX.Element | JSX.Element[], buttonClass?: string, services: { title: string }[] }) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
      <SliderProvider>
          {isDesktop() ? (
              <div class="max-w-1300px mx-auto position-relative hidden md:block my-0">
                  <Slider options={{ loop: true, slides: { perView: 3.3, spacing: 15 } }}>
                      {children}
                  </Slider>
                  <SliderButton class="cursor-pointer position-absolute top-45% left--15 bg-transparent b-none" prev>
                      <RiPlayReverseMiniLine class="lg:mr-15 xl:-mr-2 font-size-10 b-solid b-3px p-1 c-paper bg-brand-compliment hover-bg-transparent hover-b-brand-compliment transition-colors b-brand-compliment hover-c-brand-compliment" />
                  </SliderButton>
                  <SliderButton class="cursor-pointer position-absolute top-45% right--15 bg-transparent b-none" next>
                      <RiPlayMiniLine class="lg:ml-15 xl:-ml-2 font-size-10 b-solid b-3px p-1 c-paper bg-brand-compliment hover-bg-transparent hover-b-brand-compliment transition-colors b-brand-compliment hover-c-brand-compliment" />
                  </SliderButton>
              </div>
          ) : (
              <div class="max-w-1100px m-auto position-relative md:hidden block mx-4">
                  <Slider options={{ loop: true, drag: false, slides: { perView: 1.3, spacing: 10 } }}>
                      {children}
                  </Slider>
                  <SliderButton class="cursor-pointer position-absolute top-100% mt-1 left-0 bg-transparent b-none" prev>
                      <RiPlayReverseMiniLine class="-ml-1 font-size-7 b-solid b-2px p-1 c-paper b-brand-compliment hover-c-brand-compliment bg-brand-compliment hover-bg-transparent hover-b-brand-compliment transition-colors" />
                  </SliderButton>
                  <SliderButton class="cursor-pointer position-absolute top-100% mt-1 right-0 bg-transparent b-none" next>
                      <RiPlayMiniLine class="-mr-1 font-size-7 b-solid b-2px p-1 c-paper b-brand-compliment hover-c-brand-compliment bg-brand-compliment hover-bg-transparent hover-b-brand-compliment transition-colors" />
                  </SliderButton>
              </div>
          )}
          <DotsUnderSlider services={props.services} />
      </SliderProvider>
  );
};

interface BeforeAfterSliderProps {
  before: string;
  after: string;
  altBefore: string;
  altAfter: string;
}

export function BeforeAfterSliderContainer(props: BeforeAfterSliderProps) {
  const [sliderPos, setSliderPos] = createSignal(50);
  let containerRef: HTMLDivElement | undefined;

  let isDraggingDivider = false;
  const dividerThresholdPx = 30;

  const getClientX = (e: PointerEvent) => e.clientX;

  const updatePosition = (e: PointerEvent) => {
    if (!containerRef) return;
    const rect = containerRef.getBoundingClientRect();
    const clientX = getClientX(e);
    const offset = clientX - rect.left;
    const percentage = Math.max(0, Math.min((offset / rect.width) * 100, 100));
    setSliderPos(percentage);
  };

  const startDrag = (e: PointerEvent) => {
    if (!containerRef) return;
    const rect = containerRef.getBoundingClientRect();
    const clientX = getClientX(e);
    const offset = clientX - rect.left;
    const currentDividerX = (sliderPos() / 100) * rect.width;
  
    const distanceToDivider = Math.abs(offset - currentDividerX);
  
    if (distanceToDivider <= dividerThresholdPx) {
      isDraggingDivider = true;
      setDisableSliderDrag(true); // 🔑 LOCK slider drag
      e.preventDefault();
      e.stopPropagation();
      updatePosition(e);
  
      const move = (e: PointerEvent) => {
        if (isDraggingDivider) {
          e.preventDefault();
          e.stopPropagation();
          updatePosition(e);
        }
      };
  
      const stop = () => {
        isDraggingDivider = false;
        setDisableSliderDrag(false); // 🔓 UNLOCK slider drag
        window.removeEventListener("pointermove", move);
        window.removeEventListener("pointerup", stop);
      };
  
      window.addEventListener("pointermove", move, { passive: false });
      window.addEventListener("pointerup", stop);
    }
  };
  

  return (
    <div
      ref={containerRef}
      class="relative w-full max-w-3xl aspect-4/5 overflow-hidden"
      onPointerDown={(e) => {
        if (!containerRef) return;
        const rect = containerRef.getBoundingClientRect();
        const clientX = e.clientX;
        const offset = clientX - rect.left;
        const currentDividerX = (sliderPos() / 100) * rect.width;

        const distanceToDivider = Math.abs(offset - currentDividerX);

        if (distanceToDivider <= dividerThresholdPx) {
          e.preventDefault();
          e.stopPropagation();
          startDrag(e);
        }
      }}
      style={{
        "touch-action": "none",
      }}
    >
      <img loading="lazy" src={props.after} alt={props.altAfter || "After"} class="absolute inset-0 w-full h-full object-cover" />
      <img loading="lazy" src={props.before} alt={props.altBefore || "Before"} class="absolute inset-0 w-full h-full object-cover"
        style={{
          "clip-path": `inset(0 ${100 - sliderPos()}% 0 0)`
        }}
      />
      
      <div
        class="absolute top-0 bottom-0 z-10"
        style={{
          left: `${sliderPos()}%`,
          transform: "translateX(-50%)",
        }}
      >
        <div class="w-1 bg-white h-full shadow-md"></div>
        <div class="cursor-ew-resize resizer absolute top-45% left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded shadow"></div>
      </div>
    </div>
  );
}

function useMediaQuery(query: string) {
  const [matches, setMatches] = createSignal(false);

  onMount(() => {
      if (typeof window !== "undefined") {
          const mediaQueryList = window.matchMedia(query);
          setMatches(mediaQueryList.matches);

          const handleChange = (event: MediaQueryListEvent) => {
              setMatches(event.matches);
          };

          mediaQueryList.addEventListener('change', handleChange);

          onCleanup(() => {
              mediaQueryList.removeEventListener('change', handleChange);
          });
      }
  });

  return matches;
}