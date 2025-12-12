import { createSignal, JSX, JSXElement, onCleanup, onMount, useContext } from 'solid-js';
import { Slider, SliderContext, SliderProvider } from "solid-slider";

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
                <div class="dots-container relative" style="text-align: center; margin-bottom: 10px;">
                    {props.reviews.map((review, index) => (
                        <button
                            onClick={() => goToSlide(index)}
                            class={`dot ${context()?.current() === index ? "active" : ""}`}
                            style={{ margin: "0 6px", padding: "5px", cursor: "pointer", border: "none", "border-radius": "50px", background: context()?.current() === index ? "#ffffffff" : "#646464ff" }}
                            title={review.name}
                        >
                        </button>
                    ))}
                </div>
            ) : (
                <div class="dots-container relative" style="text-align: center; margin-top: 10px;">
                    {props.reviews.map((review, index) => (
                        <button
                            onClick={() => goToSlide(index)}
                            class={`dot ${context()?.current() === index ? "active" : ""}`}
                            style={{ margin: "0 5px", padding: "4px", cursor: "pointer", border: "none", "border-radius": "50px", background: context()?.current() === index ? "#ffffffff" : "#646464ff" }}
                            title={review.name}
                        >
                        </button>
                    ))}
                </div>
            )}
        </>
    );
}

export const SliderOfOne = (props: {
    reviews: { name: string }[];
    children: JSX.Element | JSX.Element[];
}) => {
    const { reviews, children } = props;
    const isDesktop = useMediaQuery("(min-width: 768px)");

    return (
        <SliderProvider>
            {isDesktop() ? (
                <div class="max-w-1500px mx-auto position-relative hidden md:block my-0">
                    <Slider options={{ loop: false, slides: { perView: 2, spacing: 15 } }}>
                        {children}
                    </Slider>
                </div>
            ) : (
                <div class="max-w-900px m-auto position-relative md:hidden block">
                    <Slider options={{ loop: false, slides: { perView: 1, spacing: 10 } }}>
                        {children}
                    </Slider>
                </div>
            )}
            <DotsUnderSlider reviews={reviews} />
        </SliderProvider>
    );
};

export function ImageReview(props: { name: string | JSXElement; reviewText: string | JSXElement; img: string; case: string; }) {
    return (
        <div class="md:ml-0 mb-2 md:mb-5 mt-0 m-auto px-2 md:px-8 md:pb-10 pb-20">
            <div class="flex flex-col justify-center items-start lg:items-center">
                <div class="flex flex-row flex-justify-center flex-items-start gap-3">
                    <div class="flex flex-justify-center flex-items-center relative">
                        <img
                            class="w-170px sm:w-220px md:w-300px h-auto mx-auto"
                            style="filter: saturate(130%);"
                            src={props.img}
                            alt="profile"
                        />
                        <div class="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-black/80 to-transparent rounded-b" />
                    </div>

                    <p class="c-paper leading-4 md:leading-6 font-[] mb-0 mt-0 font-size-12px md:font-size-18px">{props.name}</p>
                </div>
                <div class="w-full flex justify-center items-center ml-7 md:ml-40 mt--20 lg:mt--40">
                    <div class="max-w-400px lg:max-w-600px c-paper py-7 tracking--0.2 font-size-6 md:font-size-13 line-height-7 md:line-height-12">"{props.reviewText}"</div>
                </div>
                <div class="pt-5 max-w-500px lg:max-w-600px c-gray-200 font-size-20px leading-7">
                    {props.case}
                </div>
            </div>
        </div>
    );
}

export function BasicReview(props: { name: string | JSXElement; reviewText: string | JSXElement; job: string | JSXElement; }) {
    return (
        <div class="mb-2 md:mb-5 mt-0 m-auto md:px-8 pt-10 md:pb-10 pb-20">
            <div class="flex flex-col justify-center">
                <div class="w-full flex justify-center lg:justify-start items-center">
                    <div class="max-w-500px font-600 c-paper tracking--0.2 font-size-20px md:font-size-25px tracking-0.5px line-height-7 lg:line-height-7.5">“{props.reviewText}“</div>
                </div>
                <div class="flex flex-col gap-2 lg:gap-1 mt-10">
                    <p class="c-paper leading-4 md:leading-6 font-600 c-brand-second-hover mb-0 mt-0 font-size-15px lg:font-size-17px">{props.name}</p>
                    <p class="c-paper leading-4 md:leading-5 c-gray-300 mb-0 mt-0 font-size-12px lg:font-size-14px">{props.job}</p>
                </div>
            </div>
        </div>
    );
}

export function ImagewTextReview(props: {
    reviewText: string | JSX.Element;
    img?: string;
    video?: string;
    reviewTitle: string | JSX.Element;
    class2?: string;
}) {
    return (
        <div class="md:mb-5 mt-0 m-auto px-0 md:px-8 pt-10 md:pb-10">
            <div class="flex flex-col justify-center items-center">
                {props.video ? (
                    <video
                        class="w-full h-auto mx-auto"
                        src={props.video}
                        autoplay
                        muted
                        loop
                        playsinline
                        preload="auto"
                        disablepictureinpicture
                        controls={false}
                        style={{ "object-fit": "cover" }}
                    />
                ) : (
                    <img
                        class="w-full h-auto mx-auto"
                        src={props.img}
                        alt="review media"
                    />
                )}
            </div>
            <div class="w-full">
                <div
                    class={`max-w-500px c-paper pt-15 uppercase font-600 font-size-24px md-font-size-8 line-height-10 lg-line-height-11 ${props.class2 ?? ""
                        }`}
                >
                    {props.reviewTitle}
                </div>
                <div class="important-shadow-lg max-w-500px c-paper font-size-16px md:font-size-4 leading-6">
                    {props.reviewText}
                </div>
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