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

			<div style="background-position: center top; background-repeat: no-repeat; background-size: cover; height: auto;"><div style="background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7) ), url(/assets/kris/барбър-крис-индивидуална.webp); background-position: center; background-repeat: no-repeat; background-size: cover;" class="h-100vh kris-img" role="img" aria-label="Барбър Крис - Индивидуална"></div></div>

			<div class="w-full bg-#212528">
				<div class="max-w-1240px mx-auto">
					<div class="flex flex-justify-center">
						<div class="left-0 right-0 px-3 my-0 mx-auto absolute top-65% lg-top-65% text-center w-full max-w-900px" style="-webkit-transform: translateY(-50%);">
							<AnimatedComponent>
								<h1 class="uppercase c-paper mb-6 text-center">Кристиан</h1>
							</AnimatedComponent>
							<AnimatedComponent>
								<p class="important-delay-300 c-paper text-center lg-pt-10 font-size-17px md-font-size-18px line-height-7">Кристиан е любител на класическите автомобили и често взима участие в автопаради. Той знае, че както при старинните автомобили, така и при прическите, истинската красота е в детайлите. Неговата страст към детайла и естетиката се отразява и в бръснарските му умения, като съчетава прецизност и творчество във всяка прическа.</p>
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
							<H2WithImage title="Защо да се доверите на Кристиан" />
						</AnimatedComponent>
						<div class="px-5 lg-px-0 flex lg-flex-row flex-col lg-gap-10">
							<div class="lg-w-50% flex flex-col">
								<AnimatedComponent>
									<div class="pb-8">Кристиан е пример за професионализъм в бръснарското изкуство, както и че с постоянство всичко се постига. Неговият дългогодишен опит го е утвърдил като ненадминат експерт в традиционното бръснене с бръснач. Към момента не само практикува, а и участва като лектор в множество обучения, на които с радост предава своите знания на следващото поколение бръснари.</div>
								</AnimatedComponent>
							</div>
							<div class="lg-w-50% flex flex-col">
								<AnimatedComponent>
									<div class="pb-4 md:pb-8">Умело комбинира класическите техники с актуалните тенденции, като създава пътуване във времето, стила и естетиката. Неговата супер сила е създаването на уникално изживяване със старомоден чар.</div>
								</AnimatedComponent>
							</div>
						</div>
					</div>
				</div>
				<div class="pb-20">
					<GallerySlider imgs={[
						{ src: "/assets/kris/барбър-крис-подстригване-с-ножица.webp", alt: "Барбър Крис - подстригване с ножица" },
						{ src: "/assets/kris/барбър-крис-buzz-cut.webp", alt: "Барбър Крис - buzz cut" },
						{ src: "/assets/kris/барбър-крисa-екшън-снимки.webp", alt: "Барбър Крис - екшън снимки" },
						{ src: "/assets/kris/барбър-крисa-мъжко-подстригване.webp", alt: "Барбър Крис - мъжко подстригване" },
					]}
					/>
				</div>
			</section>

			<div class="lg-px-30 pb-20 w-full flex flex-col flex-justify-center bg-#f2e0c2" style="background-color: #222222; background-image: url(/assets/thebarbershop-dark-bg.webp); background-position: center center; background-repeat: no-repeat; background-size: cover;">
				<AnimatedComponentSlide>
					<div class="px-4">
						<H2WithImage class="c-paper" title="Какво казват другите за Кристиан?" />
					</div>
				</AnimatedComponentSlide>

				<AnimatedComponent>
					<ReviewSlider
						reviews={[
							{ name: "Krasimir Daskalov" },
							{ name: "Borislav Donchev" },
							{ name: "Iliyan Asenov" },
							{ name: "Nikolay Mihaylov" },
							{ name: "Kaloyan Iliev" },
							{ name: "Atanas Todorov" },
							{ name: "Georgi Pleshkov" },
							{ name: "Сергей Тодоров" },
							{ name: "Yav Kant" },
							{ name: "Kristian Yordanov" },
							{ name: "Atanas Martinov" },
							{ name: "Илиян Станков" },
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
							date="Март 2020"
							stars={5}
							hrefGoogleReview="https://maps.app.goo.gl/aMp3DN2otCWuSgwv9"
						/>
						<StarReview
							src="/assets/GoogleLogoPNGImage.png"
							reviewText="Страхотна бръснарница. След няколко погрешни опита намерих точното място. Вниманието към клиента е на високо ниво. От вратата те посрещат с нещо за пиене кафе, вода, безалкохолно или Bullet бърбън. Вайба е чудесен, музиката не е прекалено силна или натрапваща. Всичко е уникално. Отидохме с няколко момчета и всички останахме очаровани. Крис беше нашия бръснар и силно го препоръчвам в момента и на други приятели."
							name="Iliyan Asenov"
							date="Май 2024"
							stars={5}
							hrefGoogleReview="https://maps.app.goo.gl/uF8nzE9rcY8xrGKy8"
						/>
						<StarReview
							src="/assets/GoogleLogoPNGImage.png"
							reviewText="Салонът предлага може би една от най-добрите услуги за мъжко подстригване и стайлинг на брада в София. Крис е невероятен професионалист и може да му имате доверие, че ще ви направи най-добрата прическа!"
							name="Nikolay Mihaylov"
							date="Февруари 2024"
							stars={5}
							hrefGoogleReview="https://maps.app.goo.gl/9XAuJRLG49KKs2Ws5"
						/>
						<StarReview
							src="/assets/GoogleLogoPNGImage.png"
							reviewText="Страхотна атмосфера в салона. Много приятно място. Заради такива готини професионалисти мъжете ходим на бръснар, а жените на козметични салони 😁. Горещо препоръчвам Крис и целия екип!"
							name="Kaloyan Iliev"
							date="Юни 2024"
							stars={5}
							hrefGoogleReview="https://maps.app.goo.gl/TZZYE6NoMqPnH9Tj9"
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
							date="Февруари 2024"
							stars={5}
							hrefGoogleReview="https://maps.app.goo.gl/3VKDHJsuymmDRweUA"
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
							hrefGoogleReview="https://maps.app.goo.gl/fN8QxEeTHa9srf5G7"
						/>
						<StarReview
							src="/assets/GoogleLogoPNGImage.png"
							reviewText="С Крис прическата винаги е топ!"
							name="Сергей Тодоров"
							date="Юли 2024"
							stars={5}
							hrefGoogleReview="https://maps.app.goo.gl/4RWtS1dyeYXWmiUQ6"
						/>
						<StarReview
							src="/assets/GoogleLogoPNGImage.png"
							reviewText="There isn't a better place to get your hair cut in Sofia! Kris does magic!"
							name="Yav Kant"
							date="Март 2024"
							stars={5}
							hrefGoogleReview="https://maps.app.goo.gl/aB7baV3gRCyZ7Q3XA"
						/>
						<StarReview
							src="/assets/GoogleLogoPNGImage.png"
							reviewText="I got a haircut with Kris Mitov. It was much better than expected. He put quite a lot of effort to trim my sideburns with a buzzer and to style the top of my head and my bangs with scissors. My friends now notice how much better my haircut is. As the month goes on my hair still looks good even when it is 5 weeks since my last trimming."
							name="Kristian Yordanov"
							date="Март 2024"
							stars={5}
							hrefGoogleReview="https://maps.app.goo.gl/iUtiTQBBsMEEv3rP8"
						/>
						<StarReview
							src="/assets/GoogleLogoPNGImage.png"
							reviewText="Крис е N1"
							name="Atanas Martinov"
							date="Март 2024"
							stars={5}
							hrefGoogleReview="https://maps.app.goo.gl/im5WgKinKzt8hgER6"
						/>
						<StarReview
							src="/assets/GoogleLogoPNGImage.png"
							reviewText="Chris perfectly understood the haircut I wanted. Nice atmosphere, 10/10 would recommend so far."
							name="Krasimir Daskalov"
							date="Февруари 2025"
							stars={5}
							hrefGoogleReview="https://maps.app.goo.gl/GCERGbXeDzg2LofQ6"
						/>
						<StarReview
							src="/assets/GoogleLogoPNGImage.png"
							reviewText="Крис е супер. От 3 години ги посещавам и винаги вършат страхотна работа."
							name="Илиян Станков"
							date="Март 2024"
							stars={5}
							hrefGoogleReview="https://maps.app.goo.gl/7s7iQju3exvicFV58"
						/>
					</ReviewSlider>
				</AnimatedComponent>

				<AnimatedComponentSlide class="mx-auto pt-10">
					<a href="https://book.thebarbershop.bg/reservations/start?site=1" target="_blank" rel="noopener noreferrer" class="bg-brand-compliment c-paper b-solid b-2px b-brand-compliment uppercase font-size-4 font-500 px-7 py-2 hover-c-paper-inv transition-colors" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">Запазете час при Кристиан</a>
				</AnimatedComponentSlide>
			</div>
		</>
	);
}
