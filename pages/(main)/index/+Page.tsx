import "solid-slider/slider.css";
import { BasicReview, ImageReview, ImagewTextReview, SliderOfOne } from '../../../components/ReviewSlider';
import { PuzzleButton, PuzzleButton2 } from "../../../components/PuzzleButton";
import { Collapse } from "../../../components/FAQ";
import { AnimatedComponent } from '../../../components/AnimateOnView';
import { RevealWords } from "../../../components/RevealAnimate";
import { ImageReveal } from "../../../components/ImageRevealAnimate";
import { ScrollColorText } from "../../../components/ScrollWhiteAnimate";
import IconoirNumber1SquareSolid from '~icons/iconoir/number-1-square-solid';
import IconoirNumber2SquareSolid from '~icons/iconoir/number-2-square-solid';
import IconoirNumber3SquareSolid from '~icons/iconoir/number-3-square-solid';
import IconoirNumber4SquareSolid from '~icons/iconoir/number-4-square-solid';
import IconoirNumber5SquareSolid from '~icons/iconoir/number-5-square-solid';
import { HeroGif } from "../../../components/HeroGif";
import { createEffect, createSignal, onMount } from "solid-js";
import MdiCloseThick from '~icons/mdi/close-thick';
import emailjs from '@emailjs/browser';

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
			.sendForm('service_e3agqg1', 'template_k96lj28', form, {
				publicKey: '8kg2MVaTQlCEwwxpt',
			})
			.then(() => {
				console.log('SUCCESS!');
				if (form) form.reset();
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
		<>
			<form class="space-y-6" ref={(el) => (form = el)} onSubmit={sendEmail}>
				<div class="px-4 md:px-8 py-14 border border-black max-w-300 mx-auto">
					<h2 class="important-text-6.5 font-bold mb-8 text-black text-center">СВЪРЖЕТЕ СЕ С НАС</h2>
					<div>
						<label class="text-12px md:text-14px font-700 text-black">ВАШИТЕ ИМЕНА</label>
						<input
							type="text"
							name="name"
							required
							class="w-full b-solid b-1px b-black p-1.5 text-sm mt-2"
						/>
					</div>
					<div class="mt-6">
						<label class="text-12px md:text-14px font-700 text-black">ТЕЛЕФОН</label>
						<input
							type="tel"
							name="phone"
							required
							class="w-full b-solid b-1px b-black p-1.5 text-sm mt-2"
						/>
					</div>
					<div class="mt-6">
						<label class="text-12px md:text-14px font-700 text-black">ИМЕЙЛ АДРЕС</label>
						<input
							type="email"
							name="email"
							required
							class="w-full b-solid b-1px b-black p-1.5 text-sm mt-2"
						/>
					</div>
					<div class="mt-6">
						<label class="text-12px md:text-14px font-700 text-black">ЛИНК КЪМ САЙТ/СТРАНИЦА НА БИЗНЕСА ВИ</label>
						<input
							type="text"
							name="url"
							class="w-full b-solid b-1px b-black p-1.5 text-sm mt-2"
						/>
					</div>
					<div class="mt-6">
						<label class="text-12px md:text-14px font-700 text-black">ЗАПИТВАНЕ</label>
						<textarea
							rows="4"
							name="message"
							class="w-full b-solid b-1px b-black p-1.5 text-sm mt-2 resize-none"
						></textarea>
					</div>
					<div class="flex justify-center">
						<button
							type="submit"
							class="mt-6 cursor-pointer bg-brand-second hover:bg-brand-second-hover b-none text-black text-3.8 tracking-0.5px font-bold py-3 px-5 max-w-full mx-auto transition-colors">
							ИЗПРАТЕТЕ
						</button>
					</div>
				</div>
			</form>
		</>
	);
}

