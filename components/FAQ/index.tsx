import { createSignal, JSXElement } from "solid-js";
import MdiKeyboardArrowDown from '~icons/mdi/keyboard-arrow-down';

export function Collapse(props: { title: string; desc: string; children?: JSXElement; img: string; }) {
	const [isExpanded, setIsExpanded] = createSignal(false);

	return (
		<div class="relative overflow-hidden z-1 FAQ-wrapper w-full mx--1">
			<div
				class={`relative z-1 transition-all duration-600 important-outline-none w-full ${isExpanded() ? 'b-none bg-transparent' : ''}`}
				style={isExpanded() ? 'transition: all 0.3s ease-in-out;' : ''}
			>
				<button
					onClick={() => setIsExpanded(!isExpanded())}
					class={`cursor-pointer important-b-none important-outline-none flex items-center justify-between w-full font-semibold text-lg focus:outline-none transition-all duration-700 ${isExpanded() ? 'bg-transparent' : 'bg-transparent'}`}
				>
					<div class="flex justify-between gap-3 w-full py-4 lg:pb-5 b-b-solid b-t-solid b-1px b-gray-300 pr-4 pl-8">
						<div class="flex items-center">
							<div>
								<img src={props.img} class="w-45px h-45px mr-4 md:mr-5" />
							</div>
							<span class="w-full md-max-w-full leading-6 c-paper font-size-17px md-font-size-20px transition-colors uppercase font-700 pr-1">
								{props.title}
							</span>
						</div>
						<div class="">
							<MdiKeyboardArrowDown class={`text-paper font-size-10 transition-transform duration-700 italic ${isExpanded() ? 'rotate-[180deg]' : ''}`} />
						</div>
					</div>
				</button>
				<div
					class={`mt-0 lg:px-5 px-2 text-gray-600 leading-relaxed bg-transparent overflow-hidden transition-all duration-700 w-full ${isExpanded() ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
				>
					<div class="flex flex-col gap-4 mt-3 mb-8 md-font-size-5.5 w-full px-6">
						{props.desc}
						{props.children}
					</div>
				</div>
			</div>
		</div>
	);
}