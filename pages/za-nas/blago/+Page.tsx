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

			<div style="background-position: center top; background-repeat: no-repeat; background-size: cover; height: auto;"><div style="background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7) ), url(/assets/blago/барбър-благо-индивидуална-мобилно.webp); background-position: bottom 0px left 55%; background-repeat: no-repeat; background-size: cover;" class="h-100vh blago-img" role="img" aria-label="Барбър Крис - Индивидуална"></div></div>

			<div class="w-full bg-#212528">
				<div class="max-w-1240px mx-auto">
					<div class="flex flex-justify-center">
						<div class="left-0 right-0 px-3 my-0 mx-auto absolute top-65% lg-top-68% text-center w-full max-w-900px" style="-webkit-transform: translateY(-50%);">
							<AnimatedComponent>
								<h1 class="uppercase c-paper mb-6 text-center">Благовест</h1>
							</AnimatedComponent>
							<AnimatedComponent>
								<p class="important-delay-300 c-paper text-center lg-pt-10 font-size-17px md-font-size-18px line-height-7">Запознайте се с Благовест! :) Той е лицензиран футболен съдия, който често участва в ръководенето на местни футболни мачове. Спортният му дух и дисциплина се проявяват както на терена, така и в бръснарницата. Когато Благовест вдигне жълт картон, това означава само едно – време е за обновяване на Вашия стил!</p>
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
							<H2WithImage title="Защо да се доверите на Благовест" />
						</AnimatedComponent>
						<div class="px-5 lg-px-20 flex lg-flex-row flex-col lg-gap-10">
							<AnimatedComponent>
								<div class="pb-4 md:pb-8">Благовест е висококвалифициран барбър, специализиран в създаването на класически и модерни мъжки прически. Неговият опит като футболен съдия развива уникални умения за прецизност и дисциплина, които прилага в работата си като бръснар. Честността и наблюдателността му помагат да дава точни препоръки на клиентите за създаването и поддръжката на перфектен външен вид. Обръща специално внимание на детайлите и създаването на персонализирано преживяване за всеки един клиент, съобразено с личните му характеристики и предпочитания.</div>
							</AnimatedComponent>
						</div>
					</div>
				</div>
				<div class="pb-20">
					<GallerySlider imgs={[
						{ src: "/assets/blago/барбър-благо-buzz-cut.webp", alt: "барбър благо buzz cut" },
						{ src: "/assets/blago/барбър-благо-екшън-снимки.webp", alt: "барбър благо екшън снимки" },
						{ src: "/assets/blago/барбър-благо-измиване-на-глава.webp", alt: "барбър благо измиване на глава" },
						{ src: "/assets/blago/барбър-благо-мъжко-подстригване.webp", alt: "барбър благо мъжко подстригване" },
						{ src: "/assets/blago/барбър-благо-оформяне-на-брада.webp", alt: "барбър благо оформяне на брада" },
					]}
					/>
				</div>
			</section>

			<div class="lg-px-30 pb-20 w-full flex flex-col flex-justify-center bg-#f2e0c2" style="background-color: #222222; background-image: url(/assets/thebarbershop-dark-bg.webp); background-position: center center; background-repeat: no-repeat; background-size: cover;">
				<AnimatedComponentSlide>
					<div class="px-4">
						<H2WithImage class="c-paper" title="Какво казват другите за Благовест?" />
					</div>
				</AnimatedComponentSlide>

				<AnimatedComponent>
					<ReviewSlider
						reviews={[
							{ name: "Nikola Stamenov" },
							{ name: "Kalin Tabov" },
							{ name: "Martin Dimitrov" },
						]}>
						<StarReview
							src="/assets/GoogleLogoPNGImage.png"
							reviewText="Най-добрият салон, в който съм бил. Атмосферата, отношението и уменията на бръснарите са на изключително високо ниво?"
							name="Nikola Stamenov"
							date="Март 2024"
							stars={5}
							hrefGoogleReview="https://maps.app.goo.gl/wvqPam4gNUKT266K8"
						/>
						<StarReview
							src="/assets/GoogleLogoPNGImage.png"
							reviewText="That is my first time here. Great place and service. Blago was extremely knowledgeable, skilled and nice to talk to. I love my haircut and will be back."
							name="Kalin Tabov"
							date="Септември 2024"
							stars={5}
							hrefGoogleReview="https://maps.app.goo.gl/KEBaLXBzUDJzAYqv7"
						/>

						<StarReview
							src="/assets/GoogleLogoPNGImage.png"
							reviewText={
								<>
									Easy to reserve via their website and platform.<br />
									The most precise and highest caliber of professional service there is in Sofia!<br />
									Consistent quality and attention to every detail along with customer-oriented tailored services and experience!<br />
									Highly recommended!<br />
									Keep up the awesome work, team!
								</>
							}
							name="Martin Dimitrov"
							date="Април 2024"
							stars={5}
							hrefGoogleReview="https://maps.app.goo.gl/RTMRbg9PKtp9Ldvt7"
						/>
					</ReviewSlider>
				</AnimatedComponent>

				<AnimatedComponentSlide class="mx-auto pt-10">
					<a href="https://book.thebarbershop.bg/reservations/start?site=1" target="_blank" rel="noopener noreferrer" class="bg-brand-compliment c-paper b-solid b-2px b-brand-compliment uppercase font-size-4 font-500 px-7 py-2 hover-c-paper-inv transition-colors" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">Запазете час при Благовест</a>
				</AnimatedComponentSlide>
			</div>
		</>
	);
}