function SlidingLogoCarousel(props: { class: string; }) {
	let containerRef: HTMLDivElement | undefined;
	let trackRef: HTMLDivElement | undefined;

	const logos = [
		{
			src: "https://mlrlmmdl0xru.i.optimole.com/cb:o_7N.287/w:300/h:84/q:mauto/ig:avif/https://renli.bg/wp-content/uploads/2023/04/FullLogo_Transparent_NoBuffer-1.png",
			height: "h-9 md:h-15"
		},
		{
			src: "https://software-supreme.com/wp-content/uploads/2021/05/172537177894088853.png",
			height: "h-9 md:h-15"
		},
		{
			src: "https://finecarpetcleaning.co.uk/assets/FCC_2024_png.png",
			height: "h-14 md:h-20"
		},
		{
			src: "https://dermagold.bg/wp-content/uploads/2023/12/717ab5dce593b8204989ab597017d14b-300x300.webp",
			height: "h-24 md:h-36"
		},
		{
			src: "https://cherrycarpetcleaning.co.uk/wp-content/uploads/2018/06/cherrycarpetcleaning-logo.png",
			height: "h-14 md:h-25"
		},
		{
			src: "https://thebarbershop.bg/assets/the-barber-shop-logo1000-x-400-px.webp",
			height: "h-12 md:h-20"
		},
		{
			src: "https://numberonecarpetcleaning.co.uk/wp-content/uploads/2018/06/NOCC-LOGO-TITLE-BLUE.png",
			height: "h-12 md:h-18"
		},
		{
			src: "https://sense-center.bg/assets/sense_logo_heart_text.webp",
			height: "h-12 md:h-18"
		}
	];

	return (
		<section class={props.class}>
			<div
				ref={el => (containerRef = el)}
				class="w-full relative"
				style={{ filter: 'saturate(100%)' }}
			>
				<div class="flex items-center overflow-hidden">
					<div
						ref={el => (trackRef = el)}
						class="flex items-center gap-8 md:gap-12"
						style={{
							"animation": `slide 50s linear infinite`,
							"width": 'fit-content'
						}}
					>
						{logos.map((logo, index) => (
							<div class="flex-shrink-0 px-4">
								<img
									class={`w-auto ${logo.height} object-contain grayscale hover:grayscale-0 transition-all duration-200`}
									src={logo.src}
									alt={`Partner logo ${index + 1}`}
									loading="lazy"
								/>
							</div>
						))}
						{logos.map((logo, index) => (
							<div class="flex-shrink-0 px-4">
								<img
									class={`w-auto ${logo.height} object-contain grayscale hover:grayscale-0 transition-all duration-200`}
									src={logo.src}
									alt={`Partner logo ${index + 1} duplicate`}
									loading="lazy"
								/>
							</div>
						))}
					</div>
				</div>

				<div class="flex items-center overflow-hidden">
					<div
						ref={el => (trackRef = el)}
						class="flex items-center gap-8 md:gap-12"
						style={{
							"animation": `slide 50s linear infinite reverse`,
							"width": 'fit-content'
						}}
					>
						{logos.map((logo, index) => (
							<div class="flex-shrink-0 px-4">
								<img
									class={`w-auto ${logo.height} object-contain grayscale hover:grayscale-0 transition-all duration-200`}
									src={logo.src}
									alt={`Partner logo ${index + 1}`}
									loading="lazy"
								/>
							</div>
						))}
						{logos.map((logo, index) => (
							<div class="flex-shrink-0 px-4">
								<img
									class={`w-auto ${logo.height} object-contain grayscale hover:grayscale-0 transition-all duration-200`}
									src={logo.src}
									alt={`Partner logo ${index + 1} duplicate`}
									loading="lazy"
								/>
							</div>
						))}
					</div>
				</div>

				<div class="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-black to-transparent pointer-events-none z-10"></div>
				<div class="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-black to-transparent pointer-events-none z-10"></div>
			</div>
			<style>{`
			@keyframes slide {
			0% {
				transform: translateX(0);
			}
			100% {
				transform: translateX(-50%);
			}
			}
		`}</style>
		</section>
	);
}

