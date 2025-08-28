import 'uno.css'
import "./style.css";
import { children, createEffect, createSignal, JSX, JSXElement, onCleanup, onMount, Show } from "solid-js";
import MdiDot from '~icons/mdi/dot';
import RiFacebookFill from '~icons/ri/facebook-fill';
import RiInstagramLine from '~icons/ri/instagram-line';
import RiScissorsLine from '~icons/ri/scissors-line';
import RiArrowDropUpFill from '~icons/ri/arrow-drop-up-fill';
import { AnimatedComponent } from '../components/AnimateOnView';
import MdiBank from '~icons/mdi/bank';
import MdiPhoneClassic from '~icons/mdi/phone-classic';
import RiTimerFill from '~icons/ri/timer-fill';
import MdiCommentCheckOutline from '~icons/mdi/comment-check-outline';
import MdiEmailMultipleOutline from '~icons/mdi/email-multiple-outline';
import MdiFileCertificateOutline from '~icons/mdi/file-certificate-outline';
import MdiBankOutline from '~icons/mdi/bank-outline';
import MdiAccountFileTextOutline from '~icons/mdi/account-file-text-outline';
import MdiAccountGroupOutline from '~icons/mdi/account-group-outline';
import RiArrowRightSLine from '~icons/ri/arrow-right-s-line';
import { H2WithImage } from '../components/H2WithImage';
import Cookies from 'js-cookie';
import MdiCookie from '~icons/mdi/cookie';
import MdiPlus from '~icons/mdi/plus';
import confetti from 'canvas-confetti';
import MdiCloseThick from '~icons/mdi/close-thick';
import { ContactUs, Countdown } from '../pages/kurs-za-brasnar/+Page';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

const GA_MEASUREMENT_ID = 'G-59DVW1V3J4';

const cookies = [
  {
    label: "Задължителни",
    key: "mandatory",
    cookies: [
      { name: "_ga", source: "Google Analytics", duration: "2 години", description: "Разпознава потребителя с уникален ID." },
      { name: "_gid", source: "Google Analytics", duration: "24 часа", description: "Разграничава потребителите." },
      { name: "_gcl_au", source: "Google Ads", duration: "3 месеца", description: "Проследява конверсии чрез Google Ads." },
      { name: "_ga_*", source: "Google Analytics 4", duration: "2 години", description: "Събира данни за взаимодействия със сайта." },
      { name: "_fbp", source: "Meta Pixel", duration: "3 месеца", description: "Проследява посещенията за Facebook реклами." },
      { name: "booking_session", source: "Онлайн резервации", duration: "сесия", description: "Поддържа потребителската сесия за резервации." },
      { name: "cart_id", source: "Онлайн магазин", duration: "30 дни", description: "Съхранява количката на клиента." },
    ]
  },
  {
    label: "Аналитични",
    key: "analytics",
    cookies: [
      { name: "_hjSessionUser_*", source: "Hotjar", duration: "1 година", description: "Идентифицира уникален потребител за сайта." },
      { name: "_hjSession_*", source: "Hotjar", duration: "30 минути", description: "Поддържа сесия на потребителя." },
      { name: "cluid", source: "Microsoft Clarity", duration: "1 година", description: "За топлинни карти и сесии." },
      { name: "_pk_id.*", source: "Matomo", duration: "13 месеца", description: "Анонимна статистика за потребителите." },
      { name: "_pk_ses.*", source: "Matomo", duration: "30 минути", description: "Следи сесиите на потребителите." },
    ]
  },
  {
    label: "Маркетингови",
    key: "marketing",
    cookies: [
      { name: "_tt_enable_cookie", source: "TikTok", duration: "13 месеца", description: "Проследява действия след реклама." },
      { name: "fr", source: "Facebook", duration: "3 месеца", description: "Подобрява релевантността на рекламите." },
      { name: "IDE", source: "Google DoubleClick", duration: "13 месеца", description: "Показва персонализирани реклами." },
      { name: "anj", source: "AppNexus", duration: "3 месеца", description: "Ремаркетинг и профилиране." },
      { name: "MUID", source: "Bing", duration: "1 година", description: "Проследява действия на потребителя." },
    ]
  },
  {
    label: "Функционални",
    key: "functional",
    cookies: [
      { name: "intercom-id-*", source: "Intercom", duration: "9 месеца", description: "Поддържа потребителски чат сесии." },
      { name: "zabUserId", source: "Zendesk", duration: "1 година", description: "Проследява поддръжка на клиентите." },
      { name: "pll_language", source: "Polylang", duration: "1 година", description: "Запомня избора на език." },
      { name: "cookieconsent_status", source: "CookieConsent", duration: "1 година", description: "Запомня съгласието за бисквитки." },
      { name: "theme_preference", source: "Custom", duration: "1 година", description: "Запомня предпочитания за тема." },
    ]
  }
];

