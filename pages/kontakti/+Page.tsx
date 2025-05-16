import "solid-slider/slider.css";
import { AnimatedComponent } from '../../components/AnimateOnView';
import { createEffect, createMemo, createSignal } from 'solid-js';
import MdiCloseThick from '~icons/mdi/close-thick';
import confetti from "canvas-confetti";
import MdiPhoneClassic from "~icons/mdi/phone-classic";
import RiTimerLine from '~icons/ri/timer-line';
import RiMailOpenFill from '~icons/ri/mail-open-fill';
import RiWhatsappFill from '~icons/ri/whatsapp-fill';
import emailjs from '@emailjs/browser';

function svgIconViber() {
	return (
		<svg fill="#eba65b" width="25px" height="25px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 322 322" stroke="#bf7e36"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="XMLID_7_"> <path id="XMLID_8_" d="M275.445,135.123c0.387-45.398-38.279-87.016-86.192-92.771c-0.953-0.113-1.991-0.285-3.09-0.467 c-2.372-0.393-4.825-0.797-7.3-0.797c-9.82,0-12.445,6.898-13.136,11.012c-0.672,4-0.031,7.359,1.902,9.988 c3.252,4.422,8.974,5.207,13.57,5.836c1.347,0.186,2.618,0.359,3.682,0.598c43.048,9.619,57.543,24.742,64.627,67.424 c0.173,1.043,0.251,2.328,0.334,3.691c0.309,5.102,0.953,15.717,12.365,15.717h0.001c0.95,0,1.971-0.082,3.034-0.244 c10.627-1.615,10.294-11.318,10.134-15.98c-0.045-1.313-0.088-2.555,0.023-3.381C275.429,135.541,275.444,135.332,275.445,135.123z "></path> <path id="XMLID_9_" d="M176.077,25.688c1.275,0.092,2.482,0.18,3.487,0.334c70.689,10.871,103.198,44.363,112.207,115.605 c0.153,1.211,0.177,2.688,0.202,4.252c0.09,5.566,0.275,17.145,12.71,17.385l0.386,0.004c3.9,0,7.002-1.176,9.221-3.498 c3.871-4.049,3.601-10.064,3.383-14.898c-0.053-1.186-0.104-2.303-0.091-3.281C318.481,68.729,255.411,2.658,182.614,0.201 c-0.302-0.01-0.59,0.006-0.881,0.047c-0.143,0.021-0.408,0.047-0.862,0.047c-0.726,0-1.619-0.063-2.566-0.127 C177.16,0.09,175.862,0,174.546,0c-11.593,0-13.797,8.24-14.079,13.152C159.817,24.504,170.799,25.303,176.077,25.688z"></path> <path id="XMLID_10_" d="M288.36,233.703c-1.503-1.148-3.057-2.336-4.512-3.508c-7.718-6.211-15.929-11.936-23.87-17.473 c-1.648-1.148-3.296-2.297-4.938-3.449c-10.172-7.145-19.317-10.617-27.957-10.617c-11.637,0-21.783,6.43-30.157,19.109 c-3.71,5.621-8.211,8.354-13.758,8.354c-3.28,0-7.007-0.936-11.076-2.783c-32.833-14.889-56.278-37.717-69.685-67.85 c-6.481-14.564-4.38-24.084,7.026-31.832c6.477-4.396,18.533-12.58,17.679-28.252c-0.967-17.797-40.235-71.346-56.78-77.428 c-7.005-2.576-14.365-2.6-21.915-0.06c-19.02,6.394-32.669,17.623-39.475,32.471C2.365,64.732,2.662,81.578,9.801,99.102 c20.638,50.666,49.654,94.84,86.245,131.293c35.816,35.684,79.837,64.914,130.839,86.875c4.597,1.978,9.419,3.057,12.94,3.844 c1.2,0.27,2.236,0.5,2.991,0.707c0.415,0.113,0.843,0.174,1.272,0.178l0.403,0.002c0.001,0,0,0,0.002,0 c23.988,0,52.791-21.92,61.637-46.91C313.88,253.209,299.73,242.393,288.36,233.703z"></path> <path id="XMLID_11_" d="M186.687,83.564c-4.107,0.104-12.654,0.316-15.653,9.021c-1.403,4.068-1.235,7.6,0.5,10.498 c2.546,4.252,7.424,5.555,11.861,6.27c16.091,2.582,24.355,11.48,26.008,28c0.768,7.703,5.955,13.082,12.615,13.082h0.001 c0.492,0,0.995-0.029,1.496-0.09c8.01-0.953,11.893-6.838,11.542-17.49c0.128-11.117-5.69-23.738-15.585-33.791 C209.543,88.98,197.574,83.301,186.687,83.564z"></path> </g> </g></svg>
	)
}

