import { Slider, SliderButton, SliderContext, SliderProvider } from "solid-slider";
import { AnimatedComponent } from "../../components/AnimateOnView";
import { H2WithImage } from "../../components/H2WithImage";
import RiPlayMiniLine from '~icons/ri/play-mini-line';
import RiPlayReverseMiniLine from '~icons/ri/play-reverse-mini-line';
import { createEffect, createSignal, JSX, JSXElement, onCleanup, onMount, useContext } from "solid-js";
import { DotsUnderSlider } from "../../components/BeforeAfterSlider";
import { ImageWithFrameReview, ImageWithFrameReviewSlider, QuotationReview } from "../(main)/otzivi/+Page";
import { ReviewSlider, StarReview } from "../../components/ReviewSlider";
import MdiCheckboxMarkedOutline from '~icons/mdi/checkbox-marked-outline';
import MdiProgressClock from '~icons/mdi/progress-clock';
import RiShining2Line from '~icons/ri/shining-2-line';
import MdiPlus from '~icons/mdi/plus';
import MdiCloseThick from '~icons/mdi/close-thick';
import emailjs from '@emailjs/browser';
import confetti from "canvas-confetti";
import RiFacebookFill from '~icons/ri/facebook-fill';
import RiInstagramLine from '~icons/ri/instagram-line';

const JSONLDScript = () => {
	createEffect(() => {
		const script = document.createElement("script");
		script.type = "application/ld+json";
		script.text = JSON.stringify({
			"@context": "https://schema.org",
			"@type": "LocalBusiness",
			"name": "The Barber Shop Sofia",
			"description": "The Barber Shop Sofia е нещо повече от просто бръснарница. Това е Вашето спокойно място, където можете да се откъснете за малко от ежедневието. Да спрете и да си поемете въздух, докато някой се погрижи за отличния Ви външен вид.",
			"url": "https://thebarbershop.bg/kurs-za-brasnar",
			"logo": "https://thebarbershop.bg/assets/za-nas/the-barber-shop-sofia-2_result_result.webp",
			"telephone": "+359 88 282 0331",
			"address": {
				"@type": "PostalAddress",
				"streetAddress": "ул. “Алдомировска” 77",
				"addressLocality": "София",
				"addressCountry": "BG"
			},
			"aggregateRating": {
				"@type": "AggregateRating",
				"ratingValue": "4.8",
				"bestRating": "5",
				"worstRating": "1",
				"ratingCount": "610"
			}
		}
		);
		document.head.appendChild(script);
	});

	return null; // This component doesn't need to render anything visible
};

export const VideoPlayer = (props: { src: string }) => {
	let videoRef: HTMLVideoElement | undefined;

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (videoRef) {
						if (entry.isIntersecting) {
							if (!videoRef.src) {
								videoRef.src = props.src;
							}
							videoRef.play().catch(() => { });
						} else {
							videoRef.pause();
						}
					}
				});
			},
			{ threshold: 0.4 }
		);

		if (videoRef) observer.observe(videoRef);

		onCleanup(() => {
			observer.disconnect();
		});
	});

	return (
		<div class="flex justify-center items-center mt-0 lg:mt-20 max-w-[1400px] mx-auto">
			<video
				ref={(el) => (videoRef = el)}
				class="w-full h-100% sm:h-[600px] md:h-[600px] lg:h-[700px] xl:h-[750px] bg-transparent sm:bg-black px-10px sm:px-0"
				controls
				muted
				autoplay
				playsinline
				preload="none"
			/>
		</div>
	);
};