function SingleCollapse() {
	return (
		<>
			<div class="flex flex-col gap-4 pb-2 mx-auto lg:max-w-900px xl:max-w-1200px">
				<Collapse img="/assets/home2/divinitum-icon-1.webp" title="Изработка на уебсайт" desc="" >
					<div class="important-font-size-16px">
						Извършваме цялостна изработка на уебсайтове – от планирането и дизайна до програмирането и финалната реализация. Работим с платформи, които позволяват пълна персонализация според нуждите на вашия бизнес. Предлагаме и фокусирани лендинг страници, които представят вашия бизнес по най-добрия начин. Ако вече имате сайт, можем да направим пълен редизайн, който ще му вдъхне нов живот и ще подобри потребителското изживяване.
					</div>
				</Collapse>

				<Collapse img="/assets/home2/divinitum-icon-2.webp" title="Създаване и обработка на съдържание" desc="" >
					<div class="important-font-size-16px">
						Създаваме съдържание, което комуникира ясно и убедително посланието с Вашата аудитория. Пишем текстове за уебсайтове, блог статии, продуктови описания и др маркетингови материали. Изготвяме и визуално съдържание като графики, постове и видеа, които подпомагат посланието Ви. Също така ако имате съществуващо съдържание, можем да го преработим и оптимизираме, за да постига по-добри резултати.
					</div>
				</Collapse>

				<Collapse img="/assets/home2/divinitum-icon-3.webp" title="SEO оптимизация" desc="" >
					<div class="important-font-size-16px">
						Оптимизираме уебсайтове така, че Google да ги обича, а клиентите да ги намират лесно. Анализираме ключови думи, подобряваме структурата, скоростта и съдържанието, за да изведем Вашият сайт на по-високи позиции. Целта ни е проста. Искаме да постигнем повече видимост, повече трафик и повече реални клиенти.
					</div>
				</Collapse>

				<Collapse img="/assets/home2/divinitum-icon-4.webp" title="CRO оптимизация" desc="" >
					<div class="important-font-size-16px">
						Анализираме поведението на потребителите на Вашия сайт и идентифицираме къде губите потенциални клиенти. Оптимизираме всеки елемент – заглавия, бутони, контактни форми и навигация, за да увеличим процента на конверсия. Провеждаме A/B тестове, изследваме данните и внедряваме промени, които превръщат посетителите във клиенти. Ако имате трафик, но не виждате продажби, ние ще открием защо и ще го коригираме.
					</div>
				</Collapse>

				<Collapse img="/assets/home2/divinitum-icon-1.webp" title="Управление на профили в социалните мрежи" desc="" >
					<div class="important-font-size-16px">
						Поемаме цялостното управление на Вашите профили в социалните мрежи. Това включва планиране на съдържание, график за публикуване, комуникация с аудиторията, анализ на резултатите и др. Създаваме постове, които ангажират, изграждат общност и засилват Вашия бранд. Работим с най-популярните платформи, като адаптираме стратегията според спецификата на всяка.
					</div>
				</Collapse>

				<Collapse img="/assets/home2/divinitum-icon-2.webp" title="Рекламни кампании в социалните мрежи" desc="" >
					<div class="important-font-size-16px">
						Създаваме и управляваме рекламни кампании в социалните мрежи, които достигат до точната аудитория и генерират реални резултати. Създаваме послания, които привличат вниманието и продават. Ако сте провеждали кампании с разочароващи резултати, ние ще анализираме проблема, ще оптимизираме стратегията така че да работи по-ефективно.
					</div>
				</Collapse>

				<Collapse img="/assets/home2/divinitum-icon-3.webp" title="Реклами в GOOGLE" desc="" >
					<div class="important-font-size-16px">
						Изграждаме печеливши рекламни кампании в Google, които привличат качествени клиенти и увеличават продажбите. Работим с внимателно подбрани ключови думи, ясни послания и постоянна оптимизация, за да осигурим максимална възвръщаемост на Вашата инвестиция и измерими резултати, които носят реална полза на бизнеса Ви.
					</div>
				</Collapse>

				<Collapse img="/assets/home2/divinitum-icon-5.webp" title="Имейл маркетинг" desc="" >
					<div class="important-font-size-16px">
						Изграждаме и управляваме имейл кампании, които поддържат връзка с Вашата аудитория и стимулират продажбите. Създаваме персонализирани имейли, насочени към таргет аудиторията, според конкретните цели на Вашата кампания. Създаваме база от абонати, която да превърнем в постоянен източник на приходи чрез редовна и ангажираща комуникация.
					</div>
				</Collapse>
			</div>
		</>
	);
}

