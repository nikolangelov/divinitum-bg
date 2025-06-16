import "solid-slider/slider.css";
import { AnimatedComponent } from '../../components/AnimateOnView';
import { AnimatedComponentSlide } from '../../components/AnimateOnViewSlide';
import { H2WithImage } from '../../components/H2WithImage';
import MdiCircleSmall from '~icons/mdi/circle-small';
import { createEffect, createSignal } from 'solid-js';
import MdiCloseThick from '~icons/mdi/close-thick';
import confetti from "canvas-confetti";
import emailjs from '@emailjs/browser';

interface ContactUsProps {
	onSuccess: () => void;
	onError: () => void;
	setUploading: (v: boolean) => void;
}

const ContactUs = ({ onSuccess, onError, setUploading }: ContactUsProps) => {
	let form: HTMLFormElement | undefined;

	const sendEmail = (e: Event) => {
		e.preventDefault();

		if (!form) return;
		setUploading(true);

		emailjs
			.sendForm('service_h8j0yvt', 'template_sfx2ge6', form, {
				publicKey: 'THs2MxEeIfIAlmqdZ',
			})
			.then(
				() => {
					console.log('SUCCESS!');
					setUploading(false);
					onSuccess();
				},
				(error) => {
					console.log('FAILED...', error.text);
					setUploading(false);
					onError();
				}
			);
	};

	return (
		<form class="space-y-6" ref={(el) => (form = el)} onSubmit={sendEmail}>
			<div class="sm:space-y-4 space-y-1">
				<div class="input-highlight relative overflow-hidden">
					<input
						name="name"
						type="text"
						placeholder="Име (Name)"
						class="w-full px-4 py-3 bg-transparent border-0 border-b border-paper focus:outline-none focus:ring-0 text-paper md:font-size-13px font-size-12px"
						required
					/>
				</div>
				<div class="input-highlight relative overflow-hidden">
					<input
						name="surname"
						type="text"
						placeholder="Фамилия (Last Name)"
						class="w-full px-4 py-3 bg-transparent border-0 border-b border-paper focus:outline-none focus:ring-0 text-paper md:font-size-13px font-size-12px"
						required
					/>
				</div>
				<div class="input-highlight relative overflow-hidden">
					<input
						name="phone"
						type="tel"
						pattern="^/+?[0-9/s/-]{7,15}$"
						placeholder="Телефон (Phone)"
						class="w-full px-4 py-3 bg-transparent border-0 border-b border-paper focus:outline-none focus:ring-0 text-paper md:font-size-13px font-size-12px"
						required
					/>
				</div>
				<div class="input-highlight relative overflow-hidden">
					<input
						name="email_id"
						type="email"
						placeholder="Имейл (Email)"
						class="w-full px-4 py-3 bg-transparent border-0 border-b border-paper focus:outline-none focus:ring-0 text-paper md:font-size-13px font-size-12px"
						required
					/>
				</div>
				<div class="pt-2">
					<textarea
						name="message"
						placeholder="Разкажете повече за себе си и бръснарството..."
						class="rounded-0 w-full px-4 py-3 bg-white border-paper focus:border-brand focus:ring-2 focus:ring-brand focus:ring-opacity-50 outline-none transition-all duration-200 h-32 resize-none"
					></textarea>
				</div>
			</div>
			<button
				type="submit"
				value="Send"
				class="cursor-pointer font-700 border-none hover:shadow-xl hover:translate-y-[-2px] translate-y-[0px] bg-gradient-to-br from-[#c29059] to-[#c27832] duration-200 ease-in-out shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),_0_4px_6px_-2px_rgba(252,252,252,0.05)] w-full text-white py-4 font-medium transition-all uppercase tracking-1.5px text-sm focus:outline-none focus:ring-4 focus:ring-orange-300 focus:ring-opacity-50 rounded-0">
				Кандидатствайте
			</button>
			<div class="text-center text-xs text-paper mt-4">
				Ще се свържем с Вас по телефон възможно най-скоро, за да обсъдим всичките Ви въпроси.
			</div>
		</form>
	);
};

