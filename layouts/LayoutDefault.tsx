import 'uno.css'
import "./style.css";
import { children, createEffect, createSignal, JSX, onCleanup, onMount } from "solid-js";
import RiArrowDropUpFill from '~icons/ri/arrow-drop-up-fill';
import gsap from "gsap";
import MdiEmail from '~icons/mdi/email';
import RiPhoneFill from '~icons/ri/phone-fill';
import MdiPlace from '~icons/mdi/place';

export default function LayoutDefault(props: { children?: JSX.Element }) {
  const childrenMemo = children(() => props.children)

  return (
    <div class="flex flex-col">
      <Topbar>
        {/* <div class="hidden sm:flex w-full md:w-33% whitespace-nowrap justify-center md:justify-end items-center font-semibold gap-2 lg:gap-8 xl:gap-7 md:pr-10 md:pl-5 xl:pl-10 mr-6">
          <MenuItem href="/detsa-s-autism">Аутизъм</MenuItem>
          <MenuItem href="/detski-logoped">Детски логопед</MenuItem>
          <MenuItem href="/kak-pomagame">Как помагаме</MenuItem>
          <MenuItem href="/na-kogo-pomagame">На кого помагаме</MenuItem>
          <MenuItem href="">Пакети</MenuItem>
          <MenuItem href="/za-nas">За нас</MenuItem>
          <MenuItem href="">Контакти</MenuItem>
        </div> */}
        <HamburgerMenu />
      </Topbar>
      <Content>{childrenMemo()}</Content>
      <BackToTopArrow></BackToTopArrow>
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <div class="mt--2 py-20 w-full z-35 bg-black bottom-0 transition-all duration-300 ease-in-out">
      <div class="flex flex-col justify-center items-center h-full">
        <img src="/assets/Divinitum-logo-black-Sanford-white-without-lines.png" class="w-70 lg:w-80" />

        <div class="flex flex-col justify-center items-center gap-4">
          <div class="mt-10 relative flex justify-center items-center gap-2">
            <RiPhoneFill class="c-paper w-6 h-6" />
            <div class="flex justify-center items-center gap-2 z-20">
              <a href="tel:+359879494220">
                <p class="c-paper text-shadow-[4px_4px_10px_rgba(0,0,0,0.2)] text-3.8 c-paper hover:c-brand-second transition-all">+359 879 494 220</p>
              </a>
            </div>
          </div>
          <div class="flex justify-center items-center">
            <MdiEmail class="c-paper w-6 h-6 mr-3" />
            <a href="mailto:office@divinitum.bg">
              <p class="c-paper text-shadow-[4px_4px_10px_rgba(0,0,0,0.2)] text-4 c-paper hover:c-brand-second transition-all">office@divinitum.bg</p>
            </a>
          </div>
          <div class="flex justify-center items-center">
            <MdiPlace class="c-paper w-6 h-6 mr-2" />
            <a href="https://maps.app.goo.gl/BVZZ9gdoNXYj7nxF7" target="_blank" rel="noopener">
              <p class="c-paper text-shadow-[4px_4px_10px_rgba(0,0,0,0.2)] text-4 c-paper hover:c-brand-second transition-all">гр. Варна, ул. Дебър 58, ет.6</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content(props: { children: JSX.Element }) {
  return (
    <div id="page-container">
      <div
        id="page-content"
        style={{
          padding: "20px",
          "padding-bottom": "50px",
          "min-height": "100vh",
        }}
      >
        {props.children}
      </div>
    </div>
  );
}

export function HamburgerMenu() {
  const [open, setOpen] = createSignal(false);
  let logoRef: HTMLImageElement | undefined;

  const handleToggle = () => setOpen(!open());

onMount(() => {
  if (!logoRef) return;
  const logo = logoRef;

  if (window.scrollY > 0) {
    gsap.set(logo, { visibility: "visible", opacity: 1 });
    return;
  }

  gsap.set(logo, { visibility: "hidden", opacity: 0 });

  requestAnimationFrame(() => {
    const finalRect = logo.getBoundingClientRect();

    const startWidth = 300;
    const startHeight = 300;
    const startX = window.innerWidth / 2 - startWidth / 2;
    const startY = window.innerHeight / 2 - startHeight / 2;

    const dx = finalRect.left - startX;
    const dy = finalRect.top - startY;
    const scale = finalRect.width / startWidth;

    const originalStyle = logo.getAttribute("style") || "";
    logo.style.position = "fixed";
    logo.style.left = `${startX}px`;
    logo.style.top = `${startY}px`;
    logo.style.width = `${startWidth}px`;
    logo.style.zIndex = "999";
    logo.style.willChange = "transform";
    logo.style.transformOrigin = "top left";

    gsap.set(logo, { visibility: "visible", opacity: 1 });

    gsap.fromTo(
      logo,
      { x: 0, y: -120, scale: 1 },
      {
        x: dx,
        y: dy,
        scale: scale,
        duration: 2.5,
        ease: "expo.inOut",
        force3D: true,
        onComplete: () => {
          logo.style.position = "";
          logo.style.left = "";
          logo.style.top = "";
          logo.style.width = "";
          logo.style.zIndex = "";
          logo.style.willChange = "";
          logo.style.transformOrigin = "";
          logo.style.transform = "";
        }
      }
    );
  });
});

  return (
    <div class="z-99 flex items-center justify-end w-full">
      <div class="block relative mx-auto md:mt-2">
        <img
          ref={(el) => (logoRef = el)}
          src="/assets/Divinitum-logo-black-Sanford-white-without-lines.png"
          class="w-45 lg:w-50 animate-initial"
          alt="Divinitum"
        />
      </div>
    </div>
  );
}

export function Topbar(props: { children: JSX.Element }) {
  return (
    <div class={`h-60px w-full z-35 fixed top-0 transition-all duration-300 ease-in-out`}>
      <div class="absolute inset-0 bg-white/10 border-b border-white/20 transition-all pointer-events-none lg:mb--3 mt--2" style="backdrop-filter: blur(10px);">
      </div>
      <div class="relative mx-auto max-w-full flex flex-row justify-center md:justify-between items-center h-full">
        {props.children}
      </div>
    </div>
  );
}

function BackToTopButton(props: { onClick: JSX.EventHandlerUnion<HTMLButtonElement, MouseEvent> | undefined; children: number | boolean | Node | JSX.ArrayElement | (string & {}) | null | undefined; }) {
  return (
    <button
      class="flex items-center justify-between cursor-pointer b-solid b-2px c-brand-second hover-c-brand-compl b-brand-second hover-b-brand-compl bg-transparent md-w-10 md-h-10 w-10 h-10 transition-colors"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

function BackToTopArrow() {
  const [isVisible, setIsVisible] = createSignal(false);

  createEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    onCleanup(() => {
      window.removeEventListener('scroll', handleScroll);
    });
  });

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div class="block z-1 position-fixed right-2 bottom-2 md-right-4 md-bottom-4"
      classList={{
        'back-to-top-arrow': true,
        'visible': isVisible(),
      }}
    >
      <BackToTopButton onClick={handleScrollToTop}>
        <RiArrowDropUpFill class="mx-auto w-10 h-10" />
      </BackToTopButton>
    </div>
  );
}