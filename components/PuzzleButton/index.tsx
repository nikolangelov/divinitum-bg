import { JSXElement } from "solid-js";
import { AnimatedComponent } from "../AnimateOnView";

export const PuzzleButton = (props:{text: string; href:string;}) => {
    return (
        <>
            <div class="flex justify-center">
                <AnimatedComponent class="float-left md:pr-5px relative text-center w-60 md:w-65">
                    <a href={props.href}>
                        <div class="flex bg-brand hover:bg-brand-hover transition-all max-w-100 w-full px-2 py-3 md:py-12 md:py-18px b-solid b-2px b-brand hover:b-brand-hover">
                            <div class="m-auto">
                                <div class="relative min-h-1px c-paper flex text-center flex-justify-center tracking-1.2px font-size-15px xl:font-size-4.5 leading-4.5 uppercase font-600">
                                    {props.text}
                                </div>
                            </div>
                        </div>
                    </a>
                </AnimatedComponent>
            </div>
        </>
    );
};

export const PuzzleButton2 = (props: { href: string; text: string | JSXElement; }) => {
    return (
        <>
            <div class="flex justify-center group">
                <AnimatedComponent class="float-left md:pr-5px relative text-center w-60 md:w-65">
                    <a href={props.href}>
                        <div class="flex transition-all max-w-100 w-full px-2 py-3 md:py-12 md:py-18px b-solid b-2px b-brand-second hover:b-brand-second-hover hover:bg-brand-second-hover">
                            <div class="m-auto">
                                <div class="transition-all relative min-h-1px group-hover:c-paper c-brand-second align-self-center flex text-center flex-justify-center tracking-1.2px font-size-15px xl:font-size-4.5 leading-4.5 uppercase font-600">
                                    {props.text}
                                </div>
                            </div>
                        </div>
                    </a>
                </AnimatedComponent>
            </div>
        </>
    );
};