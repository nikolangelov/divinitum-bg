import "solid-slider/slider.css";
import { createEffect, createSignal, JSXElement } from 'solid-js';
import { ReviewSlider, StarReview } from '../../../../components/ReviewSlider';
import { VideoPlayer } from '../../../../components/VideoPlayer';
import { GallerySlider } from '../../../../components/GallerySlider';
import { AnimatedComponent } from '../../../../components/AnimateOnView';
import { AnimatedComponentSlide } from '../../../../components/AnimateOnViewSlide';
import { ElementInOftenOT, OftenOT } from '../../../../components/OftenOT';
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
import { H2WithImage } from "../../../../components/H2WithImage";

const JSONLDScript = () => {
	createEffect(() => {
		const localBusinessScript = document.createElement("script");
		localBusinessScript.type = "application/ld+json";
		localBusinessScript.text = JSON.stringify({
			"@context": "https://schema.org",
			"@type": "LocalBusiness",
			"name": "The Barber Shop Sofia",
			"@id": "https://thebarbershop.bg#localBusiness",
			"image": "https://thebarbershop.bg/assets/logo.png",
			"telephone": "+359882820331",
			"address": {
				"@type": "PostalAddress",
				"streetAddress": "ж.к. Изток, ул. Николай Хайтов 2",
				"addressLocality": "София",
				"postalCode": "1113",
				"addressCountry": "BG"
			},
			"aggregateRating": {
				"@type": "AggregateRating",
				"ratingValue": 4.8,
				"reviewCount": 610,
				"bestRating": 5,
				"worstRating": 1
			},
			"review": [
				{
					"@type": "Review",
					"author": {
						"@type": "Person",
						"name": "Albert Hristov"
					},
					"reviewRating": {
						"@type": "Rating",
						"ratingValue": 5,
						"bestRating": 5,
						"worstRating": 1
					},
					"reviewBody": "Много стилно и хубаво място със специалисти които приемат предизвикателства. Крис е магьосник 🧙‍♂️"
				},
				{
					"@type": "Review",
					"author": {
						"@type": "Person",
						"name": "Dimitar Dodnikov"
					},
					"reviewRating": {
						"@type": "Rating",
						"ratingValue": 5,
						"bestRating": 5,
						"worstRating": 1
					},
					"reviewBody": "Препоръчвам. Изключително приятна обстановка. Страхотен салон и наистина кадърни момчета."
				},
				{
					"@type": "Review",
					"author": {
						"@type": "Person",
						"name": "Ivaylo Hristov (Ivo)"
					},
					"reviewRating": {
						"@type": "Rating",
						"ratingValue": 4,
						"bestRating": 5,
						"worstRating": 1
					},
					"reviewBody": "Много съм доволен. Луксозен салон. Общителни и приятни млади хора работят там. И правят отлични прически. Аз съм много доволен."
				}
			],
			"inLanguage": "bg"
		});
		document.head.appendChild(localBusinessScript);

		const serviceScript = document.createElement("script");
		serviceScript.type = "application/ld+json";
		serviceScript.text = JSON.stringify({
			"@context": "https://schema.org",
			"@type": "Service",
			"name": "Тониране на Мъжка Коса",
			"description": "Тониране на сиви коси. [30 минути.]",
			"image": "https://thebarbershop.bg/assets/tonirane-na-kosa/барбър-шоп-тониране-на-сиви-коси.webp",
			"mainEntityOfPage": {
				"@type": "WebPage",
				"@id": "https://thebarbershop.bg/uslugi/profesionalno-tonirane-na-mazhka-kosa"
			},
			"provider": {
				"@type": "LocalBusiness",
				"name": "The Barber Shop Sofia",
				"@id": "https://thebarbershop.bg#localBusiness"
			},
			"areaServed": {
				"@type": "Place",
				"name": "София"
			},
			"offers": {
				"@type": "Offer",
				"priceCurrency": "BGN",
				"price": "40",
				"availability": "https://schema.org/InStock",
				"url": "https://thebarbershop.bg/uslugi/profesionalno-tonirane-na-mazhka-kosa"
			},
			"inLanguage": "bg"
		});
		document.head.appendChild(serviceScript);
	});

	return null;
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
				<Collapse title="Задължително ли е да запазя час за промяна на нюанса на мъжката коса предварително?" desc="Препоръчваме Ви да запазите час предварително, за да си осигурите освежаване на цвета на мъжката коса в удобно за Вас време. При наличие на свободни часове приемаме и клиенти без предварителна резервация." />

				<Collapse title="Как мога да си запазя час за матиране на побеляла коса?" desc="За Ваше улеснение можете да запазите час за тониране на коса по следните начини:">
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

				<Collapse title="Какво ще се случи, ако не успея да дойда навреме за часа си за камуфлаж на коса?" desc="Молим да ни уведомите, ако ще закъснеете. Ако закъснението е повече от 15 минути, ще се наложи да отменим часа Ви." />

				<Collapse title="Мога ли да избера конкретен барбър, който да извърши професионалното тониране на мъжка коса?" desc="Да, за Ваше удобство при записване на час можете да уточните на кого от нашите висококвалифицирани барбъри да се доверите." />

				<Collapse title="Какви методи на плащане използвате?" desc="Приемаме плащане в брой, както и чрез дебитна / кредитна карта." />

				<Collapse title="Мога ли да закупя продукти за грижа след тонирането на сива коса на място от бръснарницата?" desc="Да, можете да разгледате нашия асортимент от мъжки професионални продукти за коса и брада и да ги закупите на място от бръснарницата." />

				<Collapse title="The Barber Shop достъпен ли е за инвалиди?" desc="Бръснарницата е достъпна за инвалиди. В случай че изпитвате затруднения или имате въпроси, свържете се с нас на телефон +359 882 820 331." />

				<Collapse title="Осигурявате ли паркоместа за клиентите?" desc="Да, осигурили сме 4 паркоместа пред входа на бръснарницата на разположение на клиентите." />

				<Collapse title="По какво се различава тонирането на мъжка коса от боядисването?" desc="Основната разлика е в самия пигмент. Тонерът не съдържа амоняк, за разлика от боята, което го прави изключително нежен към косъма. Покрива побелелите участъци чрез подсилване на естествения цвят на косата. Плюсът при тонирането е, че се отмива напълно с времето за разлика от боите, където оттенъкът си остава. Порастването на косата и постепенното отмиване на тонера правят естествено преливане между цветовете, което придава натурален ефект на косата. Изводът е, че тонирането на коса е чудесен избор, ако търсите естествено изглеждащо оцветяване за мъже." />

				<Collapse title="Колко време се задържа цвета след мъжко покриване на бели коси?" desc="Ефектът от освежаване на цвета на мъжката коса обикновено се задържа около 4-6 седмици, в зависимост от типа на косата и честотата на миене." />

				<Collapse title="Колко често трябва да се прави поддържане на бяла коса?" desc="Препоръчваме подсилване на естествения цвят да се прави на всеки 4-6 седмици, за да поддържате свежестта на тонирания цвят, за Ваше удобство можете да го комбинирате с месечното Ви подстригване." />

				<Collapse title="Подходящо ли е тонирането на сиви коси и за бради?" desc="Да, балансирането на тона на мъжката коса е подходящо както за коса, така и за брада. То омекотява сивите нюанси и придава по-естествен и млад външен вид." />

				<Collapse title="Подходящо ли е камуфлирането на сива коса за хора с чувствителна кожа?" desc="Тонирането на коса е по-щадящо в сравнение с традиционното боядисване поради липсата на амоняк.Това прави изгарянето на кожата невъзможно и е напълно подходящо за хора с чувствителен скалп. Ние използваме продукти, които са нежни към кожата. В случай, че имате притеснения, можем да направим тест предварително." />

				<Collapse title="Мога ли да използвам басейн или сауна след професионално тониране на мъжка коса?" desc="Да, няма никакъв проблем, няма да се отрази на цвета по никакъв начин." />

				<Collapse title="Извършвате ли тониране на много къса мъжка коса?" desc="Да, дължината на косата няма никакво значение." />

				<Collapse title="Възможно ли е да получа алергична реакция след камуфлиране на сива коса?" desc="Не, освен ако нямате алергии. В такъв случай е възможно, но е рядкост. Ако имате някакви съмнения, споделете ги с нас, ще направим тест и ще обсъдим възможните варианти за тониране." />

				<Collapse title="Нужно ли е да полагам някакви специални грижи за запазване на цвета с цел неутрализиране на нежелани оттенъци?" desc="Не, не е необходимо да полагате допълнителни грижи за запазване на цвета. Препоръчително е използването на балсам за коса за мека и блестяща коса." />

				<Collapse title="Можете ли напълно да преобразите цялата ми бяла коса?" desc="Да, можем да постигнем промяна на нюанса на мъжката коса изцяло. Степента на покриване зависи от цвета, времето на престой на тонера, както и от желанието на клиента." />
				<Collapse title="Каква е разликата между тониране на коса и камуфлиране на сива коса?" desc="Няма разлика между тониране и камуфлаж на коса. Целта на процедурата е изравняване на разликата между сивите коси и естествения Ви цвят коса. Използват се безамонячни бои за постигане на естествено изглеждащо оцветяване за мъже. Получава се естествен резултат, който трае около 4-6 седмици." />
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

			<JSONLDScript />

			<div style="background-position: center top; background-repeat: no-repeat; background-size: cover; height: auto;"><div style="background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6) ), url(/assets/tonirane-na-kosa/барбър-шоп-тониране-на-сиви-коси.webp); background-position: center top; background-repeat: no-repeat; background-size: cover;" class="h-100vh tonirane-img" role="img" aria-label="Тониране на сиви коси в барбър шоп"></div></div>

			<div class="w-full bg-#212528">
				<div class="max-w-1240px mx-auto">
					<div class="flex flex-justify-center">
						<div class="left-0 right-0 px-3 my-0 mx-auto absolute top-55% lg-top-62% text-center w-full max-w-1000px" style="-webkit-transform: translateY(-50%);">
							<AnimatedComponent>
								<h1 class="uppercase c-paper mb-6 text-center">Професи&shy;о&shy;нал&shy;но тониране на мъжка коса</h1>
							</AnimatedComponent>
							<AnimatedComponent>
								<p class="important-delay-300 c-paper text-center lg-pt-10 font-size-15.5px md-font-size-18px line-height-6.5 md:line-height-7">Всеки мъж рано или късно се сблъсква с посивялата коса. Това не бива да Ви притеснява. На помощ идва <span class="c-brand font-500" style="font-family: 'Roboto'">тонирането на коса</span>, което ще Ви позволи да се радвате на красив оттенък и естествен резултат, без да съсипвате косата си.</p>
							</AnimatedComponent>
						</div>
					</div>
				</div>
			</div>

			<div class="pb-10" style="background-image: url(/assets/thebarbershop-dark-bg.webp); background-position: center; background-repeat: no-repeat; background-size: cover;">
				<AnimatedComponentSlide>
					<H2WithImage class="c-paper" title="Какво Ви очаква по време на тониране на мъжка коса" />
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
									<MdiRomanNumeral3 class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-36px h-36px c-brand" /><div class="mt-1 c-paper">Консултация относно желания цвят и резултат от камуфлирането на сива коса  – получавате препоръки спрямо естествения цвят и състоянието на косата и брадата Ви.</div><br></br>
								</div>
								<div class="flex flex-items-start gap-10px c-paper">
									<MdiRomanNumeral4 class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-36px h-36px c-brand" /><div class="mt-1 c-paper">Измиване на косата и брадата, за да се премахнат остатъците от замърсявания и продукти.</div><br></br>
								</div>
								<div class="flex flex-items-start gap-10px c-paper">
									<MdiRomanNumeral5 class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-36px h-36px c-brand" /><div class="mt-1 c-paper">Нанасяне на тониращият продукт върху косата и брадата.</div>
								</div>
								<div class="flex flex-items-start gap-10px c-paper">
									<MdiRomanNumeral6 class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-36px h-36px c-brand" /><div class="mt-1 c-paper">Изчакване тонерът да подейства в зависимост от желаната степен на неутрализиране на нежеланите оттенъци.</div><br></br>
								</div>
							</div>
						</div>
						<div class="lg-w-50% pr-5 pl-5 lg-pl-0 flex-self-start">
							<div class="flex flex-col gap-5 c-paper">
								<div class="flex flex-items-start gap-10px c-paper">
									<MdiRomanNumeral7 class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-36px h-36px c-brand" /><div class="mt-1 c-paper">След изтичане на необходимото време, косата и брадата се измиват повторно.</div><br></br>
								</div>
								<div class="flex flex-items-start gap-10px c-paper">
									<MdiRomanNumeral8 class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-36px h-36px c-brand" /><div class="mt-1 c-paper">Нанасяне на балсам или маска за подхранване и хидратиране на косата и брадата.</div><br></br>
								</div>
								<div class="flex flex-items-start gap-10px c-paper">
									<MdiRomanNumeral9 class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-36px h-36px c-brand" /><div class="mt-1 c-paper">Изсушаване и оформяне със сешоар и стилизиращи продукти.</div>
								</div>
								<div class="flex flex-items-start gap-10px c-paper">
									<MdiRomanNumeral10 class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-36px h-36px c-brand" /><div class="mt-1 c-paper">Представяне на повече информация относно предимствата от използваните продукти по време на мъжкото покриване на бели коси.</div>
								</div>
								<div class="flex flex-items-start gap-10px c-paper">
									<MdiRomanNumeral9 class="-scale-x-100 flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-40px h-40px c-brand" /><div class="mt-1 c-paper">Перфектна визия и повишено самочувствие.</div>
								</div>
							</div>
						</div>
					</div>
				</AnimatedComponentSlide>
			</div>

			{/* <section class="lg-pb-25 pb-20">
				<AnimatedComponent>
					<H2WithImage class="max-w-750px mx-auto" title="Професионално тониране на мъжка коса: От идеята до завършения вид" />
				</AnimatedComponent>
				<AnimatedComponent>
					<VideoPlayer src='https://www.youtube.com/embed/e2x0UXVU2yg?enablejsapi=1&mute=1' />
				</AnimatedComponent>
			</section> */}

			<div class="pb-20" style="background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8) ), url(/assets/brown-background-image.webp); background-position: center; background-repeat: no-repeat; background-size: cover;">
				<H2WithImage class="c-paper" title="Цена на тониране на коса" />
				<AnimatedComponentSlide>
					<div class="mt-15 md-mt-20 px-20px sm-px-50px md-pb-10 pb-5 max-w-1400px mx-auto">
						<div>
							<div class="flex flex-justify-between gap-5 b-b-solid b-1px b-gray-500 pb-1">
								<div class="font-size-6 uppercase c-paper font-500 text-left pb-1" style="font-family: 'Oswald', sans-serif !important;">Тониране на мъжка коса</div>
								<div class="c-brand font-size-6 uppercase font-500 whitespace-nowrap" style="font-family: 'Oswald', sans-serif !important;">40 лв.</div>
							</div>
							<div class="c-gray-300 font-size-4.2 pt-3">Тониране на сиви коси [30мин.]</div>
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
						<H2WithImage title="Професионално тониране на мъжка коса в действие" />
					</AnimatedComponent>
					<GallerySlider imgs={[
						{ src: "/assets/tonirane-na-kosa/модерно-тониране-на-сиви-коси.webp", alt: "модерно тониране на сиви коси" },
						{ src: "/assets/tonirane-na-kosa/тониране-на-сиви-коси-с-професионални-продукти.webp", alt: "Тониране на сиви коси с професионални продукти" },
						{ src: "/assets/tonirane-na-kosa/тониране-за-мъже-със-сиви-коси.webp", alt: "Тониране за мъже със сиви коси" },
						{ src: "/assets/tonirane-na-kosa/качествено-тониране-на-сиви-коси.webp", alt: "Качествено тониране на сиви коси" },
						{ src: "/assets/tonirane-na-kosa/професионално-тониране-на-сиви-коси-за-мъже.webp", alt: "Професионално тониране на сиви коси за мъже" },
						{ src: "/assets/tonirane-na-kosa/барбър-шоп-софия-тониране-на-сиви-коси.webp", alt: "Барбър шоп софия тониране на сиви коси" },
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
										{ name: "Albert Hristov" },
										{ name: "Dimitar Dodnikov" },
										{ name: "Илиян Станков" },
										{ name: "Ivaylo Hristov (Ivo)" },
										{ name: "Asen Markov" },
										{ name: "Petar Donchev" },
										{ name: "Kalin Tabov" },
										{ name: "Alex Guiman" },
									]}>
									<StarReview
										src="/assets/GoogleLogoPNGImage.png"
										reviewText="Много стилно и хубаво място със специалисти които приемат предизвикателства. Крис е магьосник 🧙‍♂️"
										name="Albert Hristov"
										date="Юли 2022"
										stars={5}
										hrefGoogleReview="https://maps.app.goo.gl/TE8fdZSeZvxS1po89"
									/>
									<StarReview
										src="/assets/GoogleLogoPNGImage.png"
										reviewText="Препоръчвам. Изключително приятна обстановка. Страхотен салон и наистина кадърни момчета"
										name="Dimitar Dodnikov"
										date="Януари 2020"
										stars={5}
										hrefGoogleReview="https://maps.app.goo.gl/gbPYhzBAmovgG3YE7"
									/>
									<StarReview
										src="/assets/GoogleLogoPNGImage.png"
										reviewText="Крис е супер. От 3 години ги посещавам и винаги вършат страхотна работа."
										name="Илиян Станков"
										date="Май 2024"
										stars={5}
										hrefGoogleReview="https://maps.app.goo.gl/PjrjV7sQbj4BEQwZ8"
									/>
									<StarReview
										src="/assets/GoogleLogoPNGImage.png"
										reviewText="Много съм доволен. Луксозен салон. Общителни и приятни млади хора работят там. И правят отлични прически. Аз съм много доволен."
										name="Ivaylo Hristov (Ivo)"
										date="Септември 2019"
										stars={5}
										hrefGoogleReview="https://maps.app.goo.gl/JzPSXpCBG1jX8LiV8"
									/>
									<StarReview
										src="/assets/GoogleLogoPNGImage.png"
										reviewText="Перфектното място за мъжки отдих. Посрещнаха ме с вежливо обслужване и приятелска атмосфера. Работата им е на много високо ниво с внимание към детайла. Преопоръчвам!"
										name="Asen Markov"
										date="Март 2024"
										stars={5}
										hrefGoogleReview="https://maps.app.goo.gl/AoZhN74yXnKUREkT7"
									/>
									<StarReview
										src="/assets/GoogleLogoPNGImage.png"
										reviewText="Never a bad haircut! The guys are true professionals at what they do and the experience itself is totally worth the price. Would not even consider another barber shop in Sofia again."
										name="Petar Donchev"
										date="Март 2019"
										stars={5}
										hrefGoogleReview="https://maps.app.goo.gl/J6E6yxpX3vhbDrUf8"
									/>
									<StarReview
										src="/assets/GoogleLogoPNGImage.png"
										reviewText="That is my first time here. Great place and service. Blago was extremely knowledgeable, skilled and nice to talk to. I love my haircut and will be back."
										name="Kalin Tabov"
										date="Септември 2024"
										stars={5}
										hrefGoogleReview="https://maps.app.goo.gl/nPPkSY2SjhAi7HNaA"
									/>
									<StarReview
										src="/assets/GoogleLogoPNGImage.png"
										reviewText="Very polite staff, the place looks really nice and most important, i had a very nice haircut! They also speak english which helped a lot!"
										name="Alex Guiman"
										date="Юни 2023"
										stars={5}
										hrefGoogleReview="https://maps.app.goo.gl/6rvjPTh8xG9rTALV9"
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
								{ title: "Мъжко подстригване" },
								{ title: "Подстригване и оформяне на брада" },
								{ title: "Оформяне на брада" },
								{ title: "Подстригване на баща и син" },
							]}>
							<ElementInOftenOT
								img="/assets/uslugi/мъжко-подстригване-1-mobile.webp"
								alt="Мъжко подстригване"
								href="/uslugi/mazhko-podstrigvane"
								title="Мъжко подстригване"
							/>
							<ElementInOftenOT
								img="/assets/uslugi/подстригване-и-оформяне-на-брада-mobile.webp"
								alt="Подстригване и оформяне на брада"
								href="/uslugi/mazhko-podstrigvane-i-oformiane-na-brada"
								title="Подстригване и оформяне на брада"
							/>
							<ElementInOftenOT
								img="/assets/uslugi/оформяне-на-брада-1-mobile.webp"
								alt="Оформяне на брада"
								href="/uslugi/oformiane-na-brada"
								title="Оформяне на брада"
							/>
							<ElementInOftenOT
								img="/assets/bashta-i-sin/подстригване-на-баща-и-син.webp"
								alt="Подстригване на баща и син"
								href="/uslugi/podstrigvane-na-bashta-i-sin"
								title="Подстригване на баща и син"
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
							<H2WithImage class="c-paper" title="Предимствата на The Barber Shop" />
						</AnimatedComponent>
						<div class="px-5 lg-px-0 flex lg-flex-row flex-col lg-gap-10">
							<div class="lg-w-33.33% flex flex-col">
								<AnimatedComponent>
									<h3 class="c-brand text-left mt-0">Опитни и квалифицирани бръснари</h3>
									<div class="pb-8 c-paper">В <strong>The Barber Shop</strong> вярваме, че опитът и уменията са ключови за постигане на съвършенство. Нашите бръснари са внимателно подбрани професионалисти, които непрекъснато <strong>усъвършенстват своите умения</strong>, за да Ви предложат най-доброто обслужване.С <strong>професионализъм, лично отношение и внимание към детайла</strong> могат да пресъздадат всяка визия съобразена с предпочитанията и чертите Ви, включително естествено изглеждащо оцветяване за мъже.
									</div>
								</AnimatedComponent>
							</div>
							<div class="lg-w-33.33% flex flex-col">
								<AnimatedComponent>
									<h3 class="c-brand text-left mt-5 lg-mt-0">Професионални инструменти</h3>
									<div class="pb-8 c-paper">Ние инвестираме в едни от най-<strong>висококачествените бръснарски принадлежности</strong> на пазара. От модерни машинки до традиционни самобръсначки, нашите инструменти са подбрани да отговарят на всяко предизвикателство. С помощта на прецизни инструменти и <strong>висококачествени тонери</strong>, нашите бръснари могат да постигнат перфектно матиране на побеляла коса и да ви помогнат да изберете <strong>идеалния нюанс</strong>.
									</div>
								</AnimatedComponent>
							</div>
							<div class="lg-w-33.33% flex flex-col">
								<AnimatedComponent>
									<h3 class="c-brand text-left mt-5 lg-mt-0">Висококачествена козметика</h3>
									<div class="pb-8 c-paper">Ние знаем, че истинската грижа за мъжа изисква най-доброто. Затова работим с елитни марки като <strong>Depot, American Crew и Lavish</strong>. Техните продукти са специално създадени за нуждите на съвременния мъж, осигурявайки естествено изглеждащо оцветяване за мъже, <strong>здраве за кожата и косата</strong> и най-вече стилна визия. С нас получавате цялостно изживяване, което ще повиши Вашето самочувствие и елегантност.
									</div>
								</AnimatedComponent>
							</div>
						</div>
					</div>
				</div>
				<div class="pb-20">
					<GallerySlider imgs={[
						{ src: "/assets/tonirane-na-kosa/каталог-за-тониране-на-сиви-коси.webp", alt: "каталог за тониране на сиви коси" },
						{ src: "/assets/tonirane-na-kosa/тонер-за-коса.webp", alt: "тонер за коса" },
						{ src: "/assets/tonirane-na-kosa/четка-за-тониране-на-сиви-коси.webp", alt: "четка за тониране на сиви коси" },
						{ src: "/assets/tonirane-na-kosa/тонери-за-коса.webp", alt: "тонери за коса" },
						{ src: "/assets/tonirane-na-kosa/тонер-за-коса.webp", alt: "тонер за коса" },
						{ src: "/assets/tonirane-na-kosa/разбъркване-на-тонера.webp", alt: "разбъркване на тонера" },
						{ src: "/assets/tonirane-na-kosa/подготвяне-за-тониране.webp", alt: "подготвяне за тониране" },
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
						<img loading="lazy" class="mx-auto max-w-full" src="/assets/home/бръснари-софия.webp" alt="Бръснари София" />
						{/* <p class="important-my-0">text</p> */}
					</div>
				</div>
			</div>
		</>
	);
}
