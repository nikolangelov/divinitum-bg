// Default <head> (can be overridden by pages)
import logoUrl from "../assets/home2/Divinitum-logo-SQUARE-STRAIGHT.svg";

export default function Head() {
  return (
    <>
      <link rel="icon" href={logoUrl} />
      <meta name="google-site-verification" content="eGTg97BYZRP--qeuZ1n41Aqg41aw9fK1FZ5aff3YYvE" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <script>{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-NWKWKC4Z');`}</script>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-DC3NSFR7F5"></script>
      <script>
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-DC3NSFR7F5');
        `}
      </script>
    </>
  );
}

