import { createSignal, JSX, JSXElement, onCleanup, onMount, Show, useContext } from 'solid-js';
import range from "lodash/range"
import { Slider, SliderButton, SliderContext, SliderProvider } from "solid-slider";
import RiPlayMiniLine from '~icons/ri/play-mini-line';
import RiPlayReverseMiniLine from '~icons/ri/play-reverse-mini-line';

function DotsUnderSlider(props: { reviews: { name: string }[] }) {
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
                <div class="dots-container" style="text-align: center; margin-bottom: 40px;">
                    {props.reviews.map((review, index) => (
                        <button
                            onClick={() => goToSlide(index)}
                            class={`dot ${context()?.current() === index ? "active" : ""}`}
                            style={{ margin: "0 5px", padding: "8px", cursor: "pointer", border: "none", background: context()?.current() === index ? "#7c1d2a" : "#f0f0f0" }}
                            title={review.name}
                        >
                        </button>
                    ))}
                </div>
            ) : (
                <div class="dots-container" style="text-align: center; margin-bottom: 30px;">
                    {props.reviews.map((review, index) => (
                        <button
                            onClick={() => goToSlide(index)}
                            class={`dot ${context()?.current() === index ? "active" : ""}`}
                            style={{ margin: "0 3px", padding: "5px", cursor: "pointer", border: "none", background: context()?.current() === index ? "#7c1d2a" : "#f0f0f0" }}
                            title={review.name}
                        >
                        </button>
                    ))}
                </div>
            )}
        </>
    );
}

export const ReviewSlider = (props: { reviews: { name: string }[]; children: JSX.Element | JSX.Element[] }) => {
    const isDesktop = useMediaQuery("(min-width: 768px)");

    return (
        <SliderProvider>
            {isDesktop() ? (
                <div class="max-w-1000px mx-auto position-relative hidden md:block my-0">
                    <Slider options={{ loop: true, slides: { perView: 2.2, spacing: 15 } }}>
                        {props.children}
                    </Slider>
                    <SliderButton class="cursor-pointer position-absolute top-45% left--15 bg-transparent b-none" prev>
                        <RiPlayReverseMiniLine class="md-ml-14 bg-brand-compliment c-paper b-brand-compliment lg--ml-2 font-size-10 b-solid b-3px p-1 hover:c-brand-compliment hover-bg-transparent hover-b-brand-compliment transition-colors" />
                    </SliderButton>
                    <SliderButton class="cursor-pointer position-absolute top-45% right--15 bg-transparent b-none" next>
                        <RiPlayMiniLine class="md-mr-14 bg-brand-compliment c-paper b-brand-compliment lg--mr-2 font-size-10 b-solid b-3px p-1 hover:c-brand-compliment hover-bg-transparent hover-b-brand-compliment transition-colors" />
                    </SliderButton>
                </div>
            ) : (
                <div class="max-w-1000px m-auto position-relative md:hidden block mx-4">
                    <Slider options={{ loop: true, slides: { perView: 1.2, spacing: 10 } }}>
                        {props.children}
                    </Slider>
                    <SliderButton class="hidden cursor-pointer position-absolute top-47% left-0 bg-transparent b-none" prev>
                        <RiPlayReverseMiniLine class="-ml-1 font-size-7 b-solid b-2px p-1 c-paper b-brand-compliment hover-c-brand-compliment bg-brand-compliment hover-bg-transparent hover-b-brand-compliment transition-colors" />
                    </SliderButton>
                    <SliderButton class="hidden cursor-pointer position-absolute top-47% right-0 bg-transparent b-none" next>
                        <RiPlayMiniLine class="-mr-1 font-size-7 b-solid b-2px p-1 c-paper b-brand-compliment hover-c-brand-compliment bg-brand-compliment hover-bg-transparent hover-b-brand-compliment transition-colors" />
                    </SliderButton>
                </div>
            )}
            <DotsUnderSlider reviews={props.reviews} />
        </SliderProvider>
    );
};

export function StarReview(props: { src: string; stars: number; hrefGoogleReview: string; name: string; date: string; reviewText: string | JSXElement; }) {
    return (
        <a class="mb-2 md:mb-5 mt-0 m-auto px-2 md:px-8 py-10 bg-paper" target="_blank" rel="noopener" href={props.hrefGoogleReview}>
            <div class="flex flex-justify-center flex-items-center">
                <div class="flex flex-col flex-justify-center flex-items-center">
                    <div class="flex flex-justify-center flex-items-center">
                        <img class="w-10 h-10 mx-auto" style="filter: saturate(130%);" src={props.src} alt="profile" />
                    </div>
                    <div class="important-text-center py-7 lg-px-0 px-3 font-300 font-size-4.3 md-font-size-4.5 line-height-7 lg-line-height-8" style="font-family:'Roboto', sans-serif; text-align: left;">{props.reviewText}</div>
                    <div class="">
                        {range(props.stars).map((_: any) => <img class="m-r-2 w-5" style="filter: saturate(14);" src="/assets/google-star-review-logo-e1706350894182.png" alt="star" />)}
                        {range(5 - props.stars).map((_: any) => <img class="w-5 m-r-2" style="filter: saturate(14);" src="/assets/output-onlinepngtools-e1707480352597.png" alt="star" />)}
                    </div>
                    <p class="flex flex-col flex-justify-center flex-items-center mb-0 mt-0"><b>{props.name}</b>{props.date}</p>
                </div>
            </div>
        </a>
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