import "solid-slider/slider.css";
import { createSignal, JSXElement } from 'solid-js';
import { ReviewSlider, StarReview } from '../../../components/ReviewSlider';
import { VideoPlayer } from '../../../components/VideoPlayer';
import { GallerySlider } from '../../../components/GallerySlider';
import { AnimatedComponent } from '../../../components/AnimateOnView';
import { AnimatedComponentSlide } from '../../../components/AnimateOnViewSlide';
import { ElementInOftenOT, OftenOT } from '../../../components/OftenOT';
import MdiProgressClock from '~icons/mdi/progress-clock';
import RiShining2Line from '~icons/ri/shining-2-line';
import MdiPlus from '~icons/mdi/plus';
import MdiRomanNumeral1 from '~icons/mdi/roman-numeral-1';
import MdiRomanNumeral2 from '~icons/mdi/roman-numeral-2';
import MdiRomanNumeral3 from '~icons/mdi/roman-numeral-3';
import MdiRomanNumeral4 from '~icons/mdi/roman-numeral-4';
import MdiRomanNumeral5 from '~icons/mdi/roman-numeral-5';
import MdiRomanNumeral6 from '~icons/mdi/roman-numeral-6';
import MdiRomanNumeral7 from '~icons/mdi/roman-numeral-7';
import MdiRomanNumeral8 from '~icons/mdi/roman-numeral-8';
import MdiRomanNumeral9 from '~icons/mdi/roman-numeral-9';
import MdiRomanNumeral10 from '~icons/mdi/roman-numeral-10';
import { H2WithImage } from "../../../components/H2WithImage";

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
				<Collapse title="Задължително ли е да запазя час за традиционно бръснене на главата с бръснач предварително?" desc="Препоръчваме Ви да запазите час предварително, за да си осигурите гладко бръснене на глава в удобно за Вас време. При наличие на свободни часове приемаме и клиенти без предварителна резервация." />

				<Collapse title="Как мога да си запазя час за бръснене на глава с бръснач?" desc="За Ваше улеснение можете да запазите час за гладко бръснене на главата по следните начини:">
					<div>
						<ul>
							<li class="">
								онлайн чрез нашия уебсайт
							</li>
							<li class="">
								по телефона на номер +359 882 820 331
							</li>
							<li class="">
								на място в бръснарницата ни кв. Изток, гр. София
							</li>
						</ul>
					</div>
				</Collapse>

				<Collapse title="Какво ще се случи, ако не успея да дойда навреме за часа си?" desc="Молим да ни уведомите, ако ще закъснеете. Ако закъснението е повече от 15 минути, ще се наложи да отменим часа Ви." />

				<Collapse title="Мога ли да избера конкретен барбър за гладко бръснене на скалпа?" desc="Да, за Ваше удобство при записване на час за традиционно бръснене на главата с бръснач можете да уточните на кого от нашите висококвалифицирани барбъри да се доверите." />

				<Collapse title="Какви методи на плащане използвате?" desc="Приемаме плащане в брой, както и чрез дебитна / кредитна карта." />

				<Collapse title="Мога ли да закупя продукти на място от бръснарницата?" desc="Да, можете да разгледате нашия асортимент от мъжки професионални продукти за коса и брада и да ги закупите на място от бръснарницата." />

				<Collapse title="The Barber Shop достъпен ли е за инвалиди?" desc="Бръснарницата е достъпна за инвалиди. В случай че изпитвате затруднения или имате въпроси, свържете се с нас на телефон +359 882 820 331." />

				<Collapse title="Осигурявате ли паркоместа за клиентите?" desc="Да, осигурили сме 4 паркоместа пред входа на бръснарницата на разположение на клиентите." />

				<Collapse title="Безопасно ли е класическото бръснене до голо?" desc="Да, безопасно е, ако се извършва от професионалист. Нашите бръснари са опитни и внимателни, така че можете да се отпуснете и да се насладите на процеса." />

				<Collapse title="Колко често трябва да посещавам бръснарницата за бръснене на глава с бръснач?" desc="Зависи от това колко бързо расте косата Ви и каква дължина на косата предпочитате. Ако искате да поддържате гладко обръсната глава Ви препоръчваме посещение на всеки 1-2 седмици." />

				<Collapse title="Трябва ли да се подготвя предварително за гладко бръснене на глава?" desc="Не е необходима предварителна подготовка преди посещение в бръснарницата. Не мислете за нищо, ние ще се погрижим." />

				<Collapse title="Подходящо ли е гладко бръснене на скалпа за хора с чувствителен скалп?" desc="Да, подходящо е за хора с чувствителна кожа. Ние използваме висококачествени продукти и инструменти, с които минимизираме дразненето и осигуряваме максимален комфорт на всеки един клиент." />

				<Collapse title="Болезнено ли е традиционното бръснене на главата с бръснач?" desc="Не, когато се извършва от опитен професионалист с помощта на качествени продукти и инструменти е абсолютно безболезнено. Нашите бръснари знаят как да извършат услугата, така че да осигурят максимален комфорт на клиента." />

				<Collapse title="Необходимо ли е да полагам някакви специални грижи за кожата си след бръснене на глава с бръснач?" desc="Не, не е нужно полагането на специални грижи извън ежедневните. Консултираме всеки един клиент относно правилните козметика, инструменти и употребата им спрямо неговите нужди за поддържането на перфектна визия в домашни условия." />
			</div>
		</>
	);
}

