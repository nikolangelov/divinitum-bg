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
				<Collapse title="Задължително ли е запазване на час за мъжко подстригване с оформяне на брада предварително?" desc="Препоръчваме Ви да запазите час предварително, за да си осигурите експертна поддръжка на мъжка коса и брада в удобно за Вас време. При наличие на свободни часове приемаме и клиенти без предварителна резервация." />

				<Collapse title="Как мога да си запазя час?" desc="За Ваше улеснение запазването на час за мъжко подстригване с оформяне на брада се случва по следните начини:">
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

				<Collapse title="Мога ли да избера конкретен барбър за мъжко подстригване и оформяне на брада?" desc="Да, за Ваше удобство при записване на час можете да уточните на кого от нашите висококвалифицирани барбъри да се доверите." />

				<Collapse title="Какви методи на плащане използвате?" desc="Приемаме плащане в брой, както и чрез дебитна / кредитна карта." />

				<Collapse title="Мога ли да закупя продукти на място от бръснарницата?" desc="Да, можете да разгледате нашето разнообразие от комплексна мъжка грижа за коса и брада  и да ги закупите на място от бръснарницата." />

				<Collapse title="The Barber Shop достъпен ли е за инвалиди?" desc="Бръснарницата е достъпна за инвалиди. В случай че изпитвате затруднения или имате въпроси, свържете се с нас на телефон +359 882 820 331." />

				<Collapse title="Осигурявате ли паркоместа за клиентите?" desc="Да, осигурили сме 4 паркоместа пред входа на бръснарницата на разположение на клиентите." />

				<Collapse title="Колко често трябва да посещавам бръснарницата за мъжко подстригване и оформяне на брада?" desc="Препоръчително е подстригването и оформянето на брада да се случват паралелно при желание за безупречна визия, което означава на около 4 седмици. Периодът може да бъде различен, спрямо търсения ефект." />

				<Collapse title="Включено ли е измиване в мъжкото подстригване плюс оформяне на брада?" desc="Да, измиването е една от стъпките, които включва услугата стилизиране на мъжка прическа и брада." />

				<Collapse title="Как да поддържам брадата си между посещенията при бръснар за мъжко подстригване и оформяне на брада?" desc="За да поддържате визията си следвайте следните стъпки:">
					<div>
						<ul>
							<li class="">
								използвайте добър тример за оформяне на брадата
							</li>
							<li class="">
								мийте я редовно с шампоан за брада
							</li>
							<li class="">
								хидратирайте с масло или балсам за брада
							</li>

							<li class="">
								разресвайте я с четка, за да изглежда винаги подредена и стилна.
							</li>
						</ul>
					</div>
				</Collapse>

				<Collapse title="Подходяща ли е услугата за хора с чувствителна кожа?" desc="Ние използваме висококачествени продукти в комбинация с експертна поддръжка на мъжка коса и брада, които са подходящи за чувствителна кожа. Споделете с нас, ако имате специфични нужди или алергии, и ние ще Ви предложим най-доброто решение." />

				<Collapse title="Не съм сигурен точно какво искам. Бихте ли ми помогнали да избера точното мъжко подстригване и оформяне на брада спрямо моите черти?" desc="Ние сме тук, за да Ви помогнем да намерите перфектната визия. Ще проведем консултиране за мъжка прическа и брада, на която ще обсъдим различни варианти и ще Ви предложим комбинирани техники за мъжко подстригване и бръснене, които най-добре подхождат на Вашето лице и личен стил." />

				<Collapse title="Необходимо ли е да полагам специални грижи за лицето и косата си след мъжко подстригване и оформяне на брада?" desc="Не е необходимо да полагате специални грижи. Препоръчително е ежедневната Ви грижа да включва използването на балсам за коса и хидратиращо олио за брада." />
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

			<div style="background-position: center top; background-repeat: no-repeat; background-size: cover; height: auto;"><div style="filter: saturate(1.1); background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(/assets/podstrigvane-i-oformiane-na-brada/мъжко-подстригване-и-оформяне-на-брада-1.webp); background-position: left 80% top 100%; background-repeat: no-repeat; background-size: cover;" class="h-100vh kombo-img" role="img" aria-label="подстригване и оформяне на мъжка брада"></div></div>

			<div class="w-full bg-#212528">
				<div class="max-w-1240px mx-auto">
					<div class="flex flex-justify-center">
						<div class="left-0 right-0 px-3 my-0 mx-auto absolute top-60% lg-top-58% text-center w-full max-w-1100px" style="-webkit-transform: translateY(-50%);">
							<AnimatedComponent>
								<h1 class="uppercase c-paper mb-6 text-center">Мъжко подстригване и оформяне на брада</h1>
							</AnimatedComponent>
							<AnimatedComponent>
								<p class="important-delay-300 c-paper text-center lg-pt-10 font-size-15.5px md-font-size-18px line-height-6.5 md:line-height-7"><span class="c-brand font-500" style="font-family: 'Roboto'">Мъжкото подстригването и оформяне на брадата</span> са сред най-важните процедури за мъжете, които искат да изглеждат добре. С пакетната услуга можете да се насладите на безупречна визия, с която ще се чувствате уверени и стилни. Ще осигурите комплексна грижа за косата и брадата си, без да се налага да губите време в отделни посещения.</p>
							</AnimatedComponent>
						</div>
					</div>
				</div>
			</div>

			<div class="pb-10" style="background-image: url(/assets/thebarbershop-dark-bg.webp); background-position: center; background-repeat: no-repeat; background-size: cover;">
				<AnimatedComponentSlide>
					<H2WithImage class="c-paper" title="Какво Ви очаква по време на мъжкото подстригване и оформяне на брада" />
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
									<MdiRomanNumeral3 class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-36px h-36px c-brand" /><div class="mt-1 c-paper">Консултация относно желания стил подстригване и оформяне на брада.</div><br></br>
								</div>
								<div class="flex flex-items-start gap-10px c-paper">
									<MdiRomanNumeral4 class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-36px h-36px c-brand" /><div class="mt-1 c-paper">Подстригване според предпочитанията Ви с помощта на ножици и машинка за подстригване.</div><br></br>
								</div>
								<div class="flex flex-items-start gap-10px c-paper">
									<MdiRomanNumeral5 class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-36px h-36px c-brand" /><div class="mt-1 c-paper">Оформяне на брадата спрямо Вашите черти и изисквания.</div>
								</div>
								<div class="flex flex-items-start gap-10px c-paper">
									<MdiRomanNumeral6 class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-36px h-36px c-brand" /><div class="mt-1 c-paper">Измиване на косата и брадата с професионален шампоан и балсам спрямо нуждите.</div><br></br>
								</div>
							</div>
						</div>

						<div class="lg-w-50% pr-5 pl-5 lg-pl-0 flex-self-start">
							<div class="flex flex-col gap-5 c-paper">
								<div class="flex flex-items-start gap-10px c-paper">
									<MdiRomanNumeral7 class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-36px h-36px c-brand" /><div class="mt-1 c-paper">Изсушаване на косата и брадата със сешоар.</div><br></br>
								</div>
								<div class="flex flex-items-start gap-10px c-paper">
									<MdiRomanNumeral8 class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-36px h-36px c-brand" /><div class="mt-1 c-paper">Оформяне на прическата и брадата с помощта на стилизиращи продукти.</div><br></br>
								</div>
								<div class="flex flex-items-start gap-10px c-paper">
									<MdiRomanNumeral9 class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-36px h-36px c-brand" /><div class="mt-1 c-paper">Представяне на повече информация относно предимствата от използваните продукти по време на подстригване и оформяне на брада.</div>
								</div>
								<div class="flex flex-items-start gap-10px c-paper">
									<MdiRomanNumeral10 class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-36px h-36px c-brand" /><div class="mt-1 c-paper">Перфектна визия и повишено самочувствие.</div>
								</div>
							</div>
						</div>
					</div>
				</AnimatedComponentSlide>
			</div>

			<section class="lg-pb-25 pb-20">
				<AnimatedComponent>
					<H2WithImage class="max-w-750px mx-auto" title="Професионално мъжко подстригване и оформяне на брада: От идеята до завършения вид" />
				</AnimatedComponent>
				<AnimatedComponent>
					<VideoPlayer src='/assets/barbershop-podstrigvane-i-brada.mp4' />
				</AnimatedComponent>
			</section>

			<div class="pb-20" style="background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8) ), url(/assets/brown-background-image.webp); background-position: center; background-repeat: no-repeat; background-size: cover;">
				<H2WithImage class="c-paper" title="Цена на мъжко подстригване и оформяне на брада" />
				<AnimatedComponentSlide>
					<div class="mt-15 md-mt-20 px-20px sm-px-50px md-pb-10 pb-5 max-w-1400px mx-auto">
						<div>
							<div class="flex flex-justify-between gap-5 b-b-solid b-1px b-gray-500 pb-1">
								<div class="font-size-6 uppercase c-paper font-500 text-left pb-1" style="font-family: 'Oswald', sans-serif !important;">Подстригване и оформяне на брада</div>
								<div class="c-brand font-size-6 uppercase font-500 whitespace-nowrap" style="font-family: 'Oswald', sans-serif !important;">70 лв.</div>
							</div>
							<div class="c-gray-300 font-size-4.2 pt-3">Подстригване и оформяне на брада. Услугата включва: подстригване, измиване, стилизиране с продукт, избран спрямо предпочитанията на клиента и спецификата на косата му, оформяне на дължината, очертаване на контур на брадата с тример и/или бръснач (изцяло по избор на клиента), нанасяне на продукти за грижа на брадата, съобразени с преценката на бръснаря и предпочитанията на клиента. [1ч.30мин.]</div>
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
						<H2WithImage title="Мъжко подстригване и оформяне на брада в действие" />
					</AnimatedComponent>
					<GallerySlider imgs={[
						{ src: "/assets/podstrigvane-i-oformiane-na-brada/мъжко-подстригване-и-оформяне-на-брада.webp", alt: "мъжко подстригване и оформяне на брада" },
						{ src: "/assets/podstrigvane-i-oformiane-na-brada/оформяне-на-брада-студентски-град.webp", alt: "оформяне на брада студентски град" },
						{ src: "/assets/podstrigvane-i-oformiane-na-brada/подстригване-и-оформяне-на-брада-2.webp", alt: "подстригване и оформяне на брада" },
						{ src: "/assets/podstrigvane-i-oformiane-na-brada/buzz-cut-and-beard-2.webp", alt: "buzz cut and beard" },
						{ src: "/assets/podstrigvane-i-oformiane-na-brada/men-s-haircut-and-beard.webp", alt: "mens haircut and beard" },
						{ src: "/assets/podstrigvane-i-oformiane-na-brada/buzz-cut-and-beard-3.webp", alt: "buzz cut and beard" },
						{ src: "/assets/podstrigvane-i-oformiane-na-brada/оформяне-на-брада-софия-2.webp", alt: "оформяне на брада софия" },
						{ src: "/assets/podstrigvane-i-oformiane-na-brada/buzz-cut-hairstyles-2.webp", alt: "buzz cut hairstyles" },
						{ src: "/assets/podstrigvane-i-oformiane-na-brada/оформяне-на-брада-видове-2.webp", alt: "оформяне на брада видове" },
						{ src: "/assets/podstrigvane-i-oformiane-na-brada/fade-style-haircut-and-beard.webp", alt: "fade style haircut and beard" },
						{ src: "/assets/podstrigvane-i-oformiane-na-brada/men's-haircut-and-beard-1.webp", alt: "mens haircut and beard" },
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
										{ name: "Atanas Todorov" },
										{ name: "Borislav Donchev" },
										{ name: "Nikola Stamenov" },
										{ name: "Nikolay Mihaylov" },
										{ name: "Asen Markov" },
										{ name: "Dimitar Stoyanov" },
										{ name: "Петър Кенаров" },
										{ name: "Mario Kisov" },
									]}>
									<StarReview
										src="/assets/GoogleLogoPNGImage.png"
										reviewText={
											<>
												Страхотен и приветлив салон.<br />
												Пълен с професионалисти!<br />
												Винаги си тръгвам доволен и определено препоръчвам Крис!
											</>
										}
										name="Atanas Todorov"
										date="Февруари 2025"
										stars={5}
										hrefGoogleReview="https://maps.app.goo.gl/sjkDCYSsjHFX32BA9"
									/>
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
										hrefGoogleReview="https://maps.app.goo.gl/iEKHLYRadekGvbP87"
									/>
									<StarReview
										src="/assets/GoogleLogoPNGImage.png"
										reviewText="Най-добрият салон, в който съм бил. Атмосферата, отношението и уменията на бръснарите са на изключително високо ниво?"
										name="Nikola Stamenov"
										date="Май 2024"
										stars={5}
										hrefGoogleReview="https://maps.app.goo.gl/AxbBFsdVyJYUsW536"
									/>
									<StarReview
										src="/assets/GoogleLogoPNGImage.png"
										reviewText="Салонът предлага може би една от най-добрите услуги за мъжко подстригване и стайлинг на брада в София. Крис е невероятен професионалист и може да му имате доверие, че ще ви направи най-добрата прическа!"
										name="Nikolay Mihaylov"
										date="Май 2024"
										stars={5}
										hrefGoogleReview="https://maps.app.goo.gl/rAFy5cpcGFTxP8PR7"
									/>
									<StarReview
										src="/assets/GoogleLogoPNGImage.png"
										reviewText="Перфектното място за мъжки отдих. Посрещнаха ме с вежливо обслужване и приятелска атмосфера. Работата им е на много високо ниво с внимание към детайла. Преопоръчвам!"
										name="Asen Markov"
										date="Март 2024"
										stars={5}
										hrefGoogleReview="https://maps.app.goo.gl/R7ZJQMcubmDh82W8A"
									/>
									<StarReview
										src="/assets/GoogleLogoPNGImage.png"
										reviewText="Чудесна обстановка. Млади момчета със завидни умения. Горещо препоръчвам !"
										name="Dimitar Stoyanov"
										date="Ноември 2021"
										stars={5}
										hrefGoogleReview="https://maps.app.goo.gl/5NwhV395TLrdHThT6"
									/>
									<StarReview
										src="/assets/GoogleLogoPNGImage.png"
										reviewText="Perfect place for a haircut, beard grooming and meet new people and friends. Awesome crew, good athmosphere and great skills!"
										name="Петър Кенаров"
										date="Юни 2024"
										stars={5}
										hrefGoogleReview="https://maps.app.goo.gl/hRwLquSZhqZEBXJW9"
									/>
									<StarReview
										src="/assets/GoogleLogoPNGImage.png"
										reviewText="Amazing haircut! Totally recommend. Changed my look entirely and for the better."
										name="Mario Kisov"
										date="Юни 2024"
										stars={5}
										hrefGoogleReview="https://maps.app.goo.gl/L2iAbneuWELf7mE68"
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

					<AnimatedComponent class="block h-500px md:h-600px max-w-500px mx-auto px-5">
						<ElementInOftenOT
							img="/assets/tonirane-na-kosa/барбър-шоп-тониране-на-сиви-коси.webp"
							alt="Тониране на сиви коси"
							href="/uslugi/profesionalno-tonirane-na-mazhka-kosa"
							title="Тониране на сиви коси"
						/>
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
									<div class="pb-8 c-paper">В <strong>The Barber Shop</strong> се гордеем с нашия екип от <strong>млади и непрекъснато развиващи се бръснари</strong>. Всеки професионалист в нашия салон е преминал през задълбочено обучение в мъжко подстригване, плюс оформяне на брада, усвоявайки <strong>най-фините техники в бръснарството</strong>. С прецизност и персонализиран подход, те създават уникални визии, които <strong>подчертават индивидуалността на всеки клиент</strong>.</div>
								</AnimatedComponent>
							</div>
							<div class="lg-w-33.33% flex flex-col">
								<AnimatedComponent>
									<h3 class="c-brand text-left mt-5 lg-mt-0">Професионални инструменти</h3>
									<div class="pb-8 c-paper">Бръснарството изисква както <strong>отлично майсторство</strong>, така и <strong>качествени инструменти</strong> за мъжко подстригване и оформяне на брада. Ето защо инвестираме в едни от най-добрите професионални бръснарски пособия от водещи световни производители като <strong>Wahl, Andis, Oster, BabylissPRO</strong>. Нашите прецизни ножици, деликатни бръсначи и професионални машинки са специално подбрани, за да осигурят <strong>ненадминато качество</strong> при всяка процедура.</div>
								</AnimatedComponent>
							</div>
							<div class="lg-w-33.33% flex flex-col">
								<AnimatedComponent>
									<h3 class="c-brand text-left mt-5 lg-mt-0">Висококачествена козметика</h3>
									<div class="pb-8 c-paper"><strong>Качествената козметика</strong> е един от основните фактори за отлично мъжко подстригване и оформяне на брада. Ние работим с продукти от утвърдени марки като <strong>Depot, American Crew и Lavish,</strong> които предлагат изключителна грижа за мъже. Подхранват и хидратират кожата и брадата, поддържайки ги <strong>здрави и красиви</strong>. Не дразнят кожата и са подходящи за <strong>мъже с чувствителна кожа</strong>.</div>
								</AnimatedComponent>
							</div>
						</div>
					</div>
				</div>
				<div class="pb-20">
					<GallerySlider imgs={[
						{ src: "/assets/podstrigvane-i-oformiane-na-brada/инструменти-за-men-s-haircut-and-beard.webp", alt: "инструменти за mens haircut and beard" },
						{ src: "/assets/podstrigvane-i-oformiane-na-brada/козметика-за-мъжко-подстригване-и-оформяне-на-брада.webp", alt: "козметика за мъжко подстригване и оформяне на брада" },
						{ src: "/assets/podstrigvane-i-oformiane-na-brada/инструменти-за-men's-haircut-and-beard.webp", alt: "инструменти за mens haircut and beard" },
						{ src: "/assets/podstrigvane-i-oformiane-na-brada/инструменти-за-подстригване-и-оформяне-на-брада.webp", alt: "инструменти за подстригване и оформяне на брада" },
						{ src: "/assets/podstrigvane-i-oformiane-na-brada/козметика-за-подстригване-и-оформяне-на-брада-софия.webp", alt: "козметика за подстригване и оформяне на брада софия" },
						{ src: "/assets/podstrigvane-i-oformiane-na-brada/козметика-за-подстригване-и-оформяне-на-брада.webp", alt: "козметика за подстригване и оформяне на брада" },
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
