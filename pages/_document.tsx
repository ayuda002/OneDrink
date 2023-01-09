import { Html, Head, Main, NextScript } from "next/document";
import { GA_TRACKING_ID } from "../lib/gtag";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <script
          dangerouslySetInnerHTML={{
            __html: `
            amzn_assoc_ad_type = "link_enhancement_widget"; amzn_assoc_tracking_id
            = "onedrink-22"; amzn_assoc_linkid =
            "749830446321faa9fac972fc15b942d7"; amzn_assoc_placement = "";
            amzn_assoc_marketplace = "amazon"; amzn_assoc_region = "JP";
          `,
          }}
        />
        {/* <script type="text/javascript">
          amzn_assoc_ad_type = "link_enhancement_widget"; amzn_assoc_tracking_id
          = "onedrink-22"; amzn_assoc_linkid =
          "749830446321faa9fac972fc15b942d7"; amzn_assoc_placement = "";
          amzn_assoc_marketplace = "amazon"; amzn_assoc_region = "JP";
        </script> */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
        <script src="//ws-fe.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&Operation=GetScript&ID=OneJS&WS=1&MarketPlace=JP"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
