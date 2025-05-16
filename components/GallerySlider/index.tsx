import { Slider, SliderButton, SliderContext, SliderProvider } from "solid-slider";
import { createSignal, onCleanup, onMount, Show, createEffect, useContext } from "solid-js";
import RiPlayMiniLine from '~icons/ri/play-mini-line';
import RiPlayReverseMiniLine from '~icons/ri/play-reverse-mini-line';
import RiCloseFill from '~icons/ri/close-fill';

export const GallerySlider = (props: { buttonClass?: string; imgs: { src: string, alt: string }[] }) => {
  const [isDesktop, setIsDesktop] = createSignal(false);

  const [open, setOpen] = createSignal(false);
  const [currentIndex, setCurrentIndex] = createSignal(0);

  const openGallery = (index: number) => {
    setCurrentIndex(index);
    setOpen(true);
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
        <GallerySliderDesktop imgs={props.imgs} buttonClass={props.buttonClass} />
      ) : (
        <GallerySliderMobile imgs={props.imgs} buttonClass={props.buttonClass} />
      )}
    </>
  );
};

export function DotsUnderSlider(props: { imgs: { src?: string, alt?: string }[] }) {
  const [context] = useContext(SliderContext)
  const [isDesktop, setIsDesktop] = createSignal(false);

  const goToSlide = (index: number) => {
    context().moveTo(index)
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
        <Show when={props.imgs.length > 1}>
          <div class="dots-container" style="text-align: center; margin-top: 20px;">
            {props.imgs.map((_, index) => (
              <button
                onClick={() => goToSlide(index)}
                class={`dot ${context()?.current() === index ? "active" : ""}`}
                style={{ margin: "0 5px", padding: "8px", cursor: "pointer", border: "none", background: context()?.current() === index ? "#7c1d2a" : "#f0f0f0" }}
              ></button>
            ))}
          </div>
        </Show>
      ) : (
        <Show when={props.imgs.length > 1}>
          <div class="dots-container" style="text-align: center; margin-top: 5px;">
            {props.imgs.map((_, index) => (
              <button
                onClick={() => goToSlide(index)}
                class={`dot ${context()?.current() === index ? "active" : ""}`}
                style={{ margin: "0 3px", padding: "5px", cursor: "pointer", border: "none", background: context()?.current() === index ? "#7c1d2a" : "#f0f0f0" }}
              ></button>
            ))}
          </div>
        </Show>
      )}
    </>
  )
}

const GallerySliderDesktop = (props: { buttonClass?: string; imgs: { src: string, alt: string }[] }) => {
  const [open, setOpen] = createSignal(false);
  const [currentIndex, setCurrentIndex] = createSignal(0);

  const openGallery = (index: number) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <>
      <SliderProvider>
        <div class="max-w-1300px m-auto position-relative hidden md:block cursor-pointer">
          <Slider
            options={{ loop: true, initial: currentIndex(), slides: { perView: 3.3, spacing: 20 } }}
          >
            {props.imgs.map((e, index) => (
              <img
                src={e.src}
                alt={e.alt}
                class="object-contain w-full h-full"
                onClick={() => openGallery(index)}
              />
            ))}
          </Slider>

          <SliderButton class="bg-transparent b-none cursor-pointer position-absolute top-45% right-0 lg-right--15 bg-transparent b-none" next>
            <RiPlayMiniLine class="lg:ml-15 xl:-ml-2 font-size-10 b-solid b-3px p-1 c-paper bg-brand-compliment hover-bg-transparent hover-b-brand-compliment transition-colors b-brand-compliment hover-c-brand-compliment" />
          </SliderButton>

          <SliderButton class="bg-transparent b-none cursor-pointer position-absolute top-45% left-0 lg-left--15 bg-transparent b-none" prev>
            <RiPlayReverseMiniLine class="lg:mr-15 xl:-mr-2 font-size-10 b-solid b-3px p-1 c-paper bg-brand-compliment hover-bg-transparent hover-b-brand-compliment transition-colors b-brand-compliment hover-c-brand-compliment" />
          </SliderButton>
        </div>
        <DotsUnderSlider imgs={props.imgs} />
      </SliderProvider>

      <Show when={open()}>
        <SliderProvider>
          <div class="bg-paper-inv bg-opacity-85 z-9999 hidden md:block fixed">
            <div class="fixed top-0 left-0 w-full h-full m-auto bg-paper-inv px-10 flex flex-justify-center">
              <Slider options={{ loop: true, initial: currentIndex() }}>
                {props.imgs.map((e) => (
                  <img src={e.src} alt={e.alt} class="object-contain w-full h-full" />
                ))}
              </Slider>
              <RiCloseFill onClick={() => setOpen(false)} class="hover:rotate-90 transition-all z-2 w-16 h-16 absolute top-0 right-0 mr-8 mt-8 p-2 bg-transparent c-brand-compliment cursor-pointer hover-color-paper:hover" />
              <SliderButton class="cursor-pointer position-absolute top-50% left-20 bg-transparent b-none" prev>
                <RiPlayReverseMiniLine class="font-size-10 b-solid b-3px p-1 c-paper bg-brand-compliment hover-bg-transparent hover-b-brand-compliment transition-colors b-brand-compliment hover-c-brand-compliment" />
              </SliderButton>
              <SliderButton class="cursor-pointer position-absolute top-50% right-20 bg-transparent b-none" next>
                <RiPlayMiniLine class="font-size-10 b-solid b-3px p-1 c-paper bg-brand-compliment hover-bg-transparent hover-b-brand-compliment transition-colors b-brand-compliment hover-c-brand-compliment" />
              </SliderButton>
            </div>
          </div>
        </SliderProvider>
      </Show>
    </>
  );
};