export default function Page() {
	return (
		<>
			<noscript>
				<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NWKWKC4Z"
					height="0" width="0" style="display:none;visibility:hidden">
				</iframe>
			</noscript>

			<div style="background-position: center top; background-repeat: no-repeat; background-size: cover; height: auto;"><div style="background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(/assets/brasnene-na-glava-s-brasnach/бръснене-на-глава-с-бръснач-в-бръснарница.webp); background-position: left 100% top 100%; background-repeat: no-repeat; background-size: cover;" class="h-97vh md:h-100vh brasnene-na-glava-img" role="img" aria-label="бръснене на глава с бръснач в barber shop sofia"></div></div>

			<div class="w-full bg-#212528">
				<div class="max-w-1240px mx-auto">
					<div class="flex flex-justify-center">
						<div class="left-0 right-0 px-3 my-0 mx-auto absolute top-58% lg-top-62% text-center w-full max-w-1000px" style="-webkit-transform: translateY(-50%);">
							<AnimatedComponent>
								<h1 class="uppercase c-paper mb-6 text-center">Бръснене на глава с бръснач</h1>
							</AnimatedComponent>
							<AnimatedComponent>
								<p class="important-delay-300 c-paper text-center lg-pt-10 font-size-15.5px md-font-size-18px line-height-6.5 md:line-height-7">Подарете си <span class="c-brand font-500" style="font-family: 'Roboto'">бръснене на глава с бръснач</span> за гладко и свежо усещане. Ние от The Barber Shop Sofia подхождаме с внимание и грижа към всеки детайл. С помощта на премиум продукти, инструменти и топ бръснари гарантираме изключително гладък резултат и здрава кожа.</p>
							</AnimatedComponent>
						</div>
					</div>
				</div>
			</div>

			<div class="pb-10" style="background-image: url(/assets/thebarbershop-dark-bg.webp); background-position: center; background-repeat: no-repeat; background-size: cover;">
				<AnimatedComponentSlide>
					<H2WithImage class="c-paper" title="Какво Ви очаква по време на бръснене на глава" />
				</AnimatedComponentSlide>
				<AnimatedComponentSlide>
					<div class="lg-mt-0 lg-px-30 pb-10 max-w-1600px mx-auto flex lg-flex-row flex-col gap-6 lg-gap-13 flex-items-center">
						<div class="lg-w-50% px-5 flex-self-start">
							<div class="flex flex-col gap-5 c-paper">
								<div class="flex flex-items-start gap-10px c-paper">
									<MdiRomanNumeral1 class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-36px h-36px c-brand" /><div class="mt-1 c-paper">Посрещане с усмивка и освежаваща напитка.</div><br></br>
								</div>
								<div class="flex flex-items-start gap-10px c-paper">
									<MdiRomanNumeral2 class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-36px h-36px c-brand" /><div class="mt-1 c-paper">Настаняване на бръснарския стол.</div><br></br>
								</div>
								<div class="flex flex-items-start gap-10px c-paper">
									<MdiRomanNumeral3 class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-36px h-36px c-brand" /><div class="mt-1 c-paper">Консултация относно желания резултат след бръсненето на глава с бръснач.</div><br></br>
								</div>
								<div class="flex flex-items-start gap-10px c-paper">
									<MdiRomanNumeral4 class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-36px h-36px c-brand" /><div class="mt-1 c-paper">Бръснене на главата спрямо Вашите черти и изисквания.</div><br></br>
								</div>
								<div class="flex flex-items-start gap-10px c-paper">
									<MdiRomanNumeral5 class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-36px h-36px c-brand" /><div class="mt-1 c-paper">Измиване на главата с професионален шампоан.</div>
								</div>
								<div class="flex flex-items-start gap-10px c-paper">
									<MdiRomanNumeral6 class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-36px h-36px c-brand" /><div class="mt-1 c-paper">Подготвяне на кожата с топла кърпа, за омекотяване.</div><br></br>
								</div>
								<div class="flex flex-items-start gap-10px c-paper">
									<MdiRomanNumeral7 class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-36px h-36px c-brand" /><div class="mt-1 c-paper">Нанасяне на крем или гел за бръснене.</div><br></br>
								</div>
							</div>
						</div>

						<div class="lg-w-50% pr-5 pl-5 lg-pl-0 flex-self-start">
							<div class="flex flex-col gap-5 c-paper">
								<div class="flex flex-items-start gap-10px c-paper">
									<MdiRomanNumeral8 class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-36px h-36px c-brand" /><div class="mt-1 c-paper">Бръснене на главата с чист и остър бръснач.</div><br></br>
								</div>
								<div class="flex flex-items-start gap-10px c-paper">
									<MdiRomanNumeral9 class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-36px h-36px c-brand" /><div class="mt-1 c-paper">След гладко бръснене на главата, избърсваме с хладка кърпа за затваряне на порите.</div>
								</div>
								<div class="flex flex-items-start gap-10px c-paper">
									<MdiRomanNumeral10 class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-36px h-36px c-brand" /><div class="mt-1 c-paper">Нанасяне на успокояващ лосион или балсам.</div>
								</div>
								<div class="flex flex-items-start gap-10px c-paper">
									<div class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-40px h-40px c-brand" >
										<MdiRomanNumeral11 />
									</div>
									<div class="mt-1 c-paper">Изсушаване на главата, ако е необходимо.</div>
								</div>
								<div class="flex flex-items-start gap-10px c-paper">
									<div class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-40px h-40px c-brand">
										<MdiRomanNumeral12 />
									</div>
									<div class="mt-1 c-paper">Представяне на повече информация относно предимствата от използваните продукти по време на традиционно бръснене на глава с бръснач.</div>
								</div>
								<div class="flex flex-items-start gap-10px c-paper">
									<div class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-40px h-40px c-brand">
										<MdiRomanNumeral13 />
									</div>
									<div class="mt-1 c-paper">Перфектна визия и повишено самочувствие.</div>
								</div>
							</div>
						</div>
					</div>
				</AnimatedComponentSlide>
			</div>

			{/* <section class="lg-pb-25 pb-20">
				<AnimatedComponent>
					<H2WithImage class="max-w-750px mx-auto" title="Как изглежда процеса на бръснене на глава" />
				</AnimatedComponent>
				<AnimatedComponent>
					<VideoPlayer src='https://www.youtube.com/embed/e2x0UXVU2yg?enablejsapi=1&mute=1' />
				</AnimatedComponent>
			</section> */}

			<div class="pb-20" style="background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8) ), url(/assets/brown-background-image.webp); background-position: center; background-repeat: no-repeat; background-size: cover;">
				<H2WithImage class="c-paper" title="Цена на бръснене на глава" />
				<AnimatedComponentSlide>
					<div class="mt-15 md-mt-20 px-20px sm-px-50px md-pb-10 pb-5 max-w-1400px mx-auto">
						<div>
							<div class="flex flex-justify-between gap-5 b-b-solid b-1px b-gray-500 pb-1">
								<div class="font-size-6 uppercase c-paper font-500 text-left pb-1" style="font-family: 'Oswald', sans-serif !important;">Бръснене на глава</div>
								<div class="c-brand font-size-6 uppercase font-500 whitespace-nowrap" style="font-family: 'Oswald', sans-serif !important;">45 лв.</div>
							</div>
							<div class="c-gray-300 font-size-4.2 pt-3">Бръснене на глава с бръснач [1ч.]</div>
						</div>
					</div>
				</AnimatedComponentSlide>

				<AnimatedComponentSlide class="mx-3 md-mx-10">
					<div class="flex w-full px-10px lg-px-50px py-10 max-w-1320px mx-auto flex-justify-between flex-items-center b-solid b-2px b-gray-500 flex mt-8 hover-b-paper hover-bg-#14100c transition-colors important-transition-duration-300">
						<div class="c-paper font-size-5 lg-font-size-6 flex flex-items-center" style="font-family: 'Oswald', sans-serif !important;">
							<MdiProgressClock class="flex flex-self-center mr-2 lg-w-7 md-w-10 w-20 c-brand" />Работно време: Понеделник - Неделя: 10:00 - 20:00
						</div>
						<div class="flex flex-col flex-items-center flex-self-center">
							<a href="https://book.thebarbershop.bg/reservations/start?site=1" target="_blank" rel="noopener noreferrer" class="bg-brand-compliment c-paper b-solid b-2px b-brand-compliment uppercase font-size-13px sm-font-size-4 font-500 px-7 ml-4px md-ml-2 lg-text-left text-center py-2 hover-c-paper-inv transition-colors line-height-5 sm-line-height-6" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">Запазете час</a>
						</div>
					</div>
				</AnimatedComponentSlide>
			</div>

			<section>
				<div class="lg-pb-25 pb-20">
					<AnimatedComponent>
						<H2WithImage title="Бръснене на глава с бръснач в действие" />
					</AnimatedComponent>
					<GallerySlider imgs={[
						{ src: "/assets/brasnene-na-glava-s-brasnach/бръснене-на-глава-с-бръснач-в-барбершоп.webp", alt: "бръснене на глава с бръснач в барбершоп" },
						{ src: "/assets/brasnene-na-glava-s-brasnach/бръснене-на-глава-от-barbershop-в-софия.webp", alt: "бръснене на глава с бръснач от barbershop в софия" },
						{ src: "/assets/brasnene-na-glava-s-brasnach/бръснене-на-глава-в-the-barber-shop-sofia.webp", alt: "бръснене на глава с бръснач в the barber shop sofia" },
						{ src: "/assets/brasnene-na-glava-s-brasnach/бръснене-на-глава-с-бръснач-от-sofia-barber.webp", alt: "бръснене на глава с бръснач от sofia barber" },
						{ src: "/assets/brasnene-na-glava-s-brasnach/бръснене-на-глава-с-бръснач.webp", alt: "бръснене на глава с бръснач" },
						{ src: "/assets/brasnene-na-glava-s-brasnach/бръснене-на-глава-от-бръснар-в-софия.webp", alt: "бръснене на глава от бръснар в софия" },
						{ src: "/assets/brasnene-na-glava-s-brasnach/бръснарници-в-софия-бръснене-на-глава.webp", alt: "бръснарници в софия бръснене на глава" },
						{ src: "/assets/brasnene-na-glava-s-brasnach/бръснене-на-глава-в-барбер-шоп-софия.webp", alt: "бръснене на глава в барбер шоп софия" },
						{ src: "/assets/brasnene-na-glava-s-brasnach/бръснене-на-глава-от-бръснари-в-софия.webp", alt: "бръснене на глава с бръснач от бръснари в софия" },
						{ src: "/assets/brasnene-na-glava-s-brasnach/бръснене-на-глава-с-бръснач-в-барбер шоп.webp", alt: "бръснене на глава с бръснач в барбер шоп" },
						{ src: "/assets/brasnene-na-glava-s-brasnach/бръснене-на-глава-от-от-бръснар-в-софия.webp", alt: "бръснене на глава с бръснач от бръснар в софия" },
						{ src: "/assets/brasnene-na-glava-s-brasnach/бръснене-на-глава-с-бръснач-в-бръснарница-в-софия.webp", alt: "бръснене на глава с бръснач бръснарница в софия" },
					]}
					/>
				</div>

				<section style="background-color: #222222; background-image: url(/assets/thebarbershop-dark-bg.webp); background-position: center center; background-repeat: no-repeat; background-size: cover;">
					<div class="flex flex-col pb-20">
						<div class="flex flex-col flex-items-center">
							<AnimatedComponent>
								<H2WithImage class="c-paper" title="Отзиви" />
							</AnimatedComponent>
						</div>
						<div>
							<AnimatedComponent>
								<ReviewSlider
									reviews={[
										{ name: "Stanislav Radnev" },
										{ name: "Albert Hristov" },
										{ name: "Илиян Станков" },
										{ name: "Vladimir Valchev" },
										{ name: "Boyan Kushev" },
										{ name: "Alex" },
										{ name: "Finesse Fishing" },
										{ name: "Hristo Velev" },
									]}>
									<StarReview
										src="/assets/GoogleLogoPNGImage.png"
										reviewText={
											<>
												Ходя там през последните 7 години и обслужването е безупречно.<br />
												Бих препоръчал на всички.
											</>
										}
										name="Stanislav Radnev"
										date="Февруари 2024"
										stars={5}
										hrefGoogleReview="https://maps.app.goo.gl/Mra4TTCYEH4noiN8A"
									/>
									<StarReview
										src="/assets/GoogleLogoPNGImage.png"
										reviewText="Много стилно и хубаво място със специалисти които приемат предизвикателства. Крис е магьосник 🧙‍♂️…"
										name="Albert Hristov"
										date="Януари 2022"
										stars={5}
										hrefGoogleReview="https://maps.app.goo.gl/dRKPVt56gbgpdG1E9"
									/>
									<StarReview
										src="/assets/GoogleLogoPNGImage.png"
										reviewText="Крис е супер. От 3 години ги посещавам и винаги вършат страхотна работа."
										name="Илиян Станков"
										date="Май 2024"
										stars={5}
										hrefGoogleReview="https://maps.app.goo.gl/r7rNf1c41YMVxkwj8"
									/>
									<StarReview
										src="/assets/GoogleLogoPNGImage.png"
										reviewText="Excellent service and truly professional barbers."
										name="Vladimir Valchev"
										date="Май 2024"
										stars={5}
										hrefGoogleReview="https://maps.app.goo.gl/5Xr7evZ2baMg1ZgJ8"
									/>
									<StarReview
										src="/assets/GoogleLogoPNGImage.png"
										reviewText="Excellent service, very nice and clean place! Definitely recommended 🤟🤟🤟"
										name="Boyan Kushev"
										date="Януари 2025"
										stars={5}
										hrefGoogleReview="https://maps.app.goo.gl/J1LBo8LHk1jTjx9y6"
									/>
									<StarReview
										src="/assets/GoogleLogoPNGImage.png"
										reviewText="Professional and best hair salon in Sofia. Highly recommend."
										name="Alex"
										date="Май 2024"
										stars={5}
										hrefGoogleReview="https://maps.app.goo.gl/KJKdFm9ZBb4QdzH28"
									/>
									<StarReview
										src="/assets/GoogleLogoPNGImage.png"
										reviewText="Great place! Amazing service and professional staff! Totally recommend!"
										name="Finesse Fishing"
										date="Февруари 2024"
										stars={5}
										hrefGoogleReview="https://maps.app.goo.gl/hNzA5HqpUHS7k9nf7"
									/>
									<StarReview
										src="/assets/GoogleLogoPNGImage.png"
										reviewText="The guys are pros! Good music, good atmosphere and offer a free drink. They also have free parking but is limited to number of spaces, so better call them in advance if you are planning to visit with a car."
										name="Hristo Velev"
										date="Март 2024"
										stars={5}
										hrefGoogleReview="https://maps.app.goo.gl/hTviWSgBNaeRdZ7u5"
									/>
								</ReviewSlider>
							</AnimatedComponent>
						</div>
						<AnimatedComponent>
							<div class="flex flex-col flex-items-center">
								<a href="https://www.google.com/maps/place/The+Barber+Shop+Sofia/@42.6709892,23.3495634,17z/data=!4m14!1m5!8m4!1e1!2s116520566335663544524!3m1!1e1!3m7!1s0x40aa85cc743ddfd7:0xfdafbdb8cd44f23!8m2!3d42.6709899!4d23.3521502!9m1!1b1!16s%2Fg%2F11g9n1jlq8?hl=en-GB&entry=ttu&g_ep=EgoyMDI1MDQyMi4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" class="bg-brand-compliment c-paper b-solid b-2px b-brand-compliment uppercase font-size-4 font-500 px-7 py-2 hover-c-paper-inv transition-colors" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">Вижте повече</a>
							</div>
						</AnimatedComponent>
					</div>
				</section>

				<div class="pb-20">
					<AnimatedComponent>
						<H2WithImage title="Често поръчвани заедно" />
					</AnimatedComponent>

					<AnimatedComponent>
						<OftenOT
							services={[
								{ title: "Класическо мокро бръснене" },
								{ title: "Оформяне на брада" },
							]}>
							<ElementInOftenOT
								img="/assets/uslugi/класическо-мокро-бръснене-mobile.webp"
								alt="Класическо мокро бръснене"
								href="/uslugi/klasichesko-mokro-brasnene"
								title="Класическо мокро бръснене"
							/>
							<ElementInOftenOT
								img="/assets/uslugi/оформяне-на-брада-1-mobile.webp"
								alt="Оформяне на брада"
								href="/uslugi/oformiane-na-brada"
								title="Оформяне на брада"
							/>
						</OftenOT>
					</AnimatedComponent>

					<AnimatedComponent>
						<div class="flex flex-col flex-items-center pt-8 md:pt-10">
							<a href="https://book.thebarbershop.bg/reservations/start?site=1" target="_blank" rel="noopener noreferrer" class="bg-brand-compliment c-paper b-solid b-2px b-brand-compliment uppercase font-size-4 font-500 px-7 py-2 hover-c-paper-inv transition-colors" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">Запазете час</a>
						</div>
					</AnimatedComponent>
				</div>
			</section>

			<section style="background-color: #222222; background-image: url(/assets/thebarbershop-dark-bg.webp); background-position: center center; background-repeat: no-repeat; background-size: cover;">
				<div class="lg-mx-30 mx-auto">
					<div class="flex md-flex flex-col lg-gap-5 flex-justify-center max-w-1440px lg-px-0 mx-auto pb-10">
						<AnimatedComponent>
							<H2WithImage class="c-paper" title="Предимствата на The Barber Shop Sofia" />
						</AnimatedComponent>
						<div class="px-5 lg-px-0 flex lg-flex-row flex-col lg-gap-10">
							<div class="lg-w-33.33% flex flex-col">
								<AnimatedComponent>
									<h3 class="c-brand text-left mt-0">Опитни и квалифицирани бръснари</h3>
									<div class="pb-8 c-paper">Съгласни сме с твърдението, че <strong>истинското майсторство идва с опита</strong>, особено когато става въпрос за деликатни процедури като бръснене на глава с бръснач. Затова нашият екип се състои от внимателно подбрани <strong>талантливи бръснари</strong>. Всеки един от нас е преминал през интензивно обучение и продължава да усъвършенства уменията си ежедневно. С нашите <strong>умения и отдаденост</strong>, можете да бъдете сигурни, че сте в най-добрите ръце.
									</div>
								</AnimatedComponent>
							</div>
							<div class="lg-w-33.33% flex flex-col">
								<AnimatedComponent>
									<h3 class="c-brand text-left mt-5 lg-mt-0">Професионални инструменти</h3>
									<div class="pb-8 c-paper"><strong>Професионалните инструменти</strong>, които използваме в <strong>The Barber Shop</strong> са сред най-добрите на пазара. Доверяваме се на <strong>Feather, Dovo Solingen, Mühle, Thiers Issard</strong> за осигуряването на висококачествено бръснарско оборудване, което включва и специализирани инструменти за бръснене на глава с бръснач. Прецизността на нашите ножици и бръсначи осигурява перфектни резултати, като същевременно предоставяме на клиентите ни <strong>премиум обслужване и максимален комфорт</strong>.
									</div>
								</AnimatedComponent>
							</div>
							<div class="lg-w-33.33% flex flex-col">
								<AnimatedComponent>
									<h3 class="c-brand text-left mt-5 lg-mt-0">Висококачествена козметика</h3>
									<div class="pb-8 c-paper">В <strong>The Barber Shop</strong> използваме само най-добрата козметика, за да осигурим <strong>качествена грижа за кожата, косата и брадата</strong> на нашите клиенти. Специално внимание отделяме и на продуктите, които използваме при бръснене на глава. Доверяваме се на лидерите в индустрията за мъжка грижа. С продуктите от <strong>Depot, American Crew и Lavish</strong>, ние гарантираме, че всяка процедура включва подхранване, хидратация и защита. Наш приоритет е да доставяме <strong>комфорт и качество</strong> с всяка една услуга.
									</div>
								</AnimatedComponent>
							</div>
						</div>
					</div>
				</div>
				<div class="pb-20">
					<GallerySlider imgs={[
						{ src: "/assets/brasnene-na-glava-s-brasnach/инструменти-за-бръснене-на-глава-с-бръснач.webp", alt: "инструменти за бръснене на глава с бръснач" },
						{ src: "/assets/brasnene-na-glava-s-brasnach/продукти-за-бръснене-на-глава-с-бръснач-изток.webp", alt: "продукти за бръснене на глава с бръснач изток" },
						{ src: "/assets/brasnene-na-glava-s-brasnach/ножче-за-бръснене-на-глава-с-бръснач.webp", alt: "ножче за бръснене на глава с бръснач" },
						{ src: "/assets/brasnene-na-glava-s-brasnach/козметика-за-бръснене-на-глава-с-бръснач-изток.webp", alt: "козметика за бръснене на глава с бръснач изток" },
						{ src: "/assets/brasnene-na-glava-s-brasnach/професионално-бръснене-на-глава-с-бръснач.webp", alt: "професионално бръснене на глава с бръснач" },
						{ src: "/assets/brasnene-na-glava-s-brasnach/козметика-за-бръснене-на-глава-с-бръснач.webp", alt: "козметика за бръснене на глава с бръснач" },
					]}
					/>
				</div>
			</section>

			<div class="pb-20">
				<AnimatedComponent>
					<H2WithImage title="Често задавани въпроси" />
				</AnimatedComponent>
				<div class="mx-0 lg:flex gap-10 justify-center flex-items-center">
					<div class="lg:w-50%">
						<SingleCollapse />
					</div>
					<div class="lg:block hidden lg:max-w-40% lg:px-0 md:px-10 px-5 lg:pt-0 md:pt-20 lg:pt-10">
						<img class="mx-auto max-w-full" src="/assets/home/бръснари-софия.webp" alt="Бръснари София" />
						{/* <p class="important-my-0">text</p> */}
					</div>
				</div>
			</div>
		</>
	);
}

