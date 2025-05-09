import "solid-slider/slider.css";
import { ReviewSlider, StarReview } from '../../components/ReviewSlider';
import { VideoPlayer } from '../../components/VideoPlayer';
import { GallerySlider } from '../../components/GallerySlider';
import { BeforeAfterSlider, BeforeAfterSliderContainer } from '../../components/BeforeAfterSlider';
import { AnimatedComponent } from '../../components/AnimateOnView';
import { AnimatedComponentSlide } from '../../components/AnimateOnViewSlide';
import { H2WithImage } from '../../components/H2WithImage';
import MdiBank from '~icons/mdi/bank';
import MdiPhoneClassic from '~icons/mdi/phone-classic';
import RiTimerFill from '~icons/ri/timer-fill';
import { ServiceContaner } from '../../components/ServiceContainer';

export default function Page() {
	return (
		<>
			<div style="background-position: center top; background-repeat: no-repeat; background-size: cover; height: auto;"><div style="background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.55) ), url(/assets/za-nas/the-barber-shop-sofia-2_result_result.webp); background-position: right 55% bottom 100%; background-repeat: no-repeat; background-size: cover;" class="h-105vh home-img" role="img" aria-label="бръснарски салон софия център"></div></div>

			<div class="w-full bg-#212528">
				<div class="max-w-1240px mx-auto">
					<div class="flex flex-justify-center">
						<div class="left-0 right-0 px-3 my-0 mx-auto absolute top-30% lg-top-68% text-center w-full" style="-webkit-transform: translateY(-50%);">
							<AnimatedComponent>
								<h1 class="uppercase c-paper mb-6 md:px-0 px-5">The Barber Shop Sofia</h1>
							</AnimatedComponent>
							<AnimatedComponent class="important-delay-300 c-paper text-center mb-0 font-size-4.3 lg-font-size-5 sm-px-0 px-12 leading-6">Само за мъже.<br></br>За добре прекарано време или за добре загубено време.</AnimatedComponent>
						</div>

						<AnimatedComponent class="important-delay-600 float-left md:pr-5px relative text-center lg--top-170px -top-315px w-100% max-w-1240px md:border-2 md:border-solid md:border-[rgba(255,255,255,0.5)]">
							<div class="md:w-33.333% md:float-left px-2 md:px-0">
								<div class="float-left w-full py-0px md:py-25px">
									<div class="block md:hidden mx-auto h-1px w-full bg-gray-200 my-10px op-30%"></div>
									<div class="flex flex-col flex-justify-center flex-items-center gap-2">
										<MdiBank class="font-size-5.2 c-brand" />
										<div class="relative min-h-1px px-8px lg-px-15px c-paper flex text-center flex-justify-center tracking-1.3px font-size-5 lg-font-size-5.2" style="font-family: 'Oswald', sans-serif !important;">
											София, ул. "Николай Хайтов" 2
										</div>
									</div>
								</div>
							</div>

							<div class="md:w-33.333% md:float-left px-2 md:px-0">
								<div class="float-left w-full py-0px md:py-25px md:border-[rgba(255,255,255,0.5)] md:border-r-2 md:border-r-[rgba(255,255,255,0.5)] md:border-r-solid md:border-l-solid">
									<div class="block md:hidden mx-auto h-1px w-full bg-gray-200 my-10px op-30%"></div>
									<div class="flex flex-col flex-justify-center flex-items-center gap-2">
										<RiTimerFill class="font-size-5.7 c-brand" />
										<div class="relative min-h-1px px-8px lg-px-15px c-paper flex text-center flex-justify-center tracking-1.3px font-size-5 lg-font-size-5.2" style="font-family: 'Oswald', sans-serif !important;">
											Понеделник - Неделя: 10:00 - 20:00
										</div>
									</div>
								</div>
							</div>

							<div class="md:w-33.333% md:float-left px-2 md:px-0">
								<div class="float-left w-full py-0px md:py-25px">
									<div class="block md:hidden mx-auto h-1px w-full bg-gray-200 my-10px op-30%"></div>
									<div class="flex flex-col flex-justify-center flex-items-center gap-2">
										<MdiPhoneClassic class="font-size-5.7 c-brand" />
										<div class="relative min-h-1px px-8px lg-px-15px c-paper text-center flex flex-row flex-justify-center font-size-4.3 lg-font-size-4.8" style="font-family: 'Oswald', sans-serif !important;">
											<div class="c-paper text-center flex flex-justify-center tracking-1.3px font-size-5 lg-font-size-5" style="font-family: 'Oswald', sans-serif !important;">
												Телефон:&nbsp;
											</div>
											<div class="c-paper text-center flex flex-justify-center font-size-4.8 lg-font-size-5.2" style="font-family: 'Oswald', sans-serif !important;">
												+359 882 820 331
											</div>
										</div>
									</div>
									<div class="block md:hidden mx-auto h-1px w-full bg-gray-200 my-15px op-30%"></div>
								</div>
							</div>
						</AnimatedComponent>
					</div>
				</div>
			</div>

			<div class="pb-10 lg--mt-30 -mt-80" style="background-image: url(/assets/bg-2.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;">

				<div class="lg-mt-0 lg-px-30 pb-10 max-w-1600px mx-auto flex lg-flex-row flex-col lg-gap-20">
					<div class="lg-w-50% px-5">
						<AnimatedComponent>
							<img class="pb-2 pt-80px md:pt-120px flex flex-justify-center" src="/assets/heading-ic.png" />
							<h2 class="c-paper text-left mb-7 pl-0 important-mt-0">Бръснарница от класа</h2>
						</AnimatedComponent>
						<AnimatedComponent>
							<div class="flex flex-col gap-5">
								<div class="c-paper">
									<span class="c-brand font-900" style="font-family: 'Roboto'">The Barber Shop Sofia</span> е нещо повече от просто бръснарница. Нашият барбър шоп се намира в квартал Изток, София на удобна и лесно достъпна локация в близост до ключови транспортни връзки и зелени градски зони.
								</div>
								<div class="c-paper">
									<span class="c-brand font-900" style="font-family: 'Roboto'">The Barber Shop Sofia</span> е премиум бръснарница, където майсторството се преплита с вниманието към детайла, за да Ви осигури отлично ниво на комфорт и стил. Нашата мисия е да създадем цялостно ексклузивно преживяване за истински мъже.
								</div>
							</div>
						</AnimatedComponent>
					</div>

					<div class="lg-w-50% pr-5 pl-5 lg-pl-0">
						<AnimatedComponent>
							<img class="pb-2 pt-80px md:pt-120px flex flex-justify-center" src="/assets/heading-ic.png" />
							<h2 class="c-paper text-left mb-7 pl-0 important-mt-0">Стил и комфорт в едно</h2>
						</AnimatedComponent>
						<AnimatedComponent>
							<ul class="c-paper ml--5 mt-0">
								<li>Безплатно паркиране</li>
								<li>Топло посрещане с безплатно питие</li>
								<li>Приятна и уютна атмосфера</li>
								<li>Усещане за принадлежност към мъжка общност</li>
								<li>Съчетание на традиционни техники с модерни подходи</li>
							</ul>
						</AnimatedComponent>
					</div>
				</div>
			</div>

			<div class="pb-20 px-4 w-full">
				<AnimatedComponentSlide>
					<H2WithImage title="Нашите услуги" />
				</AnimatedComponentSlide>
				<div class="flex flex-wrap flex-justify-center lg-gap-15 gap-15">

					<ServiceContaner
						img="/assets/home/stylish-buzz-cuts.webp"
						alt="stylish buzz cuts"
						title="Мъжко подстригване"
						href="/uslugi/mazhko-podstrigvane"
					/>
					<ServiceContaner
						img="/assets/home/оформяне-на-брада.webp"
						alt="оформяне на брада"
						title="Оформяне на брада"
						href="/uslugi/oformiane-na-brada"
					/>
					<ServiceContaner
						img="/assets/home/buzz-cut-and-beard.webp"
						alt="buzz cut and beard"
						title="Подстригване и оформяне на брада"
						href="/uslugi/mazhko-podstrigvane-i-oformiane-na-brada"
					/>
					<ServiceContaner
						img="/assets/home/мокро-бръснене.webp"
						alt="мокро бръснене"
						title="Класическо мокро бръснене"
						href="/uslugi/klasichesko-mokro-brasnene"
					/>
					<ServiceContaner
						img="/assets/tonirane-na-kosa/барбър-шоп-тониране-на-сиви-коси.webp"
						alt="тониране на сиви коси"
						title="Тониране на сиви коси"
						href="/uslugi/klasichesko-mokro-brasnene"
					/>
					<ServiceContaner
						img="/assets/brasnene-na-glava-s-brasnach/бръснене-на-глава-с-бръснач-в-бръснарница.webp"
						alt="бръснене на глава с бръснач"
						title="Бръснене на глава с бръснач"
						href="/uslugi/brasnene-na-glava-s-brasnach"
					/>
					<ServiceContaner
						img="/assets/home/детско-подстригване.webp"
						alt="детско подстригване"
						title="Детско подстригване"
						href="/uslugi/detsko-podstrigvane-momche"
					/>
					<ServiceContaner
						img="/assets/bashta-i-sin/подстригване-на-баща-и-син.webp"
						alt="подстригване на баща и син"
						title="Подстригване на баща и син"
						href="/uslugi/podstrigvane-na-bashta-i-sin"
					/>
				</div>
			</div>

			<div style="background-image: url(/assets/bg-2.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;">
				<div class="pb-20">
					<AnimatedComponent>
						<H2WithImage class="c-paper" title="Стилът на The Barber Shop" />
					</AnimatedComponent>
					<AnimatedComponent>
						<VideoPlayer src='/assets/Barbershop-video-home.mp4' />
					</AnimatedComponent>
				</div>
			</div>

			<section class="pb-20">
				<AnimatedComponent>
					<H2WithImage title="Как го правим" />
				</AnimatedComponent>
				<GallerySlider imgs={[
					{ src: "/assets/home/барбер-шоп-софия.webp", alt: "професионално мъжко подстригване в бръснарница в барбер шоп в София" },
					{ src: "/assets/home/barber-shops-sofia.webp", alt: "професионално измиване на глава в barber shops Sofia" },
					{ src: "/assets/home/подстригване-мъжко.webp", alt: "Подстригване мъжко" },
					{ src: "/assets/home/buzz-cut.webp", alt: "buzz cut" },
					{ src: "/assets/home/бръснарница-софия.webp", alt: "професионално мъжко подстригване в бръснарница в София" },
					{ src: "/assets/home/барбер-шоп.webp", alt: "оформяне на брада в барбер шоп" },
					{ src: "/assets/home/бръснарница-студентски-град.webp", alt: "професионално мъжко подстригване в бръснарница в студентски-град" },
					{ src: "/assets/home/бръснарница.webp", alt: "мъжко подстригване в бръснарница" },
					{ src: "/assets/home/барбершоп.webp", alt: "снимка от барбершоп процеса на работа" },
					{ src: "/assets/home/барбершоп-софия-1.webp", alt: "гореща кърпа в барбершоп в София" },
					{ src: "/assets/home/бръснарници-в-софия.webp", alt: "измиване на глава в бръснарница в София" },
					{ src: "/assets/home/мъжко-подстригване.webp", alt: "мъжко подстригване" },
					{ src: "/assets/home/мъжко-подстригване-софия.webp", alt: "мъжко подстригване София" },
					{ src: "/assets/home/мъжко-подстригване-софия-център.webp", alt: "мъжко подстригване в София център" },
					{ src: "/assets/home/мъжко-подстригване-студентски-град.webp", alt: "мъжко подстригване студентски град" },
					{ src: "/assets/home/подстригване-с-машинка-мъжко.webp", alt: "подстригване с машинка мъжко" },
				]}
				/>

				<div class="lg-mt-0 lg-px-30 xl-px-58 py-15 lg-py-25 max-w-1600px mx-auto flex lg-flex-row flex-col gap-8 lg-gap-20">
					<AnimatedComponentSlide class="px-5">
						<div class="flex flex-col gap-5">
							<div>
								В <span class="font-700">The Barber Shop</span> ще получите повече от просто подстригване или оформяне на брада – ще се насладите на автентично мъжко изживяване. В <span class="font-700">бръснарницата Ви очаква</span> уютна и приятелска атмосфера, която ще Ви накара да забравите напрежението и стреса.
							</div>
							<div>
								В нашия <span class="font-700">барбър шоп</span> ще получите персонално отношение и грижа, за да опознаем Вашия индивидуален стил и заедно да създадем визия, която Ви кара да изглеждате и да се чувствате като най-добрата версия на себе си. Защото всеки уважаващ себе си мъж знае, че добрият външен вид изготвен в <span class="font-700">барбър шоп</span> подчертава увереността и оставя трайно впечатление.
							</div>
						</div>
					</AnimatedComponentSlide>
				</div>

				<BeforeAfterSlider
					services={[
						{ title: "Мъжко подстригване" },
						{ title: "Бръснене на глава с бръснач" },
						{ title: "Мъжко подстригване" },
						{ title: "Бръснене на глава с бръснач" },
						{ title: "Мъжко подстригване" },
						{ title: "Бръснене на глава с бръснач" },
						{ title: "Мъжко подстригване" },
						{ title: "Бръснене на глава с бръснач" },
					]}>
					<BeforeAfterSliderContainer
						altBefore="преди снимка на men's haircut and beard"
						altAfter="след снимка на men's haircut and beard"
						before="/assets/otzivi/men_s-haircut-and-beard-before.webp"
						after="/assets/otzivi/men_s-haircut-and-beard-after.webp"
					/>
					<BeforeAfterSliderContainer
						altBefore="преди снимка на подстригване и оформяне на брада"
						altAfter="след снимка на подстригване и оформяне на брада"
						before="/assets/otzivi/мъжко-подстригване-и-оформяне-на-брада-преди.webp"
						after="/assets/otzivi/мъжко-подстригване-и-оформяне-на-брада-след.webp"
					/>
					<BeforeAfterSliderContainer
						altBefore="преди снимка на мокро бръснене"
						altAfter="след снимка на мокро бръснене"
						before="/assets/otzivi/мокро-бръснене-преди.webp"
						after="/assets/otzivi/мокро-бръснене-след.webp"
					/>
					<BeforeAfterSliderContainer
						altBefore="преди снимка на мъжко подстригване софия"
						altAfter="след снимка на мъжко подстригване софия"
						before="/assets/otzivi/мъжко-подстригване-софия-преди.webp"
						after="/assets/otzivi/мъжко-подстригване-софия-след.webp"
					/>
					<BeforeAfterSliderContainer
						altBefore="преди снимка на детско подстригване момче"
						altAfter="след снимка на детско подстригване момче"
						before="/assets/otzivi/детско-подстригване-момче-преди (1).webp"
						after="/assets/otzivi/детско-подстригване-момче-след (1).webp"
					/>
					<BeforeAfterSliderContainer
						altBefore="преди снимка на детско подстригване"
						altAfter="след снимка на детско подстригване"
						before="/assets/otzivi/детско-подстригване-преди.webp"
						after="/assets/otzivi/детско-подстригване-след.webp"
					/>
					<BeforeAfterSliderContainer
						altBefore="преди снимка на мъжко подстригване"
						altAfter="след снимка на мъжко подстригване"
						before="/assets/otzivi/мъжко-подстригване-преди.webp"
						after="/assets/otzivi/мъжко-подстригване-след.webp"
					/>
					<BeforeAfterSliderContainer
						altBefore="преди снимка на buzz cut styles"
						altAfter="след снимка на buzz cut styles"
						before="/assets/otzivi/buzz-cut-and-beard-before.webp"
						after="/assets/otzivi/buzz-cut-and-beard-after.webp"
					/>
				</BeforeAfterSlider>
			</section>

			<section style="background-color: #222222; background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8) ), url(/assets/brown-background-image.webp); background-position: center center; background-repeat: no-repeat; background-size: cover;">
				<div class="flex flex-col pb-20">
					<div class="flex flex-col flex-items-center">
						<AnimatedComponent>
							<H2WithImage class="c-paper" title="Какво казват нашите клиенти за нас" />
						</AnimatedComponent>
					</div>
					<div>
						<AnimatedComponent>
							<ReviewSlider
								reviews={[
									{ name: "Iliyan Asenov" },
									{ name: "Georgi Pleshkov" },
									{ name: "Ivaylo Hristov (Ivo)" },
									{ name: "Asen Markov" },
									{ name: "Dimitar Stoyanov" },
									{ name: "Borislav Bankov" },
									{ name: "Hristo Velev" },
									{ name: "Asen Georgiev" },
									{ name: "Nikola Despotoski" },
									{ name: "Martin Dimitrov" },
								]}>
								<StarReview
									src="/assets/GoogleLogoPNGImage.png"
									reviewText="Страхотна бръснарница. След няколко погрешни опита намерих точното място. Вниманието към клиента е на високо ниво. От вратата те посрещат с нещо за пиене кафе, вода, безалкохолно или Bullet бърбън. Вайба е чудесен, музиката не е прекалено силна или натрапваща. Всичко е уникално. Отидохме с няколко момчета и всички останахме очаровани. Крис беше нашия бръснар и силно го препоръчвам в момента и на други приятели."
									name="Iliyan Asenov"
									date="Януари 2024"
									stars={5}
									hrefGoogleReview="https://maps.app.goo.gl/sye2Me5vsxUajS8a6"
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
									reviewText="Перфектната бръснарница! Много високо ниво на обслужване в мега приятна атмосфера."
									name="Borislav Bankov"
									date="Март 2024"
									stars={5}
									hrefGoogleReview="https://maps.app.goo.gl/tCXYMiVnq4HbstkLA"
								/>
								<StarReview
									src="/assets/GoogleLogoPNGImage.png"
									reviewText="The guys are pros! Good music, good atmosphere and offer a free drink. They also have free parking but is limited to number of spaces, so better call them in advance if you are planning to visit with a car."
									name="Hristo Velev"
									date="Март 2024"
									stars={5}
									hrefGoogleReview="https://maps.app.goo.gl/hTviWSgBNaeRdZ7u5"
								/>
								<StarReview
									src="/assets/GoogleLogoPNGImage.png"
									reviewText="Absolutely fantastic service. I have long, thick hair but that didn’t stop the barber. Couldn’t recommend The Barber Shop more!"
									name="Asen Georgiev"
									date="Март 2024"
									stars={5}
									hrefGoogleReview="https://maps.app.goo.gl/3RGkmd9NLraJbQRcA"
								/>
								<StarReview
									src="/assets/GoogleLogoPNGImage.png"
									reviewText="Really detailed and organized crew. Booked appointment thru maps and they responded swiftly. Upon arrival I was offeres whiskey, beer amd other beverages, unfortunately I refused alchol because I was driving. I totally recommend this barber shop."
									name="Nikola Despotoski"
									date="Януари 2021"
									stars={5}
									hrefGoogleReview="https://maps.app.goo.gl/M3mBfJMQEj3whcG37"
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
					</div>
					<AnimatedComponent>
						<div class="flex flex-col flex-items-center">
							<a href="https://www.google.com/maps/place/The+Barber+Shop+Sofia/@42.6709892,23.3495634,17z/data=!4m14!1m5!8m4!1e1!2s116520566335663544524!3m1!1e1!3m7!1s0x40aa85cc743ddfd7:0xfdafbdb8cd44f23!8m2!3d42.6709899!4d23.3521502!9m1!1b1!16s%2Fg%2F11g9n1jlq8?hl=en-GB&entry=ttu&g_ep=EgoyMDI1MDQyMi4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" class="bg-brand-compliment c-paper b-solid b-2px b-brand-compliment uppercase font-size-4 font-500 px-7 py-2 hover-c-paper-inv transition-colors" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">Вижте повече</a>
						</div>
					</AnimatedComponent>
				</div>
			</section>

			<section>
				<div class="lg-mx-30 mx-auto">
					<div class="flex md-flex flex-col flex-justify-center max-w-1440px lg-px-0 mx-auto lg:pb-10">
						<AnimatedComponent>
							<H2WithImage title="Предимствата на The Barber Shop" />
						</AnimatedComponent>
						<div class="px-5 lg-px-0 flex lg-flex-row flex-col lg-gap-10">
							<div class="lg-w-33.33% flex flex-col">
								<AnimatedComponent>
									<h3 class="text-left mt-0 c-paper-inv op-70%">Опитни и квалифицирани барбъри</h3>
									<div class="pb-10">Зад всяка перфектна прическа в The Barber Shop Sofia стои екип от изключителни професионалисти. Нашият барбър шоп е събрал част от най-добрите бръснари в София. Всеки от тях преминава през интензивно обучение, което обхваща както класическите бръснарски техники, така и най-новите тенденции в подстригването. Благодарение на това можем да Ви предложим премиум обслужване на високо ниво и страхотни резултати.</div>
								</AnimatedComponent>
							</div> 
							<div class="lg-w-33.33% flex flex-col">
								<AnimatedComponent>
									<h3 class="text-left mt-6 lg-mt-0 c-paper-inv op-70%">Професионални инструменти</h3>
									<div class="pb-10">Използваме висок клас бръснарски принадлежности, които са внимателно подбрани, за да съчетават качество, ефективност и прецизност. В нашата бръснарница разчитаме на световно признати марки като Wahl, Andis, BabylissPRO, Mühle, Thiers Issard, гарантиращи безопасност и комфорт. Независимо от това какъв стил предпочитате, ние имаме правилните инструменти, с който да постигнем отличен краен резултат.</div>
								</AnimatedComponent>
							</div>
							<div class="lg-w-33.33% flex flex-col">
								<AnimatedComponent>
									<h3 class="text-left mt-6 lg-mt-0 c-paper-inv op-70%">Висококачествена козметика</h3>
									<div class="pb-10">В The Barber Shop Sofia не правим компромиси с качеството. За нас Вашите усмивки и безупречни визии са приоритет, затова използваме само най-добрите продукти за мъжка грижа. При нас ще откриете богато разнообразие от висок клас козметика Depot, American Crew, Lavish подходяща за всички видове кожа и коса. Нашата гама от козметика включва всичко необходимо – от шампоани и балсами до стилизиращи продукти.</div>
								</AnimatedComponent>
							</div>
						</div>
					</div>
				</div>
				<div class="pb-20">
					<GallerySlider imgs={[
						{ src: "/assets/home/инструменти-за-buzz-cut-hairstyles.webp", alt: "инструменти за buzz cut hairstyles" },
						{ src: "/assets/home/инструменти-за-бръснарница-софия.webp", alt: "мъжко подстригване в София център" },
						{ src: "/assets/home/професионална-козметика-от-barber-shops-sofia.webp", alt: "професионална козметика от barber shops Sofia" },
						{ src: "/assets/home/инструменти-за-barber-barber-shop-sofia.webp", alt: "инструменти за barber barber shop Sofia" },
						{ src: "/assets/home/инструменти-за-buzz-cut.webp", alt: "инструменти за buzz cut" },
						{ src: "/assets/home/козметиката-в-бръснарница-софия.webp", alt: "Kозметиката в бръснарница София" },
						{ src: "/assets/home/инструменти-за-buzz-cut-fade.webp", alt: "инструменти за buzz cut fade" },
						{ src: "/assets/home/козметиката-на-barber-shops-sofia.webp", alt: "козметиката на barber shops Sofia" },
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
							img="/assets/home/козметиката-в-бръснарница-софия.webp"
							alt="Kозметиката в бръснарница София"
							href="/"
							title="Козметика"
						/>
						<ElementInOurShop
							img="/assets/home/козметиката-на-barber-shops-sofia.webp"
							alt="козметиката на barber shops Sofia"
							href="/"
							title="Козметика"
						/>
						<ElementInOurShop
							img="/assets/home/професионална-козметика-от-barber-shops-sofia.webp"
							alt="професионална козметика от barber shops Sofia"
							href="/"
							title="Козметика"
						/>
					</OurShop>
				</AnimatedComponent>

				<AnimatedComponentSlide class="mx-auto pt-15">
					<a href="/" class="bg-brand c-paper-inv b-solid b-2px b-brand uppercase font-size-4 font-500 px-7 py-2 hover-c-paper transition-colors" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">Към магазин</a>
				</AnimatedComponentSlide>
			</div> */}
		</>
	);
}
