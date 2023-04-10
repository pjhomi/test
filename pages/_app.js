import '../styles/globals.css';
// import Head from 'next/head';
// import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      {/* <Head>
        <link rel='canonical' href={canonicalUrl} />
      </Head> */}
      {/* <Script
        id='ua-script'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          // __html:
          //   // UA
          //   // `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          //   // new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          //   // j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          //   // 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          //   // })(window,document,'script','dataLayer','GTM-W5DX7H2')`,
          //   // GA
          //   `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          //   new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          //   j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          //   'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          //   })(window,document,'script','dataLayer','GTM-WF23TFD')`,
          __html:
    // UA
      `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-W5DX7H2')`,
            // GA
            `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
             new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
             j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
             'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
             })(window,document,'script','dataLayer','GTM-WF23TFD')`,
        }}
      ></Script> */}
      <script
        id='ua-script'
        dangerouslySetInnerHTML={{
          __html: `
      /* UA tracking code */
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-W5DX7H2');

      /* GA4 tracking code */
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-WF23TFD');
    `,
        }}
      ></script>
    </>
  );
}

export default MyApp;