function MdiRomanNumeral11() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1080" zoomAndPan="magnify" viewBox="0 0 810 809.999993" height="1080" preserveAspectRatio="xMidYMid meet" version="1.0"><path fill="#eba65b" d="M 553.144531 256.097656 L 553.144531 315.65625 L 523.367188 315.65625 L 523.367188 494.339844 L 553.144531 494.339844 L 553.144531 553.898438 L 434.023438 553.898438 L 434.023438 494.339844 L 463.804688 494.339844 L 463.804688 315.65625 L 434.023438 315.65625 L 434.023438 256.097656 Z M 553.144531 256.097656 " fill-opacity="1" fill-rule="nonzero" /><path fill="#eba65b" d="M 227.070312 256.097656 L 286.628906 404.996094 L 227.070312 553.898438 L 286.628906 553.898438 L 316.410156 479.449219 L 346.191406 553.898438 L 405.75 553.898438 L 346.191406 404.996094 L 405.75 256.097656 L 346.191406 256.097656 L 316.410156 330.546875 L 286.628906 256.097656 Z M 227.070312 256.097656 " fill-opacity="1" fill-rule="nonzero" /></svg>
	)
}

function MdiRomanNumeral12() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1080" zoomAndPan="magnify" viewBox="0 0 810 809.999993" height="1080" preserveAspectRatio="xMidYMid meet" version="1.0"><path fill="#eba65b" d="M 478.089844 256.097656 L 478.089844 315.65625 L 448.308594 315.65625 L 448.308594 494.339844 L 478.089844 494.339844 L 478.089844 553.898438 L 358.96875 553.898438 L 358.96875 494.339844 L 388.746094 494.339844 L 388.746094 315.65625 L 358.96875 315.65625 L 358.96875 256.097656 Z M 478.089844 256.097656 " fill-opacity="1" fill-rule="nonzero" /><path fill="#eba65b" d="M 152.011719 256.097656 L 211.570312 404.996094 L 152.011719 553.898438 L 211.570312 553.898438 L 241.351562 479.449219 L 271.132812 553.898438 L 330.691406 553.898438 L 271.132812 404.996094 L 330.691406 256.097656 L 271.132812 256.097656 L 241.351562 330.546875 L 211.570312 256.097656 Z M 152.011719 256.097656 " fill-opacity="1" fill-rule="nonzero" /><path fill="#eba65b" d="M 628.203125 256.097656 L 628.203125 315.65625 L 598.425781 315.65625 L 598.425781 494.339844 L 628.203125 494.339844 L 628.203125 553.898438 L 509.082031 553.898438 L 509.082031 494.339844 L 538.863281 494.339844 L 538.863281 315.65625 L 509.082031 315.65625 L 509.082031 256.097656 Z M 628.203125 256.097656 " fill-opacity="1" fill-rule="nonzero" /></svg>
	)
}

