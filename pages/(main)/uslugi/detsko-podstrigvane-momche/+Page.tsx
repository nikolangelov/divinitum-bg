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
			"url": "https://thebarbershop.bg",
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
						"name": "Galina Koleva"
					},
					"reviewRating": {
						"@type": "Rating",
						"ratingValue": 5,
						"bestRating": 5,
						"worstRating": 1
					},
					"reviewBody": "Много яко място за големи и малки момчета"
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
					"reviewBody": "Препоръчвам. Изключително приятна обстановка. Страхотен салон и наистина кадърни момчета"
				},
				{
					"@type": "Review",
					"author": {
						"@type": "Person",
						"name": "Miguel Nigro"
					},
					"reviewRating": {
						"@type": "Rating",
						"ratingValue": 4,
						"bestRating": 5,
						"worstRating": 1
					},
					"reviewBody": "Best barbershop in Sofia - quality service and amazing staff!"
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
			"name": "Детско Подстригване за Момчета",
			"description": "Подстригване на деца и младежи до 10 г. Най-малките клиенти са ни най-големите фенове. Гарантираме, че няма да му е скучно, а после е негов ред да седне на стола и да го превърнем в млад джентълмен. [1ч.]",
			"image": "https://thebarbershop.bg/assets/detsko-podstrigvane-momche/детско-подстригване-с-машинка-1.webp",
			"mainEntityOfPage": {
				"@type": "WebPage",
				"@id": "https://thebarbershop.bg/uslugi/detsko-podstrigvane-momche"
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
				"price": "35",
				"availability": "https://schema.org/InStock",
				"url": "https://thebarbershop.bg/uslugi/detsko-podstrigvane-momche"
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
				<Collapse title="Задължително ли е да запазя час за детско подстригване с машинка предварително?" desc="Препоръчваме Ви да запазите час предварително, за да си осигурите детско подстригване в удобно за Вас време. При наличие на свободни часове приемаме и клиенти без предварителна резервация." />

				<Collapse title="Как мога да запазя час за детско подстригване за момче във вашия барбършоп?" desc="За Ваше улеснение можете да запазите час за оформяне на коса за момчета в The Barber Shop София по следните начини:">
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

				<Collapse title="Мога ли да избера конкретен барбър, който да извърши детско подстригване и “рисуване” с машинка на детето ми?" desc="Да, за Ваше удобство при записване на час можете да уточните на кого от нашите висококвалифицирани барбъри да се доверите за оформянето на детската прическа." />

				<Collapse title="Какви методи на плащане използвате?" desc="Приемаме плащане в брой, както и чрез дебитна / кредитна карта." />

				<Collapse title="Мога ли да закупя продукти на място от бръснарницата?" desc="Да, можете да разгледате нашия асортимент от мъжки професионални продукти за коса и брада и да ги закупите на място от бръснарницата. Всички продукти са подходящи и за поддръжка на детската прическа, тъй като са с изчистен състав, който се грижи нежно за всички типове коса и кожа." />

				<Collapse title="The Barber Shop достъпен ли е за инвалиди?" desc="Бръснарницата е достъпна за инвалиди. В случай че изпитвате затруднения или имате въпроси, свържете се с нас на телефон +359 882 820 331." />

				<Collapse title="Осигурявате ли паркоместа за клиентите?" desc="Да, осигурили сме 4 паркоместа пред входа на бръснарницата, на разположение на клиентите." />

				<Collapse title="Имате ли специални столове или оборудване за деца?" desc="Да, разполагаме със специален стол, който обособяваме за нашите най-малки клиенти." />

				<Collapse title="Как се справяте с детското подстригване на момче, което има страх от машинката за подстригване?" desc="С много търпение и малко магия извършваме детските барбър услуги. Имаме трикове, които превръщат страха от детското подстригване с машинка в забавление!" />

				<Collapse title="Предлагате ли забавления или развлечения по време на детското подстригване?" desc="При нужда използваме различни средства за отвличане на вниманието на детето и превръщаме детското подстригване в игра." />

				<Collapse title="Има ли отстъпка, ако водя повече от едно дете?" desc="Не, няма отстъпка при водене на повече от едно дете. За Ваше удобство предлагаме отстъпка при пакет подстригване баща и син, в два последователни часа при един бръснар." />

				<Collapse title="Задължително ли е да присъствам по време на детското подстригване?" desc="Присъствието на родител е задължително за деца на възраст до 10 години. За по-големи деца присъствието не е задължително." />

				<Collapse title="Използвате ли специални продукти за стилизиране на детската прическа, подходящи за детска коса и кожа?" desc="Всички продукти, които използваме са на водна основа, което ги прави напълно подходящи за нежната детска кожа." />

				<Collapse title="Предлагате ли съвети за поддържане на стайлинг за малки мъже у дома?" desc="Разбира се, при посещение в бръснарницата се обърнете към някого от нашите бръснари. Те с удоволствие ще Ви посъветват как и с какви продукти е най-добре да се грижите за косата на Вашето дете." />

				<Collapse title="Колко често трябва да посещавам бръснарницата за детско подстригване на момчета?" desc="Няма точно определен времеви интервал между подстригванията. Колко често подстригвате косата на Вашето дете зависи от това колко бързо расте косата му и от предпочитанията Ви за детска прическа." />

				<Collapse title="Можете ли да направите модерни прически, като например fade за малки момчета?" desc="Да, ние разбираме, че стилът започва още от детските години. Разбира се, че можем да подстрижем Вашето дете спрямо желанията му и трендовете в момчешките прически. Няма възрастови ограничения в прическите. :)" />

				<Collapse title="Можете ли към детското подстригване да добавите и “рисуване” с машинка?" desc="Да, можем, въпреки че нашата бръснарница е фокусирана върху класическите прически и изпълняваме по-минималистични дизайни. С радост ще направим всичко възможно да зарадваме Вашето дете с желаната момчешка прическа." />

				<Collapse title="Има ли възрастово ограничение за подстригването за малки джентълмени?" desc="Подстригваме деца над 5 годишна възраст. Важно е да отбележим, че децата над 10 години спадат вече в категорията мъжко подстригване." />
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

			<div style="background-position: center top; background-repeat: no-repeat; background-size: cover; height: auto;"><div style="filter: saturate(1.1); background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(/assets/detsko-podstrigvane-momche/детско-подстригване-с-машинка-1.webp); background-position: center top; background-repeat: no-repeat; background-size: cover;" class="h-100vh detsko-pod-img" role="img" aria-label="детско подстригване с машинка"></div></div>

			<div class="w-full bg-#212528">
				<div class="max-w-1240px mx-auto">
					<div class="flex flex-justify-center">
						<div class="left-0 right-0 px-3 my-0 mx-auto absolute top-45% lg-top-58% text-center w-full max-w-1000px" style="-webkit-transform: translateY(-50%);">
							<AnimatedComponent>
								<h1 class="uppercase c-paper mb-6 text-center">Детско подстригване за момчета</h1>
							</AnimatedComponent>
							<AnimatedComponent>
								<p class="important-delay-300 c-paper text-center lg-pt-10 font-size-15.5px md-font-size-18px line-height-6.5 md:line-height-7">При нас <span class="c-brand font-500" style="font-family: 'Roboto'">детското подстригване</span> е игра и удоволствие. Нашият приятелски подход и специално оборудване осигуряват комфортно и безопасно изживяване за най-малките ни клиенти.</p>
							</AnimatedComponent>
						</div>
					</div>
				</div>
			</div>

			<div class="pb-10" style="background-image: url(/assets/thebarbershop-dark-bg.webp); background-position: center; background-repeat: no-repeat; background-size: cover;">
				<AnimatedComponentSlide>
					<H2WithImage class="c-paper" title="Какво Ви очаква по време на детско подстригване в нашия барбър шоп" />
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
									<MdiRomanNumeral3 class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-36px h-36px c-brand" /><div class="mt-1 c-paper">Консултация с родителя и детето относно желания стил на детското подстригване.</div><br></br>
								</div>
								<div class="flex flex-items-start gap-10px c-paper">
									<MdiRomanNumeral4 class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-36px h-36px c-brand" /><div class="mt-1 c-paper">Подстригване спрямо желанията на родителя и детето.</div><br></br>
								</div>
								<div class="flex flex-items-start gap-10px c-paper">
									<MdiRomanNumeral5 class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-36px h-36px c-brand" /><div class="mt-1 c-paper">Измиване на косата с професионален шампоан и балсам, ако е необходимо.</div>
								</div>
								<div class="flex flex-items-start gap-10px c-paper">
									<MdiRomanNumeral6 class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-36px h-36px c-brand" /><div class="mt-1 c-paper">Изсушаване на косата със сешоар.</div><br></br>
								</div>
							</div>
						</div>

						<div class="lg-w-50% pr-5 pl-5 lg-pl-0 flex-self-start">
							<div class="flex flex-col gap-5 c-paper">
								<div class="flex flex-items-start gap-10px c-paper">
									<MdiRomanNumeral7 class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-36px h-36px c-brand" /><div class="mt-1 c-paper">Оформяне и стилизиране на детската прическа с премиум козметика.</div><br></br>
								</div>
								<div class="flex flex-items-start gap-10px c-paper">
									<MdiRomanNumeral8 class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-36px h-36px c-brand" /><div class="mt-1 c-paper">Представяне на повече информация относно предимствата от използваните продукти по време на детското подстригване.</div><br></br>
								</div>
								<div class="flex flex-items-start gap-10px c-paper">
									<MdiRomanNumeral9 class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-36px h-36px c-brand" /><div class="mt-1 c-paper">Препоръки за поддръжка на детската прическа вкъщи.</div>
								</div>
								<div class="flex flex-items-start gap-10px c-paper">
									<MdiRomanNumeral10 class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-36px h-36px c-brand" /><div class="mt-1 c-paper">Доволно и щастливо дете.</div>
								</div>
							</div>
						</div>
					</div>
				</AnimatedComponentSlide>
			</div>

			{/* <section class="lg-pb-25 pb-20">
				<AnimatedComponent>
					<H2WithImage class="max-w-750px mx-auto" title="Детско подстригване: От идеята до завършения вид" />
				</AnimatedComponent>
				<AnimatedComponent>
					<VideoPlayer src='https://www.youtube.com/embed/e2x0UXVU2yg?enablejsapi=1&mute=1' />
				</AnimatedComponent>
			</section> */}

			<div class="pb-20" style="background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8) ), url(/assets/brown-background-image.webp); background-position: center; background-repeat: no-repeat; background-size: cover;">
				<H2WithImage class="c-paper" title="Цена на детско подстригване" />
				<AnimatedComponentSlide>
					<div class="mt-15 md-mt-20 px-20px sm-px-50px md-pb-10 pb-5 max-w-1400px mx-auto">
						<div>
							<div class="flex flex-justify-between gap-5 b-b-solid b-1px b-gray-500 pb-1">
								<div class="font-size-6 uppercase c-paper font-500 text-left pb-1" style="font-family: 'Oswald', sans-serif !important;">Детско подстригване</div>
								<div class="c-brand font-size-6 uppercase font-500 whitespace-nowrap" style="font-family: 'Oswald', sans-serif !important;">35 лв.</div>
							</div>
							<div class="c-gray-300 font-size-4.2 pt-3">Подстригване на деца и младежи до 10 г. Най-малките клиенти са ни най-големите фенове. Гарантираме, че няма да му е скучно, а после е негов ред да седне на стола и да го превърнем в млад джентълмен. [1ч.]</div>
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
						<H2WithImage title="Детско подстригване в действие" />
					</AnimatedComponent>
					<GallerySlider imgs={[
						{ src: "/assets/detsko-podstrigvane-momche/салон-за-детско-подстригване.webp", alt: "салон за детско подстригване" },
						{ src: "/assets/detsko-podstrigvane-momche/детско-подстригване-2.webp", alt: "детско подстригване" },
						{ src: "/assets/detsko-podstrigvane-momche/детско-подстригване-софия-център.webp", alt: "детско подстригване София център" },
						{ src: "/assets/detsko-podstrigvane-momche/low-taper-fade-4.webp", alt: "low taper fade" },
						{ src: "/assets/detsko-podstrigvane-momche/детско-подстригване-момче.webp", alt: "детско подстригване момче" },
						{ src: "/assets/detsko-podstrigvane-momche/детско-подстригване-с-машинка.webp", alt: "детско подстригване с машинка" },
						{ src: "/assets/detsko-podstrigvane-momche/детско-подстригване-софия-1.webp", alt: "детско подстригване София" },
						{ src: "/assets/detsko-podstrigvane-momche/детско-подстригване-софия-изток.webp", alt: "детско подстригване в София изток" },
						{ src: "/assets/detsko-podstrigvane-momche/детско-подстригване-софия-център-1.webp", alt: "детско подстригване София център" },
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
										{ name: "Galina Koleva" },
										{ name: "Albert Hristov" },
										{ name: "Dimitar Dodnikov" },
										{ name: "Сергей Тодоров" },
										{ name: "Boyan Kushev" },
										{ name: "Miguel Nigro" },
										{ name: "kwphoto (kaiwphoto)" },
										{ name: "Yannis Petridis" },
									]}>
									<StarReview
										src="/assets/GoogleLogoPNGImage.png"
										reviewText="Много яко място за големи и малки момчета"
										name="Galina Koleva"
										date="Юли 2024"
										stars={5}
										hrefGoogleReview="https://maps.app.goo.gl/1qoL6Xz6K7hK2fRt9"
									/>
									<StarReview
										src="/assets/GoogleLogoPNGImage.png"
										reviewText="Много стилно и хубаво място със специалисти които приемат предизвикателства. Крис е магьосник 🧙‍♂️…"
										name="Albert Hristov"
										date="Януари 2022"
										stars={5}
										hrefGoogleReview="https://maps.app.goo.gl/npZjrFWCGExXCWJ99"
									/>
									<StarReview
										src="/assets/GoogleLogoPNGImage.png"
										reviewText="Препоръчвам. Изключително приятна обстановка. Страхотен салон и наистина кадърни момчета"
										name="Dimitar Dodnikov"
										date="Януари 2020"
										stars={5}
										hrefGoogleReview="https://maps.app.goo.gl/sitMfbX4dTjsm5Gi8"
									/>
									<StarReview
										src="/assets/GoogleLogoPNGImage.png"
										reviewText="С Крис прическата винаги е топ!"
										name="Сергей Тодоров"
										date="Юли 2024"
										stars={5}
										hrefGoogleReview="https://maps.app.goo.gl/ogrU4t2SYZgEnz6u9"
									/>
									<StarReview
										src="/assets/GoogleLogoPNGImage.png"
										reviewText="Excellent service, very nice and clean place! Definitely recommended 🤟🤟🤟"
										name="Boyan Kushev"
										date="Януари 2025"
										stars={5}
										hrefGoogleReview="https://maps.app.goo.gl/o8wuFD9fosLPz3XA9"
									/>
									<StarReview
										src="/assets/GoogleLogoPNGImage.png"
										reviewText="Best barbershop in Sofia - quality service and amazing staff!"
										name="Miguel Nigro"
										date="Декември 2024"
										stars={5}
										hrefGoogleReview="https://maps.app.goo.gl/GBd4cUXEz5PPfTZX7"
									/>
									<StarReview
										src="/assets/GoogleLogoPNGImage.png"
										reviewText="Great friendly service and excellent haircut, highly recommend!"
										name="kwphoto (kaiwphoto)"
										date="Септември 2024"
										stars={5}
										hrefGoogleReview="https://maps.app.goo.gl/4Uh5PiZRmEFxErZC8"
									/>
									<StarReview
										src="/assets/GoogleLogoPNGImage.png"
										reviewText="Excellent service and friendly, professional guys. English speaking as well. Highly recommended!"
										name="Yannis Petridis"
										date="Март 2023"
										stars={5}
										hrefGoogleReview="https://maps.app.goo.gl/GmqjmHFsoM1vsoQB6"
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

				{/* <div class="pb-20 hidden">
					<AnimatedComponent>
						<H2WithImage title="Често поръчвани заедно" />
					</AnimatedComponent>

					<AnimatedComponent>
						<OftenOT
							services={[
								{ title: "Мъжко подстригване" },
								{ title: "Мъжко подстригване" },
								{ title: "Мъжко подстригване" },
								{ title: "Мъжко подстригване" },
							]}>
							<ElementInOftenOT
								img="/assets/uslugi/мъжко-подстригване-1-mobile.webp"
								alt="мъжко подстригване"
								href=""
								title="Мъжко подстригване"
							/>

							<ElementInOftenOT
								img="/assets/uslugi/мъжко-подстригване-1-mobile.webp"
								alt="мъжко подстригване"
								href=""
								title="Мъжко подстригване"
							/>

							<ElementInOftenOT
								img="/assets/uslugi/мъжко-подстригване-1-mobile.webp"
								alt="мъжко подстригване"
								href=""
								title="Мъжко подстригване"
							/>

							<ElementInOftenOT
								img="/assets/uslugi/мъжко-подстригване-1-mobile.webp"
								alt="мъжко подстригване"
								href=""
								title="Мъжко подстригване"
							/>
						</OftenOT>
					</AnimatedComponent>

					<AnimatedComponent>
						<div class="flex flex-col flex-items-center pt-8 md:pt-10">
							<a href="https://book.thebarbershop.bg/reservations/start?site=1" target="_blank" rel="noopener noreferrer" class="bg-brand-compliment c-paper b-solid b-2px b-brand-compliment uppercase font-size-4 font-500 px-7 py-2 hover-c-paper-inv transition-colors" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">Запазете час</a>
						</div>
					</AnimatedComponent>
				</div> */}
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
									<div class="pb-8 c-paper">Нашият сплотен екип се състои от <strong>талантливи и опитни бръснари</strong>, които <strong>непрекъснато се развиват и усъвършенстват уменията си</strong>. Със своя опит и отдаденост към професията, нашите бръснари гарантират, че ще получите висок клас услуги в областта на мъжкото и детското подстригване, както и невероятен резултат при всяко посещение.
									</div>
								</AnimatedComponent>
							</div>
							<div class="lg-w-33.33% flex flex-col">
								<AnimatedComponent>
									<h3 class="c-brand text-left mt-5 lg-mt-0">Професионални инструменти</h3>
									<div class="pb-8 c-paper">Бръснарството изисква както отлично <strong>майсторство</strong>, така и <strong>качествени инструменти</strong>.
										Ето защо инвестираме в едни от най-добрите професионални бръснарски пособия от водещи световни производители – <strong>Wahl, Andis, Oster, BabylissPRO</strong>. С помощта на прецизните ни ножици, професионални бръсначи и машинки можем да създадем както сложни мъжки прически, така и детски прически с изключителна прецизност и внимание към детайла.
									</div>
								</AnimatedComponent>
							</div>
							<div class="lg-w-33.33% flex flex-col">
								<AnimatedComponent>
									<h3 class="c-brand text-left mt-5 lg-mt-0">Висококачествена козметика</h3>
									<div class="pb-8 c-paper">В <strong>The Barber Shop</strong> използваме козметични продукти от ново поколение. Марките <strong>Depot, American Crew и Lavish</strong> са избрани заради техните иновативни формули и ефективност. Тези продукти не само <strong>подобряват външния вид</strong>, но и поддържат <strong>здравето на кожата и косата</strong> в дългосрочен план. Подходящи са за <strong>всеки тип кожа</strong>, като предлагат подходяща грижа дори и за най-малките клиенти с детски прически.
									</div>
								</AnimatedComponent>
							</div>
						</div>
					</div>
				</div>
				<div class="pb-20">
					<GallerySlider imgs={[
						{ src: "/assets/detsko-podstrigvane-momche/инструменти-за-детско-подстригване-с-машинка.webp", alt: "инструменти за детско подстригване с машинка" },
						{ src: "/assets/detsko-podstrigvane-momche/козметика-за-а-детско-подстригване.webp", alt: "козметика за детско подстригване" },
						{ src: "/assets/detsko-podstrigvane-momche/инструменти-за-детско-подстригване-с-ножица.webp", alt: "инструменти за детско подстригване с ножица" },
						{ src: "/assets/detsko-podstrigvane-momche/козметика-за-за-детско-подстригване-изток.webp", alt: "козметика за за детско подстригване изток" },
						{ src: "/assets/detsko-podstrigvane-momche/инструменти-за-детско-подстригване.webp", alt: "инструменти за детско подстригване" },
						{ src: "/assets/detsko-podstrigvane-momche/козметика-за-детско-подстригване-софия.webp", alt: "козметика за детско подстригване София" },
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
