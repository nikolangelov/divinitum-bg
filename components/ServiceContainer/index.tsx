import { AnimatedComponentSlide } from "../AnimateOnViewSlide";
import MdiScissors from '~icons/mdi/scissors';

export function ServiceContaner(props: { title: string, href: string, img: string, alt: string }) {

	return (
		<AnimatedComponentSlide class="flex sm-w-65% md-w-50% lg-w-35% xl-w-23% max-w-full relative overflow-hidden " style="flex: 0 0 auto;">
			<a class="group" href={props.href}>
				<img loading="lazy" class="w-full h-auto" src={props.img} alt={props.alt} />
				<div class="w-full p-20px absolute bottom-0px text-center" style="background: -webkit-linear-gradient(top, transparent 0, rgba(0, 0, 0, .01) 1%, rgba(0, 0, 0, .95) 80%);">
					<div class="flex flex-col gap-1">
						<MdiScissors class="c-paper mx-auto rotate-[270deg] w-8" />
						<h4 class="c-paper relative font-size-20px md:font-size-27px my-1">
							{props.title}
						</h4>
						<div class="text-center h-1px w-60px bg-brand mx-auto mb-20px"></div>
						<div class="bg-none c-paper b-solid b-1px b-paper group-hover-b-brand group-hover-bg-brand transition-colors mx-auto uppercase font-size-4 font-500 px-7 py-2" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">Вижте повече</div>
					</div>
				</div>
			</a>
		</AnimatedComponentSlide>
	)
}