function MdiRomanNumeral13() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1080" zoomAndPan="magnify" viewBox="0 0 810 809.999993" height="1080" preserveAspectRatio="xMidYMid meet" version="1.0"><path fill="#eba65b" d="M 401.851562 256.097656 L 401.851562 315.660156 L 372.070312 315.660156 L 372.070312 494.339844 L 401.851562 494.339844 L 401.851562 553.902344 L 282.726562 553.902344 L 282.726562 494.339844 L 312.507812 494.339844 L 312.507812 315.660156 L 282.726562 315.660156 L 282.726562 256.097656 Z M 401.851562 256.097656 " fill-opacity="1" fill-rule="nonzero" /><path fill="#eba65b" d="M 75.769531 256.097656 L 135.332031 405 L 75.769531 553.902344 L 135.332031 553.902344 L 165.113281 479.453125 L 194.894531 553.902344 L 254.453125 553.902344 L 194.894531 405 L 254.453125 256.097656 L 194.894531 256.097656 L 165.113281 330.546875 L 135.332031 256.097656 Z M 75.769531 256.097656 " fill-opacity="1" fill-rule="nonzero" /><path fill="#eba65b" d="M 551.964844 256.097656 L 551.964844 315.660156 L 522.183594 315.660156 L 522.183594 494.339844 L 551.964844 494.339844 L 551.964844 553.902344 L 432.84375 553.902344 L 432.84375 494.339844 L 462.625 494.339844 L 462.625 315.660156 L 432.84375 315.660156 L 432.84375 256.097656 Z M 551.964844 256.097656 " fill-opacity="1" fill-rule="nonzero" /><path fill="#eba65b" d="M 704.449219 256.097656 L 704.449219 315.660156 L 674.667969 315.660156 L 674.667969 494.339844 L 704.449219 494.339844 L 704.449219 553.902344 L 585.328125 553.902344 L 585.328125 494.339844 L 615.105469 494.339844 L 615.105469 315.660156 L 585.328125 315.660156 L 585.328125 256.097656 Z M 704.449219 256.097656 " fill-opacity="1" fill-rule="nonzero" /></svg>
	)
}