const contacts = [
	{ type: "Phone", value: "+359 882820331", icon: MdiPhoneClassic, link: "tel:0882820331", className: "text-brand w-8 h-8" },
	{ type: "Email", value: "info@thebarbershop.bg", icon: RiMailOpenFill, link: "mailto:info@thebarbershop.bg", className: "text-brand w-8 h-8" },
	// { type: "WhatsApp", value: "The Barber Shop", icon: RiWhatsappFill, link: "https://wa.me/+359882820331?text=", className: "text-brand w-9 h-9" },
	{ type: "Viber", value: "The Barber Shop", icon: svgIconViber, link: "viber://chat?number=%2B359882820331", className: "text-brand w-8 h-8" },
];

function ContactSection() {
	return (
		<div>
			<div class="space-y-8 mb-10 w-full">
				{contacts.map(({ type, value, icon: Icon, link, className }) => (
					<a
						href={link}
						class="flex md:flex-row flex-col items-center md:gap-4 hover:bg-white/30 transition-all duration-300 p-3 md:p-5 rounded-0 shadow-lg cursor-pointer border border-white/30 transform hover:scale-105 hover:shadow-2xl w-full bg-#14100c" style="background-image: url(/assets/wood-bg-2.webp); background-position: center; background-repeat: no-repeat; background-size: cover;"
						target="_blank"
						rel="noopener noreferrer"
					>
						<div class="flex items-center justify-center">
							<Icon class={className} />
						</div>
						<div>
							<p class="my-1 text-5 font-semibold c-paper text-center md:text-left" style="font-family: 'Oswald', sans-serif !important">{type}</p>
							<p class="my-1 text-sm c-paper">{value}</p>
						</div>
					</a>
				))}
			</div>
			<div class="absolute top-[-50px] left-[50%] transform -translate-x-1/2 w-16 h-16 bg-white/20 rounded-full blur-3xl hidden md:block"></div>
			<div class="absolute bottom-[-50px] right-[-50px] w-24 h-24 bg-white/10 rounded-full blur-3xl hidden md:block"></div>
		</div>
	);
}

const getToday = () => {
	return new Date().toLocaleString("bg-BG", { weekday: "long" });
};

const workingHours = [
	{ day: "понеделник", open: "10:00", close: "20:00" },
	{ day: "вторник", open: "10:00", close: "20:00" },
	{ day: "сряда", open: "10:00", close: "20:00" },
	{ day: "четвъртък", open: "10:00", close: "20:00" },
	{ day: "петък", open: "10:00", close: "20:00" },
	{ day: "събота", open: "10:00", close: "20:00" },
	{ day: "неделя", open: "10:00", close: "20:00" },
];

