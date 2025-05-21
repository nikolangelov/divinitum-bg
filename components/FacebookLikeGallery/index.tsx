import { createSignal, JSXElement } from "solid-js";

export function FacebookLikeGallery(props: { imgs: { src: string; alt: string; name: string; reviewtext: string | JSXElement }[] }) {
    const [currentIndex, setCurrentIndex] = createSignal(0);

    return (
        <div class="relative flex flex-col items-center">
            <div class="mb-4 text-center">
                <img
                    loading="lazy"
                    src={props.imgs[currentIndex()].src}
                    alt={props.imgs[currentIndex()].alt}
                    class="max-w-full max-h-[550px] border-2 border-white shadow-md"
                />
                <div class="max-w-550px h-auto">
                    <p class="c-paper text-center mb-1">{props.imgs[currentIndex()].name}</p>
                    <div class="flex justify-center items-center gap-1.5 pb-1">
                        <img loading="lazy" class="w-5 h-5" src="/assets/output-onlinepngtools.png" />
                        <img loading="lazy" class="w-5 h-5" src="/assets/output-onlinepngtools.png" />
                        <img loading="lazy" class="w-5 h-5" src="/assets/output-onlinepngtools.png" />
                        <img loading="lazy" class="w-5 h-5" src="/assets/output-onlinepngtools.png" />
                        <img loading="lazy" class="w-5 h-5" src="/assets/output-onlinepngtools.png" />
                    </div>
                    <p class="c-paper flex justify-center font-size-3.8 md:font-size-4.2 leading-6">{props.imgs[currentIndex()].reviewtext}</p>
                </div>
            </div>

            <div class="flex gap-5 md:gap-6 mt-4 sm:mt-4 lg:mt-4 items-center h-auto">
                {props.imgs.map((img, index) => (
                    <img
                        loading="lazy"
                        src={img.src}
                        alt={img.alt}
                        class={`object-cover cursor-pointer transition-all ${currentIndex() === index
                            ? 'w-20 h-20 md:w-30 md:h-30 outline-solid outline-4 md:outline-8 outline-paper'
                            : 'w-18 h-18 md:w-26 md:h-26 filter-brightness-50'
                            }`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
}