function Collapse(props: { title: string; desc: string; children?: JSXElement }) {
	const [isExpanded, setIsExpanded] = createSignal(false);

	return (
		<div class="relative b-rd-14px overflow-hidden z-1 FAQ-wrapper w-full max-w-[850px] mx-auto">
			<div
				class={`relative z-1 transition-all duration-600 important-outline-none w-full ${isExpanded() ? 'b-none bg-transparent' : ''}`}
				style={isExpanded() ? 'transition: all 0.3s ease-in-out;' : ''}
			>
				<button
					onClick={() => setIsExpanded(!isExpanded())}
					class={`cursor-pointer important-b-none important-outline-none flex items-center justify-between w-full font-semibold text-lg py-3 md-px-6 focus:outline-none transition-all duration-700 ${isExpanded() ? 'bg-transparent' : 'bg-transparent'}`}
				>
					<div class="flex items-center justify-between w-full pb-30px" style="border-bottom: 1px solid rgba(107, 81, 81, 0.3);">
						<div class="flex items-center justify-between">
							<RiShining2Line class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-20px h-20px mr-5" />
							<span class="w-full md-max-w-full md-line-height-34px line-height-24px font-size-14px md-font-size-20px uppercase font-500 -tracking-0.2px  border-b border-gray-500 hover-c-brand-dark transition-colors"
								style="font-family: 'Oswald', sans-serif !important;">
								{props.title}
							</span>
						</div>
						<div class="flex flex-self-center flex-justify-center">
							<MdiPlus class={`text-brand-dark w-8 h-8 transition-transform duration-700 mx-2 ${isExpanded() ? 'rotate-135deg' : ''}`} />
						</div>
					</div>
				</button>
				<div
					class={`mt-0 px-6 text-gray-600 leading-relaxed bg-transparent overflow-hidden transition-all duration-700 w-full ${isExpanded() ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
				>
					<p class="mt-3 font-400 font-size-4 md-font-size-4.8 tracking--0.1px w-full">
						{props.desc}
						{props.children}
					</p>
				</div>
			</div>
		</div>
	);
}

function SingleCollapse() {

	return (
		<>
			<div class="flex flex-col gap-5 md-gap-2 cursor-pointer max-w-1200px mx-auto px-3">
				<Collapse title="Какво ще научите по време на курса за бръснари?" desc="По време на обучението ще се научите да: " >
					<div class="ml--7">
						<ul>
							<li class="">
								Правите класическо и модерно подстригване;
							</li>
							<li class="">
								Оформяте брада професионално;
							</li>
							<li class="">
								Използвате правилно всички бръснарски инструменти;
							</li>
							<li class="">
								Комуникирате уверено с клиенти;
							</li>
							<li class="">
								Научите как да създавате и задържате нови клиенти;
							</li>
							<li class="">
								Работите в реална среда;
							</li>
						</ul>
					</div>
				</Collapse>

				<Collapse title="Какво включва практиката?" desc="">
					<div class="ml--7">
						<ul>
							<li class="">
								Работа с машинка и ножици
							</li>
							<li class="">
								Fade техники (low, mid, high, skin fade, taper, burst)
							</li>
							<li class="">
								Оформяне и подрязване на къса и дълга брада
							</li>
							<li class="">
								Бръснене с бръснач
							</li>
							<li class="">
								Провеждане на консултация с клиента
							</li>
							<li class="">
								Финално стилизиране
							</li>
							<li class="">
								Диагностициране на основни състояния и проблеми със скалпа и косата
							</li>
						</ul>
					</div>
				</Collapse>

				<Collapse title="Има ли възрастови ограничения за участие в бръснарските курсове?" desc="Курсът е достъпен и за непълнолетни лица, като за тях е необходимо подписано съгласие от родител или настойник." />

				<Collapse title="Необходимо ли е курсистът да носи нещо за уроците по бръснарство?" desc="Необходимо е единствено да носите здравна книжка." />

				<Collapse title="Осигурявате ли някакви материали по време на обучението за бръснар? Ако да, какви?" desc="Инструментите за работа по време на курсовете за мъжко подстригване се предоставят от академията за бръснари за временно ползване. Осигуряваме учебни глави (кукли) за първите уроци, консумативи като перелини, ножчета за бръснене, продукти за стилизиране и др." >
					<div class="mt-4">
						В случай, че желаете да закупите свои лични инструменти, преподавателят ще Ви съдейства с избора на подходящи такива.
					</div>
				</Collapse>

				<Collapse title="Искам да се запиша на уроци по бръснарство, как мога да го направя?" desc="" >
					<div class="ml--7">
						<ul>
							<li class="">
								През сайта
							</li>
							<li class="">
								На място в The Barber Shop Sofia – гр. София, ул. "Николай Хайтов" 2
							</li>

							<li class="">
								<div class="flex justify-start items-center">
									През социалните мрежи
									<div class="flex justify-center items-center ml-2 mt-2">
										<a href="https://www.facebook.com/TheBarberShopSofia/?locale=en_GB" target="_blank" rel="noopener">
											<RiFacebookFill class="my-auto w-8 h-8 sm:w-9 sm:h-9 c-paper-inv hover-c-paper transition-colors p-1" />
										</a>
										<a href="https://www.instagram.com/the.barber.shop.sofia/?__d=1%3Futm_source%3Dig_embed" target="_blank" rel="noopener">
											<RiInstagramLine class="my-auto w-8 h-8 sm:w-9 sm:h-9 c-paper-inv hover-c-paper transition-colors p-1" />
										</a>
									</div>
								</div>
							</li>

							<li class="">
								По телефона: +359 882820331
							</li>
						</ul>
					</div>
					<div>
						След като се свържете с нас ще получите подробна информация за обучението за бръснар, след като се запознаете с детайлите е необходимо да запазите своето място чрез депозит.
					</div>
				</Collapse>

				<Collapse title="Предлагате ли разсрочено плащане или отстъпки за бръснарската академия?" desc="Да! Ако се запишете до две седмици преди началото на курса, получавате отстъпка от 300 лв., т.е. вместо 2500 лв., плащате само 2200 лв." >
					<div class="mt-4">
						Ако предпочитате разсрочено плащане, можете да вземете курса на 3, 6 или 12 вноски без оскъпяване чрез партньорството ни с TBI Bank. Одобрението отнема само няколко минути, няма скрити такси и можете да стартирате веднага след потвърждение.
					</div>
				</Collapse>
			</div>
		</>
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

export const AllKindsSlider = ({ children, buttonClass, ...props }: { children: JSX.Element | JSX.Element[], buttonClass?: string, services: { title: string }[] }) => {
	const isDesktop = useMediaQuery("(min-width: 768px)");

	return (
		<SliderProvider>
			{isDesktop() ? (
				<div class="max-w-1100px mx-auto position-relative hidden md:block mb-0 pt-5">
					<Slider options={{ loop: true, slides: { perView: 2.3, spacing: 15 } }}>
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
				<div class="max-w-1000px m-auto position-relative md:hidden block mx-4">
					<Slider options={{ loop: true, slides: { perView: 1.2, spacing: 10 } }}>
						{children}
					</Slider>
				</div>
			)}
			<DotsUnderSlider services={props.services} />
		</SliderProvider>
	);
};

export function DotsUnderTextSlider(props: { services: { title: string }[] }) {
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
				<div class="dots-container" style="text-align: center; margin-top: -250px; position: relative;">
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
				<div class="dots-container" style="text-align: center; margin-top: -200px; position: relative;">
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

export const TextSlider = ({ children, style, ...props }: { children: JSX.Element | JSX.Element[], style?: string, services: { title: string, }[] }) => {
	const isDesktop = useMediaQuery("(min-width: 768px)");

	return (
		<SliderProvider>
			{isDesktop() ? (
				<div class="max-w-100% mx-auto position-relative hidden md:flex justify-center items-center mb-0">
					<Slider options={{ loop: true, slides: { perView: 1, spacing: 15 } }}>
						{children}
					</Slider>
					<SliderButton class="cursor-pointer position-fixed top-70% left-0% lg:left-5% xl:left-18% bg-transparent b-none" prev>
						<RiPlayReverseMiniLine class="lg:mr-15 xl:-mr-2 font-size-10 b-solid b-3px p-1 c-paper bg-brand-compliment hover-bg-transparent hover-b-brand-compliment transition-colors b-brand-compliment hover-c-brand-compliment" />
					</SliderButton>
					<SliderButton class="cursor-pointer position-fixed top-70% right-0% lg:right-5% xl:right-18% bg-transparent b-none" next>
						<RiPlayMiniLine class="lg:ml-15 xl:-ml-2 font-size-10 b-solid b-3px p-1 c-paper bg-brand-compliment hover-bg-transparent hover-b-brand-compliment transition-colors b-brand-compliment hover-c-brand-compliment" />
					</SliderButton>
				</div>
			) : (
				<div class="max-w-1000px m-auto position-relative md:hidden block">
					<Slider options={{ loop: true, slides: { perView: 1, spacing: 10 } }}>
						{children}
					</Slider>
				</div>
			)}
			<DotsUnderTextSlider services={props.services} />
		</SliderProvider>
	);
};

function TextReview(props: { text: string | JSX.Element; title: string; style: string; class: string }) {
	return (
		<div class={props.class} style={props.style}>
			<div class="pt-30 important-max-w-700px pl-12 pr-10 sm:px-6 sm:pl-10 md:px-10 md:pl-12 flex flex-col justify-evenly items-center sm:items-start">
				<div>
					<h3 class="c-paper important-mt-8 sm:important-mt-4 important-mb-3 px-0 font-size-28px md:font-size-30px">{props.title}</h3>
				</div>
				<div>
					<p class="c-paper my-1 sm:mb-2 leading-5.6 sm:leading-8 font-size-16px sm:font-size-19px">{props.text}</p>
				</div>
			</div>
		</div>
	);
}

function CheckBoxText(props: { text: string; }) {
	return (
		<div class="flex flex-nowrap items-center gap-2">
			<div class="flex flex-nowrap items-center">
				<MdiCheckboxMarkedOutline class="c-brand font-size-8" />
			</div>
			<p class="c-paper font-size-4.5 uppercase font-500 my-3" style="font-family: 'Oswald', sans-serif !important;">{props.text}</p>
		</div>
	);
}

function WeekContainer(props: { title: string; secondtitle: JSX.Element | string; text: JSX.Element | string; }) {
	return (
		<div class="b-l-solid b-4px pl-5">
			<h3 class="text-left uppercase important-my-0">{props.title}</h3>
			<p class="text-left font-400 important-mt-2 important-line-height-8 important-font-size-17px important-md:font-size-19px uppercase" style="font-family: 'Oswald', sans-serif !important;">{props.secondtitle}</p>
			<p>{props.text}</p>
		</div>
	);
}

function IconContainer(props: { img: string; alt: string; title: string; }) {
	return (
		<div class="mx-auto flex flex-col lg:flex-row justify-center items-center relative gap-2 sm:gap-6 md:gap-10 overflow-hidden">
			<div class="flex flex-col justify-evenly items-center sm:items-start">
				<div class="b-solid b-4px b-black md:w-230px md:h-230px w-170px h-170px">
					<div class="bg-paper-inv b-solid b-2px b-#d4af80 flex justify-center items-center m-auto">
						<img loading="lazy" class="p-10 w-full m-auto" src={props.img} alt={props.alt} />
					</div>
				</div>

				<div class="relative py-5 md:py-7 bg-black md:max-w-230px max-w-170px w-full my-auto">
					<div class="h-60px transition-all flex justify-center items-center gap-3 my-auto">
						<h4 class="px-3 c-paper flex justify-center items-center important-line-height-7 important-my-0" style="font-family:'Oswald', sans-serif !important;">
							{props.title}
						</h4>
					</div>
				</div>
			</div>
		</div>
	);
}

interface ContactUsProps {
	onSuccess: () => void;
	onError: () => void;
	setUploading: (v: boolean) => void;
}

export const ContactUs = ({ onSuccess, onError, setUploading }: ContactUsProps) => {
	let form: HTMLFormElement | undefined;

	const [currentUrl, setCurrentUrl] = createSignal("");

	onMount(() => {
		setCurrentUrl(window.location.href);
	});

	const sendEmail = (e: Event) => {
		e.preventDefault();

		if (!form) return;
		setUploading(true);

		emailjs
			.sendForm('service_h8j0yvt', 'template_sfx2ge6', form, {
				publicKey: 'THs2MxEeIfIAlmqdZ',
			})
			.then(
				() => {
					console.log('SUCCESS!');
					setUploading(false);
					onSuccess();
				},
				(error) => {
					console.log('FAILED...', error.text);
					setUploading(false);
					onError();
				}
			);
	};

	return (
		<form class="space-y-6" ref={(el) => (form = el)} onSubmit={sendEmail}>
			<div class="sm:space-y-4 space-y-1">
				<div class="input-highlight relative overflow-hidden">
					<input
						name="name"
						type="text"
						placeholder="Име (Name)"
						class="w-full px-4 py-3 bg-transparent border-0 border-b border-paper focus:outline-none focus:ring-0 text-paper md:font-size-13px font-size-12px"
						required
					/>
				</div>
				<div class="input-highlight relative overflow-hidden">
					<input
						name="surname"
						type="text"
						placeholder="Фамилия (Last Name)"
						class="w-full px-4 py-3 bg-transparent border-0 border-b border-paper focus:outline-none focus:ring-0 text-paper md:font-size-13px font-size-12px"
						required
					/>
				</div>
				<div class="input-highlight relative overflow-hidden">
					<input
						name="phone"
						type="tel"
						pattern="^/+?[0-9/s/-]{7,15}$"
						placeholder="Телефон (Phone)"
						class="w-full px-4 py-3 bg-transparent border-0 border-b border-paper focus:outline-none focus:ring-0 text-paper md:font-size-13px font-size-12px"
						required
					/>
				</div>
				<div class="input-highlight relative overflow-hidden">
					<input
						name="email_id"
						type="email"
						placeholder="Имейл (Email)"
						class="w-full px-4 py-3 bg-transparent border-0 border-b border-paper focus:outline-none focus:ring-0 text-paper md:font-size-13px font-size-12px"
						required
					/>
				</div>
				<div class="pt-2">
					<textarea
						name="message"
						placeholder="Какво очаквате от курса?"
						class="rounded-0 w-full px-4 py-3 bg-white border-paper focus:border-brand focus:ring-2 focus:ring-brand focus:ring-opacity-50 outline-none transition-all duration-200 h-22 md:h-32 resize-none"
					></textarea>
				</div>
				<input type="hidden" name="submitted_from_url" value={currentUrl()} />
			</div>
			<button
				type="submit"
				value="Send"
				style="font-family:'Oswald', sans-serif !important;"
				class="important-mt-2 cursor-pointer font-400 sm:font-700 border-none hover:shadow-xl hover:translate-y-[-2px] translate-y-[0px] bg-gradient-to-br from-[#c29059] to-[#c27832] duration-200 ease-in-out shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),_0_4px_6px_-2px_rgba(252,252,252,0.05)] w-full text-white py-2 md:py-4 transition-all uppercase tracking-1.5px text-sm focus:outline-none focus:ring-4 focus:ring-orange-300 focus:ring-opacity-50 rounded-0 important-md:font-size-14px important-font-size-12px">
				Запазете място
			</button>
			<div class="text-center text-9px sm:text-xs leading-14px sm:leading-20px text-paper important-mt-3 important-sm:mt-4">
				Ще се свържем с Вас по телефон възможно най-скоро, за да обсъдим всичките Ви въпроси.
			</div>
		</form>
	);
};

export function Countdown() {
	const [timeLeft, setTimeLeft] = createSignal(calculateTimeLeft());

	let timer: ReturnType<typeof setInterval>;

	createEffect(() => {
		timer = setInterval(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);

		onCleanup(() => clearInterval(timer));
	});

	function calculateTimeLeft() {
		const now = new Date();
		const targetDate = new Date(now.getFullYear(), 7, 2, 23, 59, 59);

		const difference = targetDate.getTime() - now.getTime();

		if (difference <= 0) {
			return { days: 0, hours: 0, minutes: 0, seconds: 0 };
		}

		return {
			days: Math.floor(difference / (1000 * 60 * 60 * 24)),
			hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
			minutes: Math.floor((difference / (1000 * 60)) % 60),
			seconds: Math.floor((difference / 1000) % 60),
		};
	}

	return (
		<div class="bg-brand-compliment text-center text-xl font-bold mb-3 py-1">
			<div class="flex justify-start gap-4 text-lg px-2">
				<span class="c-paper text-center important-md:font-size-20px important-font-size-14px important-xl:leading-32px important-md:leading-27px important-leading-19px">{timeLeft().days} дни</span>
				<span class="c-paper text-center important-md:font-size-20px important-font-size-14px important-xl:leading-32px important-md:leading-27px important-leading-19px">{timeLeft().hours} часа</span>
				<span class="c-paper text-center important-md:font-size-20px important-font-size-14px important-xl:leading-32px important-md:leading-27px important-leading-19px">{timeLeft().minutes} минути</span>
				<span class="c-paper text-center important-md:font-size-20px important-font-size-14px important-xl:leading-32px important-md:leading-27px important-leading-19px">{timeLeft().seconds} секунди</span>
			</div>
		</div>
	);
}




export function TestimonialSlide({ img }: { img: { src: string; alt: string; name: string; reviewtext: string | JSX.Element } }) {
	return (
		<div class="flex flex-col items-center text-center">
			<img
				loading="lazy"
				src={img.src}
				alt={img.alt}
				class="max-w-full max-h-[550px] border-2 border-white shadow-md mb-4"
			/>
			<p class="c-paper text-center mt-2 mb-1">{img.name}</p>
			<div class="flex justify-center items-center gap-1.5 pb-1">
				{Array(5).fill(0).map(() => (
					<img loading="lazy" class="w-5 h-5" src="/assets/output-onlinepngtools.png" />
				))}
			</div>
			<p class="max-w-550px h-auto c-paper flex justify-center md:font-size-3.8 font-size-3.4 md:leading-6.3 leading-5.8 ml-2 md:ml-0">{img.reviewtext}</p>
		</div>
	);
}

export function ThumbnailDots(props: { imgs: { src: string; alt: string }[] }) {
	const [context] = useContext(SliderContext);

	return (
		<div class="flex gap-5 md:gap-6 mt-4 items-center justify-center">
			{props.imgs.map((img, index) => (
				<img
					loading="lazy"
					src={img.src}
					alt={img.alt}
					class={`object-cover cursor-pointer transition-all ${context()?.current() === index
						? 'w-20 h-20 md:w-30 md:h-30 outline-solid outline-4 md:outline-8 outline-paper'
						: 'w-18 h-18 md:w-26 md:h-26 filter-brightness-50'
						}`}
					onClick={() => context()?.moveTo(index)}
				/>
			))}
		</div>
	);
}

export const TestSlider = ({
	imgs,
}: {
	imgs: { src: string; alt: string; name: string; reviewtext: string | JSX.Element }[];
}) => {
	const isDesktop = useMediaQuery("(min-width: 768px)");

	return (
		<SliderProvider>
			<div class="max-w-900px mx-auto pt-5 position-relative">
				<Slider options={{ loop: true, slides: { perView: 1, spacing: 15 } }}>
					{imgs.map(img => (
						<div>
							<TestimonialSlide img={img} />
						</div>
					))}
				</Slider>

				{isDesktop() && (
					<>
						<SliderButton class="cursor-pointer position-absolute top-50% left-0 bg-transparent b-none" prev>
							<RiPlayReverseMiniLine class="font-size-10 b-solid b-3px p-1 c-paper bg-brand-compliment hover-bg-transparent hover-b-brand-compliment transition-colors b-brand-compliment hover-c-brand-compliment" />
						</SliderButton>
						<SliderButton class="cursor-pointer position-absolute top-50% right-0 bg-transparent b-none" next>
							<RiPlayMiniLine class="font-size-10 b-solid b-3px p-1 c-paper bg-brand-compliment hover-bg-transparent hover-b-brand-compliment transition-colors b-brand-compliment hover-c-brand-compliment" />
						</SliderButton>
					</>
				)}

				<ThumbnailDots imgs={imgs} />
			</div>
		</SliderProvider>
	);
};

export default function Page() {
	const [isModalOpen, setIsModalOpen] = createSignal(false);
	const [isUploading, setIsUploading] = createSignal(false);
	const [errorMessage, setErrorMessage] = createSignal(false);
	const [isSuccess, setIsSuccess] = createSignal(false);

	const handleSuccess = () => {
		setIsUploading(false);
		setErrorMessage(false);
		setIsSuccess(true); // show success message
		confetti({
			particleCount: 100,
			spread: 70,
			origin: { x: 0.5, y: 0.5 },
		});
	};

	const handleError = () => {
		setErrorMessage(true);
	};

	const openModal = () => {
		setIsModalOpen(true);
		setErrorMessage(false);
	};

	const closeModal = () => {
		setIsModalOpen(false);
		setErrorMessage(false);
		setIsSuccess(false);
	};

	return (
		<>
			<noscript>
				<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NWKWKC4Z"
					height="0" width="0" style="display:none;visibility:hidden">
				</iframe>
			</noscript>

			<JSONLDScript />

			{isModalOpen() && !isSuccess() && (
				<section class="flex items-center justify-center">
					<div style="background-color: #222222; background-image: url(/assets/thebarbershop-light-bg.webp); background-position: center bottom; background-repeat: no-repeat; background-size: cover;" class="important-m-auto z-10 w-full fixed lg:max-w-80% max-w-90% top-0 lg:top-10 md:top-10 h-100vh md:max-h-90vh lg:pt-27 lg:pb-25 px-3 flex items-center justify-center">
						<div class="flex flex-col md:flex-row items-center justify-center gap-2 sm:gap-8 md:gap-15 xl:gap-25 mx-2 md:mx-5 lg:mx-15">
							<div
								onClick={closeModal}
								class="cursor-pointer b-none absolute top-3 right-3">
								<MdiCloseThick class="w-8 hover:rotate-90 transition-all c-paper-inv hover-c-brand" />
							</div>

							<div class="w-full xl:w-1/2 md:w-2/5 w-full flex flex-col justify-center lg:justify-start items-center lg:items-start">
								<AnimatedComponent>
									<h2 class="important-pl-0 text-left important-xl:font-size-40px important-md:font-size-30px important-font-size-22px important-xl:leading-56px important-md:leading-45px important-leading-30px important-xl:mb-60px important-md:mb-30px important-mb-15px">Станете професионален бръснар за 4 седмици</h2>
									<p class="important-xl:font-size-19px important-md:font-size-16px important-font-size-12px important-xl:leading-32px important-md:leading-27px important-leading-19px important-xl:mt-13px important-mt-4px important-mb-8px">Запишете се две седмици преди началото, за да получите 300 лв отстъпка.</p>
									<Countdown />
									<h3 class="font-400 text-left important-xl:font-size-27px important-md:font-size-22px important-font-size-16px important-xl:mb-20px important-mb-2px">Остават 8 места.</h3>
									<p class="important-xl:font-size-19px important-md:font-size-16px important-font-size-12px important-xl:leading-32px important-md:leading-27px important-leading-19px important-xl:mt-13px important-mt-4px important-mb-8px">Запазете мястото си в предстоящото издание на курса като попълните контактната форма.</p>
								</AnimatedComponent>
							</div>

							<AnimatedComponent class="xl:w-1/2 md:w-3/5 w-full">
								<div class="px-20px pt-20px pb-18px md:px-30px md:py-40px rounded-0 w-full max-w-150 overflow-hidden relative bg-#14100c" style="background-image: url(/assets/wood-bg-2.webp); background-position: center; background-repeat: no-repeat; background-size: cover;">

									<div class="xl:px-10 md:pt-3">
										<h3 class="important-mt-0 md:mt-2 mb-10 c-paper uppercase
										important-xl:font-size-26px important-md:font-size-24px important-font-size-18px">Влезте в играта</h3>
										<ContactUs
											onSuccess={handleSuccess}
											onError={handleError}
											setUploading={setIsUploading}
										/>
									</div>
								</div>
							</AnimatedComponent>
						</div>
					</div>
				</section>
			)}

			{isUploading() && (
				<div class="fixed inset-0 flex items-center justify-center bg-paper-inv bg-opacity-50 z-50">
					<div class="bg-white p-6 shadow-lg w-64">
						<h3 class="text-lg font-semibold mb-3">Изпращане...</h3>
						<div class="w-full bg-gray-200 h-4 overflow-hidden relative">
							<div
								class="h-full bg-blue-500 relative"
								style={{
									background: 'linear-gradient(to right, #eba65b, #bf7e36)',
								}}
							>
								<div
									class="progress-bar-contacts-form-span"
								/>
							</div>
						</div>
					</div>
				</div>
			)}

			{isSuccess() && (
				<div class="fixed inset-0 flex items-center justify-center bg-paper-inv bg-opacity-50 z-5 px-5">
					<div class="bg-white p-8 shadow-lg max-w-md w-full">
						<h2 class="text-2xl font-bold pl-0 md:mb-6 mt-1 text-left">Успешно изпращане!</h2>
						<p class="mb-5">Съобщението е успешно изпратено. Ще се свържем с Вас възможно най-скоро.</p>
						<button
							onClick={closeModal}
							class="cursor-pointer bg-brand text-white px-5 py-3 b-none hover:bg-brand-dark transition-colors">
							Затвори
						</button>
					</div>
				</div>
			)}

			{errorMessage() && (
				<div class="fixed inset-0 flex items-center justify-center bg-paper-inv bg-opacity-50 z-5 px-5">
					<div class="bg-white p-10 pt-4 shadow-lg max-w-lg w-full relative">
						<div
							onClick={closeModal}
							class="cursor-pointer b-none c-brand hover-c-brand-action transition-colors absolute top-4 right-4">
							<MdiCloseThick class="w-8" />
						</div>
						<h3 class="font-semibold mb-3 text-left">Oops...</h3>
						<div>Изглежда, че нашата контактна форма не работи правилно.</div>
						<div>Моля, свържете се с нас чрез Viber.</div>
						<div class="mt-5 -ml-1"><a class="c-paper bg-brand text-white px-5 py-3 b-none hover:bg-brand-dark transition-colors" href="viber://chat?number=%2B359882820331" target="_blank" rel="noopener">Към чат</a></div>
					</div>
				</div>
			)}

			<div style="background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.65) ), url(/assets/akademia/курс-за-бръснар-крис.webp); background-position: center; background-repeat: no-repeat; background-size: cover;" class="h-100vh akademiq-img" role="img" aria-label="курс за бръснар крис">
			</div>
			<div class="w-full bg-#212528">
				<div class="max-w-1240px mx-auto">
					<div class="flex flex-justify-center">
						<div class="left-0 right-0 px-3 my-0 mx-auto absolute top-62% sm:top-69% md-top-69% lg-top-69% xl-top-74% text-center w-full akademiq-img-overlay" style="-webkit-transform: translateY(-50%);">
							<AnimatedComponent>
								<h1 class="uppercase c-paper mb-2 important-font-size-43px important-sm:font-size-65px important-md:font-size-80px important-lg:font-size-100px important-xl:font-size-115px important-line-height-62px important-sm:line-height-85px important-md:line-height-100px important-lg:line-height-120px important-xl:line-height-136px">Стани бръснар за 4 седмици</h1>
							</AnimatedComponent>
							<AnimatedComponent class="important-delay-300 c-paper text-center mb-0 font-size-4.3 lg-font-size-5 sm-px-0 px-5 leading-6">
								От курса за бръснар в бръснарницата
							</AnimatedComponent>
							<div class="flex flex-justify-center w-full gap-5 lg-gap-15 py-8">
								<button onClick={openModal} class="cursor-pointer text-center w-42 lg-w-52 bg-brand-compliment c-paper b-solid b-2px b-brand-compliment uppercase font-size-4 lg-font-size-5 font-500 py-3 hover-c-paper-inv transition-colors" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">Започнете сега</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			<section class="pb-10" style="background-image: url(/assets/thebarbershop-dark-bg.webp); background-position: center; background-repeat: no-repeat; background-size: cover;">
				<div>
					<AnimatedComponent>
						<H2WithImage class="c-paper" title="Вашият път в бръснарството" />
					</AnimatedComponent>
					<AnimatedComponent>
						<VideoPlayer src='/assets/Barber-Shop-Academy-Subtitled-Video Website.mp4' />
					</AnimatedComponent>

					<AnimatedComponent class="flex flex-justify-center w-full gap-5 lg-gap-15 mt-15">
						<button onClick={openModal} class="cursor-pointer text-center w-42 lg-w-52 bg-brand-compliment c-paper b-solid b-2px b-brand-compliment uppercase font-size-4 lg-font-size-5 font-500 py-3 hover-c-paper-inv transition-colors" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">Започнете сега</button>
					</AnimatedComponent>
				</div>
				<div class="pt-30 flex md-flex flex-col flex-justify-center max-w-1440px lg-px-0 mx-auto lg:pb-10">
					<div class="px-5 lg-px-10 flex lg-flex-row flex-col lg-gap-10 gap-4 md:pt-5">
						<div class="lg-w-33.33% flex flex-col">
							<AnimatedComponent>
								<div class="md:mr-5">
									<div class="mb-5 mx-auto b-solid b-1px b-brand w-90px h-90px md:w-120px md:h-120px flex flex-justify-center flex-items-center">
										<img src="/assets/akademia/barber-tools-icon.png" alt="barber tools icon" class="md:w-100px md:h-100px w-70px h-70px m-auto" />
									</div>
									<h3 class="mt-8 c-brand uppercase">Повече техника =<br />повече стойност</h3>
								</div>
								<div class="pb-10 c-paper text-left">Курсът за бръснарство дава възможност да усъвършенствате уменията си и да изградите доверие сред бъдещите си клиенти. Програмата е изградена така, че с всяка седмица придобивате повече знания, сигурност и увереност в това, което правите. От fade до класическо бръснене – усвоявате техники, които Ви дават свободно поле за изява и основание клиентите да ценят труда Ви по-високо. Това ще Ви позволи да се чувствате по-уверени и да продавате услугите си по-добре.</div>
							</AnimatedComponent>
						</div>
						<div class="lg-w-33.33% flex flex-col">
							<AnimatedComponent>
								<div class="md:mr-5">
									<div class="mb-5 mx-auto b-solid b-1px b-brand w-90px h-90px md:w-120px md:h-120px flex flex-justify-center flex-items-center">
										<img src="/assets/akademia/barber-chair-icon.png" alt="barber chair icon" class="md:w-100px md:h-100px w-70px h-70px m-auto" />
									</div>
									<h3 class="mt-8 c-brand uppercase">От курсист<br />до колега</h3>
								</div>
								<div class="pb-10 c-paper text-left">Завършилите барбър академията с високи резултати получават реален шанс за платен стаж или постоянна работа като бръснар. Най-амбициозните курсисти по време на курса за барбър получават покана за работа в The Barber Shop или персонална препоръка към утвърдени барбър салони в София. Подборът става в хода на обучението за бръснар, според нивото на уменията, отношението и готовността Ви за реална работа.</div>
							</AnimatedComponent>
						</div>
						<div class="lg-w-33.33% flex flex-col">
							<AnimatedComponent>
								<div class="md:mr-5">
									<div class="mb-5 mx-auto b-solid b-1px b-brand w-90px h-90px md:w-120px md:h-120px flex flex-justify-center flex-items-center">
										<img src="/assets/akademia/barber-pole-icon.png" alt="barber pole icon icon" class="md:w-100px md:h-100px w-70px h-70px m-auto" />
									</div>
									<h3 class="mt-8 c-brand uppercase">Помощ при отваряне на<br />собствена бръснарница</h3>
								</div>
								<div class="pb-10 c-paper text-left">Ако имате амбиция за собствен салон, няма нужда да се лутате сами. Ще Ви покажем стъпките и съветите, които ни се искаше някой да ни беше споделил, когато ние започвахме. Завършилите курса по бръснарство получават практически насоки за стартиране на самостоятелна практика – от избора на оборудване и локация до създаване на екип, ценообразуване и позициониране на бръснарницата. Партньорството продължава с подкрепа и насоки от ментора дори след края на обучението.</div>
							</AnimatedComponent>
						</div>
					</div>
				</div>
			</section>

			<section class="pb-20">
				<AnimatedComponent>
					<div class="z-10 fixed flex flex-col items-center justify-center w-full mt-20">
						<H2WithImage class="c-paper mb-0 important-line-height-40px important-md:line-height-3.3rem" style="padding-top:0px !important;" title="Личен опит от курса за бръснарство" />
					</div>
					<TextSlider
						services={[
							{ title: "Благо" },
							{ title: "Марио" },
							{ title: "Денис" },
						]}>
						<TextReview
							class="md:pb-70 md:pt-30 pt-20 pb-50 mx-auto flex flex-col lg:flex-row justify-center items-center relative gap-2 sm:gap-6 md:gap-10 overflow-hidden text-review-1"
							style="background-color: #222222; background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.55) ), url(/assets/akademia/barber-kurs-завършил.webp); background-position: right 50% bottom 63%; background-repeat: no-repeat; background-size: cover; width:100%;"
							title="Благо"
							text={
								<>
									Изключително доволен съм от обучението – практиката беше ключова за мен! Хареса ми подходът на екипа и атмосферата в академията. Научих всичко необходимо, за да стартирам веднага след курса. Препоръчвам с две ръце!
								</>
							}
						/>
						<TextReview
							class="md:pb-70 md:pt-30 pt-20 pb-50 mx-auto flex flex-col lg:flex-row justify-center items-center relative gap-2 sm:gap-6 md:gap-10 overflow-hidden text-review-2"
							style="background-color: #222222; background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.55) ), url(/assets/akademia/barber-курс-завършил.webp); background-position: center; background-repeat: no-repeat; background-size: cover; width:100%;"
							title="Марио"
							text={
								<>
									Преминах курса по бръснарство с огромно удоволствие и съм изключително доволен от обучението! Преподавателите бяха професионалисти с богат опит, които обясняваха ясно и търпеливо. Практическата част беше отлично организирана – имах възможност да работя с реални клиенти, което ми даде увереност и усет към занаята. Атмосферата беше приятелска и мотивираща, а групата – сплотена.
								</>
							}
						/>
						<TextReview
							class="md:pb-70 md:pt-30 pt-20 pb-50 mx-auto flex flex-col lg:flex-row justify-center items-center relative gap-2 sm:gap-6 md:gap-10 overflow-hidden text-review-3"
							style="background-color: #222222; background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.55) ), url(/assets/akademia/barbershop-and-barber-academy-завършил.webp); background-position: center; background-repeat: no-repeat; background-size: cover; width:100%;"
							title="Денис"
							text={
								<>
									Дойдох без никакъв опит, с много съмнения дали изобщо ще се справя. Академията ми даде не само умения, но и увереност да започна кариера в съвсем нова сфера. Сега имам собствено работно място и клиенти, които се връщат. Истински съм благодарен!
								</>
							}
						/>
					</TextSlider>
				</AnimatedComponent>

				<AnimatedComponent class="flex flex-justify-center w-full gap-5 lg-gap-15 mt-12 md:mt-15 ">
					<button onClick={openModal} class="cursor-pointer text-center w-42 lg-w-52 bg-brand-compliment c-paper b-solid b-2px b-brand-compliment uppercase font-size-4 lg-font-size-5 font-500 py-3 hover-c-paper-inv transition-colors" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">Започнете сега</button>
				</AnimatedComponent>
			</section>

			<section class="pb-20 w-full px-5">
				<div class="max-w-7xl mx-auto">
					<div class="md:pt-120px flex flex-col md:flex-row items-center gap-8 md:gap-20">
						<div class="w-full md:w-1/2 space-y-4">
							<AnimatedComponent>
								<img loading="lazy" class="pb-2 mx-auto md:mx-0 pt-80px md:pt-0 flex flex-justify-center" src="/assets/heading-ic.png" />
								<h2 class="md:text-left mb-7 px-0 important-mt-0">Ето кой ще Ви обучава в барбър академията следващите 4 седмици</h2>
								<div class="w-full relative block md:hidden pb-4">
									<img loading="lazy" src="/assets/akademia/kursove-za-barber-s-kris.webp" alt="Elegant interior design" class="w-full h-auto shadow-xl" />
								</div>
								<p class="important-delay-500 sm-line-height-7 line-height-6.5">Кристиан Митов, или просто Крис, както го знаят всички, е човек, който наистина обича това, което прави. Има над 8 години опит в бранша, където е изградил репутация като професионалист в бръснарството и клиентското обслужване. Започнал е като всички останали – с голямо желание и почти никакъв опит. Черпил е вдъхновение от най-известните бръснари в България и Европа – а днес самия той е сред водещите бръснари.</p>
								<p class="important-delay-700 sm-line-height-7 line-height-6.5 mb-0">Вярва, че в този занаят никога не спираш да учиш. Ето защо непрекъснато се развива и продължава да участва в разнообразни обучения на American Crew, Depot, както и редица тематични семинари и курсове за бръснари. Натрупаните знания и опит се превръщат в полезни професионални умения. Негова сила в бръснарството са Fade техниките, умелата работа с ножици, оформянето на брада и изграждането на цялостно клиентско изживяване, което кара хората да се връщат.</p>
								<p class="important-delay-500 sm-line-height-7 line-height-6.5">През годините Кристиан е обучил и въвел в занаята десетки начинаещи, някои от които вече успешно развиват собствена практика. Обучава лично, с фокус и специално внимание върху всеки курсист. Във всеки курс обръща внимание и на не толкова техническите фактори за успех като дисциплината, уважението към занаята и отношението към клиента.</p>
								<p class="important-delay-700 sm-line-height-7 line-height-6.5 mb-0">Към днешна дата Крис е официален амбасадор на <a href="https://www.depotmaletools.com/en/" target="_blank" rel="noopener noreferrer" class="c-brand-compliment hover:c-brand-dark font-600 transition-all">DEPOT</a>, което означава, че представлява италианския бранд в България, работи с техните продукти, провежда съвместни обучения с тях и е избран от самата марка като лице, което въплъщава нейния стил и стандарт. Обменя опит с представители на марката от различни държави и посещава събитията на бранда.</p>
							</AnimatedComponent>
						</div>

						<AnimatedComponent class="w-full md:w-1/2 hidden md:block">
							<div class="relative">
								<img loading="lazy" src="/assets/akademia/kursove-za-barber-s-kris.webp" alt="Elegant interior design" class="w-full h-auto shadow-xl" />
							</div>
						</AnimatedComponent>
					</div>
				</div>
			</section>

			<section style="background-image: url(/assets/thebarbershop-dark-bg.webp); background-position: center; background-repeat: no-repeat; background-size: cover;"
				class="w-full mx-auto md:px-30">
				<div class="mx-auto flex flex-justify-center flex-items-center py-5 md:py-15 px-5 max-w-1200px">
					<div class="flex flex-col justify-center items-center h-150px w-33% py-2 px-6 border-1px b-l-solid b-r-solid border-[rgba(255,255,255,0.5)]">
						<p class="important-mt-0 pt-2 md:pt-0 font-size-30px md:font-size-45px text-center font-600 mb-0 mt-5 c-brand" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">8+</p>
						<p class="font-size-15px md:font-size-20px text-center font-500 mt-3 md:mt-7 uppercase c-paper line-height-6" style="font-family: 'Oswald', sans-serif !important;">Години опит</p>
					</div>

					<div class="flex flex-col justify-center items-center h-150px w-33% py-2 px-6">
						<p class="important-mt-0 font-size-30px md:font-size-45px text-center font-600 mb-0 mt-5 c-brand md:line-height-14 line-height-8" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">The Barber Shop</p>
						<p class="font-size-15px md:font-size-20px text-center font-500 mt-3 md:mt-5 uppercase c-paper" style="font-family: 'Oswald', sans-serif !important;">Собственик</p>
					</div>

					<div class="flex flex-col justify-center items-center h-150px w-33% py-2 px-6 border-1px b-l-solid b-r-solid border-[rgba(255,255,255,0.5)]">
						<p class="important-mt-0 pt-2 md:pt-0 font-size-30px md:font-size-45px text-center font-600 mb-0 mt-5 c-brand" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">5000+</p>
						<p class="font-size-15px md:font-size-20px text-center font-500 mt-3 md:mt-7 uppercase c-paper" style="font-family: 'Oswald', sans-serif !important;">Клиенти</p>
					</div>
				</div>
			</section>

			<section class="pb-20 pt-30">
				<div class="flex flex-col">
					<div class="flex flex-col flex-items-center">
					</div>
					<div>
						<AnimatedComponent>
							<ReviewSlider
								reviews={[
									{ name: "Borislav Donchev" },
									{ name: "Georgi Pleshkov" },
									{ name: "Iliyan Asenov" },
									{ name: "Kristian Yordanov" },
								]}>
								<StarReview
									src="/assets/GoogleLogoPNGImage.png"
									reviewText={
										<>
											The Barber Shop е страхотно място! Най-обикновени неща като оформяне на брада, при тях е цяло изживяване. Кристиян Митов е ТОП бръснар! Евала момчета. Keep it going!<br />

											Силно препоръчвам бръснарницата!!!
										</>
									}
									name="Borislav Donchev"
									date="Април 2020"
									stars={5}
									hrefGoogleReview="https://maps.app.goo.gl/fQRFyASFgsSE66AV9"
								/>
								<StarReview
									src="/assets/GoogleLogoPNGImage.png"
									reviewText={
										<>
											За първи път посещавам The Barber Shop. Крис ме изслуша и след това подстрига с изключително внимание към детайла и моите предпочитания. Атмосферата е много приятна, а за резултатите можете да прецените сами.<br />

											С ръка на сърцето мога да кажа, че това е най-добрата бръснарница в София от тези, които съм посетил.
										</>
									}
									name="Georgi Pleshkov"
									date="Октомври 2024"
									stars={5}
									hrefGoogleReview="https://maps.app.goo.gl/3zXiV6eqcLZ3QqNC8"
								/>
								<StarReview
									src="/assets/GoogleLogoPNGImage.png"
									reviewText={
										<>
											Страхотна бръснарница. След няколко погрешни опита намерих точното място. Вниманието към клиента е на високо ниво. От вратата те посрещат с нещо за пиене кафе, вода, безалкохолно или Bullet бърбън. Вайба е чудесен, музиката не е прекалено силна или натрапваща. Всичко е уникално. Отидохме с няколко момчета и всички останахме очаровани. Крис беше нашия бръснар и силно го препоръчвам в момента и на други приятели.
										</>
									}
									name="Iliyan Asenov"
									date="Януари 2024"
									stars={5}
									hrefGoogleReview="https://maps.app.goo.gl/EowLViaeqwdSmzEf7"
								/>
								<StarReview
									src="/assets/GoogleLogoPNGImage.png"
									reviewText=
									{
										<>
											I got a haircut with Kris Mitov. It was much better than expected. He put quite a lot of effort to trim my side burns with a buzzer and to style the top of my head and my bangs with scissors. My friends now notice how much better my haircut is. As the month goes on my hair still looks good even when it is 5 weeks since my last trimming.
										</>
									}
									name="Kristian Yordanov"
									date="Май 2024"
									stars={5}
									hrefGoogleReview="https://maps.app.goo.gl/Z6E3sKXAgCmNHwn36"
								/>
							</ReviewSlider>
						</AnimatedComponent>
					</div>
				</div>
			</section>

			<section class="pb-20" style="background-image: url(/assets/thebarbershop-dark-bg.webp); background-position: center; background-repeat: no-repeat; background-size: cover;">
				<section class="max-w-7xl mx-auto px-4">
					<div class="md:pt-120px flex flex-col md:flex-row items-center gap-15 md:gap-20">
						<div class="w-full md:w-1/2 space-y-4">
							<AnimatedComponent>
								<img loading="lazy" class="pb-2 mx-auto md:mx-0 pt-80px md:pt-0 flex flex-justify-center" src="/assets/heading-ic.png" />
								<h2 class="md:text-left mb-7 md:pl-0 important-mt-0 c-paper tracking-0.2">Усетете работната атмосфера</h2>
								<p class="important-delay-500 sm-line-height-7 line-height-6.5 c-paper">Ще учите в реална работна среда, което позволява по-бързо да свикнете със забързаното темпо, динамиката и тънкостите в бръснарството. Курсът за бръснари е с практическа насоченост като ние сме подготвили всички материали и инструменти необходими за обучението.</p>
								<p class="important-delay-700 sm-line-height-7 line-height-6.5 c-paper mb-0">Ще имате възможността да се учите в движение върху реални модели с помощта на професионални насоки.</p>
							</AnimatedComponent>
						</div>

						<AnimatedComponent class="w-full md:w-1/2 block">
							<div class="relative">
								<img loading="lazy" src="/assets/akademia/за-курс-за-бръснарство.webp" alt="Реални снимки от академията" class="w-full h-auto shadow-xl" style="filter: saturate(130%);" />
							</div>
							<p class="c-paper mt-0 md:font-size-17px font-size-14px md:leading-7 leading-5">Занятията ще се провеждат The Barber Shop Academy на <span class="c-brand underline whitespace-nowrap"><a class="c-brand hover:c-brand-dark transition-all underline whitespace-nowrap" href="https://maps.app.goo.gl/yZNJRc35cSPyztpaA" target="_blank" rel="noopener"><img class="w-5 h-5 mb--1.5" src="/assets/pin.png"/>ул. Алдомировска 77</a></span> (непосредствена близост до метростанция “Константин Величков”)</p>
						</AnimatedComponent>
					</div>

					<AnimatedComponent class="flex flex-justify-center w-full gap-5 lg-gap-15 mt-5">
						<button onClick={openModal} class="cursor-pointer text-center w-42 lg-w-52 bg-brand-compliment c-paper b-solid b-2px b-brand-compliment uppercase font-size-4 lg-font-size-5 font-500 py-3 hover-c-paper-inv transition-colors" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">Започнете сега</button>
					</AnimatedComponent>
				</section>
			</section>

			<section class="pb-20">
				<AnimatedComponent>
					<H2WithImage title="Резултатите от курса за бръснар не закъсняват" />
					<AllKindsSlider
						services={[
							{ title: "Asen Markov" },
							{ title: "Ivan Kotrulev" },
							{ title: "Ivaylo Hristov (Ivo)" },
						]}>
						<QuotationReview
							hrefGoogleReview="https://maps.app.goo.gl/HF71MR2mEbctZBsX6"
							profile="https://lh3.googleusercontent.com/a-/ALV-UjVNDhtrnw5PqjQYpupZ9gZDhWdFOkC20uGd9DQ6fIy7oajD-zMJ=w36-h36-p-rp-mo-br100"
							name="Asen Markov"
							text="Перфектното място за мъжки отдих. Посрещнаха ме с вежливо обслужване и приятелска атмосфера. Работата им е на много високо ниво с внимание към детайла. Преопоръчвам!"
						/>
						<QuotationReview
							hrefGoogleReview="https://maps.app.goo.gl/vH9kVeo1hg5hGpDh9"
							profile="https://lh3.googleusercontent.com/a-/ALV-UjXYhh1GEesmksO04fXf09Q6c8c7VcLkiYRPFkB21UKj5d6GSvQZvQ=w36-h36-p-rp-mo-br100"
							name="Ivan Kotrulev"
							text={
								<>
									Перфектно оформена брада! 👌<br />
									Любезно отношение от свежи и симпатични млади професионалисти!<br />
									Препоръчвам!
								</>
							}
						/>
						<QuotationReview
							hrefGoogleReview="https://maps.app.goo.gl/JzPSXpCBG1jX8LiV8"
							profile="https://lh3.googleusercontent.com/a-/ALV-UjVg1pxSZ_RSiBx07eMQc6bqTdCjpzNQfzR3M4-4GLJyNZN5cNtvjQ=w36-h36-p-rp-mo-ba5-br100"
							name="Ivaylo Hristov (Ivo)"
							text="Много съм доволен. Луксозен салон. Общителни и приятни млади хора работят там. И правят отлични прически. Аз съм много доволен."
						/>
					</AllKindsSlider>
				</AnimatedComponent>
			</section>

			<section style="background-color: #222222; background-image: url(/assets/thebarbershop-dark-bg.webp); background-position: center center; background-repeat: no-repeat; background-size: cover;">
				<div class="lg-mx-30 mx-auto">
					<div class="flex md-flex flex-col lg-gap-5 flex-justify-center max-w-1440px lg-px-0 mx-auto pb-10">
						<AnimatedComponent>
							<H2WithImage class="c-paper" title="Курс “Бръснар за 4 седмици”" />
						</AnimatedComponent>
						<div class="px-5 lg-px-0 flex lg-flex-row flex-col lg-gap-10">
							<div class="lg-w-33.33% flex flex-col">
								<AnimatedComponent>
									<h3 class="c-brand text-left mt-0 uppercase">Обща информация</h3>
									<div class="pb-8 c-paper">Курсът за бръснар е интензивен, като включва всички основни аспекти на мъжкото бръснарство. Обучението е с практическа насоченост като фокусът е върху придобиване на умения. Именно поради това се работи с модели още от първата седмица. В рамките на 4 седмици ще усвоите работата с ножица и машинка, fade техниките, оформянето на брада и бръсненето с бръснач. Бонус към завършването на обучението Ви ще бъде вече създаденото портфолио от подстрижки върху модели и официален сертификат за бръснар от Академията за професионално обучение.</div>
								</AnimatedComponent>
							</div>
							<div class="pb-8 lg-w-33.33% flex flex-col md:hidden">
								<AnimatedComponent>
									<CheckBoxText text="Изцяло практически курс" />
									<CheckBoxText text="Малки групи до 8 човека за персонално внимание" />
									<CheckBoxText text="Реални модели, не само кукли" />
									<CheckBoxText text="Преподавател с дългогодишен опит, международни участия в обучения и награди от конкурси" />
									<CheckBoxText text="Възможност за работа или стаж като бръснар след курса" />
									<CheckBoxText text="Обучение в работна обстановка" />
								</AnimatedComponent>
							</div>
							<div class="lg-w-33.33% flex flex-col">
								<AnimatedComponent>
									<h3 class="c-brand text-left mt-5 lg-mt-0 uppercase">За хора, които искат да учат и печелят</h3>
									<div class="c-paper">Академията за бръснари е подходяща както за абсолютно начинаещи, които искат да усвоят тънкостите в бръснарството и да придобият високоплатена професия, така и за бръснари с опит, които искат да изчистят техниката и движенията си и да повишат качеството и цената на своите услуги.</div>
									<div class="pb-8 c-paper">Няма значение откъде започвате! Важно е да имате желание да се учите, дисциплина и мотивация за развитие.</div>
								</AnimatedComponent>
							</div>
							<div class="lg-w-33.33% flex-col hidden md:flex">
								<AnimatedComponent>
									<CheckBoxText text="Изцяло практически курс" />
									<CheckBoxText text="Малки групи до 8 човека за персонално внимание" />
									<CheckBoxText text="Реални модели, не само кукли" />
									<CheckBoxText text="Преподавател с дългогодишен опит, международни участия в обучения и награди от конкурси" />
									<CheckBoxText text="Възможност за работа или стаж като бръснар след курса" />
									<CheckBoxText text="Обучение в работна обстановка" />
								</AnimatedComponent>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section class="pb-20">
				<AnimatedComponent>
					<H2WithImage title="Какво можете да очаквате от курса за бръснарство" />
				</AnimatedComponent>
				<div class="md:max-w-900px mx-auto grid grid-cols-2 gap-5 md:gap-20 px-5 lg:grid-cols-3 ">
					<IconContainer
						title="Менторство"
						img="/assets/akademia/individual-black-icon.webp"
						alt="Курс за бръснари"
					/>
					<IconContainer
						title="Усвояване на fade техники"
						img="/assets/akademia/hair-clipper-black-icon.webp"
						alt="Курс за бръснари"
					/>
					<IconContainer
						title="Всичко необходимо по време на курса"
						img="/assets/akademia/brush-black-icon.webp"
						alt="Курс за бръснари"
					/>
					<IconContainer
						title="Практика върху реални модели"
						img="/assets/akademia/model-black-icon.webp"
						alt="Курс за бръснари"
					/>
					<IconContainer
						title="Сертификат"
						img="/assets/akademia/certificate-black-icon.webp"
						alt="Курс за бръснари"
					/>
					<IconContainer
						title="Възможност за работа"
						img="/assets/akademia/job-tools-black-icon.webp"
						alt="Курс за бръснари"
					/>
				</div>
			</section>

			<section class="pb-14 md:pb-18" style="background-color: #222222; background-image: url(/assets/thebarbershop-dark-bg.webp); background-position: center center; background-repeat: no-repeat; background-size: cover;">
				<AnimatedComponent>
					<H2WithImage class="c-paper" title="Вдъхновение от хора като теб" />
					<div class="max-w-900px m-auto px-5">
						<TestSlider
							imgs={[
								{
									src: "/assets/akademia/след-академия-за-бръснари-1.webp",
									alt: "the-barber-shop-detsko-podstrigvane",
									name: "Марио",
									reviewtext: "Преминах курса по бръснарство с огромно удоволствие и съм изключително доволен от обучението! Преподавателите бяха професионалисти с богат опит, които обясняваха ясно и търпеливо. Практическата част беше отлично организирана – имах възможност да работя с реални клиенти, което ми даде увереност и усет към занаята. Атмосферата беше приятелска и мотивираща, а групата – сплотена."
								},
								{
									src: "/assets/akademia/след-бръснарски-курсове-1.webp",
									alt: "barbershop-mazhko-podstrigvane-otzivi",
									name: "Благо",
									reviewtext: "Изключително доволен съм от обучението – практиката беше ключова за мен! Хареса ми подходът на екипа и атмосферата в академията. Научих всичко необходимо, за да стартирам веднага след курса. Препоръчвам с две ръце!"
								},
								{
									src: "/assets/akademia/след-бръснарска-академия.webp",
									alt: "barber-shop-otzivi-usluga-podstrigvane",
									name: "Емо",
									reviewtext: "Завърших курса преди няколко месеца и още от първата седмица започнах да практикувам. Обучението беше интензивно, но много добре структурирано. Преподавателите са търпеливи и наистина влагат сърце в това, което правят. Благодаря за увереността, която ми дадохте!"
								},
							]}
						/>
					</div>
				</AnimatedComponent>
			</section>

			<section class="pb-20 md:pb-30">
				<AnimatedComponent class="max-w-105rem mx-auto">
					<H2WithImage title="Програма и продължителност на бръснарската академия" />
					<div class="flex justify-center md:justify-start items-start pb-10 md:pb-20 px-5 md:px-15">
						<WeekContainer
							title="Гъвкаво обучение"
							secondtitle=""
							text={
								<>
									Обучението се провежда в два формата:
									<ul class="ml--7">
										<li>Дневен курс през уикендите</li>
										<li>Вечерен курс през делничните дни.</li>
									</ul>
									<div>Всеки урок е с продължителност от 4 или <span class="whitespace-nowrap sm:whitespace-normal">6 часа</span> (в зависимост от формата на обучение) като включва комбинация от теория и практика.</div>
									<div>Общата продължителност на курса е:</div>
									<ul class="ml--7">
										<li>60 часа за дневната форма, през уикендите</li>
										<li>80 часа за вечерната форма, от понеделник до петък</li>
									</ul>
								</>
							}
						/>
					</div>
					<div class="flex xl:flex-row flex-col justify-between items-start gap-10 px-5 md:px-15">
						<WeekContainer
							title="Седмица 1"
							secondtitle="Основи на формата и работа с ножица"
							text={
								<>
									<div>Поставяме основите. Започваме от нулата и изграждаме стабилна техника за класическо подстригване.</div>
									<ul class="ml--7">
										<li>Въведение в бръснарството: инструменти, хигиена, безопасност</li>
										<li>Изграждане на форма и баланс на прическата</li>
										<li>Работа с ножица и гребен – класически подход</li>
										<li>Градация и линии – как се изгражда плавен преход с ножица</li>
										<li>Практика върху учебна глава</li>
									</ul>
								</>
							}
						/>
						<WeekContainer
							title="Седмица 2"
							secondtitle="Fade и машинна техника"
							text={
								<>
									<div>Ще се научите как да работите чисто и прецизно с машинки, различни приставки и хватове.</div>
									<ul class="ml--7">
										<li>Основи на fade: low, mid, high fade – теория и практика</li>
										<li>Работа с машинка, приставки, различни хватове и ъгли</li>
										<li>Преливки и контур – как да се създаде чист силует</li>
										<li>Работа върху реални модели (fade под наблюдение)</li>
										<li>Индивидуална обратна връзка</li>
									</ul>
								</>
							}
						/>
						<WeekContainer
							title="Седмица 3"
							secondtitle="Брада и бръснене"
							text={
								<>
									<div>Преминаваме към безопасно оформяне на брадата с машинка и бръснач спрямо чертите на човека.</div>
									<ul class="ml--7">
										<li>Оформяне на брада според формата на лицето</li>
										<li>Работа с машинка и тример по брадата</li>
										<li>Използване на прав бръснач – подготовка на кожата, техники, безопасност</li>
										<li>Завършване на визията – брада + прическа</li>
										<li>Консултация с клиент: как да разбереш желания резултат</li>
									</ul>
								</>
							}
						/>
						<WeekContainer
							title="Седмица 4"
							secondtitle="Завършени визии и реална среда"
							text={
								<>
									<div>Време е за самостоятелна работа като бръснар, изготвяне на портфолио, финален практически тест и сертифициране.</div>
									<ul class="ml--7">
										<li>Подстригване от началото до края върху реални модели</li>
										<li>Практика под минимален надзор – развиване на увереност</li>
										<li>Създаване на портфолио: снимки, съдържание</li>
										<li>Финални практически тестове и сертифициране</li>
										<li>Обратна връзка + насоки за работа</li>
									</ul>
								</>
							}
						/>
					</div>
				</AnimatedComponent>
			</section>

			<section class="py-5" style="background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8) ), url(/assets/brown-background-image.webp); background-position: center; background-repeat: no-repeat; background-size: cover;">
				<AnimatedComponent class="mx-5 md-mx-30 flex flex-col gap-2">
					<div class="flex flex-col w-full pr-10px xl:px-50px lg:px-30px md:py-4 py-6 lg:py-6 max-w-1320px mx-auto flex-justify-between flex-items-start b-solid b-2px hover-b-gray-500 flex my-8 b-paper bg-#14100c hover-bg-transparent transition-colors important-transition-duration-300">
						<div class="flex w-full mx-auto flex-justify-between flex-items-center">
							<div class="flex flex-row flex-justify-start items-center">
								<div class="flex flex-col">
									<div class="flex items-center">
										<MdiProgressClock class="md:mt-1 flex flex-self-center mr-0 lg:mr-8 lg-w-7 w-15 c-brand font-size-6" />
										<h3 class="md:px-0 px-0 text-left c-paper important-line-height-7 important-font-size-4 important-md:font-size-6 lg:flex hidden flex-justify-center flex-items-center uppercase important-mb-0 important-md:mb-5 important-xl:mb-6 font-500" style="font-family: 'Oswald', sans-serif !important;">
											Уикенд курс: 16 август 2025 г. 09:00 - 15:00
										</h3>
										<h3 class="md:px-0 px-0 text-left c-paper important-line-height-6.5 important-font-size-4 important-md:font-size-5 flex lg:hidden flex-justify-center flex-items-center uppercase important-my-5 important-sm:mb-5 font-500" style="font-family: 'Oswald', sans-serif !important;">
											Уикенд курс:<br />16 август 2025 г.<br />09:00 - 15:00
										</h3>
									</div>
								</div>
							</div>
							<div class="flex flex-col flex-items-center flex-self-center">
								<button onClick={openModal} class="mr-2 cursor-pointer text-center w-32 lg-w-52 bg-brand-compliment c-paper b-solid b-2px b-brand-compliment uppercase font-size-4 lg-font-size-5 font-500 py-3 hover-c-paper-inv transition-colors" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">Започнете сега</button>
							</div>
						</div>
						<div class="flex">
							<ul class="ml--2 lg:ml--6">
								<li class="c-paper">Обучението се провежда в рамките на 5 уикенда</li>
								<li class="c-paper">Всяка събота и неделя, <span class="whitespace-nowrap sm:whitespace-normal">по 6 часа на ден</span></li>
								<li class="c-paper">Общата продължителност на курса е 60 часа</li>
							</ul>
						</div>
					</div>
				</AnimatedComponent>
			</section>

			<section class="py-5 my-10" style="background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8) ), url(/assets/brown-background-image.webp); background-position: center; background-repeat: no-repeat; background-size: cover;">
				<AnimatedComponent class="mx-5 md-mx-30 flex flex-col gap-2">
					<div class="flex flex-col w-full pr-10px xl:px-50px lg:px-30px md:py-4 py-6 lg:py-6 max-w-1320px mx-auto flex-justify-between flex-items-start b-solid b-2px hover-b-gray-500 flex my-8 b-paper bg-#14100c hover-bg-transparent transition-colors important-transition-duration-300">
						<div class="flex w-full mx-auto flex-justify-between flex-items-center">
							<div class="flex flex-row flex-justify-start items-center">
								<div class="flex flex-col">
									<div class="flex items-center">
										<MdiProgressClock class="md:mt-1 flex flex-self-center mr-0 lg:mr-8 lg-w-7 w-15 c-brand font-size-6" />
										<h3 class="md:px-0 px-0 text-left c-paper important-line-height-7 important-font-size-4 important-md:font-size-6 lg:flex hidden flex-justify-center flex-items-center uppercase important-mb-0 important-md:mb-5 important-xl:mb-6 font-500" style="font-family: 'Oswald', sans-serif !important;">
											Вечерен курс: 15 септември 2025 г. 17:30 - 21:30
										</h3>
										<h3 class="md:px-0 px-0 text-left c-paper important-line-height-6.5 important-font-size-4 important-md:font-size-5 flex lg:hidden flex-justify-center flex-items-center uppercase important-my-5 important-sm:mb-5 font-500" style="font-family: 'Oswald', sans-serif !important;">
											Вечерен курс:<br />15 септември 2025 г.<br />17:30 - 21:30
										</h3>
									</div>
								</div>
							</div>
							<div class="flex flex-col flex-items-center flex-self-center">
								<button onClick={openModal} class="mr-2 cursor-pointer text-center w-32 lg-w-52 bg-brand-compliment c-paper b-solid b-2px b-brand-compliment uppercase font-size-4 lg-font-size-5 font-500 py-3 hover-c-paper-inv transition-colors" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">Започнете сега</button>
							</div>
						</div>
						<div class="flex">
							<ul class="ml--2 lg:ml--6">
								<li class="c-paper">Вечерен курс през делничните дни</li>
								<li class="c-paper">От понеделник до петък, <span class="whitespace-nowrap sm:whitespace-normal">по 4 часа на ден</span></li>
								<li class="c-paper">Общата продължителност на курса е 80 часа</li>
							</ul>
						</div>
					</div>
				</AnimatedComponent>
			</section>

			<section class="pb-20 px-4 w-full" style="background-color: #222222; background-image: url(/assets/thebarbershop-dark-bg.webp); background-position: center center; background-repeat: no-repeat; background-size: cover;">
				<H2WithImage class="c-paper" title="Всичко, от което имате нужда" />
				<div class="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 mx-auto max-w-7xl">
					<AnimatedComponent class="w-full md:ml-15 md:w-1/2">
						<div>
							<img loading="lazy" src="/assets/akademia/академия-за-бръснари-софия-с-крис-1.webp" alt="Elegant interior design" class="w-full h-auto shadow-xl" />
						</div>
					</AnimatedComponent>

					<div class="w-full md:w-1/2 flex flex-col gap-5">
						<div>
							<h3 class="pb-4 c-paper uppercase text-left important-mt-0">Какво включва курсът за бръснар:</h3>
							<CheckBoxText text="4 седмици интензивно обучение върху реални модели." />
							<CheckBoxText text="Преподавател бръснар с над 8 години зад гърба си." />
							<CheckBoxText text="Fade, ножица, брада, бръснач – основните техники стъпка по стъпка." />
							<CheckBoxText text="Практика в действаща и успешна бръснарница." />
							<CheckBoxText text="Всички инструменти и материали, които ще са Ви нужни по време на курсa за бръснарство." />
						</div>
						<div class="pt-8.5">
							<h3 class="pb-4 c-paper uppercase text-left">Бонус:</h3>
							<CheckBoxText text="Сертификат за бръснар и портфолио, с които можете да изпъкнете." />
							<CheckBoxText text="Възможност за стаж или препоръка от The Barber Shop." />
						</div>
					</div>
				</div>
				<p class="c-paper text-center font-500 important-font-size-25px uppercase mt-15" style="font-family: 'Oswald', sans-serif !important;">всичко това за 2500 лв.</p>
				<div class="flex flex-col flex-items-center flex-self-center mt-6">
					<button onClick={openModal} class="mr-2 cursor-pointer text-center w-42 lg-w-52 bg-brand-compliment c-paper b-solid b-2px b-brand-compliment uppercase font-size-4 lg-font-size-5 font-500 py-3 hover-c-paper-inv transition-colors" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">Започнете сега</button>
				</div>
				<p class="md:font-size-20px font-size-18px c-paper font-500 uppercase mt-6 md:mt-6 text-center line-height-8 md:line-height-10" style="font-family: 'Oswald', sans-serif !important;">*До 2 август можете да го получите с 300 лв. отстъпка за 2200 лв.</p>
			</section>

			<section class="pb-10">
				<AnimatedComponent>
					<H2WithImage title="Често задавани въпроси" />
				</AnimatedComponent>
				<div class="mx-0 lg:flex gap-10 justify-center flex-items-center">
					<div class="lg:w-50%">
						<SingleCollapse />
					</div>
					<div class="lg:block hidden lg:max-w-40% lg:px-0 md:px-10 px-5 lg:pt-0 md:pt-20 lg:pt-10">
						<img loading="lazy" class="mx-auto max-w-full" src="/assets/home/бръснари-софия.webp" alt="Бръснари София" />
					</div>
				</div>
			</section>

			<section class="pb-20" style="background-color: #222222; background-image: url(/assets/thebarbershop-dark-bg.webp); background-position: center center; background-repeat: no-repeat; background-size: cover;">
				<AnimatedComponent>
					<H2WithImage class="c-paper" title="Истинските резултати се виждат" />
					<ImageWithFrameReviewSlider
						services={[
							{ title: "Philip Betz" },
							{ title: "Teodor Stoilov" },
							{ title: "Kristiyan Trayanov" },
						]}>
						<ImageWithFrameReview
							hrefGoogleReview="https://maps.app.goo.gl/MC5EkCbnLcXtxHpQ8"
							src="/assets/akademia/отзив-за-уроци-по-бръснарство.webp"
							service="Philip Betz"
							text={
								<>
									Много ми хареса прическата! Всички които ме виждаха, казваха, че много ми отива. Плюс това атмосферата там е много приятна, хората са забавни и дружелюбни.
								</>
							}
							date="Октомври 2024"
						/>
						<ImageWithFrameReview
							hrefGoogleReview="https://maps.app.goo.gl/Y182XKzmDwqyPiLB9"
							src="/assets/akademia/курсове-за-мъжко-подстригване-от.webp"
							service="Teodor Stoilov"
							text="Супер отношение и майсторство от Благо. Силно препоръчвам!"
							date="Май 2025"
						/>
						<ImageWithFrameReview
							hrefGoogleReview="https://maps.app.goo.gl/zaLi2dVwLWHmURseA"
							src="/assets/akademia/курс-мъжко-подстригване-отзив.webp"
							service="Kristiyan Trayanov"
							text={
								<>
									The barbers in this barbershop are really good and they are friendly , especially Mario is very good person and barber recommending him for good haircut and beard cut!
								</>
							}
							date="Март 2024"
						/>
					</ImageWithFrameReviewSlider>
				</AnimatedComponent>
			</section>
		</>
	);
}


