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

			<div style="background-position: center top; background-repeat: no-repeat; background-size: cover; height: auto;"><div style="background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7) ), url(/assets/mario/барбър-марио-индивидуална-мобилно.webp); background-position: bottom 0px left 30%;; background-repeat: no-repeat; background-size: cover;" class="h-100vh mario-img" role="img" aria-label="Барбър Крис - Индивидуална"></div></div>

			<div class="w-full bg-#212528">
				<div class="max-w-1240px mx-auto">
					<div class="flex flex-justify-center">
						<div class="left-0 right-0 px-3 my-0 mx-auto absolute top-65% lg-top-65% text-center w-full max-w-900px" style="-webkit-transform: translateY(-50%);">
							<AnimatedComponent>
								<h1 class="uppercase c-paper mb-6 text-center">Марио</h1>
							</AnimatedComponent>
							<AnimatedComponent>
								<p class="important-delay-300 c-paper text-center lg-pt-10 font-size-17px md-font-size-18px line-height-7">Марио е активен спортист, който редовно участва в маратони. Той обича предизвикателствата – както в спорта, така и в бръснарницата. Неговата динамична личност влага същата мотивация и страст в оформянето на Вашата прическа и брада, както в екстремните приключения, които практикува. Дали с желаната визия или с история от щурите му приключения, Марио ще Ви зареди с енергия и стил.</p>
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
							<H2WithImage title="Защо да се доверите на Марио" />
						</AnimatedComponent>
						<div class="px-5 lg-px-20 flex lg-flex-row flex-col lg-gap-10">
							<AnimatedComponent>
								<div class="pb-4 md:pb-8">Оръжието на Марио е креативното оформяне на бради, в което постоянно се усъвършенства. Като майстор в бръснарството, той използва иновативни техники и творчески подход, за да създаде индивидуален стил, перфектно съобразен с чертите и личността на клиента. Гарантираме, че всяка среща с него води до отличен резултат. Изберете Марио и превърнете грижата за брадата си в приятно и вдъхновяващо преживяване.</div>
							</AnimatedComponent>
						</div>
					</div>
				</div>
				<div class="pb-20">
					<GallerySlider imgs={[
						{ src: "/assets/mario/барбър-марио-buzz-cut.webp", alt: "барбър марио buzz cut" },
						{ src: "/assets/mario/барбър-марио-екшън-снимки.webp", alt: "барбър марио екшън снимки" },
						{ src: "/assets/mario/барбър-марио-мокро-бръснене.webp", alt: "барбър марио мокро бръснене" },
						{ src: "/assets/mario/барбър-марио-мъжко-подстригване.webp", alt: "барбър марио мъжко подстригване" },
					]}
					/>
				</div>
			</section>

			<div class="lg-px-30 pb-20 w-full flex flex-col flex-justify-center bg-#f2e0c2" style="background-color: #222222; background-image: url(/assets/thebarbershop-dark-bg.webp); background-position: center center; background-repeat: no-repeat; background-size: cover;">
				<AnimatedComponentSlide>
					<div class="px-4">
						<H2WithImage class="c-paper" title="Какво казват другите за Марио?" />
					</div>
				</AnimatedComponentSlide>

				<AnimatedComponent>
					<ReviewSlider
						reviews={[
							{ name: "Kristiyan Trayanov" },
						]}>
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
					<a href="https://book.thebarbershop.bg/reservations/start?site=1" target="_blank" rel="noopener noreferrer" class="bg-brand-compliment c-paper b-solid b-2px b-brand-compliment uppercase font-size-4 font-500 px-7 py-2 hover-c-paper-inv transition-colors" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">Запазете час при Марио</a>
				</AnimatedComponentSlide>
			</div>
		</>
	);
}