export default function Page() {
	const [isModalOpen, setIsModalOpen] = createSignal(false);
	const [isUploading, setIsUploading] = createSignal(false);
	const [errorMessage, setErrorMessage] = createSignal(false);
	const [isSuccess, setIsSuccess] = createSignal(false);

	const handleSuccess = () => {
		setIsUploading(false);
		setErrorMessage(false);
		setIsSuccess(true);
		setIsModalOpen(true);
	};

	const handleError = () => {
		setErrorMessage(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
		setErrorMessage(false);
		setIsSuccess(false);
	};
	return (
		<>
			<div class="relative w-full">
				<HeroGif
					gifPreview="/assets/home2/1-Hero-Section2.mp4"
					gifPreviewMobile="/assets/home2/1_Hero_Section.mp4"
				/>

				<div class="w-full bg-#000000">
					<div class="max-w-1240px mx-auto">
						<div class="flex flex-justify-center">
							<div class="flex flex-col justify-center items-center left-0 right-0 px-3 my-0 mx-auto absolute top-1/2 lg:top-[53%] xl:top-1/2 text-center w-full transform -translate-y-1/2 mt-0 lg:mt-0" >

								<RevealWords
									as="h1"
									class="mx--15px c-paper mb-2.5 md:mb-7 md:px-10 xl:px-55 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight"
								>
									ДИГИТАЛЕН МАРКЕТИНГ, КОЙТО ЗАЩИТАВА ВАШИЯ ИНТЕРЕС
								</RevealWords>

								<AnimatedComponent class="important-delay-300 c-paper text-center mb-10 font-size-16px xl:font-size-6 important-tracking-1.2px px-15 sm:px-0 mt-2 md:mt-0 md:px-12 max-w-4xl lg:max-w-5xl">
									Ние сме дигиталният партньор, който играе от Вашия отбор.
								</AnimatedComponent>

								<AnimatedComponent class="important-delay-700 mt-10 md:mt-12 lg:mt-16 float-left md:pr-5px relative text-center max-w-1240px">
									<div class="flex md:flex-row flex-col justify-center items-center gap-3">
										<PuzzleButton
											href="#contact-form"
											text="Свържете се с нас"
										/>
										<PuzzleButton2
											href="#about-us"
											text="Повече за нас"
										/>
									</div>
								</AnimatedComponent>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="flex flex-col lg:flex-row lg:items-center lg:justify-between pt-60 md:pt-50 lg:pt-80 max-w-7xl mx-auto">
				<div class="mx-30px lg:mx-20 pr-5 lg:w-1/2 lg:pr-10">
					<ScrollColorText class="w-full">
						<h2 class="important-mb-6 text-3xl md:text-4xl lg:text-5xl">КАКВО МОЖЕМ ДА <span class="c-brand-compl">НАПРАВИМ ЗА ВАС</span></h2>

						<p class="text-base lg:text-lg">Вашият бизнес заслужава да бъде видян и да расте. Ние сме тук, за да помогнем на бизнеси като Вашия да се откроят в дигиталния свят, като вдъхнем живот на Вашия бранд с цялостни дигитални решения. При работата с нас, Вие печелите партньор, който работи за Вашия успех: ние поемаме грижата за цялостната Ви дигитална стратегия. Комбинираме креативност, модерни технологии и стратегическо мислене, прилагайки иновативни решения за максимална ефективност, за да постигнете повече — с по-малко усилия.</p>
					</ScrollColorText>
				</div>

				<div class="relative mt-20 lg:mt-0 overflow-hidden lg:w-1/2">
					<img
						src="/assets/home2/divinitum-2.webp"
						alt=""
						class="w-full block"
					/>

					<div
						class="absolute top-0 left-0 w-full h-[15vh] 
						bg-gradient-to-b from-black via-black/30 to-transparent
						pointer-events-none"
					></div>

					<div
						class="absolute bottom-0 left-0 w-full h-[15vh] 
						bg-gradient-to-t from-black via-black/50 to-transparent
						pointer-events-none"
					></div>
				</div>
			</div>

			<section class="pt-233px pb-144px">
				{/* <RevealWords
					as="h2"
					class="mx-10px"
				>
					<h2>Оставете дигиталния маркетинг на нас, <span class="c-brand-compl">а вие се фокусирайте върху бизнеса си</span></h2>
				</RevealWords> */}

				<h2 class="max-w-7xl mx-auto">
					ОСТАВЕТЕ СЛОЖНОТО НА НАС И ГЛЕДАЙТЕ <span class="c-brand-compl">КАК БИЗНЕСЪТ ВИ РАСТЕ.</span>
				</h2>

				<AnimatedComponent class="">
					<img loading="lazy" class="w-120% md:w-105% mx--10 lg:mx--13 xl:mt--3" src="/assets/home/glass-image.webp" />
				</AnimatedComponent>
				<AnimatedComponent class="flex flex-col mr-0 sm:mt--15 md:mt--15 lg:mt--15 xl:mt--35 lg:mx-10 max-w-800px text-glass-squares">
					<p>Фокусирайте се върху управлението на бизнеса си, а ние ще се погрижим за растежа му онлайн. Взимаме предвид всеки детайл, за да построим стабилни осниови на Вашето онлайн присъствие и да го превърнем в генератор на реални приходи.</p>
				</AnimatedComponent>
			</section>

			<section class="mx-40px lg:mt-60 max-w-7xl xl:max-w-8xl lg:mx-auto">
				<h3 class="c-brand-second text-xl md:text-2xl lg:text-3xl">стратегически фокус:</h3>
				<AnimatedComponent>
					<div class="lg:my-15 xl:px-30 pb-10 max-w-1400px mx-auto flex lg-flex-row flex-col gap-6 lg:gap-20 justify-between items-center">
						<div class="lg-w-1/2 flex-self-start">
							<div class="flex flex-col justify-center items-start gap-5 c-paper">
								<div class="flex justify-center items-start lg:items-center gap-10px c-paper">
									<img src="/assets/home2/Divinitum-logo-SQUARE-STRAIGHT.svg" class="w-6.5 mt-2 lg:m-0 mx-auto" /><div class="c-paper ml-3 uppercase font-size-17px leading-7 font-600 lg:text-xl">усилия в правилната посока</div><br></br>
								</div>
								<div class="flex items-start lg:items-center gap-10px c-paper">
									<img src="/assets/home2/Divinitum-logo-SQUARE-STRAIGHT.svg" class="w-6.5 mt-2 lg:m-0 mx-auto" /><div class="c-paper ml-3 uppercase font-size-17px leading-7 font-600 lg:text-xl">утвърждаване на силно онлайн присъствие</div><br></br>
								</div>
							</div>
						</div>

						<div class="lg-w-1/2 lg-pl-0 flex-self-start">
							<div class="flex flex-col justify-center items-start gap-5 c-paper">
								<div class="flex items-start lg:items-center gap-10px c-paper">
									<img src="/assets/home2/Divinitum-logo-SQUARE-STRAIGHT.svg" class="w-6.5 mt-2 lg:m-0 mx-auto" /><div class="c-paper ml-3 uppercase font-size-17px leading-7 font-600 lg:text-xl">привличане на точните клиенти</div><br></br>
								</div>
								<div class="flex items-start lg:items-center gap-10px c-paper">
									<img src="/assets/home2/Divinitum-logo-SQUARE-STRAIGHT.svg" class="w-6.5 mt-2 lg:m-0 mx-auto" /><div class="c-paper ml-3 uppercase font-size-17px leading-7 font-600 lg:text-xl">генериране на повече продажби</div><br></br>
								</div>
							</div>
						</div>
					</div>
					<div class="text-center lg:text-left">
						<PuzzleButton2
							href="#about-us"
							text="Повече за нас"
						/>
					</div>
				</AnimatedComponent>
			</section>

			<section class="mt-70 mx-40px mb-6 max-w-7xl lg:mx-auto">
				<h2 class="mb-20px lg:mb-20 c-brand-compl text-3xl md:text-4xl lg:text-5xl">Дигитални услуги</h2>
			</section>

			<SingleCollapse />

			<section class="mx-30px mt-70 md:pb-10 pr-5 max-w-7xl lg:mx-auto">
				<h2 class="text-3xl md:text-4xl lg:text-5xl">Обратна връзка <span class="c-brand-compl">от нашите клиенти</span></h2>
				<div class="lg:mt-10">
					<div class="">
						<AnimatedComponent>
							<SliderOfOne reviews={[
								{ name: "1" },
								{ name: "2" },
								{ name: "3" },
							]}>
								<BasicReview
									reviewText={<>
										Благодарение на тях сайтът ни излезе напред в търсачките и клиентите започнаха да ни търсят много повече - работата се увеличи с около 20-30%. Вече не работим само във Варна, а получаваме поръчки от цяла България.
									</>}
									name="Диян Данаилов"
									job={<>
										собственик на “Ренли”<br />
										Фирма, специализирана в почистването на заведения във Варна
									</>}
								/>
								<BasicReview
									reviewText={<>
										Преди да започнем работа заедно, бях работил с други компании, но без реални резултати. Често оставах с усещането, че просто ми взимат парите, тук за първи път усетихме реално отношение и фокус върху резултатите.
									</>}
									name="Явор Горолов"
									job={<>
										собственик на Fine Carpet Cleaning<br />
										По­чис­тва­ща фир­ма за килими в Лондон
									</>}
								/>
								<BasicReview
									reviewText={<>
										Още от самото начало, когато започнахме работа имаше положителен прогрес, а реалните резултати дойдоха след няколко месеца. Като пример мога да дам, че в гугъл сме на първо място по всички ключови думи, имайки предвид голямата конкуренция.
									</>}
									name="Кристиан Митов"
									job={<>
										собственик на The Barber Shop<br />
										Премиум бръснарница в София
									</>}
								/>
							</SliderOfOne>
						</AnimatedComponent>
					</div>
				</div>
			</section>

			<SlidingLogoCarousel class="mt-20 md:mt-0 md:mt-60 md:px-30 xl:px-25 md:ml-5 mx-5 overflow-hidden" />

			<section class="mx-auto mt-24 md:mt-70">
				<div class="[background-color:#000000] mx-[-21px] lg:mx-0">
					<div
						class="rotate-0 block md:hidden
							mb-20
							relative 
							h-[50vh] 
							bg-[url(/assets/home2/divinitum-3.webp)] 
							bg-[position:right_55%_bottom_0%] lg:bg-[position:right_55%_bottom_60%]
							bg-no-repeat 
							bg-cover 
							"
						role="img"
						aria-label=""
					></div>
					<div
						class="rotate-0 md:block hidden
							mb-20
							relative 
							h-[100vh] 
							bg-[url(/assets/home2/divinitum-3.webp)] 
							bg-[position:right_5%_bottom_100%] xl:bg-[position:right_10%_bottom_100%] {/* Adjusted for xl */}
							bg-no-repeat 
							bg-cover 
							[mask-image:linear-gradient(to_bottom,_rgba(0,0,0,1)_60%,_rgba(0,0,0,0.7)_75%,_rgba(0,0,0,0.4)_85%,_rgba(0,0,0,0)_100%)] 
							[-webkit-mask-image:linear-gradient(to_bottom,_rgba(0,0,0,1)_60%,_rgba(0,0,0,0.7)_75%,_rgba(0,0,0,0)_85%,_rgba(0,0,0,0)_100%)] 
							"
						role="img"
						aria-label=""
					></div>
				</div>

				<ScrollColorText class="max-w-7xl lg:mx-auto mx-5 mt--10 md:mt--40 max-w-5xl">
					<h2 class="text-2xl important-lg:text-11 md:text-3xl font-bold uppercase">
						Създаваме среда, в която бизнесите могат:
					</h2>
					<div class="mt-4 lg:mt-12 space-y-6">
						<div>
							<h3 class="text-lg important-lg:text-7 font-semibold text-brand-second uppercase">Лесно да управляват маркетинга си</h3>
							<p class="text-base lg:text-lg">като им предоставяме отлично управление на рекламите</p>
						</div>
						<div>
							<h3 class="text-lg important-lg:text-7 font-semibold text-brand-second uppercase">Да растат устойчиво</h3>
							<p class="text-base lg:text-lg">чрез постоянен поток от нови клиенти и измерими резултати всеки месец</p>
						</div>
						<div>
							<h3 class="text-lg important-lg:text-7 font-semibold text-brand-second uppercase">Да печелят повече</h3>
							<p class="text-base lg:text-lg">благодарение на изпитани системи, които превръщат инвестицията в реални приходи</p>
						</div>
						<div>
							<h3 class="text-lg important-lg:text-7 font-semibold text-brand-second uppercase important-mt-40px important-mb-10px important-leading-8 important-lg:leading-9">“Нашата цел е да помогнем на вашия бизнес да остави траен отпечатък в днешния дигитален свят.”</h3>
							<div class="flex flex-row justify-start items-center">
								<p class="italic text-base lg:text-lg">CEO of</p>
								<img src="/assets/Divinitum-logo.svg" class="max-w-140px ml-3" />
							</div>
						</div>
					</div>
				</ScrollColorText>
			</section>

			<div id="about-us"></div>

			<section class="mx-30px mt-70 max-w-7xl lg:mx-auto">
				<div>
					<h2 class="text-3xl md:text-4xl lg:text-5xl">Какво стои зад</h2>
					<img src="/assets/Divinitum-logo.svg" class="max-w-250px lg:max-w-350px mx-0 mt-2" />
				</div>
				<h3 class="pt-18 important-mb-0 important-lg:mb-8 important-font-size-34px important-lg:font-size-44px important-leading-9">Нашата <span class="c-brand-compl">мисия</span></h3>
				<p class="mt-3 important-font-size-20px important-leading-7 max-w-1200px text-base lg:text-xl">
					Да освободим бизнес собствениците от хаоса на дигиталния маркетинг и да им дадем яснота, контрол и резултати. Да бъдем Вашият доверен партньор по пътя към онлайн успеха.
				</p>
			</section>

			<section class="mt-20 lg:mt-60 mx-30px lg:mx-20">
				<AnimatedComponent>
					<h3 class="pt-18 important-mb--5 lg:important-mb-0 important-font-size-34px important-lg:font-size-44px important-leading-9">Нашите <span class="c-brand-compl">ценности</span></h3>
					<SliderOfOne
						reviews={[
							{ name: "1" },
							{ name: "2" },
							{ name: "3" },
						]}>
						<ImagewTextReview
							reviewTitle="Без губене на време"
							reviewText={<>
								Честността е в основата на всичко, което правим. Ако установим, че не можем да ви бъдем полезни – ще ви го кажем открито още в началото.
							</>}
							video="/assets/home2/2.1.-Без-Губене-На-Време.mp4"
						/>
						<ImagewTextReview
							reviewTitle="Реалистични очаквания"
							reviewText={<>
								Изграждането на дигитално присъствие изисква време, тестове и ресурси.<br />
								Няма универсална формула — нужно е подходящо позициониране и стратегия, която работи за Вашия бизнес.
							</>}
							video="/assets/home2/2.2-Реалистични-Очаквания.mp4"
						/>
						<ImagewTextReview
							reviewTitle="Без фалшиви обещания"
							reviewText={<>
								Никога няма да Ви гарантираме резултати, които не можем да контролираме.<br />
								Обещаваме работа, анализ и подобрения, които стъпка по стъпка водят до реални бизнес резултати.
							</>}
							video="/assets/home2/2.3.-Без-Фалшиви-Обещания.mp4"
						/>
					</SliderOfOne>
				</AnimatedComponent>
			</section>

			<section class="mt-70 lg:mt-60 mx-30px lg:mx-20">
				<AnimatedComponent>
					<h3 class="pt-18 important-mb--5 lg:important-mb-0 important-font-size-34px important-lg:font-size-44px important-leading-9">Как <span class="c-brand-compl">работим</span></h3>
					<SliderOfOne
						reviews={[
							{ name: "1" },
							{ name: "2" },
							{ name: "3" },
							{ name: "4" },
							{ name: "5" },
						]}>
						<ImagewTextReview
							reviewTitle={<>
								<div class="flex gap-3 items-center">
									<div class="flex items-center">
										<IconoirNumber1SquareSolid class="c-yellow w-8 h-8" />
									</div>
									<div class="font-size-20px font-600 lg:text-xl">ОРГАНИЗИРАМЕ СРЕЩА</div>
								</div>
							</>}
							reviewText={<>
								Организираме среща, на която да се запознаем и да обсъдим Вашите цели, предизвикателства и очаквания. Действа като отправна точка, възможност да се опознаем и да дефинираме как можем да Ви бъдем най-полезни.
							</>}
							video="/assets/home2/3.1.-Организираме-Среща.mp4"
							class2="important-pb-5 pt-7"
						/>
						<ImagewTextReview
							reviewTitle={<>
								<div class="flex gap-3 items-center">
									<div class="flex items-center">
										<IconoirNumber2SquareSolid class="c-yellow w-8 h-8" />
									</div>
									<div class="font-size-20px font-600 lg:text-xl">Запознаваме се с вашият бизнес</div>
								</div>
							</>}
							reviewText={<>
								Провеждаме детайлен анализ на Вашия бизнес. Целта ни е да разберем какво Ви движи, какво Ви спира и къде искате да стигнете. Така всяка следваща стъпка от процеса е индивидуално съобразена с Вашите бизнес цели.
							</>}
							video="/assets/home2/3.2.-Запознаваме-Се-С-Вашия-Бизнес.mp4"
							class2="important-pb-5 pt-7"
						/>
						<ImagewTextReview
							reviewTitle={<>
								<div class="flex gap-3 items-center">
									<div class="flex items-center">
										<IconoirNumber3SquareSolid class="c-yellow w-8 h-8" />
									</div>
									<div class="font-size-20px font-600 lg:text-xl">Изграждаме цялостна стратегия, която да работи за вас</div>
								</div>
							</>}
							reviewText={<>
								Не използваме „копи-пейст“ решения.<br />
								Създаваме дигитална стратегия, която подхожда на Вашия бизнес модел, пазар и клиент. Тя е ясна, изпълнима и насочена към постигане на реални резултати.
							</>}
							video="/assets/home2/3.3.-Изграждаме-Цялостна-Стратегия.mp4"
							class2="important-pb-5 pt-7"
						/>
						<ImagewTextReview
							reviewTitle={<>
								<div class="flex gap-3 items-center">
									<div class="flex items-center">
										<IconoirNumber4SquareSolid class="c-yellow w-8 h-8" />
									</div>
									<div class="font-size-20px font-600 lg:text-xl">Ние действаме. Вие следите напредъка</div>
								</div>
							</>}
							reviewText={<>
								Поемаме изпълнението на проекта. Анализираме и при нужда оптимизираме и доразвиваме.<br />
								Всичко се случва прозрачно: знаете какво правим, защо го правим и какви резултати целим.
							</>}
							video="/assets/home2/3.4.-Ние-Действаме-Вие-Следите-Напредъка.mp4"
							class2="important-pb-5 pt-7"
						/>
						<ImagewTextReview
							reviewTitle={<>
								<div class="flex gap-3 items-center">
									<div class="flex items-center">
										<IconoirNumber5SquareSolid class="c-yellow w-8 h-8" />
									</div>
									<div class="font-size-20px font-600 lg:text-xl">растем заедно</div>
								</div>
							</>}
							reviewText={<>
								Когато вие печелите, ние също. Нашата цел не е еднократен успех, а дългосрочен растеж. Да превърнем Вашия маркетинг в система, която работи, докато Вие мислите за следващата стъпка.
							</>}
							video="/assets/home2/3.5.-Растем-Заедно.mp4"
							class2="important-pb-5 pt-7"
						/>
					</SliderOfOne>
				</AnimatedComponent>
			</section>

			<section class="mt-70 lg:mt-60 mx-30px max-w-7xl lg:mx-auto">
				<AnimatedComponent>
					<h3 class="important-font-size-34px important-lg:font-size-44px lg:mb-20 important-leading-9">Case <span class="c-brand-compl">Study</span></h3>
					<ImageReview
						reviewText={<>
							Около два месеца след началото на рекламите с Дивинитум, <span class="c-brand-second">запитванията се увеличиха с около 35%.</span>.
						</>}
						img="/assets/home2/jiavor-review.png"
						name={<>
							Явор Горолов<br />
							<span class="c-gray-400">собственик на Fine Carpet Cleaning<br />
								По­чис­тва­ща фир­ма за килими в Лондон</span>
						</>}
						case="Клиентът имаше предизвикателство – недостатъчно запитвания от онлайн каналите. След анализ на бизнеса и аудиторията създадохме таргетирани Google кампании с оптимизирани обяви. Само за два месеца запитванията се увеличиха с 35%. Паралелно оптимизирахме ключови страници на сайта, които се класираха органично на първа страница в Google. Така съвместната ни работа постигна двоен ефект – повече запитвания и трайна онлайн видимост."
					/>
				</AnimatedComponent>
			</section>

			<section class="mt-40 mb-30">
				<div class="[background-color:#000000] mx-[-21px]">
					<div
						class="rotate-0 block md:hidden
							mb-20
							relative 
							h-[40vh] 
							bg-[url(/assets/home2/3.-Имаме-опита-инструментите.webp)] 
							bg-[position:right_55%_bottom_0%] lg:bg-[position:right_55%_bottom_60%]
							bg-no-repeat 
							bg-cover
							hue-rotate-[-10deg]
							[mask-image:linear-gradient(to_bottom,_rgba(0,0,0,1)_60%,_rgba(0,0,0,0.7)_75%,_rgba(0,0,0,0.4)_85%,_rgba(0,0,0,0)_100%)] 
							[-webkit-mask-image:linear-gradient(to_bottom,_rgba(0,0,0,1)_60%,_rgba(0,0,0,0.7)_75%,_rgba(0,0,0,0)_85%,_rgba(0,0,0,0)_100%)] 
							"
						role="img"
						aria-label=""
					></div>
					<div
						class="rotate-0 md:block hidden
							mb-20
							relative 
							h-[80vh] 
							bg-[url(/assets/home2/3.-Имаме-опита-инструментите.webp)] 
							bg-[position:right_5%_bottom_90%] xl:bg-[position:right_10%_bottom_90%] {/* Adjusted for xl */}
							bg-no-repeat 
							bg-cover 
							hue-rotate-[-10deg]
							[mask-image:linear-gradient(to_bottom,_rgba(0,0,0,1)_60%,_rgba(0,0,0,0.7)_75%,_rgba(0,0,0,0.4)_85%,_rgba(0,0,0,0)_100%)] 
							[-webkit-mask-image:linear-gradient(to_bottom,_rgba(0,0,0,1)_60%,_rgba(0,0,0,0.7)_75%,_rgba(0,0,0,0)_85%,_rgba(0,0,0,0)_100%)] 
							"
						role="img"
						aria-label=""
					></div>
				</div>

				<div class="important-pl-10px lg:pl-0 text-center lg:text-left">
					<ScrollColorText>
						<h2 class="max-w-7xl mx-auto mt--30 lg:mt--60 lg:mr-100 case-normal important-font-size-36px important-leading-12 important-lg:pl-10 relative z-2 uppercase text-3xl md:text-4xl lg:text-5xl">Време е и Вашият бизнес <span class="c-brand-second">да започне да расте!</span></h2>
					</ScrollColorText>
					<div class="mt-10 lg:pl-10">
						<PuzzleButton
							href="#contact-form"
							text="Свържете се с нас"
						/>
					</div>
				</div>
			</section>

			<div class="bg-paper" id="contact-form">
				<ContactUs
					onSuccess={handleSuccess}
					onError={handleError}
					setUploading={setIsUploading}
				/>
			</div>

			{isUploading() && (
				<div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
					<div class="bg-black py-10 px-6 shadow-lg max-w-full w-96">
						<h3 class="important-text-md font-semibold mb-3">Изпращане...</h3>
						<div class="w-full bg-gray-200 h-4 overflow-hidden relative">
							<div
								class="h-full relative"
								style={{
									background: 'linear-gradient(to right, #aeeb56, #87bd40ff)',
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

			{isModalOpen() && (
				<div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-5 px-5">
					<div class="bg-black p-8 shadow-lg max-w-md w-full">
						<h2 class="important-text-5.5 font-bold mb-4 mt-1">Успешно изпращане!</h2>
						<p class="mb-5 pr-2">Съобщението е изпратено успешно! Ще се свържем с Вас възможно най-скоро.</p>
						<button
							onClick={closeModal}
							class="cursor-pointer bg-brand text-white tracking-0.8px px-5 py-3 b-none hover:bg-brand-second-action-hover transition-colors">
							Затвори
						</button>
					</div>
				</div>
			)}

			{errorMessage() && (
				<div class="fixed inset-0 flex items-center justify-center bg-paper-inv bg-opacity-50 z-5 px-5">
					<div class="bg-black px-8 pb-10 pt-7 shadow-lg max-w-lg w-full relative">
						<div
							onClick={closeModal}
							class="cursor-pointer b-none c-brand hover-c-brand-action transition-colors absolute top-4 right-4">
							<MdiCloseThick class="w-8 font-size-5" />
						</div>
						<h3 class="font-semibold important-mb-6 text-left">Oops...</h3>
						<div>Изглежда, че нашата контактна форма не работи правилно.</div>
						<div>Моля, изпратете ни съобщение на имейл:</div>
						<div class="mt-7"><a class="cursor-pointer c-paper text-white px-5 py-3 b-none bg-brand hover:bg-brand-hover transition-colors tracking-0.2" href="mailto:office@divinitum.bg" target="_blank" rel="noopener">office@divinitum.bg</a></div>
					</div>
				</div>
			)}
		</>
	);
}