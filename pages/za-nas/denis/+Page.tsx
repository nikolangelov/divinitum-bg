import "solid-slider/slider.css";
import { VideoPlayer } from '../../../components/VideoPlayer';
import { GallerySlider } from '../../../components/GallerySlider';
import { AnimatedComponent } from '../../../components/AnimateOnView';
import { AnimatedComponentSlide } from '../../../components/AnimateOnViewSlide';
import { ReviewSlider, StarReview } from '../../../components/ReviewSlider';
import { H2WithImage } from "../../../components/H2WithImage";

export default function Page() {
	return (
		<>
			<noscript>
				<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NWKWKC4Z"
					height="0" width="0" style="display:none;visibility:hidden">
				</iframe>
			</noscript>

			<div style="background-position: center top; background-repeat: no-repeat; background-size: cover; height: auto;"><div style="background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9) ), url(/assets/denis/барбър-денис-индивидуална-мобилно.webp); background-position: center; background-repeat: no-repeat; background-size: cover;" class="h-100vh denis-img" role="img" aria-label="Барбър Денис - Индивидуална"></div></div>

			<div class="w-full bg-#212528">
				<div class="max-w-1240px mx-auto">
					<div class="flex flex-justify-center">
						<div class="left-0 right-0 px-3 my-0 mx-auto absolute top-60% lg-top-65% text-center w-full max-w-900px" style="-webkit-transform: translateY(-50%);">
							<AnimatedComponent>
								<h1 class="uppercase c-paper mb-6 text-center">Денис</h1>
							</AnimatedComponent>
							<AnimatedComponent>
								<p class="important-delay-300 c-paper text-center lg-pt-10 font-size-17px md-font-size-18px line-height-7">При него бръснарството е започнало на майтап – едно лято по време на бригада в Америка, започва да подстригва колегите си с машинки от Китай без да подозира, че това ще се превърне в хоби, а впоследствие – в професия. Пази машинките и до днес, за да му напомнят откъде е тръгнал и да му носят късмет.</p>
							</AnimatedComponent>
						</div>
					</div>
				</div>
			</div>

			{/* <section class="pb-20 bg-#f2e0c2" style="background-color: #222222; background-image: url(/assets/thebarbershop-dark-bg.webp); background-position: center center; background-repeat: no-repeat; background-size: cover;">
				<AnimatedComponent>
					<H2WithImage class="c-paper" title="Видео" />
				</AnimatedComponent>
				<AnimatedComponent>
					<VideoPlayer src='https://www.youtube.com/embed/e2x0UXVU2yg?enablejsapi=1&mute=1' />
				</AnimatedComponent>
			</section> */}

			<section>
				<div class="lg-mx-30 mx-auto">
					<div class="flex md-flex flex-col lg-gap-5 flex-justify-center max-w-1440px lg-px-0 mx-auto pb-10">
						<AnimatedComponent>
							<H2WithImage title="Защо да се доверите на Денис" />
						</AnimatedComponent>
						<div class="px-5 lg-px-0 flex lg-flex-row flex-col lg-gap-10">
							<div class="lg-w-33% flex flex-col">
								<AnimatedComponent>
									<div class="pb-8">Денис е бръснар, чиято история започва на шега, но бързо се превръща в истинска страст и професия, която практикува с внимание към детайла и желание всеки клиент да си тръгне с усмивка и увереност. Това, което най-много го радва в работата, е моментът, в който човекът се погледне в огледалото и се хареса.</div>
								</AnimatedComponent>
							</div>
							<div class="lg-w-33% flex flex-col">
								<AnimatedComponent>
									<div class="pb-4 md:pb-8">Когато избира къде да работи, Денис търси не просто място, а и екип, който споделя неговите виждания за стил и професионално отношение към клиента. Така попада в The Barber Shop, където смята, че е на точното място.</div>
								</AnimatedComponent>
							</div>
							<div class="lg-w-33% flex flex-col">
								<AnimatedComponent>
									<div class="pb-4 md:pb-8">Ако търсите свежа визия, внимание към детайла и приятелско отношение Денис е Вашият човек.</div>
								</AnimatedComponent>
							</div>
						</div>
					</div>
				</div>
				<div class="pb-20">
					<GallerySlider imgs={[
						{ src: "/assets/denis/барбър-денис-бръснарници-в-софия-бръснене-на-глава.webp", alt: "Барбър Денис -  бръснарници в софия бръснене на глава" },
						{ src: "/assets/denis/барбър-денис-бръснене-на-глава-от-от-бръснар-в-софия.webp", alt: "Барбър Денис -  бръснене на глава от от бръснар в софия" },
						{ src: "/assets/denis/барбър-денис-бръснене-на-глава-с-бръснач-в-барбер-шоп.webp", alt: "Барбър Денис -  бръснене на глава с бръснач в барбер шоп" },
						{ src: "/assets/denis/барбър-денис-бръснене-на-глава-с-бръснач-от-sofia-barber.webp", alt: "Барбър Денис -  бръснене на глава с бръснач от barber в София" },
						{ src: "/assets/denis/барбър-денис-бръснене-на-глава-с-бръснач.webp", alt: "Барбър Денис -  бръснене на глава с бръснач" },
					]}
					/>
				</div>
			</section>

			<div class="lg-px-30 pb-20 w-full flex flex-col flex-justify-center bg-#f2e0c2" style="background-color: #222222; background-image: url(/assets/thebarbershop-dark-bg.webp); background-position: center center; background-repeat: no-repeat; background-size: cover;">
				<AnimatedComponentSlide>
					<div class="px-4">
						<H2WithImage class="c-paper" title="Какво казват другите за Денис?" />
					</div>
				</AnimatedComponentSlide>

				<AnimatedComponent>
					<ReviewSlider
						reviews={[
							{ name: "Dimo Dinchev" },
							{ name: "Atanas Todorov" },
							{ name: "Илиян Станков" },
							{ name: "Bernhard Lindorfer" },
							{ name: "Ivaylo Petrov" },
							{ name: "Nikola Marinov" },
							{ name: "Kristiyan Trayanov" },
						]}>
						<StarReview
							src="/assets/GoogleLogoPNGImage.png"
							reviewText="Barber shop е мястото, където се подстригвам от 5 години и става само по-добро! Атмосферата винаги е сякаш се виждаш със стари приятели"
							name="Dimo Dinchev"
							date="Юни 2025"
							stars={5}
							hrefGoogleReview="https://maps.app.goo.gl/z5xKLkNWNtmtqMvV9"
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
							hrefGoogleReview="https://maps.app.goo.gl/mCReWrgXZpgKZ4Vi7"
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
							reviewText="I’m their client for many years and service is consistently good. Atmosphere is great and the team speaks English (the reason I went there in the first place)."
							name="Bernhard Lindorfer"
							date="Март 2024"
							stars={5}
							hrefGoogleReview="https://maps.app.goo.gl/jJBgK8UA9EioFW969"
						/>
						<StarReview
							src="/assets/GoogleLogoPNGImage.png"
							reviewText="cool stuff, chill music and top quality service every time. fav barbers in sofia."
							name="Ivaylo Petrov"
							date="Март 2024"
							stars={5}
							hrefGoogleReview="https://maps.app.goo.gl/mLFpKTqr2BXniPfS9"
						/>
						<StarReview
							src="/assets/GoogleLogoPNGImage.png"
							reviewText={
								<>
									I really like the industrial look of the place.<br />
									If you want to get the perfect cut in Sofia this is definitely the place to do it.<br />
									Very friendly staff, great atmosphere and music.
								</>
							}
							name="Nikola Marinov"
							date="Април 2022"
							stars={5}
							hrefGoogleReview="https://maps.app.goo.gl/1wBncxNxuRheaWWJ8"
						/>
						<StarReview
							src="/assets/GoogleLogoPNGImage.png"
							reviewText="The barbers in this barbershop are really good and they are friendly, especially Mario is a very good person and barber. Recommending him for a good haircut and beard cut!"
							name="Kristiyan Trayanov"
							date="Март 2024"
							stars={5}
							hrefGoogleReview="https://maps.app.goo.gl/gHUitKtQREtBb2Uu8"
						/>
					</ReviewSlider>
				</AnimatedComponent>

				<AnimatedComponentSlide class="mx-auto pt-10">
					<a href="https://book.thebarbershop.bg/reservations/start?site=1" target="_blank" rel="noopener noreferrer" class="bg-brand-compliment c-paper b-solid b-2px b-brand-compliment uppercase font-size-4 font-500 px-7 py-2 hover-c-paper-inv transition-colors" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">Запазете час при Денис</a>
				</AnimatedComponentSlide>
			</div>
		</>
	);
}
