import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <Script
      id="my-script"
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
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
