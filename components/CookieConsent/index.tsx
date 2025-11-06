import { createSignal, onMount, Show } from "solid-js";
import Cookies from "js-cookie";
import MdiCookie from '~icons/mdi/cookie';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with your actual GA measurement ID

const mandatoryCookies = [
  { name: "_ga", source: "Google Analytics", duration: "2 години", description: "Разпознава потребителя с уникален ID." },
  { name: "_gid", source: "Google Analytics", duration: "24 часа", description: "Разграничава потребителите." },
  { name: "_gcl_au", source: "Google Ads", duration: "3 месеца", description: "Проследява конверсии чрез Google Ads." },
  { name: "_ga_*", source: "Google Analytics 4", duration: "2 години", description: "Събира данни за взаимодействия със сайта." },
  { name: "_fbp", source: "Meta Pixel", duration: "3 месеца", description: "Проследява посещенията за Facebook реклами." },
  { name: "booking_session", source: "Онлайн резервации", duration: "сесия", description: "Поддържа потребителската сесия за резервации." },
  { name: "cart_id", source: "Онлайн магазин", duration: "30 дни", description: "Съхранява количката на клиента." },
];

const optionalGroups = [
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

 const CookieConsent = () => {
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

  // Auto load Google Analytics if preferences allow
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
      `script[src^="https://www.googletagmanager.com/gtag/js"]`
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

    // Always show the cookie icon unless user has made changes
    const shouldShowIcon = sessionStorage.getItem("showCookieIcon") === "true";
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

    // Hide the cookie icon after manual change
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
  }) => {
    const isChecked = () => cookiePreferences()[props.name];

    const toggle = () => {
      if (props.name === "necessary") return;
      setCookiePreferences({
        ...cookiePreferences(),
        [props.name]: !isChecked(),
      });
    };

    return (
      <div class="flex flex-col my-3">
        <h4 class="mb-1 mt-2 text-lg font-semibold">{props.title}</h4>
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
      </div>
    );
  };

  return (
    <>
      <Show when={showCookieIcon()}>
        <div
          class="fixed bottom-4 left-4 z-100 cursor-pointer"
          onClick={() => setShowSettings(true)}
        >
          <MdiCookie />
        </div>
      </Show>

      <Show when={showSettings()}>
        <div class="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-9 botom-0">
          <div class="bg-paper px-10 pt-10 pb-8 w-11/12 md:w-3/4 lg:w-2/3">
            <h2 class="mb-0 md-mb-8 md-mt-3 mt-0 line-height-7 sm-line-height-6 md-line-height-8 font-size-6 md-font-size-10">
              Cookie Settings
            </h2>

            <CookieCategory
              name="necessary"
              title="Strictly Necessary Cookies"
              description="These cookies are necessary for the website to function and cannot be disabled."
            />

            <CookieCategory
              name="functional"
              title="Functional Cookies"
              description="These cookies allow the website to provide enhanced functionality and personalization."
            />

            <CookieCategory
              name="analytics"
              title="Analytics Cookies"
              description="These cookies help us understand how visitors interact with the website."
            />

            <CookieCategory
              name="advertising"
              title="Advertising Cookies"
              description="These cookies are used to display relevant advertisements."
            />

            <CookieCategory
              name="thirdParty"
              title="Third-Party Cookies"
              description="These cookies are set by external services that we add to the website."
            />

            <div class="flex justify-center md-justify-end gap-3 mt-1 md-mt-0 pt-0">
              <button class="b-solid b-2 b-brand-compliment bg-brand-compliment hover-bg-brand transition-colors hover-b-brand font-700 font-size-2.7 md-font-size-4 uppercase c-paper cursor-pointer py-1.5 md-py-3.5 px-4 md-px-5 mt-4 md-mt-10 line-height-4" onClick={acceptAll}>Accept all</button>
              <button class="b-solid b-2 b-brand-compliment bg-paper hover-c-brand transition-colors hover-b-brand font-700 font-size-2.7 md-font-size-4 uppercase c-brand-compliment cursor-pointer py-1.5 md-py-3.5 px-4 md-px-5 mt-4 md-mt-10 line-height-4" onClick={savePreferences}>Save settings</button>
              <button class="b-solid b-2 b-brand-compliment bg-paper hover-c-brand transition-colors hover-b-brand font-700 font-size-2.7 md-font-size-4 uppercase c-brand-compliment cursor-pointer py-1.5 md-py-3.5 px-4 md-px-5 mt-4 md-mt-10 line-height-4" onClick={() => setShowSettings(false)}>Close</button>
            </div>
          </div>
        </div>
      </Show>
    </>
  );
};