function WorkingHoursTable() {
	const [today] = createSignal(getToday());

	return (
		<div class="w-full mx-auto lg:max-w-lg bg-white shadow-xl rounded-0 pt-6 pb-4 pt-10 px-4 md:p-8">
			<div>
				<h2 class="text-2xl font-bold text-gray-800 text-center mb-4 flex items-center justify-center gap-3 mt-6">
					<RiTimerLine class="c-brand" /> Работно време
				</h2>
				<div class="mt-10">
					<div class="flex font-bold text-gray-700 border-b px-4 pb-4" style="font-family: 'Oswald', sans-serif !important">
						<div class="w-1/3 px-3 font-600">Ден</div>
						<div class="w-1/3 px-3 font-600">Отваряне</div>
						<div class="w-1/3 px-3 font-600">Затваряне</div>
					</div>
					{workingHours.map(({ day, open, close }) => (
						<div
							class={`flex border-b py-3 capitalize px-4 ${day === today() ? "bg-brand font-semibold bg-opacity-50" : "bg-gray-100"}`}
						>
							<div class="w-1/3 px-3 font-size-3.8 md:font-size-4.2">{day}</div>
							<div class="w-1/3 px-3 font-size-3.8 md:font-size-4.2">{open}</div>
							<div class="w-1/3 px-3 font-size-3.8 md:font-size-4.2">{close}</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

function GoogleMapIframe() {
	const mapSrc = `https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2933.53860479928!2d23.352789!3d42.671132!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa85cc743ddfd7%3A0xfdafbdb8cd44f23!2sThe%20Barber%20Shop%20Sofia!5e0!3m2!1sen!2sbg!4v1741095880781!5m2!1sen!2sbg`;

	return (
		<iframe
			src={mapSrc}
			width="100%"
			height="100%"
			style={{ border: 0 }}
			loading="lazy"
			referrerPolicy="no-referrer-when-downgrade"
		></iframe>
	);
}

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
			<div class="space-y-4">
				<div class="input-highlight relative overflow-hidden">
					<input
						name="name"
						type="text"
						placeholder="Име"
						class="w-full px-4 py-3 bg-transparent border-0 border-b border-paper focus:outline-none focus:ring-0 text-paper"
						required
					/>
				</div>
				<div class="input-highlight relative overflow-hidden">
					<input
						name="surname"
						type="text"
						placeholder="Фамилия"
						class="w-full px-4 py-3 bg-transparent border-0 border-b border-paper focus:outline-none focus:ring-0 text-paper"
						required
					/>
				</div>
				<div class="input-highlight relative overflow-hidden">
					<input
						name="phone"
						type="tel"
						pattern="^\+?[0-9\s\-]{7,15}$"
						placeholder="Phone"
						class="w-full px-4 py-3 bg-transparent border-0 border-b border-paper focus:outline-none focus:ring-0 text-paper"
						required
					/>
				</div>
				<div class="input-highlight relative overflow-hidden">
					<input
						name="email_id"
						type="email"
						placeholder="Email"
						class="w-full px-4 py-3 bg-transparent border-0 border-b border-paper focus:outline-none focus:ring-0 text-paper"
						required
					/>
				</div>
				<div class="pt-2">
					<textarea
						name="message"
						placeholder="Разкажи повече за себе си и бръснарството..."
						class="rounded-0 w-full px-4 py-3 bg-white border-paper focus:border-brand focus:ring-2 focus:ring-brand focus:ring-opacity-50 outline-none transition-all duration-200 h-32 resize-none"
					></textarea>
				</div>
			</div>
			<button
				type="submit"
				value="Send"
				class="cursor-pointer font-700 border-none hover:shadow-xl hover:translate-y-[-2px] translate-y-[0px] bg-gradient-to-br from-[#c29059] to-[#c27832] duration-200 ease-in-out shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),_0_4px_6px_-2px_rgba(252,252,252,0.05)] w-full text-white py-4 font-medium transition-all uppercase tracking-1.5px text-sm focus:outline-none focus:ring-4 focus:ring-orange-300 focus:ring-opacity-50 rounded-0">
				Кандидатствай
			</button>
			<div class="text-center text-xs text-paper mt-4">
				Ще обработим вашето запитване с внимание. Очаквайте нашия отговор скоро!
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

			<section class="lg-pt-55 pb-20 pt-30 px-2 md:px-4 w-full">

				<AnimatedComponent class="w-full mb-30">
					<h1 class="uppercase md:important-mb-10 pt-0 mt-10">Контакти</h1>
				</AnimatedComponent>

				<div class="flex flex-col lg:flex-row items-center justify-center gap-20 md:gap-20 mx-2 md:mx-20 lg:mx-10 xl:mx-45">
					<div class="w-full lg:w-1/2 flex flex-col justify-center lg:justify-start items-center lg:items-start">
						<AnimatedComponent class="w-full">
							<ContactSection />
						</AnimatedComponent>
						<AnimatedComponent>
							<a href="https://book.thebarbershop.bg/reservations/start?site=1" target="_blank" rel="noopener noreferrer">
								<button
									class="cursor-pointer text-center w-45 lg-w-55 bg-brand-compliment hover:c-paper-inv b-solid b-2px b-brand-compliment uppercase font-size-4 lg-font-size-4.5 font-500 py-3 c-paper transition-colors rounded-0" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">
									Запази час
								</button>
							</a>
						</AnimatedComponent>
					</div>

					<AnimatedComponent class="lg:w-1/2s">
						<div class="px-20px py-25px md:px-30px md:py-40px rounded-0 w-full max-w-150 overflow-hidden relative bg-#14100c" style="background-image: url(/assets/wood-bg-2.webp); background-position: center; background-repeat: no-repeat; background-size: cover;">

							<div class="md:px-12 md:pt-10 py-5 px-3">
								<h2 class="important-mt-0 md:mt-5 mb-10 c-paper">Изпрати запитване</h2>
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

			<div class="pt-20 md:pt-30 pb-20" style="background-image: url(/assets/thebarbershop-dark-bg.webp); background-position: center; background-repeat: no-repeat; background-size: cover;">
				<div class="flex lg:flex-row flex-col gap-15 lg:gap-0">
					<div class="lg:w-1/2 px-5 lg:px-0 md:mx-20 lg:mx-0">
						<WorkingHoursTable />
					</div>

					<div class="lg:w-1/2">
						<div class="md:w-80% h-300px lg:h-full px-5 md:px-0 mx-auto xl:ml-0">
							<GoogleMapIframe />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}