export default function Page() {
	const [isModalOpen, setIsModalOpen] = createSignal(false);
	const [isUploading, setIsUploading] = createSignal(false);
	const [errorMessage, setErrorMessage] = createSignal(false);

	const handleSuccess = () => {
		setIsModalOpen(true);
		setErrorMessage(false);
	};

	const handleError = () => {
		setErrorMessage(true);
		setIsModalOpen(false);
	};

	const closeModal = () => {
		setIsModalOpen(false);
		setErrorMessage(false);
	};

	createEffect(() => {
		if (isModalOpen()) {
			confetti({
				particleCount: 100,
				spread: 70,
				origin: { x: 0.5, y: 0.5 },
			});
		}
	});

	return (
		<>
			<noscript>
				<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NWKWKC4Z"
					height="0" width="0" style="display:none;visibility:hidden">
				</iframe>
			</noscript>

			<div style="background-position: center top; background-repeat: no-repeat; background-size: cover; height: auto;">
				<div style="background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.65) ), url(/assets/za-nas/екип-бръснарница-софия_result_result.webp); background-position: right 55% bottom 100% ; background-repeat: no-repeat; background-size: cover;" class="h-105vh md:h-110vh karieri-img" role="img" aria-label="the barber shop Sofia">
				</div>

				<div class="w-full bg-#212528">
					<div class="max-w-1240px mx-auto">
						<div class="flex flex-justify-center">
							<div class="left-0 right-0 px-3 my-0 mx-auto absolute top-77% sm-top-85% md-top-80% lg-top-80% text-center w-full max-w-1500px" style="-webkit-transform: translateY(-50%);">
								<AnimatedComponent>
									<h1 class="uppercase c-paper mb-2 text-center">Присъедини се към екипа</h1>
								</AnimatedComponent>
								<AnimatedComponent class="block md:hidden">
									<p class="important-delay-300 c-paper text-center lg-pt-0 line-height-7 mt-30px">Отваряме врати за нови таланти!</p>
								</AnimatedComponent>

								<AnimatedComponent class="md:block hidden pb-5">
									<p class="important-delay-300 text-center lg-pt-0 line-height-7 mt-30px c-paper">Отваряме врати за нови таланти!</p>
									<p class="important-delay-500 text-center line-height-7 c-paper">Независимо дали сте начинаещ или опитен професионалист, The Barber Shop има желание да работи с Вас.</p>
									<p class="important-delay-500 text-center line-height-7 c-paper">Нашата мисия е да създадем не просто екип, а общност от майстори бръснари, обединени от любовта към занаята.</p>
								</AnimatedComponent>
							</div>
						</div>
					</div>
				</div>
			</div>

			<section class="pb-20 px-4 w-full block md:hidden">
				<AnimatedComponent class="px-4">
					<H2WithImage style="margin-left:0px;" class="text-left pl-0" title="Какво предлагаме" />
					<p class="important-delay-500 text-left lg-pt-0 line-height-7">Независимо дали сте начинаещ или опитен професионалист, The Barber Shop има желание да работи с Вас.</p>
					<p class="important-delay-500 text-left line-height-7 mb-0">Нашата мисия е да създадем не просто екип, а общност от майстори бръснари, обединени от любовта към занаята.</p>
				</AnimatedComponent>
			</section>

			<section class="pb-20 px-4 w-full" style="background-image: url(/assets/thebarbershop-dark-bg.webp); background-position: center; background-repeat: no-repeat; background-size: cover;">
				<section class="max-w-7xl mx-auto px-4">
					<div class="flex flex-col md:flex-row items-start md:gap-20">
						<div class="w-full space-y-6">
							<AnimatedComponent>
								<img loading="lazy" class="pb-2 pt-80px md:pt-120px flex flex-justify-center" src="/assets/heading-ic.png" />
								<h3 class="c-paper text-left mb-7 pl-0 important-mt-0">За начинаещ барбър</h3>
							</AnimatedComponent>
							<AnimatedComponent>
								<p class="important-delay-300 lg-pt-0 sm-line-height-7 line-height-6.5 c-paper">Готови ли сте от любители бръснари да се превърнете в опитни професионалисти? Ако отговорът е да, значи сте на точното място.</p>
								<p class="important-delay-500 sm-line-height-7 line-height-6.5 c-paper">Ако сте начинаещ барбър, който не знае откъде да започне, заповядайте при нас. В рамките на няколко месеца ще научите основните техники, както и тънкостите на бръснарството.</p>
								<p class="important-delay-700 sm-line-height-7 line-height-6.5 c-paper mb-0">Ще разгърнете потенциала си и ще творите смело с помощта на нашия професионализъм.</p>
							</AnimatedComponent>
						</div>

						<div class="w-full space-y-6">
							<AnimatedComponent>
								<img loading="lazy" class="pb-2 pt-80px md:pt-120px flex flex-justify-center" src="/assets/heading-ic.png" />
								<h3 class="c-paper text-left mb-7 pl-0 important-mt-0">За опитен барбър</h3>
							</AnimatedComponent>
							<AnimatedComponent>
								<p class="important-delay-300 lg-pt-0 sm-line-height-7 line-height-6.5 c-paper">В случай, че вече имате професионален опит и с гордост можете да се наречете мастър барбър, елате да работим заедно.</p>
								<p class="important-delay-500 sm-line-height-7 line-height-6.5 c-paper mb-0">Впуснете се в едно ново предизвикателство и развийте таланта си с помощта на нашия професионализъм.</p>
							</AnimatedComponent>
						</div>
					</div>
				</section>
			</section>

			<section class="pb-18 px-4 w-full">
				<section class="max-w-7xl mx-auto px-4">
					<div class="flex flex-col md:flex-row items-center gap-10 md:gap-20 md:pt-120px">
						<AnimatedComponentSlide class="hidden md-block w-full md:w-1/2">
							<div>
								<img loading="lazy" src="/assets/karieri/the-barber-shop-sofia-team.webp" alt="Elegant interior design" class="w-full h-auto shadow-xl" />
							</div>
						</AnimatedComponentSlide>

						<div class="w-full md:w-1/2 space-y-6">
							<AnimatedComponentSlide>
								<img loading="lazy" class="pb-2 mx-auto md:mx-0 pt-80px md:pt-0 flex flex-justify-center" src="/assets/heading-ic.png" />
								<h2 class="md:text-left mb-7 pl-0 important-mt-0">Какво предлагаме</h2>

							</AnimatedComponentSlide>
							<AnimatedComponentSlide>
								<p class="important-delay-300 lg-pt-0 sm-line-height-7 line-height-6.5">Предлагаме не просто работа, а комбинация от непрекъснато развитие, разнообразно ежедневие и супер яки колеги.</p>
								<div class="flex items-start">
									<p class="flex items-start my-0">
										<span class="flex items-center mt-1">
											<MdiCircleSmall class="c-brand-dark" />
										</span>
										работа сред млад и сплотен екип
									</p>
								</div>
								<div class="flex items-start">
									<p class="flex items-start my-0">
										<span class="flex items-center mt-1">
											<MdiCircleSmall class="c-brand-dark" />
										</span>
										подкрепа в процеса на обучение
									</p>
								</div>
								<div class="flex items-start">
									<p class="flex items-start my-0">
										<span class="flex items-center mt-1">
											<MdiCircleSmall class="c-brand-dark" />
										</span>
										процент от оборота
									</p>
								</div>
								<div class="flex items-start">
									<p class="flex items-start my-0">
										<span class="flex items-center mt-1">
											<MdiCircleSmall class="c-brand-dark" />
										</span>
										гъвкаво работно време
									</p>
								</div>
								<div class="flex items-start">
									<p class="flex items-start my-0">
										<span class="flex items-center mt-1">
											<MdiCircleSmall class="c-brand-dark" />
										</span>
										изградена клиентска база
									</p>
								</div>
								<div class="flex items-start">
									<p class="flex items-start my-0">
										<span class="flex items-center mt-1">
											<MdiCircleSmall class="c-brand-dark" />
										</span>
										приятелска атмосфера
									</p>
								</div>
							</AnimatedComponentSlide>
						</div>
						<AnimatedComponentSlide class="md-hidden block w-full md:w-1/2">
							<div class="relative">
								<img loading="lazy" src="/assets/za-nas/the-barber-shop-sofia-team-3.webp" alt="Elegant interior design" class="w-full h-auto shadow-xl" />
							</div>
						</AnimatedComponentSlide>
					</div>
				</section>
			</section>

			<section class="pb-20 px-4 w-full" style="background-image: url(/assets/thebarbershop-dark-bg.webp); background-position: center; background-repeat: no-repeat; background-size: cover;">
				<section class="max-w-7xl mx-auto px-4">
					<div class="flex flex-col md:flex-row items-center gap-10 md:gap-20 md:pt-120px">
						<div class="w-full md:w-1/2 space-y-6">
							<AnimatedComponentSlide>
								<img loading="lazy" class="pb-2 mx-auto md:mx-0 pt-80px md:pt-0 flex flex-justify-center" src="/assets/heading-ic.png" />
								<h2 class="md:text-left mb-7 pl-0 important-mt-0 c-paper">Какво изискваме</h2>
							</AnimatedComponentSlide>
							<AnimatedComponentSlide>
								<p class="important-delay-300 lg-pt-0 sm-line-height-7 line-height-6.5 c-paper">Търсим позитивен човек, мотивиран за нов кариерен старт!</p>
								<p class="important-delay-500 sm-line-height-7 line-height-6.5 c-paper">Бръснарят в “The Barber Shop” e:</p>
								<div class="flex items-start">
									<p class="flex items-start my-0 c-paper">
										<span class="flex items-center mt-1">
											<MdiCircleSmall class="c-brand " />
										</span>
										комуникативен и обичащ да общува с разнообразни хора
									</p>
								</div>
								<div class="flex items-start">
									<p class="flex items-start my-0 c-paper">
										<span class="flex items-center mt-1">
											<MdiCircleSmall class="c-brand" />
										</span>
										креативен и сръчен
									</p>
								</div>
								<div class="flex items-start">
									<p class="flex items-start my-0 c-paper">
										<span class="flex items-center mt-1">
											<MdiCircleSmall class="c-brand" />
										</span>
										владеещ английски език
									</p>
								</div>
								<div class="flex items-start">
									<p class="flex items-start my-0 c-paper">
										<span class="flex items-center mt-1">
											<MdiCircleSmall class="c-brand" />
										</span>
										точен и отговорен в работата си
									</p>
								</div>
								<div class="flex items-start">
									<p class="flex items-start my-0 c-paper">
										<span class="flex items-center mt-1">
											<MdiCircleSmall class="c-brand" />
										</span>
										прецизен и с внимание към детайла
									</p>
								</div>

								<p class="important-delay-700 sm-line-height-7 line-height-6.5 c-paper mb-0">Опитът не е задължителен, по-важно е да имате хъс и стремеж към нови знания.<br></br>
									Ако смятате, че сте нашият човек, попълнете формата по-долу и ще обсъдим възможностите. За повече информация свържете се с нас.
								</p>
							</AnimatedComponentSlide>
						</div>

						<AnimatedComponentSlide class="w-full md:w-1/2">
							<div class="relative">
								<img loading="lazy" src="/assets/karieri/бръснар-софия.webp" alt="Elegant interior design" class="w-full h-auto shadow-xl" />
							</div>
						</AnimatedComponentSlide>
					</div>
				</section>
			</section>

			<section class="pb-20 pt-20 md:pt-30 px-2 md:px-4 w-full">
				<div class="flex flex-col lg:flex-row items-center justify-center gap-12 md:gap-20 mx-2 md:mx-15 xl:mx-45">
					<div class="lg:w-1/2 flex flex-col justify-center sm:justify-start items-center lg:items-start">
						<AnimatedComponent>
							<h2 class="uppercase important-mb-0 pt-0 mt-0 lg:text-left">Кандидатствайте сега</h2>
							<p class="c-brand-compliment text-center lg:text-left mb-6 font-500 important-mt-1">/ Присъедини се към нашия екип /</p>
							<p class="text-center lg:text-left">
								Ако обичате занаята и искате да работите в модерна бръснарница, ние имаме място за Вас! Станете част от нашия екип и развийте уменията си при нас.
							</p>
						</AnimatedComponent>
						<AnimatedComponent>
							<a
								href="/kurs-za-brasnar"
								class="md:block hidden mt-3 cursor-pointer text-center w-50 lg-w-55 bg-brand-compliment hover:c-paper-inv b-solid b-2px b-brand-compliment uppercase font-size-4 lg-font-size-4.5 font-500 py-3 c-paper transition-colors" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">
								Курс за бръснар
							</a>
						</AnimatedComponent>
					</div>

					<AnimatedComponent class="lg:w-1/2s">
						<div class="px-20px py-25px md:px-30px md:py-40px rounded-0 w-full max-w-150 overflow-hidden relative bg-#14100c" style="background-image: url(/assets/wood-bg-2.webp); background-position: center; background-repeat: no-repeat; background-size: cover;">
							<div class="md:px-12 md:pt-10 py-5 px-3">
								<h2 class="important-mt-0 md:mt-5 mb-10 c-paper">Изпратете запитване</h2>
								{!isModalOpen() && !errorMessage() && (
									<ContactUs
										onSuccess={handleSuccess}
										onError={handleError}
										setUploading={setIsUploading}
									/>
								)}
							</div>
						</div>
					</AnimatedComponent>
				</div>
			</section>

			{isUploading() && (
				<div class="fixed inset-0 flex items-center justify-center bg-paper-inv bg-opacity-50 z-50">
					<div class="bg-white p-6 shadow-lg w-64">
						<h3 class="text-lg font-semibold mb-3">Изпращане...</h3>
						<div class="w-full bg-gray-200 h-4 overflow-hidden relative">
							<div
								class="h-full bg-blue-500 relative"
								style={{
									background: 'linear-gradient(to right, #eba65b, #bf7e36)',
								}}
							>
								<div
									class="progress-bar-contacts-form-span"
								/>
							</div>
						</div>
					</div>
				</div>
			)}

			{isModalOpen() && (
				<div class="fixed inset-0 flex items-center justify-center bg-paper-inv bg-opacity-50 z-5 px-5">
					<div class="bg-white p-8 shadow-lg max-w-md w-full">
						<h2 class="text-2xl font-bold pl-0 md:mb-6 mt-1 text-left">Успешно изпращане!</h2>
						<p class="mb-5">Съобщението е успешно изпратено. Ще се свържем с Вас възможно най-скоро.</p>
						<button
							onClick={closeModal}
							class="cursor-pointer bg-brand text-white px-5 py-3 b-none hover:bg-brand-dark transition-colors">
							Затвори
						</button>
					</div>
				</div>
			)}

			{errorMessage() && (
				<div class="fixed inset-0 flex items-center justify-center bg-paper-inv bg-opacity-50 z-5 px-5">
					<div class="bg-white p-10 pt-4 shadow-lg max-w-lg w-full relative">
						<div
							onClick={closeModal}
							class="cursor-pointer b-none c-brand hover-c-brand-action transition-colors absolute top-4 right-4">
							<MdiCloseThick class="w-8" />
						</div>
						<h3 class="font-semibold mb-3 text-left">Oops...</h3>
						<div>Изглежда, че нашата контактна форма не работи правилно.</div>
						<div>Моля, свържете се с нас чрез Viber.</div>
						<div class="mt-5 -ml-1"><a class="c-paper bg-brand text-white px-5 py-3 b-none hover:bg-brand-dark transition-colors" href="viber://chat?number=%2B359882820331" target="_blank" rel="noopener">Към чат</a></div>
					</div>
				</div>
			)}
		</>
	);
}
