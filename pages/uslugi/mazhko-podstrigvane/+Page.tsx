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
				<Collapse title="Задължително ли е да запазя час за професионално подстригване за мъже предварително?" desc="Препоръчваме Ви да запазите час предварително, за да си осигурите посещение в удобно за Вас време. При наличие на свободни часове приемаме и клиенти без предварителна резервация." />

				<Collapse title="Как мога да си запазя час за мъжко подстригване в град София?" desc="За Ваше улеснение можете да запазите час за мъжко подстригване в кв. Изток – The Barber Shop Sofia по следните начини:">
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

				<Collapse title="Какво ще се случи, ако не успея да дойда навреме за часа си за мъжко подстригване и стилизиране?" desc="Молим да ни уведомите, ако ще закъснеете. Ако закъснението е повече от 15 минути, ще се наложи да отменим часа Ви." />

				<Collapse title="Мога ли да избера конкретен барбър, който да извърши мъжкото подстригване?" desc="Да, за Ваше удобство при записване на час за мъжко подстригване можете да уточните на кого от нашите висококвалифицирани барбъри да се доверите." />

				<Collapse title="Какви методи на плащане използвате?" desc="Приемаме плащане в брой, както и чрез дебитна / кредитна карта." />

				<Collapse title="Мога ли да закупя продукти на място от бръснарницата?" desc="Да, можете да разгледате нашия асортимент от мъжки професионални продукти за коса и брада и да ги закупите на място от бръснарницата." />

				<Collapse title="The Barber Shop достъпен ли е за инвалиди?" desc="Бръснарницата е достъпна за инвалиди. В случай че изпитвате затруднения или имате въпроси, свържете се с нас на телефон +359 882 820 331." />

				<Collapse title="Осигурявате ли паркоместа за клиентите?" desc="Можете да се насладите на мъжко подстригване в град София, кв. Изток при нас в The Barber shop, където няма нужда да се притеснявате за паркирането. Осигурили сме 4 паркоместа пред входа на бръснарницата на разположение на клиентите." />

				<Collapse title="Как да поддържам прическата си между посещенията ми при бръснар?" desc="След мъжкото подстригване ще Ви дадем няколко лесни и ефективни съвета за поддръжка вкъщи. От правилното миене на косата до използването на подходящите стилизиращи продукти, заедно ще се уверим, че ще изглеждате страхотно." />

				<Collapse title="Не съм сигурен точно какво искам. Бихте ли ми помогнали да избера точната визия спрямо моите черти?" desc="Стремим се да Ви вдъхнем увереността, която всеки мъж заслужава, като Ви осигурим безупречен външен вид. Нашите барбъри с удоволствие ще Ви запознаят с трендовете в мъжките подстригвания и ще ви помогнат да изберете най-добрата визия спрямо Вашите черти." />
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

			<div style="background-position: center top; background-repeat: no-repeat; background-size: cover; height: auto;"><div style="filter: saturate(1.1); background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(/assets/mazhko-podstrigvane/мъжко-подстригване-с-машинка-1.webp); background-position: left 30% top 100%; background-repeat: no-repeat; background-size: cover;" class="h-100vh podstrigvane-img" role="img" aria-label="мъжко подстригване с машинка"></div></div>

			<div class="w-full bg-#212528">
				<div class="max-w-1240px mx-auto">
					<div class="flex flex-justify-center">
						<div class="left-0 right-0 px-3 my-0 mx-auto absolute top-55% lg-top-58% text-center w-full max-w-800px" style="-webkit-transform: translateY(-50%);">
							<AnimatedComponent>
								<h1 class="uppercase c-paper mb-6 text-center">Мъжко подстригване</h1>
							</AnimatedComponent>
							<AnimatedComponent>
								<p class="important-delay-300 c-paper text-center lg-pt-10 font-size-15.5px md-font-size-18px line-height-6.5 md:line-height-7">В <span class="c-brand  font-900" style="font-family: 'Roboto'">The Barber Shop</span> не просто подстригваме. Предлагаме Ви преживяване, което съчетава удобство, майсторство и прецизност. С помощта на нашите бръснари ще определим стил на мъжкото подстригване, който не само подхожда на чертите Ви, но и отразява кой сте Вие.</p>
								<p class="important-delay-500 c-paper text-center font-size-15.5px md-font-size-18px line-height-6.5 md:line-height-7">Нашата цел е да видите в огледалото мъж, който изглежда точно толкова добре, колкото се чувства.</p></AnimatedComponent>
						</div>
					</div>
				</div>
			</div>

			<div class="pb-10" style="background-image: url(/assets/bg-2.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;">
				<AnimatedComponentSlide>
					<H2WithImage class="c-paper" title="Бръснарница от класа" />
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
									<MdiRomanNumeral3 class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-36px h-36px c-brand" /><div class="mt-1 c-paper">Консултация относно желания стил на мъжко подстригване и стилизиране.</div><br></br>
								</div>
								<div class="flex flex-items-start gap-10px c-paper">
									<MdiRomanNumeral4 class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-36px h-36px c-brand" /><div class="mt-1 c-paper">Подстригване спрямо Вашите черти и изисквания.</div><br></br>
								</div>
								<div class="flex flex-items-start gap-10px c-paper">
									<MdiRomanNumeral5 class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-36px h-36px c-brand" /><div class="mt-1 c-paper">Измиване на косата с професионален шампоан и балсам.</div>
								</div>
							</div>
						</div>

						<div class="lg-w-50% pr-5 pl-5 lg-pl-0 flex-self-start">
							<div class="flex flex-col gap-5 c-paper">
								<div class="flex flex-items-start gap-10px c-paper">
									<MdiRomanNumeral6 class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-36px h-36px c-brand" /><div class="mt-1 c-paper">Изсушаване на косата със сешоар.</div><br></br>
								</div>
								<div class="flex flex-items-start gap-10px c-paper">
									<MdiRomanNumeral7 class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-36px h-36px c-brand" /><div class="mt-1 c-paper">Оформяне и стилизиране на прическата с премиум козметика.</div><br></br>
								</div>
								<div class="flex flex-items-start gap-10px c-paper">
									<MdiRomanNumeral8 class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-36px h-36px c-brand" /><div class="mt-1 c-paper">Представяне на повече информация относно предимствата от използваните продукти по време на мъжкото подстригване.</div><br></br>
								</div>
								<div class="flex flex-items-start gap-10px c-paper">
									<MdiRomanNumeral9 class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-36px h-36px c-brand" /><div class="mt-1 c-paper">Перфектна визия и повишено самочувствие.</div>
								</div>
							</div>
						</div>
					</div>
				</AnimatedComponentSlide>
			</div>

			<section class="lg-pb-25 pb-20">
				<AnimatedComponent>
					<H2WithImage class="max-w-750px mx-auto" title="Професионално мъжко подстригване: От идеята до завършения вид" />
				</AnimatedComponent>
				<AnimatedComponent>
					<VideoPlayer src='/assets/barbershop-mazhko-podstrigvane.mp4' />
				</AnimatedComponent>
			</section>

			<div class="pb-20" style="background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8) ), url(/assets/brown-background-image.webp); background-position: center; background-repeat: no-repeat; background-size: cover;">
				<H2WithImage class="c-paper" title="Цена на мъжко подстригване в София" />
				<AnimatedComponentSlide>
					<div class="mt-15 md-mt-20 px-20px sm-px-50px md-pb-10 pb-5 max-w-1400px mx-auto">
						<div>
							<div class="flex flex-justify-between gap-5 b-b-solid b-1px b-gray-500 pb-1">
								<div class="font-size-6 uppercase c-paper font-500 text-left pb-1" style="font-family: 'Oswald', sans-serif !important;">Мъжко подстригване</div>
								<div class="c-brand font-size-6 uppercase font-500 whitespace-nowrap" style="font-family: 'Oswald', sans-serif !important;">50 лв.</div>
							</div>
							<div class="c-gray-300 font-size-4.2 pt-3">Подстригването на The Barber Shop е комбинация от различни бръснарски и фризьорски техники на подстригване и е в съответствие с международните тенденции в бръснарството, модата и мъжкия стил. [1ч.]</div>
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
						<H2WithImage title="Мъжко подстригване в действие" />
					</AnimatedComponent>
					<GallerySlider imgs={[
						{ src: "/assets/mazhko-podstrigvane/мъжко-подстригване-3.webp", alt: "мъжко подстригване" },
						{ src: "/assets/mazhko-podstrigvane/мъжко-подстригване-софия-2.webp", alt: "мъжко подстригване София" },
						{ src: "/assets/mazhko-podstrigvane/мъжко-подстригване-софия-център.webp", alt: "мъжко подстригване София център" },
						{ src: "/assets/mazhko-podstrigvane/мъжко-подстригване-студентски-град-1.webp", alt: "мъжко подстригване студентски град" },
						{ src: "/assets/mazhko-podstrigvane/мъжко-подстригване-цена-1.webp", alt: "мъжко подстригване цена" },
						{ src: "/assets/mazhko-podstrigvane/подстригване-мъжко-1.webp", alt: "подстригване мъжко" },
						{ src: "/assets/mazhko-podstrigvane/подстригване-с-машинка-мъжко-1.webp", alt: "подстригване с машинка мъжко" },
						{ src: "/assets/mazhko-podstrigvane/фризьорски-салон-в-студентски-град-1.webp", alt: "фризьорски салон в студентски град" },
						{ src: "/assets/mazhko-podstrigvane/фризьорски-салон-софия-1.webp", alt: "фризьорски салон софия" },
						{ src: "/assets/mazhko-podstrigvane/фризьорски-салон-софия-център-1.webp", alt: "фризьорски салон София център" },
						{ src: "/assets/mazhko-podstrigvane/фризьорски-салони-в-софия-цени.webp", alt: "фризьорски салони в София цени" },
					]}
					/>
				</div>

				<section style="background-color: #222222; background-image: url(/assets/bg-2.jpg); background-position: center center; background-repeat: no-repeat; background-size: cover;">
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
										{ name: "Ivo Stoilov" },
										{ name: "Georgi Pleshkov" },
										{ name: "Kaloyan Iliev" },
										{ name: "Philip Betz" },
										{ name: "Atanas Todorov" },
										{ name: "Boyan Kushev" },
										{ name: "Kristian Yordanov" },
										{ name: "Krasimir Daskalov" },
									]}>
									<StarReview
										src="/assets/GoogleLogoPNGImage.png"
										reviewText="Професионално изпълнена услуга без нищо излишно. Горещо препоръчвам на онези, които се колебаят."
										name="Ivo Stoilov"
										date="Март 2025"
										stars={5}
										hrefGoogleReview="https://maps.app.goo.gl/cRbTpEHPpCSXZhqo7"
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
										hrefGoogleReview="https://maps.app.goo.gl/pgSmLpppJkuxo1SH6"
									/>
									<StarReview
										src="/assets/GoogleLogoPNGImage.png"
										reviewText="Страхотна атмосфера в салона. Много приятно място. Заради такива готини професионалисти мъжете ходим на бръснар, а жените на козметични салони 😁. Горещо препоръчвам Крис и целия екип!"
										name="Kaloyan Iliev"
										date="Юни 2024"
										stars={5}
										hrefGoogleReview="https://maps.app.goo.gl/eEyH728ZHp56LiEy6"
									/>
									<StarReview
										src="/assets/GoogleLogoPNGImage.png"
										reviewText="Много ми хареса прическата! Всички които ме виждаха, казваха, че много ми отива. Плюс това атмосферата там е много приятна, хората са забавни и дружелюбни."
										name="Philip Betz"
										date="Октомври 2024"
										stars={5}
										hrefGoogleReview="https://maps.app.goo.gl/2GD7Gw3npQEQYSj47"
									/>
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
										hrefGoogleReview="https://maps.app.goo.gl/daCEELFuKS2NQa1r6"
									/>
									<StarReview
										src="/assets/GoogleLogoPNGImage.png"
										reviewText="Excellent service, very nice and clean place! Definitely recommended 🤟🤟🤟"
										name="Boyan Kushev"
										date="Януари 2025"
										stars={5}
										hrefGoogleReview="https://maps.app.goo.gl/oWw5UpYKUchbJcc76"
									/>
									<StarReview
										src="/assets/GoogleLogoPNGImage.png"
										reviewText="I got a haircut with Kris Mitov. It was much better than expected. He put quite a lot of effort to trim my side burns with a buzzer and to style the top of my head and my bangs with scissors. My friends now notice how much better my haircut is. As the month goes on my hair still looks good even when it is 5 weeks since my last trimming."
										name="Kristian Yordanov"
										date="Май 2024"
										stars={5}
										hrefGoogleReview="https://maps.app.goo.gl/3byH6be1pkLY1Hk59"
									/>
									<StarReview
										src="/assets/GoogleLogoPNGImage.png"
										reviewText="Chris perfectly understood the haircut I wanted. Nice atmosphere, 10/10 would recommend so far."
										name="Krasimir Daskalov"
										date="Февруари 2025"
										stars={5}
										hrefGoogleReview="https://maps.app.goo.gl/yF4GYJC7FGXCm6Xs6"
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
								{ title: "Тониране на сиви коси" },
							]}>
							<ElementInOftenOT
								img="/assets/uslugi/класическо-мокро-бръснене-mobile.webp"
								alt="Класическо мокро бръснене"
								href="/uslugi/klasichesko-mokro-brasnene"
								title="Класическо мокро бръснене"
							/>
							<ElementInOftenOT
								img="/assets/tonirane-na-kosa/барбър-шоп-тониране-на-сиви-коси.webp"
								alt="Тониране на сиви коси"
								href="/uslugi/profesionalno-tonirane-na-mazhka-kosa"
								title="Тониране на сиви коси"
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

			<section style="background-color: #222222; background-image: url(/assets/bg-2.jpg); background-position: center center; background-repeat: no-repeat; background-size: cover;">
				<div class="lg-mx-30 mx-auto">
					<div class="flex md-flex flex-col lg-gap-5 flex-justify-center max-w-1440px lg-px-0 mx-auto pb-10">
						<AnimatedComponent>
							<H2WithImage class="c-paper" title="Предимствата на The Barber Shop" />
						</AnimatedComponent>
						<div class="px-5 lg-px-0 flex lg-flex-row flex-col lg-gap-10">
							<div class="lg-w-33.33% flex flex-col">
								<AnimatedComponent>
									<h3 class="c-brand text-left mt-0">Опитни и квалифицирани бръснари</h3>
									<div class="pb-8 c-paper">Екипът на The Barber Shop се състои от млади, целеустремени и непрекъснато развиващи се бръснари. Всеки един от тях е преминал интензивно обучение, усвоявайки “езика на бръснарството” и тънкостите в стайлинга за мъже. С професионализъм, лично отношение и внимание към детайла могат да пресъздадат всяка визия съобразена с предпочитанията и чертите Ви.</div>
								</AnimatedComponent>
							</div>
							<div class="lg-w-33.33% flex flex-col">
								<AnimatedComponent>
									<h3 class="c-brand text-left mt-5 lg-mt-0">Професионални инструменти</h3>
									<div class="pb-8 c-paper">В The Barber Shop ценим високото качество затова използваме само най-добрите професионални инструменти. Нашите бръснарски ножици, бръсначи и машинки са избрани с внимание към детайлите, като залагаме на световно признати марки като Wahl, Andis, Oster, BabylissPRO, гарантиращи отлично изпълнение на класическите мъжки прически. Нашата бръснарница е мястото, където стилът и прецизността са водещ фактор.</div>
								</AnimatedComponent>
							</div>
							<div class="lg-w-33.33% flex flex-col">
								<AnimatedComponent>
									<h3 class="c-brand text-left mt-5 lg-mt-0">Висококачествена козметика</h3>
									<div class="pb-8 c-paper">Перфектната визия започва със здрава кожа и коса. Ето защо ние работим с марки като Depot, American crew, Lavish, специализирани в мъжката козметика, с изчистен състав и благоприятно действие върху косата и кожата. Асортиментът ни включва подхранващи шампоани, хидратиращи балсами, както и стилизиращи продукти за всеки тип коса и брада, които гарантират че прическата Ви ще запази вида си дълго след мъжкото подстригване.</div>
								</AnimatedComponent>
							</div>
						</div>
					</div>
				</div>
				<div class="pb-20">
					<GallerySlider imgs={[
						{ src: "/assets/mazhko-podstrigvane/инструменти-за-одстригване-мъжко-подстригване-изток.webp", alt: "инструменти за одстригване мъжко подстригване изток" },
						{ src: "/assets/mazhko-podstrigvane/инструменти-за-мъжко-подстригване.webp", alt: "инструменти за мъжко подстригване" },
						{ src: "/assets/mazhko-podstrigvane/козметика-за-мъжко-подстригване-софия.webp", alt: "козметика за мъжко подстригване София" },
						{ src: "/assets/mazhko-podstrigvane/инструменти-за-мъжко-подстригване-софия.webp", alt: "инструменти за мъжко подстригване София" },
						{ src: "/assets/mazhko-podstrigvane/козметика-за-подстригване-мъжко-подстригване-изток.webp", alt: "козметика за подстригване мъжко подстригване изток" },
						{ src: "/assets/mazhko-podstrigvane/козметика-за-мъжко-подстригване.webp", alt: "козметика за мъжко подстригване" },
					]}
					/>
				</div>
			</section>

			{/* <div class="lg-px-30 pt-10 pb-20 px-4 w-full flex flex-col flex-justify-center">
				<AnimatedComponentSlide>
					<h2 class="important-mb-0">Нашият магазин</h2>
					<img class="mx-auto pt-2 pb-15 flex flex-justify-center" src="/assets/heading-ic.png" />
				</AnimatedComponentSlide>
				<AnimatedComponent>
					<OurShop>
						<ElementInOurShop
							img="/assets/mazhko-podstrigvane/козметика-за-подстригване-мъжко-подстригване-изток.webp"
							alt="козметика за подстригване мъжко подстригване изток"
							href="/"
							title="Козметика"
						/>
						<ElementInOurShop
							img="/assets/mazhko-podstrigvane/козметика-за-мъжко-подстригване.webp"
							alt="козметика за мъжко подстригване"
							href="/"
							title="Козметика"
						/>
						<ElementInOurShop
							img="/assets/mazhko-podstrigvane/козметика-за-мъжко-подстригване-софия.webp"
							alt="козметика за мъжко подстригване София"
							href="/"
							title="Козметика"
						/>
					</OurShop>
				</AnimatedComponent>

				<AnimatedComponentSlide class="mx-auto pt-15">
					<a href="/" class="bg-brand c-paper-inv b-solid b-2px b-brand uppercase font-size-4 font-500 px-7 py-2 hover-c-paper transition-colors" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">Към магазин</a>
				</AnimatedComponentSlide>
			</div> */}

			{/*<div class="pb-20 h-150vh" style="filter:; height: auto; background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url(/assets/v2-76u36-ghyye.webp); background-position: center top; background-repeat: no-repeat; background-size: cover;">*/}
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