export const CookieConsent = () => {
  const [hasMadeChoice, setHasMadeChoice] = createSignal(false);
  const [showBanner, setShowBanner] = createSignal(false);
  const [showSettings, setShowSettings] = createSignal(false);
  const [cookiePreferences, setCookiePreferences] = createSignal({
    necessary: true,
    functional: false,
    analytics: false,
    advertising: false,
    thirdParty: false,
  });
  const [showCookieIcon, setShowCookieIcon] = createSignal(true);

  const loadGoogleAnalytics = () => {
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () {
        window.dataLayer.push(arguments);
      };
      window.gtag("js", new Date());
      window.gtag("config", GA_MEASUREMENT_ID, { anonymize_ip: true });
    };
  };

  const removeGoogleAnalytics = () => {
    Cookies.remove("_ga");
    Cookies.remove("_gat");
    Cookies.remove("_gid");
    window.gtag &&
      window.gtag("config", GA_MEASUREMENT_ID, { send_page_view: false });
    const gaScript = document.querySelector(
      'script[src^="https://www.googletagmanager.com/gtag/js"]'
    );
    if (gaScript) {
      gaScript.remove();
    }
  };

  const applyPreferences = () => {
    const preferences = cookiePreferences();
    console.log("[CookieConsent] Applying preferences:", preferences);

    Cookies.set("necessary_cookie", "true", { expires: 30 });

    if (preferences.functional) {
      Cookies.set("functional_cookie", "true", { expires: 30 });
    } else {
      Cookies.remove("functional_cookie");
    }

    if (preferences.analytics) {
      Cookies.set("analytics_cookie", "true", { expires: 30 });
      console.log("[CookieConsent] Loading Google Analytics");
      loadGoogleAnalytics();
    } else {
      Cookies.remove("analytics_cookie");
      console.log("[CookieConsent] Removing Google Analytics");
      removeGoogleAnalytics();
    }

    if (preferences.advertising) {
      Cookies.set("advertising_cookie", "true", { expires: 30 });
    } else {
      Cookies.remove("advertising_cookie");
    }

    if (preferences.thirdParty) {
      Cookies.set("third_party_cookie", "true", { expires: 30 });
    } else {
      Cookies.remove("third_party_cookie");
    }
  };

  onMount(() => {
    const savedPreferences = Cookies.get("cookiePreferences");
    const bannerClosed = Cookies.get("bannerClosed");

    if (savedPreferences) {
      const preferences = JSON.parse(savedPreferences);
      setCookiePreferences(preferences);
      setHasMadeChoice(true);
      applyPreferences();
    } else {
      const initialPrefs = {
        necessary: true,
        functional: true,
        analytics: true,
        advertising: true,
        thirdParty: false,
      };
      setCookiePreferences(initialPrefs);
      Cookies.set("cookiePreferences", JSON.stringify(initialPrefs), {
        expires: 365,
        path: "/",
      });
      Cookies.set("bannerClosed", "true", { expires: 365, path: "/" });
      setHasMadeChoice(true);
      applyPreferences();
    }

    setShowBanner(false);

    const shouldShowIcon = sessionStorage.getItem("showCookieIcon") !== "false";
    setShowCookieIcon(shouldShowIcon);
  });

  const closeBanner = () => {
    Cookies.set("bannerClosed", "true", { expires: 365, path: "/" });
    setShowBanner(false);
  };

  const savePreferences = () => {
    const preferences = cookiePreferences();
    Cookies.set("cookiePreferences", JSON.stringify(preferences), {
      expires: 365,
      path: "/",
    });
    Cookies.set("bannerClosed", "true", { expires: 365, path: "/" });
    setHasMadeChoice(true);
    applyPreferences();
    setShowSettings(false);

    sessionStorage.setItem("showCookieIcon", "false");
    setShowCookieIcon(false);
  };

  const acceptAll = () => {
    setCookiePreferences({
      necessary: true,
      functional: true,
      analytics: true,
      advertising: true,
      thirdParty: true,
    });
    savePreferences();
  };

  const CookieCategory = (props: {
    title: string;
    description: string;
    name: "necessary" | "functional" | "analytics" | "advertising" | "thirdParty";
    cookies?: {
      name: string;
      source: string;
      duration: string;
      description: string;
    }[];
  }) => {
    const [isExpanded, setIsExpanded] = createSignal(false);
    const isChecked = () => cookiePreferences()[props.name];

    const toggle = () => {
      if (props.name === "necessary") return;
      setCookiePreferences({
        ...cookiePreferences(),
        [props.name]: !isChecked(),
      });
    };

    return (
      <div class="flex flex-col my-6 md:my-8">
        <h4 class="mb-1 mt-2 text-lg font-semibold text-left md:text-center">{props.title}</h4>
        <div class="flex flex-row items-center justify-between gap-4">
          <p class="text-left text-sm sm:text-base">{props.description}</p>
          <button
            onClick={toggle}
            disabled={props.name === "necessary"}
            class={`relative min-w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 b-none ${isChecked() ? "bg-brand-compliment" : "bg-gray-300"} ${props.name === "necessary" ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}`}
          >
            <span
              class={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${isChecked() ? "translate-x-6" : "translate-x-0"}`}
            />
          </button>
        </div>

        {props.cookies && props.cookies.length > 0 && (
          <div class="mt-3">
            <div
              class="flex items-center justify-between w-full py-2 px-4 text-left transition-all cursor-pointer b-solid b-2px b-gray-500"
              onClick={() => setIsExpanded(!isExpanded())}
            >
              <span class="text-sm font-semibold uppercase text-gray-700">
                {isExpanded() ? "Скрий детайли" : "Виж всички бисквитки"}
              </span>
              <div class={`transform transition-transform duration-300 ${isExpanded() ? "rotate-45" : ""}`}>
                <MdiPlus class="w-5 h-5 mt-2 text-gray-700" />
              </div>
            </div>

            <div
              class={`transition-all duration-500 ease-in-out overflow-hidden ${isExpanded() ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}
            >
              <div class="mt-3 md:pl-4 pl-1">
                {props.cookies.map((cookie) => (
                  <div class="mb-3 text-gray-600">
                    <div class="text-3 md:text-3.5 h-5 line-height-1rem">Име: {cookie.name}</div>
                    <div class="text-3 md:text-3.5 h-5 line-height-1rem">Източник: {cookie.source}</div>
                    <div class="text-3 md:text-3.5 h-5 line-height-1rem">Продължителност: {cookie.duration}</div>
                    <div class="text-3 md:text-3.5 h-5 line-height-1rem">Описание: {cookie.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <Show when={showCookieIcon()}>
        <div
          class="fixed bottom-0 left-4 z-3 cursor-pointer c-brand-dark"
          onClick={() => setShowSettings(true)}
        >
          <MdiCookie class="font-size-8" />
        </div>
      </Show>

      <Show when={showSettings()}>
        <div class="fixed inset-0 bg-gray-800 bg-opacity-50 z-9">
          <div class="fixed inset-0 bg-gray-800 bg-opacity-50 z-10 flex justify-center items-center p-4">
            <div class="relative bg-paper shadow-lg max-h-[90vh] overflow-auto w-11/12 md:w-3/4 lg:w-2/3 pt-8 p-5 md:p-10">
              <h2 class="important-mb-0 important-md-mb-12 md-mt-10 mt-0 line-height-7 sm-line-height-6 md-line-height-8 font-size-6 md-font-size-10">
                Настройки на бисквитки
              </h2>

              <CookieCategory
                name="necessary"
                title="Задължителни бисквитки"
                description="Тези „бисквитки“ са необходими за функционирането на уебсайта и не могат да бъдат деактивирани."
                cookies={cookies.find(c => c.key === "mandatory")?.cookies}
              />

              <CookieCategory
                name="functional"
                title="Функционални бисквитки"
                description="Тези „бисквитки“ позволяват на уебсайта да предоставя подобрена функционалност и персонализация."
                cookies={cookies.find(c => c.key === "functional")?.cookies}
              />

              <CookieCategory
                name="analytics"
                title="Аналитични бисквитки"
                description="Тези „бисквитки“ ни помагат да разберем как посетителите взаимодействат с уебсайта."
                cookies={cookies.find(c => c.key === "analytics")?.cookies}
              />

              <CookieCategory
                name="advertising"
                title="Маркетингови бисквитки"
                description="Тези „бисквитки“ се използват за показване на подходящи реклами."
                cookies={cookies.find(c => c.key === "marketing")?.cookies}
              />

              <CookieCategory
                name="thirdParty"
                title="Бисквитки на трети страни"
                description="Тези „бисквитки“ се задават от външни услуги, които добавяме към уебсайта."
                cookies={[]}
              />

              <div class="flex justify-center md-justify-end gap-3 mt-1 md-mt-0 pt-0">
                <button class="b-solid b-2 b-brand-compliment bg-brand-compliment hover-bg-brand transition-colors hover-b-brand font-700 font-size-2.7 md-font-size-4 uppercase c-paper cursor-pointer py-1.5 md-py-3.5 px-4 md-px-5 mt-4 md-mt-10 line-height-4" onClick={acceptAll}>Приеми всички</button>
                <button class="b-solid b-2 b-brand-compliment bg-paper hover-c-brand transition-colors hover-b-brand font-700 font-size-2.7 md-font-size-4 uppercase c-brand-compliment cursor-pointer py-1.5 md-py-3.5 px-4 md-px-5 mt-4 md-mt-10 line-height-4" onClick={savePreferences}>Запази настройки</button>
                <button class="b-solid b-2 b-brand-compliment bg-paper hover-c-brand transition-colors hover-b-brand font-700 font-size-2.7 md-font-size-4 uppercase c-brand-compliment cursor-pointer py-1.5 md-py-3.5 px-4 md-px-5 mt-4 md-mt-10 line-height-4" onClick={() => setShowSettings(false)}>Затвори</button>
              </div>
            </div>
          </div>
        </div>
      </Show>
    </>
  );
};


function LayoutDefault(props: { children?: JSX.Element }) {
  const [isModalOpen, setIsModalOpen] = createSignal(false);
  const [isUploading, setIsUploading] = createSignal(false);
  const [errorMessage, setErrorMessage] = createSignal(false);
  const [isSuccess, setIsSuccess] = createSignal(false);

  const handleSuccess = () => {
    setIsUploading(false);
    setErrorMessage(false);
    setIsSuccess(true); // show success message
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { x: 0.5, y: 0.5 },
    });
  };

  const handleError = () => {
    setErrorMessage(true);
  };

  const openModal = () => {
    setIsModalOpen(true);
    setErrorMessage(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setErrorMessage(false);
    setIsSuccess(false);
  };

  const childrenMemo = children(() => props.children)

  const [isMenuOpen, setIsMenuOpen] = createSignal(false);
  const [servicesMenuOpen, setServicesMenuOpen] = createSignal(false);
  const [aboutMenuOpen, setAboutMenuOpen] = createSignal(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {isModalOpen() && !isSuccess() && (
        <section class="flex items-center justify-center">
          <div style="background-color: #222222; background-image: url(/assets/thebarbershop-light-bg.webp); background-position: center bottom; background-repeat: no-repeat; background-size: cover;" class="important-m-auto z-10 w-full fixed lg:max-w-80% max-w-90% top-0 lg:top-10 md:top-10 h-100vh md:max-h-90vh lg:pt-27 lg:pb-25 px-3 flex items-center justify-center">
            <div class="flex flex-col md:flex-row items-center justify-center gap-2 sm:gap-8 md:gap-15 xl:gap-25 mx-2 md:mx-5 lg:mx-15">
              <div
                onClick={closeModal}
                class="cursor-pointer b-none absolute top-3 right-3">
                <MdiCloseThick class="w-8 hover:rotate-90 transition-all c-paper-inv hover-c-brand" />
              </div>

              <div class="w-full xl:w-1/2 md:w-2/5 w-full flex flex-col justify-center lg:justify-start items-center lg:items-start">
                <AnimatedComponent>
                  <h2 class="important-pl-0 text-left important-xl:font-size-40px important-md:font-size-30px important-font-size-22px important-xl:leading-56px important-md:leading-45px important-leading-30px important-xl:mb-60px important-md:mb-30px important-mb-15px">Станете професионален бръснар за 4 седмици</h2>
                  {/* <p class="important-xl:font-size-19px important-md:font-size-16px important-font-size-12px important-xl:leading-32px important-md:leading-27px important-leading-19px important-xl:mt-13px important-mt-4px important-mb-8px">Запишете се две седмици преди началото, за да получите 300 лв отстъпка.</p>
                  <Countdown /> */}
                  <h3 class="font-400 text-left important-xl:font-size-27px important-md:font-size-22px important-font-size-16px important-xl:mb-20px important-mb-2px">Остават 4 места.</h3>
                  <p class="important-xl:font-size-19px important-md:font-size-16px important-font-size-12px important-xl:leading-32px important-md:leading-27px important-leading-19px important-xl:mt-13px important-mt-4px important-mb-8px">Запазете мястото си в предстоящото издание на курса като попълните контактната форма.</p>
                </AnimatedComponent>
              </div>

              <AnimatedComponent class="xl:w-1/2 md:w-3/5 w-full">
                <div class="px-20px pt-20px pb-18px md:px-30px md:py-40px rounded-0 w-full max-w-150 overflow-hidden relative bg-#14100c" style="background-image: url(/assets/wood-bg-2.webp); background-position: center; background-repeat: no-repeat; background-size: cover;">

                  <div class="xl:px-10 md:pt-3">
                    <h3 class="important-mt-0 md:mt-2 mb-10 c-paper uppercase
										important-xl:font-size-26px important-md:font-size-24px important-font-size-18px">Влезте в играта</h3>
                    <ContactUs
                      onSuccess={handleSuccess}
                      onError={handleError}
                      setUploading={setIsUploading}
                    />
                  </div>
                </div>
              </AnimatedComponent>
            </div>
          </div>
        </section>
      )}

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

      {isSuccess() && (
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

      <div class="flex flex-col">
        <Topbar>
          <div class="flex items-center justify-center lg-pl-4 pl-0 z-99">
            <a href="/" class="hidden lg-block" onClick={closeMenu}>
              <img loading="lazy" src="/assets/akademia/barbershop-academy-logo-desktop.webp" class="lg-w-38 w-30 lg-ml-10 lg-mt-4" alt="the-barber-shop-academy-desktop-logo" />
            </a>
          </div>

          <div class="flex whitespace-nowrap justify-end items-center font-semibold lg:gap-8 xl:gap-18 md:pr-10 md:pl-5 xl:pl-10 pr-6">
            <div
              class="relative"
              onMouseEnter={() => setServicesMenuOpen(true)}
              onMouseLeave={() => setServicesMenuOpen(false)}
            >
              <ServiceMenuItem href="/uslugi">Услуги</ServiceMenuItem>
              <DropDownMenuDesktop
                isVisible={servicesMenuOpen()}
                items={[
                  { href: "/uslugi/mazhko-podstrigvane", title: "МЪЖКО ПОДСТРИГВАНЕ" },
                  { href: "/uslugi/oformiane-na-brada", title: "ОФОРМЯНЕ НА БРАДА" },
                  { href: "/uslugi/mazhko-podstrigvane-i-oformiane-na-brada", title: "МЪЖКО ПОДСТРИГВАНЕ И ОФОРМЯНЕ НА БРАДА" },
                  { href: "/uslugi/klasichesko-mokro-brasnene", title: "КЛАСИЧЕСКО МОКРО БРЪСНЕНЕ" },
                  { href: "/uslugi/profesionalno-tonirane-na-mazhka-kosa", title: "ПРОФЕСИОНАЛНО ТОНИРАНЕ НА МЪЖКА КОСА" },
                  { href: "/uslugi/brasnene-na-glava-s-brasnach", title: "БРЪСНЕНЕ НА ГЛАВА С БРЪСНАЧ" },
                  { href: "/uslugi/detsko-podstrigvane-momche", title: "ДЕТСКО ПОДСТРИГВАНЕ" },
                  { href: "/uslugi/podstrigvane-na-bashta-i-sin", title: "ПОДСТРИГВАНЕ НА БАЩА И СИН" },
                ]}
              />
            </div>
            <MenuItem href="/otzivi">Отзиви</MenuItem>
            <MenuItem href="/za-nas">За нас</MenuItem>
            <MenuItem href="/karieri">Кариери</MenuItem>
            <MenuItem href="/kurs-za-brasnar">Академия</MenuItem>
            <MenuItem href="/kontakti">Контакти</MenuItem>
          </div>

          <div class="hidden lg-block mr-10">
            <button onClick={openModal}
              class="cursor-pointer bg-brand-compliment c-paper b-solid b-2px b-brand-compliment uppercase font-size-4 font-500 px-7 py-2 hover-c-paper-inv transition-colors lg-block hidden" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;"
            >
              Започнете сега
            </button>
          </div>
          <HamburgerMenu />
        </Topbar>
        <Content>{childrenMemo()}</Content>
        <CookieConsent />
        <BackToTopArrow></BackToTopArrow>
        <TopFooter />
        <MainFooter>
          <div class="flex flex-col gap-5 flex-wrap line-height-0 mx-auto w-full bg-#14100c" style="">
            <div class="flex flex-col lg-flex-row flex-justify-evenly gap-5 lg-gap-5 xl-gap-0 md-mx-8 xl-mx-30 pb-2 pb-10 pt-5 md-pt-10 sm-pt-15 lg-pt-25">
              <div class="block md-hidden w-100% xl-w-500px lg-w-450px px-5">
                <GoogleMapIframe />
              </div>

              <AnimatedComponent class="hidden  flex-justify-center lg-flex-justify-center lg-mt-10 w-full gap-5 lg-gap-15 py-10">
                <a href="https://book.thebarbershop.bg/reservations/start?site=1" target="_blank" rel="noopener noreferrer" class="text-center w-32 lg-w-42 bg-brand c-paper-inv b-solid b-2px b-brand uppercase font-size-4 lg-font-size-5 font-500 py-3 hover-c-paper transition-colors" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">Започнете сега</a>
                <a href="/uslugi" class="text-center w-32 lg-w-42 bg-brand c-paper-inv b-solid b-2px b-brand uppercase font-size-4 lg-font-size-5 font-500 py-3 hover-c-paper transition-colors" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">Услуги</a>
              </AnimatedComponent>

              <div class="flex flex-col flex-justify-start flex-items-center py-2 md-gap-0 gap-1 mt-5 md-mt-0">
                <h3 class="c-brand font-600 mt-0 uppercase">Най-популярните<br></br>ни услуги</h3>
                <MainFooterMenuItem href="/uslugi/mazhko-podstrigvane">Мъжко подстригване</MainFooterMenuItem>
                <div>
                  <MdiDot class="w-4 c-paper pt-2px mx-5 block" />
                </div>
                <MainFooterMenuItem href="/uslugi/oformiane-na-brada">Оформяне на брада</MainFooterMenuItem>
                <div>
                  <MdiDot class="w-4 c-paper pt-2px mx-5 block" />
                </div>
                <MainFooterMenuItem href="/uslugi/mazhko-podstrigvane-i-oformiane-na-brada">Комбо</MainFooterMenuItem>
                <div>
                  <MdiDot class="w-4 c-paper pt-2px mx-5 block" />
                </div>
                <MainFooterMenuItem href="/uslugi/profesionalno-tonirane-na-mazhka-kosa">Тониране</MainFooterMenuItem>
              </div>

              <div class="hidden md-flex flex-col flex-justify-start flex-items-center py-2 md-gap-0 gap-1" style="border-right-color: rgba(255, 255, 255, 0.12); border-left-color: rgba(255, 255, 255, 0.2);">
                <h3 class="c-brand font-600 mt-0 uppercase">Полезни връзки</h3>
                <MainFooterMenuItem href="/kurs-za-brasnar">Академия</MainFooterMenuItem>
                <div>
                  <MdiDot class="w-4 c-paper pt-2px mx-5 block" />
                </div>
                <MainFooterMenuItem href="/kontakti">Контакти</MainFooterMenuItem>
                <div>
                  <MdiDot class="w-4 c-paper pt-2px mx-5 block" />
                </div>
                <MainFooterMenuItem href="/karieri">Кариери</MainFooterMenuItem>
                <div>
                  <MdiDot class="w-4 c-paper pt-2px mx-5 block" />
                </div>
                <MainFooterMenuItem href="/za-nas">За нас</MainFooterMenuItem>

              </div>

              <div class="md-block hidden w-100% xl-w-500px lg-w-450px">
                <GoogleMapIframe />
              </div>
            </div>

            <div class="flex flex-justify-center pt-11 pb-2 md:pb-6 gap-3 b-t-solid b-t-0.5px mx-5 sm-mx-10 lg-mx-30" style="border-top-color: rgba(255, 255, 255, 0.12);">
              <a href="https://www.facebook.com/TheBarberShopSofia/?locale=en_GB" target="_blank" rel="noopener">
                <RiFacebookFill class="w-10 h-10 bg-brand-compliment hover-c-paper-inv transition-colors p-1.5 c-paper" />
              </a>
              <a href="https://www.instagram.com/the.barber.shop.sofia/?__d=1%3Futm_source%3Dig_embed" target="_blank" rel="noopener">
                <RiInstagramLine class="w-10 h-10 bg-brand-compliment hover-c-paper-inv transition-colors p-1.5 c-paper" />
              </a>
            </div>

            {/* <div class="b-t-solid b-t-0.5px mx-5 sm-mx-10 lg-mx-30 py-8 font-100 flex md-flex-row flex-col flex-justify-between flex-items-center" style="border-top-color: rgba(255, 255, 255, 0.12);">
            <p class="text-center c-paper lg-font-size-3.5 md-font-size-3.3 font-size-3.2 line-height-6 font-sans">Copyright &copy; <CurrentYear /> <span class="c-brand"><BottomFooterMenuItem href="/">TheBarberShop</BottomFooterMenuItem></span></p>
            <div class="flex flex-col md-flex-row md-gap-2 lg-gap-5 flex-items-center flex-justify-end">
              <BottomFooterMenuItem href="/obshti-uslovia">Общи условия</BottomFooterMenuItem>
              <BottomFooterMenuItem href="/politika-za-poveritelnost">Политика за поверителност</BottomFooterMenuItem>
              <BottomFooterMenuItem href="/karta-na-saita">Карта на сайта</BottomFooterMenuItem>
              <BottomFooterMenuItem href="/politika-za-biskvitki">Cookie Policy</BottomFooterMenuItem>
            </div>
          </div> */}
          </div>
        </MainFooter>
      </div>
    </>
  );
}
export default LayoutDefault; // ✅ Add this

function GoogleMapIframe() {
  const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2913.616886276573!2d23.3004184152353!3d42.70179306713199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa854f62e04c37%3A0x8d79b36fd867fb9e!2sSofia%20Center%2C%20ul.%20%22Aldomirovska%22%2077%2C%201309%20Sofia!5e0!3m2!1sen!2sbg!4v1741108324567!5m2!1sen!2sbg`;

  return (
    <iframe
      src={mapSrc}
      width="100%"
      height="350"
      style={{ border: 0 }}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}

function TopFooter() {
  const [isModalOpen, setIsModalOpen] = createSignal(false);
  const [isUploading, setIsUploading] = createSignal(false);
  const [errorMessage, setErrorMessage] = createSignal(false);
  const [isSuccess, setIsSuccess] = createSignal(false);

  const handleSuccess = () => {
    setIsUploading(false);
    setErrorMessage(false);
    setIsSuccess(true); // show success message
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { x: 0.5, y: 0.5 },
    });
  };

  const handleError = () => {
    setErrorMessage(true);
  };

  const openModal = () => {
    setIsModalOpen(true);
    setErrorMessage(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setErrorMessage(false);
    setIsSuccess(false);
  };

  return (
    <>
      {isModalOpen() && !isSuccess() && (
        <section class="flex items-center justify-center">
          <div style="background-color: #222222; background-image: url(/assets/thebarbershop-light-bg.webp); background-position: center bottom; background-repeat: no-repeat; background-size: cover;" class="important-m-auto z-10 w-full fixed lg:max-w-80% max-w-90% top-0 lg:top-10 md:top-10 h-100vh md:max-h-90vh lg:pt-27 lg:pb-25 px-3 flex items-center justify-center">
            <div class="flex flex-col md:flex-row items-center justify-center gap-2 sm:gap-8 md:gap-15 xl:gap-25 mx-2 md:mx-5 lg:mx-15">
              <div
                onClick={closeModal}
                class="cursor-pointer b-none absolute top-3 right-3">
                <MdiCloseThick class="w-8 hover:rotate-90 transition-all c-paper-inv hover-c-brand" />
              </div>

              <div class="w-full xl:w-1/2 md:w-2/5 w-full flex flex-col justify-center lg:justify-start items-center lg:items-start">
                <AnimatedComponent>
                  <h2 class="important-pl-0 text-left important-xl:font-size-40px important-md:font-size-30px important-font-size-22px important-xl:leading-56px important-md:leading-45px important-leading-30px important-xl:mb-60px important-md:mb-30px important-mb-15px">Станете професионален бръснар за 4 седмици</h2>
                  {/* <p class="important-xl:font-size-19px important-md:font-size-16px important-font-size-12px important-xl:leading-32px important-md:leading-27px important-leading-19px important-xl:mt-13px important-mt-4px important-mb-8px">Запишете се две седмици преди началото, за да получите 300 лв отстъпка.</p>
                  <Countdown /> */}
                  <h3 class="font-400 text-left important-xl:font-size-27px important-md:font-size-22px important-font-size-16px important-xl:mb-20px important-mb-2px">Остават 4 места.</h3>
                  <p class="important-xl:font-size-19px important-md:font-size-16px important-font-size-12px important-xl:leading-32px important-md:leading-27px important-leading-19px important-xl:mt-13px important-mt-4px important-mb-8px">Запазете мястото си в предстоящото издание на курса като попълните контактната форма.</p>
                </AnimatedComponent>
              </div>

              <AnimatedComponent class="xl:w-1/2 md:w-3/5 w-full">
                <div class="px-20px pt-20px pb-18px md:px-30px md:py-40px rounded-0 w-full max-w-150 overflow-hidden relative bg-#14100c" style="background-image: url(/assets/wood-bg-2.webp); background-position: center; background-repeat: no-repeat; background-size: cover;">

                  <div class="xl:px-10 md:pt-3">
                    <h3 class="important-mt-0 md:mt-2 mb-10 c-paper uppercase
										important-xl:font-size-26px important-md:font-size-24px important-font-size-18px">Влезте в играта</h3>
                    <ContactUs
                      onSuccess={handleSuccess}
                      onError={handleError}
                      setUploading={setIsUploading}
                    />
                  </div>
                </div>
              </AnimatedComponent>
            </div>
          </div>
        </section>
      )}

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

      {isSuccess() && (
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

      <div style="background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url(/assets/thebarbershop-footer-bg.webp); background-position: 50% 50% ; background-repeat: no-repeat; background-size: cover;" role="img" aria-label="">
        <div class="px-2 gap-15 h-100% lg-py-0 pb-12 flex flex-col flex-justify-center flex-items-center">
          <AnimatedComponent class="flex flex-col flex-justify-center">
            <H2WithImage class="c-paper important-mb-0" title="Свържете се с нас" />
          </AnimatedComponent>

          <div class="flex lg-flex-row flex-col lg-gap-0 gap-10 w-full flex-justify-center">
            <AnimatedComponent class="flex flex-col text-center lg-w-22%">
              <MdiBank class="c-paper-inv bg-paper b-rd-50% font-size-10 p-2 pl-2.3 mx-auto lg-mb-6 mb-3" />
              <div class="c-brand mx-auto font-size-4.5 lg-font-size-4.8 text-center" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">
                Адрес:
              </div>
              <div class="c-paper mx-auto font-size-4.5 lg-font-size-4.8 text-center" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">
                <a href="https://maps.app.goo.gl/5Jg7kwUH2xpc8jvm8" target="_blank" class="c-paper hover-c-brand transition-colors underline" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">
                  София, ул. “Алдомировска” 77
                </a>
              </div>
            </AnimatedComponent>

            <AnimatedComponent class="flex flex-col text-center lg-w-22%">
              <RiTimerFill class="c-paper-inv bg-paper b-rd-50% font-size-10 p-2 mx-auto lg-mb-6 mb-3" />
              <div class="c-brand mx-auto font-size-4.5 lg-font-size-4.8 text-center" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">
                Работно време:
              </div>
              <div class="c-paper mx-auto font-size-4.5 lg-font-size-4.8 text-center" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">
                Понеделник - Петък:
              </div>
              <div class="c-paper mx-auto font-size-4.5 lg-font-size-4.8 text-center" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">
                09:00 - 13:00 / 17:30 - 21:30
              </div>
            </AnimatedComponent>

            <AnimatedComponent class="flex flex-col text-center lg-w-22%">
              <MdiPhoneClassic class="c-paper-inv bg-paper b-rd-50% font-size-10 p-2 mx-auto lg-mb-6 mb-3" />
              <div class="c-brand mx-auto font-size-4.5 lg-font-size-4.8 text-center" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">
                Телефон:
              </div>
              <div class="c-paper mx-auto font-size-4.5 lg-font-size-4.8 text-center" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">
                <a href="tel:+359882820331" class="c-paper hover-c-brand transition-colors underline" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">
                  +359 882 820 331
                </a>
              </div>
            </AnimatedComponent>
          </div>
        </div>
        <AnimatedComponent class="flex flex-justify-center pb-20">
          <div class="flex flex-justify-evenly lg-flex-justify-center lg-mt-5 w-full lg-gap-15 max-w-80% lg-max-w-1100px lg:border-t-solid b-paper b-1px b-op-60% pt-5 lg-pt-20">
            <div onClick={openModal} class="cursor-pointer text-center w-34 lg-w-42 bg-brand c-paper-inv b-solid b-2px b-brand uppercase font-size-4 lg-font-size-4.5 font-500 py-3 hover-c-paper transition-colors" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">Започнете сега</div>
          </div>
        </AnimatedComponent>
      </div>
    </>
  )
}

function ServiceMenuItem(props: { href: string; children: any }) {

  return (
    <div class="relative group">
      <a
        href={props.href}
        class="hidden lg-block relative dropdown font-ui lg:flex c-paper text-center font-size-5 uppercase font-sans hover:c-brand-compliment tracking-wide font-500 transition-all after:content-empty after:absolute after:bottom-0 after:left-0 after:right-0 after:w-0 after:h-0.5 after:bg-brand-compliment after:transition-all group-hover:after:w-full"
        style="font-family: 'Oswald', sans-serif; letter-spacing: 0.5px;"
      >
        {props.children}
      </a>
    </div>
  );
}

function DropdownMenuItem(props: { href: string; children: any }) {
  return (
    <a
      href={props.href}
      class="flex items-center p-2.5 hover:bg-#d19d64 hover:bg-opacity-40 transition-all last:b-b-none b-b-solid b-b-1px b-b-#d19d64 b-b-opacity-30"
    >
      <div
        class="c-#10203b uppercase tracking-wider important-font-500 leading-normal font-size-3.4 max-w-60 whitespace-normal"
        style="font-family: 'Roboto', sans-serif !important"
      >
        {props.children}
      </div>
    </a>
  );
}

function DropDownMenuDesktop(props: { isVisible: boolean; items: { href: string; title: string }[] }) {
  return (
    <div
      class={`absolute top-full left-0 w-60 bg-white shadow-lg z-10 py-4.5 px-4 transition-all duration-300 ease-out ${props.isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 invisible"
        }`}
    >
      {props.items.map((item) => (
        <DropdownMenuItem href={item.href}>{item.title}</DropdownMenuItem>
      ))}
    </div>
  );
}

function MenuItem(props: { href: string, children: JSX.Element }) {

  return <div class="relative group"><a href={props.href} style="font-family: 'Oswald', sans-serif !important; letter-spacing: 0.5px;" class="relative py-2 dropdown hidden font-ui lg-flex c-paper text-center font-size-5 uppercase font-sans hover-c-brand-compliment tracking-wide font-500 transition-all after:content-empty after:absolute after:bottom-0 after:left-0 after:right-0 after:w-0 after:h-0.5 after:bg-brand-compliment after:transition-all group-hover:after:w-full">{props.children}</a></div>
}

const CurrentYear = () => {
  const [year, setYear] = createSignal<number>(new Date().getFullYear());

  onMount(() => {
    setYear(new Date().getFullYear());
  });

  return (
    <span id="year">{year()}</span>
  );
};

function Topbar(props: { children: JSX.Element }) {
  const [isScrolled, setIsScrolled] = createSignal(false);

  const checkScroll = () => {
    const isScrolledNow = window.scrollY > 0;
    setIsScrolled(isScrolledNow);
  };

  onMount(() => {
    checkScroll();
    window.addEventListener("scroll", checkScroll);
    onCleanup(() => window.removeEventListener("scroll", checkScroll));
  });

  return (
    <div
      class={`h-${isScrolled() ? "92px" : "172px"} w-full z-4 fixed top-0 flex-content-center ${isScrolled() ? "lg-p-0px" : "lg-p-40px"} p-0px transition-all duration-300 ease-in-out ${isScrolled() ? "bg-#14100c" : "bg-transparent"
        }`}
    >
      <div
        style={`${isScrolled() ? "border-bottom: none;" : "border-bottom-color: rgba(255, 255, 255, 0.1);"} `}
        class={`header-border block lg-b-rd-0px lg-b-#dedede lg-b-2px border-b-solid border-b-1px ${isScrolled() ? "lg-b-none" : "lg-b-solid"} w-full relative line-height-92px ${isScrolled() ? "h-72px" : "h-92px"
          } bg-${isScrolled() ? "#333" : "#fff"} text-${isScrolled() ? "#fff" : "#000"}`}
      >
        <div class="mx-auto max-w-full flex flex-justify-between flex-items-center h-full">
          {props.children}
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

function HamburgerMenu() {
  const [open, setOpen] = createSignal(false);
  const [opacity, setOpacity] = createSignal(0);
  const [translateY, setTranslateY] = createSignal("-100%");

  const handleToggle = () => {
    if (open()) {
      setOpacity(0);
      setTranslateY("-100%");
      setTimeout(() => setOpen(false), 400);
    } else {
      setOpen(true);
      setTimeout(() => {
        setTranslateY("0");
        setOpacity(1);
      }, 10);
    }
  };

  const closeMenu = () => {
    setOpacity(0);
    setTranslateY("-100%");
    setTimeout(() => setOpen(false), 400);
  };

  const [isModalOpen, setIsModalOpen] = createSignal(false);
  const [isUploading, setIsUploading] = createSignal(false);
  const [errorMessage, setErrorMessage] = createSignal(false);
  const [isSuccess, setIsSuccess] = createSignal(false);

  const handleSuccess = () => {
    setIsUploading(false);
    setErrorMessage(false);
    setIsSuccess(true); // show success message
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { x: 0.5, y: 0.5 },
    });
  };

  const handleError = () => {
    setErrorMessage(true);
  };

  const openModal = () => {
    setIsModalOpen(true);
    setErrorMessage(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setErrorMessage(false);
    setIsSuccess(false);
  };

  return (
    <>
      {isModalOpen() && !isSuccess() && (
        <section class="block mx-auto z-100">
          <div style="background-color: #222222; background-image: url(/assets/thebarbershop-light-bg.webp); background-position: center bottom; background-repeat: no-repeat; background-size: cover;" class="important-m-auto z-10 w-full fixed lg:max-w-80% max-w-90% top-0 lg:top-10 md:top-10 h-100vh md:max-h-90vh lg:pt-27 lg:pb-25 px-3 flex items-center justify-center">
            <div class="flex flex-col md:flex-row items-center justify-center gap-2 sm:gap-8 md:gap-15 xl:gap-25 mx-2 md:mx-5 lg:mx-15">
              <div
                onClick={closeModal}
                class="cursor-pointer b-none absolute top-3 right-3">
                <MdiCloseThick class="w-8 hover:rotate-90 transition-all c-paper-inv hover-c-brand" />
              </div>

              <div class="w-full xl:w-1/2 md:w-2/5 w-full flex flex-col justify-center lg:justify-start items-center lg:items-start">
                <AnimatedComponent>
                  <h2 class="important-pl-0 text-left important-xl:font-size-40px important-md:font-size-30px important-font-size-22px important-xl:leading-56px important-md:leading-45px important-leading-30px important-xl:mb-60px important-md:mb-30px important-mb-15px">Станете професионален бръснар за 4 седмици</h2>
                  {/* <p class="important-xl:font-size-19px important-md:font-size-16px important-font-size-12px important-xl:leading-32px important-md:leading-27px important-leading-19px important-xl:mt-13px important-mt-4px important-mb-8px">Запишете се две седмици преди началото, за да получите 300 лв отстъпка.</p>
                  <Countdown /> */}
                  <h3 class="font-400 text-left important-xl:font-size-27px important-md:font-size-22px important-font-size-16px important-xl:mb-20px important-mb-2px">Остават 4 места.</h3>
                  <p class="important-xl:font-size-19px important-md:font-size-16px important-font-size-12px important-xl:leading-32px important-md:leading-27px important-leading-19px important-xl:mt-13px important-mt-4px important-mb-8px">Запазете мястото си в предстоящото издание на курса като попълните контактната форма.</p>
                </AnimatedComponent>
              </div>

              <AnimatedComponent class="xl:w-1/2 md:w-3/5 w-full">
                <div class="px-20px pt-20px pb-18px md:px-30px md:py-40px rounded-0 w-full max-w-150 overflow-hidden relative bg-#14100c" style="background-image: url(/assets/wood-bg-2.webp); background-position: center; background-repeat: no-repeat; background-size: cover;">

                  <div class="xl:px-10 md:pt-3">
                    <h3 class="important-mt-0 md:mt-2 mb-10 c-paper uppercase
										important-xl:font-size-26px important-md:font-size-24px important-font-size-18px">Влезте в играта</h3>
                    <ContactUs
                      onSuccess={handleSuccess}
                      onError={handleError}
                      setUploading={setIsUploading}
                    />
                  </div>
                </div>
              </AnimatedComponent>
            </div>
          </div>
        </section>
      )}

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

      {isSuccess() && (
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

      <div class="z-99 lg-hidden flex flex-content-center flex-items-center flex-justify-between w-full">
        <div class="flex flex-items-center flex-justify-center lg-pl-4 pl-0">
          <a href="/" onClick={closeMenu}>
            <img width="110" loading="lazy" src="/assets/akademia/barbershop-academy-logo-desktop.webp" class="mr--10 ml--4 mt-4" alt="thebarbershop-academy-logo-mobile" />
          </a>
        </div>
        <div class="flex flex-items-center flex-justify-center">
          <button
            onClick={openModal}
            class="cursor-pointer bg-brand-compliment c-paper b-solid b-2px b-brand-compliment uppercase font-size-3.5 font-500 px-7 py-2 hover-c-paper-inv transition-colors block lg-hidden"
            style="font-family: 'Oswald', sans-serif !important; letter-spacing: 0.2px;"
          >
            Започнете сега
          </button>
        </div>
        <div class="ml-6 md-mr-10 z-93">
          <input type="checkbox" id="menu-checkbox" class="hidden" />
          <label
            id="burger-menu"
            for="menu-checkbox"
            onClick={handleToggle}
            class="relative cursor-pointer flex flex col flex-justify-between flex-col w-33px h-23px right-6 hamburger"
          >
            <div class={`line ${open() ? "open" : ""}`}></div>
            <div class={`line ${open() ? "open" : ""}`}></div>
            <div class={`line ${open() ? "open" : ""}`}></div>
          </label>
        </div>
        <Show when={open()}>
          <div
            class="z-92 fixed w-full h-full left-0 top-0 px-10 pt-10 transition-all transition-duration-400 bg-#15151599 backdrop-blur-[10px] border border-[rgba(235,166,91,0.3)]"
            style={`
            height: 100vh;
            opacity: ${opacity()};
            transform: translateY(${translateY()});
            overflow-y: auto;
            transition: transform 0.6s ease-in-out, opacity 0.3s ease-in-out;
          `}
          >
            <div class="py-10 text-left">
              <MyDropdown closeMenu={closeMenu} />
            </div>
          </div>
        </Show>
      </div>
    </>
  );
}

function MobileDropdownMenuItem(props: {
  closeMenu: () => void;
  href?: string;
  text: string;
  icon: JSX.Element;
  subMenu?: { href: string; text: string }[];
}) {
  const [open, setOpen] = createSignal(false);

  const toggleSubMenu = (e: Event) => {
    e.preventDefault();
    setOpen(!open());
  };

  return (
    <div>
      <div
        class="flex flex-items-center flex-nowrap c-paper hover-c-brand:hover font-size-6.5 font-400 uppercase active:bg-paper active:bg-opacity-15 active:c-paper hover:bg-paper hover-bg-opacity-10 hover:c-paper p-4 my-1 b-rd-2 transition-all cursor-pointer"
      >
        {props.icon && <span class="mr-3 c-paper flex items-center w-7">{props.icon}</span>}
        {props.href ? (
          <a href={props.href} onClick={props.closeMenu} class="flex-grow flex flex-items-center flex-nowrap c-paper hover-c-brand:hover font-size-6.5 font-400 uppercase active:bg-paper active:bg-opacity-15 active:c-paper hover:bg-paper hover-bg-opacity-10 hover:c-paper p-2 b-rd-2 transition-all cursor-pointer" style="font-family: 'Oswald', sans-serif">{props.text}</a>
        ) : (
          <span class="flex-grow" style="font-family: 'Oswald', sans-serif">{props.text}</span>
        )}
        {props.subMenu && (
          <span onClick={toggleSubMenu} class="p-3 cursor-pointer ml-auto transition-transform duration-300 flex items-center" style={{ transform: open() ? "rotate(90deg)" : "rotate(0)" }}>
            <RiArrowRightSLine />
          </span>
        )}
      </div>

      <div
        class={`pl-4 overflow-auto transition-all duration-300 ease-in-out ${open() ? "max-h-200 opacity-100" : "max-h-0 opacity-0"}`}
      >
        {props.subMenu?.map((item) => (
          <a
            href={item.href}
            onClick={props.closeMenu}
            class="flex flex-items-center flex-nowrap c-paper hover-c-brand:hover font-size-5 font-400 uppercase active:bg-paper active:bg-opacity-15 active:c-paper hover:bg-paper hover-bg-opacity-10 py-3.3 hover:c-paper b-rd-2 transition-all cursor-pointer"
            style="font-family: 'Oswald', sans-serif"
          >
            {item.text}
          </a>
        ))}
      </div>
    </div>
  );
}

const MyDropdown = (props: { closeMenu: () => void; }) => {
  return (
    <div class="w-full overflow-y-auto sticky">
      <div class="py-1.5 tracking-1px">
        <div class="text-left">
          <MobileDropdownMenuItem
            closeMenu={props.closeMenu}
            text="Услуги"
            href="/uslugi"
            icon={<RiScissorsLine />}
            subMenu={[
              { href: "/uslugi/mazhko-podstrigvane", text: "Мъжко подстригване" },
              { href: "/uslugi/oformiane-na-brada", text: "ОФОРМЯНЕ НА БРАДА" },
              { href: "/uslugi/mazhko-podstrigvane-i-oformiane-na-brada", text: "МЪЖКО ПОДСТРИГВАНЕ И ОФОРМЯНЕ НА БРАДА" },
              { href: "/uslugi/klasichesko-mokro-brasnene", text: "КЛАСИЧЕСКО МОКРО БРЪСНЕНЕ" },
              { href: "/uslugi/profesionalno-tonirane-na-mazhka-kosa", text: "ПРОФЕСИОНАЛНО ТОНИРАНЕ НА МЪЖКА КОСА" },
              { href: "/uslugi/brasnene-na-glava-s-brasnach", text: "БРЪСНЕНЕ НА ГЛАВА С БРЪСНАЧ" },
              { href: "/uslugi/detsko-podstrigvane-momche", text: "ДЕТСКО ПОДСТРИГВАНЕ" },
              { href: "/uslugi/podstrigvane-na-bashta-i-sin", text: "ПОДСТРИГВАНЕ НА БАЩА И СИН" },
            ]}
          />
          <MobileDropdownMenuItem
            closeMenu={props.closeMenu}
            text="Отзиви"
            icon={<MdiCommentCheckOutline />}
            href="/otzivi"
          />
          <MobileDropdownMenuItem
            closeMenu={props.closeMenu}
            text="За нас"
            icon={<MdiAccountGroupOutline />}
            href="/za-nas"
          />
          <MobileDropdownMenuItem
            closeMenu={props.closeMenu}
            text="Кариери"
            icon={<MdiAccountFileTextOutline />}
            href="/karieri"
          />
          <div class="hidden">
            <MobileDropdownMenuItem
              closeMenu={props.closeMenu}
              text="Магазин"
              icon={<MdiBankOutline />}
              href="/"
            />
          </div>
          <MobileDropdownMenuItem
            closeMenu={props.closeMenu}
            text="Академия"
            icon={<MdiFileCertificateOutline />}
            href="/kurs-za-brasnar"
          />
          <MobileDropdownMenuItem
            closeMenu={props.closeMenu}
            text="Контакти"
            icon={<MdiEmailMultipleOutline />}
            href="/kontakti"
          />
        </div>
      </div>
    </div>
  );
};

function MainFooter(props: { children: JSX.Element }) {
  return (
    <div
      class="flex flex-col flex-justify-center md-flex-justify-center bg-#14100c flex-shrink-0 flex-items-center flex-wrap b-t-solid b-t-1px" style="border-top-color: rgba(209, 157, 100, 0.3); background-position: center center; background-repeat: no-repeat; background-size: cover; filter: grayscale(0%);">
      {props.children}
    </div>
  );
}

function BottomFooterMenuItem(props: { href: string, children: JSX.Element }) {
  return <a href={props.href} class="transition-colors c-brand hover-color-paper:hover font-400 lg-font-size-3.5 md-font-size-3.3 font-size-3.2 lg-py-1 md-py-2 font-sans line-height-6">{props.children}</a>
}

function MainFooterMenuItem(props: { href: string, children: JSX.Element }) {
  return <a href={props.href} class="line-height-7 text-left c-#a1a1a1 hover-color-brand:hover font-normal font-size-4 font-sans uppercase important-font-400 transition-colors" style="font-family: 'Oswald', sans-serif">{props.children}</a>
}

function BackToTopButton(props: { onClick: JSX.EventHandlerUnion<HTMLButtonElement, MouseEvent> | undefined; children: number | boolean | Node | JSX.ArrayElement | (string & {}) | null | undefined; }) {
  return (
    <button
      class="flex items-center justify-between cursor-pointer b-solid b-2px c-brand-dark hover-c-#d1934f b-brand-dark hover-b-#d1934f bg-transparent md-w-12 md-h-12 w-10 h-10 b-rd-50% transition-colors"
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