const GallerySliderMobile = (props: { buttonClass?: string; imgs: { src: string, alt: string }[] }) => {
  const [open, setOpen] = createSignal(false);
  const [currentIndex, setCurrentIndex] = createSignal(0);

  const openGallery = (index: number) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <>
      <SliderProvider>
        <div class="max-w-1100px m-auto position-relative md:hidden block mx-4">
          <Slider options={{ loop: true, initial: currentIndex(), slides: { perView: 1.3, spacing: 20 } }}>
            {props.imgs.map((e, index) => (
              <img
                src={e.src}
                alt={e.alt}
                class="object-contain w-full h-full"
                onClick={() => openGallery(index)}
              />
            ))}
          </Slider>

          <SliderButton next class="hidden bg-transparent b-none cursor-pointer position-absolute top-47% right-0 bg-transparent b-none">
            <RiPlayMiniLine class="-ml-1 font-size-7 b-solid b-2px p-1 c-brand-compliment b-brand-compliment important-hover-c-paper hover-bg-brand-compliment hover-b-brand-compliment transition-colors" />
          </SliderButton>
          <SliderButton prev class="hidden bg-transparent b-none cursor-pointer position-absolute top-47% left-0 bg-transparent b-none">
            <RiPlayReverseMiniLine class="-mr-1 font-size-7 b-solid b-2px p-1 c-brand-compliment b-brand-compliment important-hover-c-paper hover-bg-brand-compliment hover-b-brand-compliment transition-colors" />
          </SliderButton>
        </div>
        <DotsUnderSlider imgs={props.imgs} />
      </SliderProvider>

      <Show when={open()}>
        <SliderProvider>
          <div class="bg-paper-inv bg-opacity-85 z-9999 h-full md:hidden block fixed">
            <div class="fixed top-0 left-0 w-full h-full m-auto bg-paper-inv px-5 flex flex-items-center flex-justify-center">
              <Slider options={{ loop: true, initial: currentIndex() }}>
                {props.imgs.map((e) => (
                  <img src={e.src} alt={e.alt} class="object-contain w-full h-full" />
                ))}
              </Slider>

              <RiCloseFill
                onClick={() => setOpen(false)}
                class="hover:rotate-90 transition-all z-2 w-12 h-12 absolute top-0 right-0 mr-2 mt-10 p-2 bg-transparent c-brand-compliment cursor-pointer hover-color-paper:hover"
              />

              <SliderButton class="cursor-pointer position-absolute top-50% left-0 bg-transparent b-none" prev>
                <RiPlayReverseMiniLine class="ml-4 font-size-7 b-solid b-2px p-1 c-brand-compliment b-brand-compliment hover-c-paper hover-bg-brand-compliment hover-b-brand-compliment transition-colors" />
              </SliderButton>

              <SliderButton class="cursor-pointer position-absolute top-50% right-0 bg-transparent b-none" next>
                <RiPlayMiniLine class="mr-4 font-size-7 b-solid b-2px p-1 c-brand-compliment b-brand-compliment hover-c-paper hover-bg-brand-compliment hover-b-brand-compliment transition-colors" />
              </SliderButton>
            </div>
          </div>
        </SliderProvider>
      </Show>
    </>
  );
};
